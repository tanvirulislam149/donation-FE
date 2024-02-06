import React from "react";

const Login = () => {
	return (
		<div className="flex justify-center items-center mt-20">
			<div className="md:w-1/4 w-5/6">
				<p className="text-center text-4xl font-bold mb-5">Login</p>
				<div className="label">
					<span className="label-text">Name:</span>
				</div>
				<input
					type="text"
					placeholder="Enter your name"
					className="input input-bordered w-full"
				/>
				<div className="label">
					<span className="label-text">Password:</span>
				</div>
				<input
					type="password"
					placeholder="Enter your password"
					className="input input-bordered w-full"
				/>
				<button className="btn btn-primary mt-3">Login</button>
			</div>
		</div>
	);
};

export default Login;
