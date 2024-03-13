"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateAdmin = () => {
	const [data, setData] = useState([]);

	const getDonation = () => {
		axios(`https://donation-be.onrender.com/getAllUser`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	useEffect(() => {
		getDonation();
	}, []);

	const handleMakeAdmin = (id: string) => {
		axios
			.patch(`https://donation-be.onrender.com/makeAdmin/${id}`)
			.then((res) => {
				if (res.data.acknowledged) {
					getDonation();
					toast.success("Admin making successful", { toastId: "makeAdmin" });
				}
			});
	};

	return (
		<div className="md:m-10">
			<table className="table">
				{/* head */}
				<thead>
					<tr className="text-black">
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map(
						(
							d: { _id: string; name: string; email: string; role: string },
							index
						) => (
							<tr key={d._id}>
								<th>{index + 1}</th>
								<td>{d.name}</td>
								<td>{d.email}</td>
								<td>
									{d.role !== "admin" ? (
										<button
											className="btn btn-sm btn-error"
											onClick={() => {
												handleMakeAdmin(d._id);
											}}
										>
											Make Admin
										</button>
									) : (
										""
									)}
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CreateAdmin;
