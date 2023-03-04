import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CatCard = ({cat}) => {
    // console.log(cat);
    const {title, img,description} = cat
	return (
		<div>
			<Card style={{ width: "full" }}>
				<Card.Img variant="top" src={img}/>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CatCard;
