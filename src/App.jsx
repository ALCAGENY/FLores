import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Inicio from "./React/App";
import { Flores } from "./React/Flores";

const router =createBrowserRouter([
    {
        path:'/',
        element: <Flores/>
    },
            {
        path:'/Inicio',
        element: <Inicio />
    }
]);

function App(){


return(
    <>
    <RouterProvider router={router} />
    </>
);
}

export default App;