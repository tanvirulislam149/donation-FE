"use client";
import React, { useEffect, useState } from "react";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Link from "next/link";

const DashboardBtn = () => {
	const [user, loading] = useAuthState(auth);
	const [admin, setAdmin] = useState(false);

	useEffect(() => {
		if (user) {
			axios
				.get(`http://localhost:5000/checkAdmin/${user?.email}`)
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
		<div>
			{admin ? (
				<Link
					className="md:px-4 px-3 py-4 md:py-0"
					href={"/Dashboard/createDonation"}
				>
					Dashboard
				</Link>
			) : (
				""
			)}
		</div>
	);
};

export default DashboardBtn;
