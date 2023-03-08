import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
const CatCard = ({dat}) => {
    console.log(dat);
    const {title,img,description} = dat;
    return (
        <div className=''>
            
            <Card style={{ width: "full" }}>
				<button className='border-0'><Link><Card.Img variant="top" src={img}/></Link></button>
				<Card.Body>
					<Card.Title>
                       {title}
                    </Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					
				</Card.Body>
			</Card>
        </div>
    );
};

export default CatCard;