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
				<h3>1</h3>
				<h2>2
				</h2>
				
			<p>34</p>
			<p>cat card is added in my component</p>
			<p>34</p>
			<p>34</p>
			
				
				
				
				
			</div>
		</div>
	);
};

export default CenterCat;
