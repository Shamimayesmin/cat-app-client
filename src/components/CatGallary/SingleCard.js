import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const SingleCard = ({data,increment,count}) => {
    // console.log(data);
    const {img,title,description,_id} = data
    return (
        <div className=''>
            <Card style={{ width: "full" }}>
				<button onClick={increment} className='border-0'><Link to={`/category/${_id}`}><Card.Img variant="top" src={img}/></Link></button>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					<Button variant="primary">{count}</Button>
				</Card.Body>
			</Card>
        </div>
    );
};

export default SingleCard;