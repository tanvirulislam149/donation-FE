"use client";
import { IUser } from "@/types/globalTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [errorMsg, setErrorMsg] = useState<string | undefined>("");
	const router = useRouter();

	useEffect(() => {
		if (user) {
			setErrorMsg("");
			(document.getElementById("login") as HTMLFormElement).reset();
			router.push("/");
		}
	}, [user]);
	useEffect(() => {
		if (error) {
			setErrorMsg(error.message);
		}
	}, [error]);

	const handleSubmit = async (e: React.FormEvent<IUser>) => {
		e.preventDefault();
		setErrorMsg("");
		const { email, password } = e.currentTarget;
		const userEmail = email.value;
		const userPassword = password.value;
		signInWithEmailAndPassword(userEmail, userPassword);
	};
	return (
		<div className="flex justify-center items-center mt-20">
			<div className="md:w-1/4 w-5/6">
				<form id="login" onSubmit={handleSubmit}>
					<p className="text-center text-4xl font-bold mb-5">Login</p>
					<div className="label">
						<span className="label-text">Email:</span>
					</div>
					<input
						name="email"
						type="email"
						placeholder="Enter your email"
						className="input input-bordered w-full"
						required
					/>
					<div className="label">
						<span className="label-text">Password:</span>
					</div>
					<input
						name="password"
						type="password"
						placeholder="Enter your password"
						className="input input-bordered w-full"
						required
					/>
					<div className="mt-2">
						<Link className="underline" href={"/register"}>
							Go to register
						</Link>
					</div>
					<p className="text-red-500">{errorMsg}</p>
					{loading ? (
						<span className="loading loading-spinner loading-lg mt-3"></span>
					) : (
						<input
							type="submit"
							value={"Login"}
							className="btn btn-primary mt-3"
						/>
					)}
				</form>
			</div>
		</div>
	);
};

export default Login;
