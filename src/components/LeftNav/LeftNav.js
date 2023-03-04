import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catName, setCatName] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/category")
			.then((res) => res.json())
			.then((data) => setCatName(data));
	}, []);
    return (
        <div className='border p-10'>
		        {
		            catName.map(cat =>
		            <p key={cat.id}>
		                <button className='bg-info rounded fs-5 w-75'><Link className='text-decoration-none text-white' to={`/category/${cat.id}`}>{cat.name}</Link> 45</button>
		            </p>)
		        }
		   </div>
    );
};

export default LeftNav;