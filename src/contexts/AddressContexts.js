import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AddressContext = createContext({});

function AddressProvider ({ children }) {
    const [ address, setAddress ] = useState([])
    
    const addAddress = ( data, earthMode ) => {
        const newAddress = {
            'id': uuidv4(),
            ...data, 
            'earth' : earthMode
        }

        setAddress(updater => [...updater, newAddress])
    }
    
    return(
        <AddressContext.Provider value={{ address, addAddress }}>
            { children }
        </AddressContext.Provider>
    )
}

export default AddressProvider