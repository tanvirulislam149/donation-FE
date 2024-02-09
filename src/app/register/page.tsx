"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useRouter } from "next/navigation";
import { IUser } from "@/types/globalTypes";
import axios from "axios";

const Register = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	const [errorMsg, setErrorMsg] = useState<string | undefined>("");
	const [name, setName] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (user) {
			const data = { name, email: user?.user.email, role: "user" };
			axios
				.post("https://donation-be.onrender.com/postUser", data)
				.then((res) => console.log(res));
			setErrorMsg("");
			(document.getElementById("register") as HTMLFormElement).reset();
			router.push("/");
		}
	}, [user]);

	useEffect(() => {
		if (error || updateError) {
			setErrorMsg(error ? error.message : updateError?.message);
		}
	}, [error, updateError]);

	const handleSubmit = async (e: React.FormEvent<IUser>) => {
		e.preventDefault();
		setErrorMsg("");
		const { userName, email, password, confirmPassword } = e.currentTarget;
		const userEmail = email.value;
		const userPassword = password.value;
		const confirmPass = confirmPassword.value;
		if (userPassword === confirmPass) {
			await createUserWithEmailAndPassword(userEmail, userPassword);
			await updateProfile({ displayName: userName.value });
		} else {
			setErrorMsg("Password didn't matched");
		}
	};
	return (
		<div className="flex justify-center items-center mt-10">
			<div className="md:w-1/4 w-5/6">
				<p className="text-center text-4xl font-bold mb-5">Register</p>
				<form id="register" onSubmit={handleSubmit}>
					<div className="label">
						<span className="label-text">Name:</span>
					</div>
					<input
						name="userName"
						type="text"
						placeholder="Enter your name"
						className="input input-bordered w-full"
						required
						onChange={(e) => setName(e.target.value)}
					/>
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
					<div className="label">
						<span className="label-text">Confirm Password:</span>
					</div>
					<input
						name="confirmPassword"
						type="password"
						placeholder="Enter confirm password"
						className="input input-bordered w-full"
						required
					/>
					<div className="mt-2">
						<Link className="underline" href={"/login"}>
							Go to login
						</Link>
					</div>
					<p className="text-red-500">{errorMsg}</p>
					{loading || updating ? (
						<span className="loading loading-spinner loading-lg mt-3"></span>
					) : (
						<>
							<input
								type="submit"
								value={"Register"}
								className="btn btn-primary mt-3"
							/>
						</>
					)}
				</form>
			</div>
		</div>
	);
};

export default Register;
