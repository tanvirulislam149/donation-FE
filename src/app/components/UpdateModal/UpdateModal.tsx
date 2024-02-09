"use client";
import { ICreateDonation, IDonation } from "@/types/globalTypes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateModal = ({
	id,
	getDonation,
}: {
	id: string;
	getDonation: () => void;
}) => {
	const [data, setData] = useState<IDonation | null>(null);
	const [title, setTitle] = useState(data?.title);
	const [donation_category, setDonation_category] = useState(
		data?.donation_category
	);
	const [description, setDescription] = useState(data?.description);
	const [picture_url, setPicture_url] = useState(data?.picture_url);
	const [money, setMoney] = useState(data?.money);

	useEffect(() => {
		axios(`https://donation-be.onrender.com/getDonation/${id}`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		setTitle(data?.title);
		setDonation_category(data?.donation_category);
		setDescription(data?.description);
		setPicture_url(data?.picture_url);
		setMoney(data?.money);
	}, [data]);

	const handleUpdate = (e: React.FormEvent<ICreateDonation>) => {
		e.preventDefault();
		const data = { title, donation_category, description, picture_url, money };
		axios
			.put(`https://donation-be.onrender.com/updateDonation/${id}`, data)
			.then(function (response) {
				if (response.data.acknowledged) {
					setData(null);
					(document.getElementById("updateModal") as HTMLFormElement)?.close();
					getDonation();
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<dialog id="updateModal" className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				{data ? (
					<div className="flex justify-center w-full">
						<form onSubmit={handleUpdate} className="w-full">
							<p className="text-3xl text-center font-bold">Update Donation</p>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">Title:</span>
								</div>
								<input
									name="titleName"
									required
									value={title}
									onChange={(e) => setTitle(e.target.value)}
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
									value={donation_category}
									onChange={(e) => setDonation_category(e.target.value)}
									type="text"
									placeholder="Enter category"
									className="input input-bordered w-full"
								/>
							</label>
							<label className="form-control w-full">
								<div className="label">
									<span className="label-text">Description:</span>
								</div>
								<textarea
									name="description"
									required
									value={description}
									onChange={(e) => setDescription(e.target.value)}
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
									value={picture_url}
									onChange={(e) => setPicture_url(e.target.value)}
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
									value={money}
									onChange={(e) => setMoney(parseInt(e.target.value))}
									type="text"
									placeholder="Enter title"
									className="input input-bordered w-full"
								/>
							</label>
							<input
								className="btn btn-primary mt-3"
								type="submit"
								value="Update"
							/>
						</form>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</dialog>
	);
};

export default UpdateModal;
