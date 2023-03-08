import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

const CatCard = ({ cat ,setFiltered}) => {
	// console.log(cat);
	const { categoryName, img, description,counter,_id } = cat;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


    const handleUpdateForm = (event) => {
		event.preventDefault();
		const updatedName = event.target.categoryName.value;
		const updatedImage = event.target.img.value;
		const updatedCounter = event.target.counter.value;
        const makeInt = parseFloat(updatedCounter)
		
		
        console.log(updatedName,updatedImage,updatedCounter);
		fetch(` http://localhost:5000/edit/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				updatedName,
				updatedImage,
                // updatedCounter
                makeInt
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.matchedCount > 0) {
                    alert('updated cat')
					// toast.success("Form updated");
					event.target.reset();
                    setFiltered()

				}
			});
	};
	return (
		<div>
			<Card style={{ width: "full" }}>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{categoryName}</Card.Title>
					<Card.Text>{description}</Card.Text>
					<Button variant="primary" onClick={handleShow}>
						Edit Cat
					</Button>

					<>
						

						<Modal
							show={show}
							onHide={handleClose}
							backdrop="static"
							keyboard={false}
						>
							<Modal.Header closeButton>
								<Modal.Title>Update cat</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form onSubmit={handleUpdateForm}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Cat Name</Form.Label>
										<Form.Control name="categoryName" defaultValue={categoryName} type="text" placeholder="Enter cat name" />
									</Form.Group>

									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Image</Form.Label>
										<Form.Control name="img" defaultValue={img} type="text" placeholder="Image" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicCounter">
										<Form.Label>Cat Clicks</Form.Label>
										<Form.Control name="counter" defaultValue={counter} type="text" placeholder="number" />
									</Form.Group>

									<Button variant="primary" type="submit">
										Save Change
									</Button>
									<Button
										className="ms-2"
										variant="secondary"
										onClick={handleClose}
									>
										Close
									</Button>
								</Form>
							</Modal.Body>
						</Modal>
					</>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CatCard;
