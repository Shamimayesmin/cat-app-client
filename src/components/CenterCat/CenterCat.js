import React from "react";
import { useLoaderData } from "react-router-dom";
import CatCard from "./CatCard";

const CenterCat = () => {
	const dataCat = useLoaderData();
   
	// console.log(dataCat);

	return (
		<div className="row">
			
			
			{
				dataCat?.map((cat)=><CatCard key={cat._id} cat={cat}></CatCard>)
			}
				
			<div>
				
				
			</div>
		</div>
	);
};

export default CenterCat;
