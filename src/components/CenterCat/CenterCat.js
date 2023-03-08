import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CatCard from "./CatCard";

const CenterCat = () => {
	const [dataCat, setDataCat] = useState([]);

	useEffect(() => {
		fetch(" https://cat-app-server.vercel.app/category")
			.then((res) => res.json())
			.then((data) => setDataCat(data));
	}, []);
   
	// console.log(dataCat);

	
	return (
		<div className="row">
			<h2>this is center cat</h2>
			
			{
				dataCat?.map((cat)=><CatCard key={cat._id} cat={cat}></CatCard>)
			}
				
			<div>
				
				
			</div>
		</div>
	);
};

export default CenterCat;
