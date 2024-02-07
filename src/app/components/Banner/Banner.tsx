import { Dispatch, SetStateAction } from "react";
import styles from "./Banner.module.css";

const Banner = ({
	search,
	setSearch,
}: {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}) => {
	return (
		<div className={`h-screen flex justify-center pt-64 ${styles.bannerImg}`}>
			<div className={`flex`}>
				<input
					type="text"
					placeholder="Search by category"
					className="input input-bordered md:w-80 w-full"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<button className="btn btn-error">Search</button>
			</div>
		</div>
	);
};

export default Banner;
