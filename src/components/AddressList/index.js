import { useContext, useEffect, useState } from "react"
import { AddressContext } from "../../contexts/AddressContexts"
import { Link } from "react-router-dom"
import imagem from '../../images/imagem-01.jpg'
import imagemMarte from '../../images/imagemMarte-01.jpeg'

import { FaTrashAlt } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";

import styles from './styles.module.css'

function AdressList () {
    const { address, deleteAddress } = useContext(AddressContext)
    const [ filter, setFilter ] = useState([])

    useEffect(() => {
        setFilter(address)
    }, [address])

    const earthBox = ( ad ) => {
        return(
            <div key={ad.id} className={styles.box}>
                <div className={styles.boxImage}>
                    <img src={imagem} className={styles.image}/>
                    <h3>{ad.earth ? 'Terra' : 'Marte'}</h3>
                </div>
                <div className={styles.texts}>
                    <h1>{ad.name}</h1>
                    <h3>{ad.country} - {ad.state}</h3>
                    <h3>{ad.city}</h3>
                </div>
                <div className={styles.buttons}>
                    <Link to={`/edit/${ad.id}`} className={styles.button}>
                        <BiSolidEditAlt color="black"/>
                    </Link>
                    <button className={styles.button} onClick={() => deleteAddress(ad.id)}>
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
        )
    }

    const marteBox = ( ad ) => {
        return(
            <div key={ad.id} className={styles.box}>
                <div className={styles.boxImage}>
                    <img src={imagemMarte} className={styles.image}/>
                    <h3>{ad.earth ? 'Terra' : 'Marte'}</h3>
                </div>
                <div className={styles.texts}>
                    <h1>{ad.name}</h1>
                    <h3>Lote - {ad.loteMarte}</h3>
                </div>
                <div className={styles.buttons}>
                    <Link to={`/edit/${ad.id}`} className={styles.button}>
                        <BiSolidEditAlt color="black"/>
                    </Link>
                    <button className={styles.button} onClick={() => deleteAddress(ad.id)}>
                        <FaTrashAlt color="black"/>
                    </button>
                </div>
            </div>
        )
    }

    return(
        <>
            <div className={styles.nav}>
                <h1>Endereços</h1>
                <div className={styles.navButtons}>
                    <button onClick={() => setFilter(address)}>Todos</button>    
                    <button onClick={() => setFilter(address.filter(f => f.earth))}>Terra</button>    
                    <button onClick={() => setFilter(address.filter(f => !f.earth))}>Marte</button>    
                </div>  
            </div>
            <div className={styles.container}>
                {filter.map(ad => (
                    <>
                        {ad.earth 
                            ?  earthBox(ad)
                            :  marteBox(ad)
                        }
                    </>
                ))}
            </div>
        </>
    )
}

export default AdressList