import { CSSProperties, Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import styles from "./Banner.module.css";

const Banner = ({
	search,
	setSearch,
}: {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}) => {
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
		<div className={`h-screen flex justify-center`}>
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
						className={`w-full`}
						src="https://i.ibb.co/WWdyyps/larm-rmah-AEa-TUnvneik-unsplash.jpg"
					/>
				</SwiperSlide>
				<SwiperSlide className={styles.bannerImg}>
					<img
						className={`w-full`}
						src="https://i.ibb.co/G9CCsz0/un0381303.jpg"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
