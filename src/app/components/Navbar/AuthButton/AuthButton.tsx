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
					className="btn btn-primary my-3 rounded-none bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 md:m-0"
				>
					Log out
				</button>
			) : (
				<Link href={"/login"}>
					<button className="btn btn-primary my-3 bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 md:m-0 rounded-none">
						Login
					</button>
				</Link>
			)}
		</div>
	);
};

export default AuthButton;
