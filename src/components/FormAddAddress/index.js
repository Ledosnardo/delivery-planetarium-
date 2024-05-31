import { useContext, useState } from 'react';
import EarthMode from '../EarthMode';
import { useForm } from "react-hook-form"
import MarteMode from '../MarteMode';
import { AddressContext } from '../../contexts/AddressContexts';
import terra from '../../images/terra.jpg'
import marte from '../../images/marte.jpg'

import styles from './styles.module.css'

function FormAddAddress () {
  const { register, handleSubmit, reset, formState:{ errors } } = useForm()

  const { addAddress } = useContext(AddressContext)

  const [ earthMode, setEarthMode ] = useState(true)
  
  const submitForm = ( data ) => {
    addAddress(data, earthMode)
    reset()
  }

  const toggleMode = (e) => {
    e.preventDefault();
    reset({}) 
    setEarthMode(!earthMode)
  }

    return(
        <div 
          className={styles.container}
          style={ earthMode ? { backgroundImage: `url(${terra})` } : { backgroundImage: `url(${marte})`}}
        >
            <div className={styles.buttons}>
              <button onClick={toggleMode} disabled={earthMode ? true : false}>Terra</button>
              <button onClick={toggleMode} disabled={!earthMode ? true : false}>Marte</button> 
            </div>
            <div className={styles.content}>
              <div className={styles.boxInput}>
                  <label>Seu Nome</label>
                  <input 
                    type="text" 
                    { ...register("name", { required: true }) }
                    style={errors?.name && { border: "1px solid red" }}
                  />
              </div>
              {earthMode 
                ? <EarthMode register={register} errors={errors} /> 
                : <MarteMode register={register} errors={errors} />
              }
              <button 
                type="button" 
                onClick={() => handleSubmit(submitForm)()}
                className={styles.button}
              >+</button>
            </div>
        </div>
    )
}

export default FormAddAddress