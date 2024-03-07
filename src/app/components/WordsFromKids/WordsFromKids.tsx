import Image from "next/image";
import React from "react";
import kid from "../../../assets/kid.jpg";
import styles from "./WordsFromKids.module.css";
import quote from "../../../assets/quote.png";

const WordsFromKids = () => {
	return (
		<div className="md:flex mt-20">
			<div className="md:w-1/2">
				<Image
					className="w-full"
					alt="kid"
					src={kid}
					height={500}
					width={500}
				/>
			</div>
			<div
				className={`bg-green-500 text-white md:w-1/2 text-center ${styles.quoteImgCont}`}
			>
				<Image
					className="mx-auto mt-0 pt-16 md:pt-0 opacity-30"
					alt="kid"
					src={quote}
					height={300}
					width={300}
				/>
				<div>
					<p className="text-3xl font-bold md:mt-32 mt-12 mb-10">
						Words From our Kids
					</p>
					<p className="text-2xl text-justify mx-10">
						The legal definition of a charitable organization (and of charity)
						varies between countries and in some instances regions of the
						country. The regulation, the tax treatment.
					</p>
					<div className="text-right mx-10 mt-10">
						<p className="text-xl">Stephanie Jenkins</p>
						<p className="text-xl">Kid</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WordsFromKids;
