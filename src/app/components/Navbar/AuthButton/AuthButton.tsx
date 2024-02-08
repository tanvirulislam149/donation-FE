"use client";
import React from "react";
import auth from "../../../../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import Link from "next/link";

const AuthButton = () => {
	const [user, loading, error] = useAuthState(auth);
	const [signOut, signOutLoading, signOutError] = useSignOut(auth);
	return (
		<div>
			{user ? (
				<button
					onClick={() => signOut()}
					className="btn btn-primary m-3 md:m-3"
				>
					Log out
				</button>
			) : (
				<Link href={"/login"}>
					<button className="btn btn-primary m-3 md:m-0">Login</button>
				</Link>
			)}
		</div>
	);
};

export default AuthButton;
