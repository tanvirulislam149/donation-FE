import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["700", "400"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Chariti",
	description: "A Non-government Organization",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${poppins.className}`}>
				<Navbar />
				{children}
				<Footer />
				<ToastContainer />
			</body>
		</html>
	);
}
