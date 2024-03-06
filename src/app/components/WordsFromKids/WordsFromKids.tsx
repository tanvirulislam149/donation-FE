import Image from "next/image";
import React from "react";
import kid from "../../../assets/kid.jpg";

const WordsFromKids = () => {
	return (
		<div className="flex my-20">
			<div className="w-1/2">
				<Image
					className="w-full"
					alt="kid"
					src={kid}
					height={500}
					width={500}
				/>
			</div>
			<div className="bg-green-500 text-white w-1/2 text-center">
				<p className="text-3xl font-bold mt-32 mb-10">Words From our Kids</p>
				<p className="text-2xl text-justify mx-10">
					The legal definition of a charitable organization (and of charity)
					varies between countries and in some instances regions of the country.
					The regulation, the tax treatment.
				</p>
				<div className="text-right mx-10 mt-10">
					<p className="text-xl">Stephanie Jenkins</p>
					<p className="text-xl">Kid</p>
				</div>
			</div>
		</div>
	);
};

export default WordsFromKids;
