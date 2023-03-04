import React, { useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom';
import SingleCard from "./SingleCard";

const CatGallary = () => {
	const [cats, setCats] = useState([]);
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1)
    }

	useEffect(() => {
		fetch("http://localhost:5000/cats")
			.then((res) => res.json())
			.then((data) => setCats(data));
	}, []);

	return (
		<div
			lg={4}
			md={6}
			sm={12}
			className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
		>
			{cats?.map((data) => (
				<SingleCard key={data._id} data={data} count={count} increment={increment}></SingleCard>
			))}
		</div>
	);
};

export default CatGallary;
