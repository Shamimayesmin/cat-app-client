import React, { useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom';
import SingleCard from "./SingleCard";

const CatGallary = ({setItem}) => {
	const [cats, setCats] = useState([]);
    

	useEffect(() => {
		fetch("http://localhost:5000/category")
			.then((res) => res.json())
			.then((data) => setCats(data));
	}, []);

    const handleIncrement = (cat) => {

        const itemToUpdate = cats.find(ct => ct._id === cat._id);
        const updatedItem = {...itemToUpdate, counter: itemToUpdate.counter + 1};
        const updatedData = cats.map(item => item._id === cat._id ? updatedItem : item);
        setCats(updatedData);
		setItem(cat.categoryName)
		// console.log(item);
      }

	return (
		<div
			lg={4}
			md={6}
			sm={12}
			className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
		>
			{cats?.map((data) => (
				<SingleCard handleIncrement={handleIncrement} key={data._id} data={data}></SingleCard>
			))}
		</div>
	);
};

export default CatGallary;
