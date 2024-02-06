import styles from "./Banner.module.css";

const Banner = () => {
	return (
		<div className={`h-screen flex justify-center pt-64 ${styles.bannerImg}`}>
			<div className={`flex`}>
				<input
					type="text"
					placeholder="Search by category"
					className="input input-bordered md:w-80 w-full"
				/>
				<button className="btn btn-error">Search</button>
			</div>
		</div>
	);
};

export default Banner;
