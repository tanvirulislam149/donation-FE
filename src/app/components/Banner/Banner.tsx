"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import styles from "./Banner.module.css";

const Banner = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return (
				'<span class="' +
				className +
				'">' +
				`<span class='circle'></span>` +
				"</span>"
			);
		},
	};
	return (
		<div>
			<Swiper
				spaceBetween={30}
				effect={"fade"}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={pagination}
				modules={[EffectFade, Navigation, Pagination, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide className={styles.bannerImg}>
					<img
						className={`w-full h-full`}
						src="https://i.ibb.co/WWdyyps/larm-rmah-AEa-TUnvneik-unsplash.jpg"
					/>
					<div className={styles.bannerText}>
						<p>
							Home is <span className="text-green-400">Life</span>
						</p>
						<div className="text-white md:text-3xl sm:text-2xl text-xl font-normal md:mt-8 mt-3">
							<p className="w-3/4">
								We build strength, stability and self reliance through shelter
							</p>
						</div>
						<button className="btn btn-primary my-3 rounded-none bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 md:m-0">
							Donate
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className={styles.bannerImg}>
					<img
						className={`w-full  h-full`}
						src="https://i.ibb.co/G9CCsz0/un0381303.jpg"
					/>
					<div className={styles.bannerText}>
						<p className={styles.firstText}>Children Needs</p>
						<p className="text-green-400">Your Help</p>
						<div className="text-white md:text-3xl sm:text-2xl text-xl  font-normal md:mt-12 mt-4">
							<p className="w-3/4">
								We build strength, stability and self reliance through shelter
							</p>
						</div>
						<button className="btn btn-primary my-3 rounded-none bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 md:m-0">
							Donate
						</button>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className="md:flex text-3xl">
				<div className="w-full h-80 px-5 flex items-center text-white bg-green-400">
					<p>
						We’ve been tackling poverty in communities to build better lives
					</p>
				</div>
				<div className="w-full h-80 px-5 flex items-center text-white bg-slate-800">
					<p>The great journey to end poverty for good begins with a child.</p>
				</div>
				<div className="w-full h-80 px-5 flex items-center text-white bg-green-400">
					<p>Join our community to help bring clean and safe drinking water</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
