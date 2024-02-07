"use client";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ReactNode } from "react";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!user) {
		redirect("/login");
	}
	return children;
};

export default PrivateRoute;
