import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = ({ setItem, item }) => {
	// console.log(setItem);

	const [catName, setCatName] = useState([]);

	useEffect(() => {
		fetch(" https://cat-app-server.vercel.app/category")
			.then((res) => res.json())
			.then((data) => setCatName(data));
	}, []);

	const handleIncrement = (cat) => {
		const itemToUpdate = catName.find((ct) => ct._id === cat._id);
		const updatedItem = { ...itemToUpdate, counter: itemToUpdate.counter + 1 };
		const updatedData = catName.map((item) =>
			item._id === cat._id ? updatedItem : item
		);
		setCatName(updatedData);
		setItem(cat.categoryName);
		console.log(item);
	};

	//to={`/category${cat._id}`}

	return (
		<div className="border p-10">
			{catName.map((cat) => (
				<p key={cat._id}>
					<button
						onClick={() => handleIncrement(cat)}
						className="bg-info rounded fs-5 w-75"
					>
						<Link className="text-decoration-none text-white">
							{cat.categoryName}
						</Link>
						{cat.counter}
					</button>
				</p>
			))}
		</div>
	);
};

export default LeftNav;
