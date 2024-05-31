import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AddressContext = createContext({});

function AddressProvider ({ children }) {
    const [ address, setAddress ] = useState([])
    
    const addAddress = ( data, earth ) => {
        const newAddress = {
            'id': uuidv4(),
            ...data, 
            'earth' : earth
        }

        setAddress(updater => [...updater, newAddress])
    }

    const findAddress = (id) => {
        return address.filter(ad => ad.id === id)
    }

    const putAddress= (newAdress) => {
        setAddress(updater => {
            const list = updater.filter(x => x.id != newAdress.id)
            list.push(newAdress)
            
            return list
        })
    }
    
    const deleteAddress = (id) => {
        setAddress(updater => {
            const list = updater.filter(x => x.id != id)
            
            return list
        })
    }
    
    return(
        <AddressContext.Provider value={{ address, addAddress, deleteAddress, findAddress, putAddress }}>
            { children }
        </AddressContext.Provider>
    )
}

export default AddressProvider