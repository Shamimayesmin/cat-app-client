import { createBrowserRouter } from "react-router-dom";
import CatGallary from "../CatGallary/CatGallary";
import CenterCat from "../CenterCat/CenterCat";
import Home from "../layout/Home";
// import Home from "../layout/Home";
// import Home from "../layout/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				// loader : () =>fetch(' https://cat-app-server.vercel.app/cats')
			},
			// {
			//     path : '/',
			//     element : <CatGallary></CatGallary>,
			//     loader : () =>fetch(' https://cat-app-server.vercel.app/cats')
			// },
			// {
			//     path : '/category/:id',
			//     element :<CenterCat></CenterCat> ,

			// },
			{
				path: "/cats/:id",
				// element :<CenterCat></CenterCat> ,
				// loader : ({params}) =>fetch(` https://cat-app-server.vercel.app/cats/${params.id}`)
			},
		],
	},
]);
