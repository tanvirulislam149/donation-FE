import PrivateRoute from "@/app/components/PrivateRoute";
import Image from "next/image";
import React from "react";

const getData = async ({ id }: { id: string }) => {
	const res = await fetch(`http://localhost:5000/getDonation/${id}`, {
		cache: "no-store",
	});
	return res.json();
};

const DonationDetails = async ({ params }: { params: { id: string } }) => {
	const data = await getData(params);
	return (
		<PrivateRoute>
			<div className="flex justify-center my-4">
				<div className="card w-1/2 bg-base-100">
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
						<button className="btn btn-error text-white">
							Donate ${data.money}
						</button>
					</div>
					<div className="card-body mt-5">
						<h2 className="card-title">{data.title}</h2>
						<p>{data.description}</p>
					</div>
				</div>
			</div>
		</PrivateRoute>
	);
};

export default DonationDetails;
