"use client";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import { IDonation } from "@/types/globalTypes";
import auth from "../../../firebase.init";

const DonationCardCont = () => {
	const [user, loading] = useAuthState(auth);
	const [data, setData] = useState([]);
	useEffect(() => {
		axios(`http://localhost:5000/getUserAllDonation/${user?.email}`)
			.then(function (response) {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [user]);
	return (
		<div className="flex justify-center my-5">
			<div className="overflow-x-auto w-3/4">
				<p className="text-center text-3xl font-bold mb-5">My Donations</p>
				{data.length ? (
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
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p>No Data found</p>
				)}
			</div>
			{/* <div className="">
				{data.length ? (
					data.map((d: IDonation) => <p>{d.title}</p>)
				) : (
					
				)}
			</div> */}
		</div>
	);
};

export default DonationCardCont;
