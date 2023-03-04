import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../LeftNav/LeftNav";
import CatGallary from "../CatGallary/CatGallary";


const Main = () => {
	return (
		<div>
			<Header></Header>
            
            <Container className="mt-4">
				<Row lg={4} md={6} sm={12} className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
					<Col lg="3" className="">
						<LeftNav></LeftNav>
					</Col>
					<Col lg="5" className="">
                    
                    <Outlet></Outlet>
					</Col>
					<Col lg="4" className='bg-warning'>3 of 3</Col>
				</Row>
                
                <div className='w-100 mt-5 '>
               
                <CatGallary></CatGallary>
               
			    </div>
               
			</Container>
            {/* <div className="mt-5">
           
                <CatGallary></CatGallary>
			
            </div> */}
			
		</div>
	);
};

export default Main;
