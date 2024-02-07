import { Dispatch, SetStateAction } from "react";
import styles from "./Banner.module.css";

const Banner = () =>
	//   {
	// 	search,
	// 	setSearch,
	// }: {
	// 	search: string;
	// 	setSearch: Dispatch<SetStateAction<string>>;
	// }
	{
		return (
			<div className={`h-screen flex justify-center pt-48 ${styles.bannerImg}`}>
				<div>
					<p className="text-center text-5xl font-bold mb-5">
						I Grow By Helping People In Need
					</p>
					<div className={`flex justify-center`}>
						<input
							type="text"
							placeholder="Search by category"
							className="input input-bordered md:w-80 w-full"
							// onChange={(e) => setSearch(e.target.value)}
							// value={search}
						/>
						<button className="btn btn-error">Search</button>
					</div>
				</div>
			</div>
		);
	};

export default Banner;
