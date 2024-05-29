import { useContext, useState } from 'react';
import EarthMode from './EarthMode';
import { useForm } from "react-hook-form"
import MarteMode from './MarteMode';
import { AddressContext } from '../contexts/AddressContexts';

function FormAddAddress () {
  const { register, handleSubmit, reset, formState:{ errors } } = useForm()

  const { addAddress } = useContext(AddressContext)

  const [ earthMode, setEarthMode ] = useState(true)
  
  const submitForm = ( data ) => {
    addAddress(data, earthMode)
  }

  const toggleMode = (e) => {
    e.preventDefault();
    reset({}) 
    setEarthMode(!earthMode)
  }

    return(
        <>
            <button onClick={toggleMode}>Terra</button>
            <button onClick={toggleMode}>Marte</button>
            <div>
                <label>Seu Nome</label>
                <input type="text" { ...register("nome", { required: true }) }/>
                {errors?.nome?.type === "required" ? <p>Erro</p> : ''}
            </div>
            {earthMode 
              ? <EarthMode register={register} errors={errors} /> 
              : <MarteMode register={register} errors={errors} />
            }
            <button type="button" onClick={() => handleSubmit(submitForm)()}>Add</button>
        </>
    )
}

export default FormAddAddress