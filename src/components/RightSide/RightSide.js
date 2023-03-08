import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RightSide = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const handleAddCat = (data) => {
		console.log("clicked");
		const catInfo = {
			catName: data.catName,
			image: data.image,
			counter: data.counter,
		};
		console.log(catInfo);
		fetch(" https://cat-app-server.vercel.app/category", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(catInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					alert("cat posted");
					// toast.success("Student Information added");
					// navigate("/dashboard/manage");
				}
			})
			.catch((err) => console.error(err));
	};
	return (
		<div className="h-[1000px] bg-warning rounded">
			<div className="rounded-lg p-3 shadow-sm">
				<h2 className="fs-4">Create New Cat</h2>
				<Form onSubmit={handleSubmit(handleAddCat)}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Cat Name</Form.Label>
						<Form.Control
							{...register("catName", { required: "Name is required" })}
							type="text"
							placeholder="Enter Name"
						/>
						{errors.catName && (
							<p className="text-danger">{errors.catName?.message}</p>
						)}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Cat Image</Form.Label>
						<Form.Control
							{...register("image", { required: "Image is required" })}
							type="text"
							placeholder="Image"
						/>
						{errors.image && (
							<p className="text-danger">{errors.image?.message}</p>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Cat Clicks</Form.Label>
						<Form.Control
							{...register("counter", { required: "Counter is required" })}
							type="text"
							placeholder="Number"
						/>
						{errors.counter && (
							<p className="text-danger">{errors.counter?.message}</p>
						)}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Description</Form.Label>
						<Form.Control
							{...register("description", {
								required: "Description is required",
							})}
							type="text"
							placeholder="Message"
						/>
						{errors.description && (
							<p className="text-danger">{errors.description?.message}</p>
						)}
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default RightSide;
