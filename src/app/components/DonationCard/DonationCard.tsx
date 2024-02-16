import { IDonation } from "@/types/globalTypes";
import randomColor from "@/utils/randomColor";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const DonationCard = ({ data }: { data: IDonation }) => {
	const { cardBg, categoryBg, textColor } = randomColor();
	return (
		<div>
			<div
				style={{ backgroundColor: cardBg }}
				className="card card-side bg-base-100 shadow-xl"
			>
				<figure>
					<Image
						className="md:w-64 w-48 h-64"
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
							className="font-bold md:p-2 text-sm"
						>
							{data.donation_category}
						</span>
					</p>
					<h2 className="card-title mt-2">{data.title}</h2>
					<p style={{ color: textColor }} className="font-bold text-sm">
						${data.money}
					</p>
					<div className="card-actions justify-end">
						<Link href={`/donation/${data._id}`}>
							<button
								style={{ backgroundColor: textColor }}
								className="btn text-white"
							>
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;
