"use client";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading/Loading";

const PrivateAdminRoute = ({ children }: { children: ReactNode }) => {
	const [user, loading] = useAuthState(auth);
	const [admin, setAdmin] = useState(false);
	const [adminLoading, setAdminLoading] = useState(true);

	useEffect(() => {
		if (user) {
			axios
				.get(`https://donation-be.onrender.com/checkAdmin/${user?.email}`)
				.then((res) => {
					if (res.data.role === "admin") {
						setAdmin(true);
					}
					setAdminLoading(false);
				});
		}
	}, [user]);

	if (loading || adminLoading) {
		return <Loading />;
	} else if (!admin || !user) {
		redirect("/login");
	}
	return children;
};

export default PrivateAdminRoute;
