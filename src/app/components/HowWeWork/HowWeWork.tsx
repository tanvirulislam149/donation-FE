import Image from "next/image";
import React from "react";
import img from "../../../assets/how_we_work.png";
import icon1 from "../../../assets/icon_1.png";
import icon2 from "../../../assets/icon_2.png";
import icon3 from "../../../assets/icon_3.png";

const HowWeWork = () => {
	return (
		<div className="flex justify-evenly my-28">
			<div>
				<Image alt="child" src={img} height={500} width={500} />
			</div>
			<div className="w-1/2">
				<div className="font-bold text-5xl mt-4 text-black">
					<p>How We Work</p>
					<hr className="h-2 bg-green-500 w-14 mt-2" />
				</div>
				<div className="flex items-center mt-10">
					<Image alt="child" src={icon1} height={50} width={50} />
					<p className="text-2xl font-bold my-3 ml-5">Community centers</p>
				</div>
				<p className="text-lg my-2">
					Charity law within the UK varies among England and Wales, Scotland and
					Northern Ireland, but the fundamental principles are the same.
				</p>
				<div className="flex items-center">
					<Image alt="child" src={icon2} height={50} width={50} />
					<p className="text-2xl font-bold my-3 ml-5">Data-driven approach</p>
				</div>
				<p className="text-lg my-2">
					Charity law within the UK varies among England and Wales, Scotland and
					Northern Ireland, but the fundamental principles are the same.
				</p>
				<div className="flex items-center">
					<Image alt="child" src={icon3} height={50} width={50} />
					<p className="text-2xl font-bold my-3 ml-5">Focused support</p>
				</div>
				<p className="text-lg my-2">
					Charity law within the UK varies among England and Wales, Scotland and
					Northern Ireland, but the fundamental principles are the same.
				</p>
			</div>
		</div>
	);
};

export default HowWeWork;
