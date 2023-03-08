import React, { useEffect, useState } from 'react';
import CatCard from './CatCard';

const NewCat = ({setItem}) => {
    const [cats, setCats] = useState([]);

	useEffect(() => {
		fetch("https://cat-app-server.vercel.app/cats")
			.then((res) => res.json())
			.then((data) => setCats(data));
	}, []);


    const handleIncrement = (cat) => {
		const itemToUpdate = cats.find((ct) => ct._id === cat._id);
		const updatedItem = { ...itemToUpdate, counter: itemToUpdate.counter + 1 };
		const updatedData = cats.map((item) =>
			item._id === cat._id ? updatedItem : item
		);
		setCats(updatedData);
		setItem(cat.title);
		// console.log(item);
	};

    return (
        <div
        lg={4}
        md={6}
        sm={12}
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
    >
        {cats?.map((dat) => (
            <CatCard
            // handleIncrement={handleIncrement}
                key={dat._id}
                dat={dat}
            ></CatCard>
        ))}
    </div>
    );
};

export default NewCat;