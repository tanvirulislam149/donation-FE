"use client";
import { IUser } from "@/types/globalTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import donate from "../../assets/donate.jpg";
import Image from "next/image";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [errorMsg, setErrorMsg] = useState<string | undefined>("");
	const [showPass, setShowPass] = useState(false);
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
		<div className="bg-base-200 shadow-2xl md:mx-44 md:my-16 mb-20 mt-6 mx-5">
			<div className="md:flex">
				<div className="md:w-1/2 md:block hidden">
					<Image src={donate} alt="donate" height={450} width={450} />
				</div>
				<div className="flex justify-center items-center md:w-1/2 w-full md:mx-20">
					<div className="md:w-3/4 w-11/12 py-10">
						<form id="login" onSubmit={handleSubmit}>
							<p className="text-center text-4xl font-bold">
								Welcome to Chariti
							</p>
							<p className="text-center text-sm font-bold my-5">
								Login to your account
							</p>
							<input
								name="email"
								type="email"
								placeholder="Enter your email"
								className="input input-bordered w-full rounded-full border-none mb-4"
								required
							/>
							<div className="relative">
								<input
									name="password"
									type={showPass ? "text" : "password"}
									placeholder="Enter your password"
									className="input input-bordered w-full rounded-full border-none"
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
									className="btn btn-primary mt-4 rounded-full bg-green-400 border-none text-black text-base font-bold hover:bg-green-700 w-full"
								/>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
