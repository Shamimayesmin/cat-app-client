import React from 'react';
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const SingleCard = ({data,handleIncrement}) => {
    
    const {img,categoryName,description,_id} = data
    return (
        <div className=''>
            <Card style={{ width: "full" }}>
				<button onClick={() => handleIncrement(data)} className='border-0'><Link><Card.Img variant="top" src={img}/></Link></button>
				<Card.Body>
					<Card.Title>{categoryName}</Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					{/* <Button variant="primary"></Button> */}
				</Card.Body>
			</Card>
        </div>
    );
};

export default SingleCard;