import { IDonation } from "@/types/globalTypes";
import randomColor from "@/utils/randomColor";
import Image from "next/image";
import React from "react";

const Card = ({ data }: { data: IDonation }) => {
	const { cardBg, categoryBg, textColor } = randomColor();
	return (
		<div>
			<div
				style={{ backgroundColor: cardBg }}
				className="card w-96 bg-base-100 shadow-xl"
			>
				<figure>
					<Image
						className="w-96 h-56"
						src={data.picture_url}
						alt="Picture of the author"
						width={500}
						height={500}
					/>
				</figure>
				<div className="card-body">
					<p>
						<span
							style={{ backgroundColor: categoryBg, color: textColor }}
							className="p-2 text-sm"
						>
							{data.donation_category}
						</span>
					</p>
					<h2 className="card-title mt-2">{data.title}</h2>
				</div>
			</div>
		</div>
	);
};

export default Card;
