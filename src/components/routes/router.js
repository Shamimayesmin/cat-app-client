import { createBrowserRouter } from "react-router-dom";
import CatGallary from "../CatGallary/CatGallary";
import CenterCat from "../CenterCat/CenterCat";
import Home from "../layout/Home";
// import Home from "../layout/Home";
// import Home from "../layout/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            
            {
                path : '/',
                element : <Home></Home>,
                // loader : () =>fetch('http://localhost:5000/cats')
            },
            // {
            //     path : '/',
            //     element : <CatGallary></CatGallary>,
            //     loader : () =>fetch('http://localhost:5000/cats')
            // },
            // {
            //     path : '/category/:id',
            //     element :<CenterCat></CenterCat> ,
                
                
            // },
            {
                path : '/cats/:id',
                // element :<CenterCat></CenterCat> ,
                // loader : ({params}) =>fetch(`http://localhost:5000/cats/${params.id}`)
            },
        ]
    }
])