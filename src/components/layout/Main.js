import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../LeftNav/LeftNav";
import CatGallary from "../CatGallary/CatGallary";
import CatCard from "../CenterCat/CatCard";
import RightSide from "../RightSide/RightSide";

const Main = () => {
	const [item, setItem] = useState("");
	const [filtered, setFiltered] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(" https://cat-app-server.vercel.app/category")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	useEffect(() => {
		const result = data.filter((dt) => {
			return dt?.categoryName.toLowerCase().includes(item?.toLowerCase());
		});
		setFiltered(result);
	}, [data, item]);

	

	return (
		<div>
			<Header></Header>

			<Container className="mt-4">
				<Row
					lg={4}
					md={6}
					sm={12}
					className="row row-cols-1 row-cols-md-2 row-cols-lg-3"
				>
					<Col lg="3" className="">
						<LeftNav setItem={setItem} item={item}></LeftNav>
					</Col>
					<Col lg="5">
						{/* <Outlet></Outlet> */}
						{filtered?.map((cat) => (
							<CatCard
								key={cat._id}
								cat={cat}
								setFiltered={setFiltered}
							></CatCard>
						))}
						{}
					</Col>
					<Col lg="4" className="">
						<RightSide></RightSide>
						{/* <RightSideForm></RightSideForm> */}
					</Col>
				</Row>

				<div className="w-100 mt-5 ">
					<CatGallary setItem={setItem}></CatGallary>
				</div>
			</Container>
		</div>
	);
};

export default Main;
