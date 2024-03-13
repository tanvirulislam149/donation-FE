"use client";

import DeleteModal from "@/app/components/DeleteModal/DeleteModal";
import Loading from "@/app/components/Loading/Loading";
import UpdateModal from "@/app/components/UpdateModal/UpdateModal";
import { IDonation } from "@/types/globalTypes";
import axios from "axios";
import { useEffect, useState } from "react";

const UpdateDonation = () => {
	const [id, setId] = useState("");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const getDonation = () => {
		axios(`https://donation-be.onrender.com/getAllDonation`)
			.then(function (response) {
				setData(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	useEffect(() => {
		getDonation();
	}, []);
	return (
		<div>
			<div className="flex justify-center mb-20 mt-10">
				<div className="overflow-x-auto md:w-3/4 w-11/12">
					<p className="text-center text-3xl font-bold mb-5">
						Manage Donations
					</p>
					{loading ? (
						<Loading />
					) : data.length ? (
						<table className="table">
							{/* head */}
							<thead>
								<tr className="text-black">
									<th>#</th>
									<th>title</th>
									<th>Category</th>
									<th>Donation</th>
								</tr>
							</thead>
							<tbody>
								{data.map((d: IDonation, index) => (
									<tr key={d._id}>
										<th>{index + 1}</th>
										<td>{d.title}</td>
										<td>{d.donation_category}</td>
										<td>${d.money}</td>
										<td>
											<button
												className="btn btn-sm"
												onClick={() => {
													setId(d._id);
													(
														document.getElementById(
															"updateModal"
														) as HTMLFormElement
													)?.showModal();
												}}
											>
												Update
											</button>
										</td>
										<td>
											<button
												className="btn btn-sm btn-error"
												onClick={() => {
													setId(d._id);
													(
														document.getElementById(
															"deleteModal"
														) as HTMLFormElement
													)?.showModal();
												}}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p className="text-center font-bold">No Data found</p>
					)}
				</div>
			</div>
			<UpdateModal getDonation={getDonation} id={id} />
			<DeleteModal getDonation={getDonation} id={id} />
		</div>
	);
};

export default UpdateDonation;
