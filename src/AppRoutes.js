import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddressRegistration from "./pages/AddressRegistration";
import EditAddress from "./pages/EditAddress";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AddressRegistration />,
    },
    {
        path: "/edit/:id",
        element: <EditAddress />,
    },
])

function AppRoutes () {
    return(
        <RouterProvider router={router}/>
    )
}

export default AppRoutes