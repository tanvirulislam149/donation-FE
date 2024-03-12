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
	console.log(data);

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
		<div className="flex justify-center my-4 mx-14">
			<div className="card bg-base-100 mx-10">
				<div className="md:flex">
					<figure className="md:w-4/6 md:mx-10">
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
					<div className="card-body md:w-2/6">
						<div>
							<h2 className="card-title text-3xl my-5">{data.title}</h2>
							<p className="my-5 text-justify">{data.description}</p>
							<div className="flex my-5">
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
									</svg>
								</a>
								<a className="mx-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
									</svg>
								</a>
								<a>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current"
									>
										<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
									</svg>
								</a>
							</div>
							<button
								onClick={handleDonate}
								className="btn btn-primary my-5 rounded-none bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 md:m-0"
							>
								Donate ${data.money}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationDetails;
