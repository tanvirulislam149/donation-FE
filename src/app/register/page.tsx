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
import Image from "next/image";
import donate from "../../assets/donate.jpg";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Register = () => {
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	const [errorMsg, setErrorMsg] = useState<string | undefined>("");
	const [name, setName] = useState("");
	const [showPass, setShowPass] = useState(false);
	const [showConfirmPass, setShowConfirmPass] = useState(false);

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
		<div className="bg-base-200 shadow-2xl md:mx-44 md:my-16 mb-20 mt-6 mx-5">
			<div className="md:flex">
				<div className="md:w-1/2 md:block hidden">
					<Image src={donate} alt="donate" height={450} width={450} />
				</div>
				<div className="flex justify-center items-center md:w-1/2 w-full md:mx-20">
					<div className="md:w-3/4 w-11/12 py-10">
						<p className="text-center text-4xl font-bold mb-5">Register</p>
						<form id="register" onSubmit={handleSubmit}>
							<input
								name="userName"
								type="text"
								placeholder="Enter your name"
								className="input input-bordered rounded-full mb-4 w-full"
								required
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								name="email"
								type="email"
								placeholder="Enter your email"
								className="input input-bordered rounded-full mb-4 w-full"
								required
							/>
							<div className="relative">
								<input
									name="password"
									type={showPass ? "text" : "password"}
									placeholder="Enter your password"
									className="input input-bordered rounded-full mb-4 w-full"
									required
								/>
								{showPass ? (
									<IoMdEye
										onClick={() => setShowPass(!showPass)}
										className="absolute top-2.5 right-3 w-7 h-7 cursor-pointer"
									/>
								) : (
									<IoMdEyeOff
										onClick={() => setShowPass(!showPass)}
										className="absolute top-2.5 right-3 w-7 h-7 cursor-pointer"
									/>
								)}
							</div>
							<div className="relative">
								<input
									name="confirmPassword"
									type={showConfirmPass ? "text" : "password"}
									placeholder="Enter confirm password"
									className="input input-bordered rounded-full w-full"
									required
								/>
								{showConfirmPass ? (
									<IoMdEye
										onClick={() => setShowConfirmPass(!showConfirmPass)}
										className="absolute top-2.5 right-3 w-7 h-7 cursor-pointer"
									/>
								) : (
									<IoMdEyeOff
										onClick={() => setShowConfirmPass(!showConfirmPass)}
										className="absolute top-2.5 right-3 w-7 h-7 cursor-pointer"
									/>
								)}
							</div>
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
										className="btn btn-primary mt-4 rounded-full bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 w-full"
									/>
								</>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
