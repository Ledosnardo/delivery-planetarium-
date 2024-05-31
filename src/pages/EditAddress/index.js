import { useContext, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { AddressContext } from "../../contexts/AddressContexts"
import styles from './styles.module.css'

import terra from '../../images/terra.jpg'
import marte from '../../images/marte.jpg'

function EditAddress () {
    const { id } = useParams()
    const navigate = useNavigate()
    const { findAddress, putAddress } = useContext(AddressContext);
    const address = findAddress(id)[0]

    const [ name, setName ] = useState(address.name)
    const [ state, setState ] = useState(address.state)
    const [ city, setCity ] = useState(address.city)
    const [ country, setCountry ] = useState(address.country)
    const [ lote, setLote ] = useState(address.loteMarte)

    const [ erro, setErro ] = useState(false)

    const submit = () => {
        if(name === '' || state === '' || city === '' || country === '' || lote === ''){
            setErro(true)
        } else{
            if(address.earth ){
                putAddress({ 
                    "name": name,
                    "state": state,
                    "city": city,
                    "country": country,
                    "id": address.id,
                    "earth": address.earth
                 })
                navigate('/')
            } else{
                if(lote < 999 || lote > 9999){
                    setErro(true)
                } else{
                    putAddress({ 
                        "name": name,
                        "loteMarte": lote,
                        "earth": address.earth,
                        "id": address.id
                    })
                    navigate('/')
                }
            }
            
        }
    }

    const earthMode = () => {
        return(
            <div className={styles.inputs}>
                <div>
                    <label>Nome</label>
                    <input
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>estado</label>
                    <input value={state} onChange={(e) => setState(e.target.value)}/>
                </div>
                <div>
                    <label>cidade</label>
                    <input value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div>
                    <label>país</label>
                    <input value={country} onChange={(e) => setCountry(e.target.value)}/>
                </div>
            </div>
        )
    }

    const marteMode = () => {
        return(
            <div className={styles.inputs}>
                <div>
                    <label>Nome</label>
                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Seu lote</label>
                    <input type="number" value={lote} onChange={(e) => setLote(e.target.value)}/>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div 
                style={ address.earth ? { backgroundImage: `url(${terra})` } : { backgroundImage: `url(${marte})`}}
                className={styles.box}
            >
                {address.earth 
                    ? earthMode()
                    : marteMode()
                }
                <button onClick={() => submit()} className={erro ? styles.error : styles.button}>Alterar</button>
            </div>
        </div>
    )
}

export default EditAddress