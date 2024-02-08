"use client";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserStatistics = () => {
	const [user, loading] = useAuthState(auth);
	const [ratioData, setRatioData] = useState([]);
	useEffect(() => {
		if (user) {
			axios(`http://localhost:5000/myDonationRatio/${user?.email}`)
				.then(function (response) {
					setRatioData(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}, [user]);
	const data = {
		labels: ["My Donation", "Total Donation"],
		datasets: [
			{
				label: "# of Votes",
				data: ratioData,
				backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="flex justify-center">
			<div className="md:w-1/2">
				<Pie data={data} />
			</div>
		</div>
	);
};

export default UserStatistics;
