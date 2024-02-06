import Link from "next/link";
import logo from "../../../assets/Logo.png";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 md:px-10 py-3 sticky top-0">
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
							<Link href={"/"}>Home</Link>
						</li>
						<li className="py-2">
							<Link href={"/donation"}>Donations</Link>
						</li>
						<li className="py-2">
							<Link href={"/statistics"}>Statistics</Link>
						</li>
						<Link href={"/login"}>
							<button className="btn btn-primary my-2">Login</button>
						</Link>
					</ul>
				</div>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1 items-center">
					<Link className="px-6" href={"/"}>
						Home
					</Link>
					<Link className="px-6" href={"/donation"}>
						Donations
					</Link>
					<Link className="px-6" href={"/statistics"}>
						Statistics
					</Link>
					<Link href={"/login"}>
						<button className="btn btn-primary">Login</button>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
