"use client";
import { IDonation } from "@/types/globalTypes";
import randomColor from "@/utils/randomColor";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Card = ({ data }: { data: IDonation }) => {
	const router = useRouter();
	const { cardBg, categoryBg, textColor } = randomColor();
	return (
		// <div>
		<div
			className="cursor-pointer"
			onClick={() => router.push(`/donation/${data._id}`)}
		>
			<div className="card w-full h-full bg-green-100 hover:bg-green-200 hover:-translate-y-2 shadow-xl rounded-none">
				<figure>
					<Image
						className="w-full h-56"
						src={data.picture_url}
						alt="Picture of the author"
						width={500}
						height={500}
					/>
				</figure>
				<div className="card-body">
					<p>
						<span className="p-2 text-sm font-bold bg-green-300 text-green-700">
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
