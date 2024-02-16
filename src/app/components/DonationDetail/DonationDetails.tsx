"use client";
import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { IDonation } from "@/types/globalTypes";
import axios from "axios";
import { toast } from "react-toastify";

const DonationDetails = ({ data }: { data: IDonation }) => {
	const [user, loading] = useAuthState(auth);

	const handleDonate = () => {
		const { _id, ...rest } = data; // taking all key except _id
		const finalData = { ...rest, email: user?.email };
		axios
			.post("https://donation-be.onrender.com/postDonation", finalData)
			.then(function (response) {
				if (response.data.acknowledged) {
					toast.success("Donation Successful", { toastId: "success1" });
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className="flex justify-center my-4">
			<div className="card md:w-1/2 w-11/12 bg-base-100">
				<figure>
					<Image
						className=""
						src={data.picture_url}
						alt="Shoes"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }} // optional
					/>
				</figure>
				<div className="card-actions -mt-16 pl-4 py-5 bg-slate-300">
					<button onClick={handleDonate} className="btn btn-error text-white">
						Donate ${data.money}
					</button>
				</div>
				<div className="card-body mt-5">
					<h2 className="card-title">{data.title}</h2>
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
};

export default DonationDetails;
