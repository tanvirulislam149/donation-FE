"use client";

import { ICreateDonation } from "@/types/globalTypes";

const UpdateDonation = () => {
	const handleUpdate = (e: React.FormEvent<ICreateDonation>) => {
		console.log("object");
	};
	return (
		<div className="flex justify-center w-full">
			<form onSubmit={handleUpdate} className="w-1/2">
				<p className="text-3xl text-center font-bold">Update Donation</p>
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
						<span className="label-text">Picture:</span>
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
						type="text"
						placeholder="Enter title"
						className="input input-bordered w-full"
					/>
				</label>
				<input className="btn btn-primary mt-3" type="submit" value="Create" />
			</form>
		</div>
	);
};

export default UpdateDonation;
