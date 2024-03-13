"use client";

import { ICreateDonation } from "@/types/globalTypes";
import axios from "axios";
import { toast } from "react-toastify";

const CreateDonation = () => {
	const handleCreate = (e: React.FormEvent<ICreateDonation>) => {
		e.preventDefault();
		const { titleName, donation_category, description, picture_url, money } =
			e.currentTarget;
		const data = {
			title: titleName.value,
			donation_category: donation_category.value,
			description: description.value,
			picture_url: picture_url.value,
			money: money.value,
		};
		axios
			.post("https://donation-be.onrender.com/createDonation", data)
			.then((res) => {
				if (res.data.acknowledged) {
					toast.success("Donation created successfully", { toastId: "create" });
					(document.getElementById("createForm") as HTMLFormElement).reset();
				}
			});
	};
	return (
		<div className="flex justify-center w-full my-10">
			<form id="createForm" onSubmit={handleCreate} className="md:w-1/2 w-5/6">
				<p className="text-3xl text-center font-bold">Create Donation</p>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Title:</span>
					</div>
					<input
						name="titleName"
						required
						type="text"
						placeholder="Enter title"
						className="input input-bordered w-full"
					/>
				</label>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Category:</span>
					</div>
					<input
						name="donation_category"
						required
						type="text"
						placeholder="Enter category"
						className="input input-bordered w-full"
					/>
				</label>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Description:</span>
					</div>
					<input
						name="description"
						required
						type="text"
						placeholder="Enter description"
						className="input input-bordered w-full"
					/>
				</label>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Picture URL:</span>
					</div>
					<input
						name="picture_url"
						required
						type="text"
						placeholder="Enter title"
						className="input input-bordered w-full"
					/>
				</label>
				<label className="form-control w-full">
					<div className="label">
						<span className="label-text">Donation Quantity:</span>
					</div>
					<input
						name="money"
						required
						type="number"
						placeholder="Enter title"
						className="input input-bordered w-full"
					/>
				</label>
				<input className="btn btn-primary mt-3" type="submit" value="Create" />
			</form>
		</div>
	);
};

export default CreateDonation;
