import randomColor from "@/utils/randomColor";
import React from "react";

const Card = () => {
	const { cardBg, categoryBg, textColor } = randomColor();
	return (
		<div>
			<div
				style={{ backgroundColor: cardBg }}
				className="card w-96 bg-base-100 shadow-xl"
			>
				<figure>
					<img
						className="w-full"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZW-wnB1vGGGdKKzlvF92PsrnZV8Kx0-v1-CwXq5Hbw&s"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<p>
						<span
							style={{ backgroundColor: categoryBg, color: textColor }}
							className="p-2 text-sm"
						>
							Health
						</span>
					</p>
					<h2 className="card-title mt-2">Clear water for children</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
