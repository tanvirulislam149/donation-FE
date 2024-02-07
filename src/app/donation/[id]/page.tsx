import React from "react";

const DonationDetails = ({ params }: { params: { id: string } }) => {
	console.log(params);
	return (
		<div className="flex justify-center my-14">
			<div className="card card-compact w-\ bg-base-100 ">
				<figure>
					<img
						className="w-full h-full"
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div className="card-actions -mt-16 pl-4 py-5 bg-slate-300">
					<button className="btn btn-primary">Donate $290.00</button>
				</div>
				<div className="card-body mt-5">
					<h2 className="card-title">Good Education {params.id}</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
			</div>
		</div>
	);
};

export default DonationDetails;
