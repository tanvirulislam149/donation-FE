import randomColor from "@/utils/randomColor";
import React from "react";

const DonationCard = () => {
	const { cardBg, categoryBg, textColor } = randomColor();
	return (
		<div>
			<div
				style={{ backgroundColor: cardBg }}
				className="card card-side bg-base-100 shadow-xl"
			>
				<figure>
					<img
						className="w-full h-full"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZW-wnB1vGGGdKKzlvF92PsrnZV8Kx0-v1-CwXq5Hbw&s"
						alt="Movie"
					/>
				</figure>
				<div className="card-body">
					<p>
						<span
							style={{ backgroundColor: categoryBg, color: textColor }}
							className="font-bold p-2 text-sm"
						>
							Health
						</span>
					</p>
					<h2 className="card-title mt-2">Clear water for children</h2>
					<p style={{ color: textColor }} className="font-bold text-sm">
						$290.00
					</p>
					<div className="card-actions justify-end">
						<button
							style={{ backgroundColor: textColor }}
							className="btn text-white"
						>
							View Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;
