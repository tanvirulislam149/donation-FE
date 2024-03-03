"use client";
import Link from "next/link";
import logo from "../../../assets/Logo.png";
import Image from "next/image";
import AuthButton from "./AuthButton/AuthButton";
import { usePathname } from "next/navigation";
import DashboardBtn from "../DashboardBtn/DashboardBtn";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<div className="navbar bg-base-100 md:px-10 py-3 sticky top-0 z-10">
			<div className="navbar-start">
				<Link href={"/"}>
					<Image src={logo} width={200} height={200} alt="logo" />
				</Link>
			</div>
			{/* mobile view */}
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
					>
						<li className="py-2">
							<Link
								className={`${
									pathname === "/"
										? "text-red-500 font-bold border-b-2 border-red-500"
										: ""
								}`}
								href={"/"}
							>
								Home
							</Link>
						</li>
						<li className="py-2">
							<Link
								className={`${
									pathname === "/donation"
										? "text-red-500 font-bold border-b-2 border-red-500"
										: ""
								}`}
								href={"/donation"}
							>
								Donations
							</Link>
						</li>
						<li className="py-2">
							<Link
								className={`${
									pathname === "/statistics"
										? "text-red-500 font-bold border-b-2 border-red-500"
										: ""
								}`}
								href={"/statistics"}
							>
								Statistics
							</Link>
						</li>
						<DashboardBtn />
						<AuthButton />
					</ul>
				</div>
			</div>
			<div className="navbar-end w-full hidden lg:flex">
				<ul className="menu menu-horizontal px-1 items-center">
					<Link
						className={`${
							pathname === "/"
								? "text-red-500 font-bold border-b-2 border-red-500"
								: ""
						} mx-3`}
						href={"/"}
					>
						Home
					</Link>
					<Link
						className={`${
							pathname === "/donation"
								? "text-red-500 font-bold border-b-2 border-red-500"
								: ""
						} mx-3`}
						href={"/donation"}
					>
						Donations
					</Link>
					<Link
						className={`${
							pathname === "/statistics"
								? "text-red-500 font-bold border-b-2 border-red-500"
								: ""
						} mx-3`}
						href={"/statistics"}
					>
						Statistics
					</Link>
					<DashboardBtn />
					<AuthButton />
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
