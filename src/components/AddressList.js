import { useContext } from "react"
import { AddressContext } from "../contexts/AddressContexts"

function AdressList () {
    const { address } = useContext(AddressContext)

    return(
        <>
            {address.map(ad => (
                <div>
                    {ad.nome}
                </div>
            ))}
        </>
    )
}

export default AdressList