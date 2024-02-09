"use client";
import React, { useEffect, useState } from "react";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardBtn = () => {
	const [user, loading] = useAuthState(auth);
	const [admin, setAdmin] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (user) {
			axios
				.get(`https://donation-be.onrender.com/checkAdmin/${user?.email}`)
				.then((res) => {
					if (res.data.role === "admin") {
						setAdmin(true);
					}
				});
		} else {
			setAdmin(false);
		}
	}, [user]);
	return (
		<>
			{admin ? (
				// <li className="px-0 py-2 lg:py-0">
				<Link
					className={`${
						pathname.split("/")[1] === "Dashboard"
							? "text-red-500 font-bold border-b-2 border-red-500"
							: ""
					} lg:mx-3`}
					href={"/Dashboard/createDonation"}
				>
					Dashboard
				</Link>
			) : (
				// </li>
				""
			)}
		</>
	);
};

export default DashboardBtn;
