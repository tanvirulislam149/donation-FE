"use client";
import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Title,
	BarElement,
	LinearScale,
	CategoryScale,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title
);

const UserStatistics = () => {
	const [user, loading] = useAuthState(auth);
	const [ratioData, setRatioData] = useState([]);
	const [barData, setBarData] = useState([]);
	useEffect(() => {
		if (user) {
			axios(`http://localhost:5000/myDonationRatio/${user?.email}`)
				.then(function (response) {
					setRatioData(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
			axios(`http://localhost:5000/myDonations/${user?.email}`)
				.then(function (response) {
					setBarData(response.data);
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
				label: "Donation",
				data: ratioData,
				backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};
	const data2 = {
		labels: barData.map((d: { _id: string }) => d._id),
		datasets: [
			{
				label: "Donation",
				data: barData.map((d: { totalMoney: number }) => d.totalMoney),
				backgroundColor: ["rgba(54, 162, 235, 1)"],
				borderColor: ["rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="flex justify-center">
			<div className="w-full">
				<div className="md:w-1/3 mx-auto">
					<p className="text-center text-2xl font-bold mb-5">
						Ratio of my donation with total donation
					</p>
					<Pie data={data} />
				</div>
				<div className="my-16 md:w-5/6 mx-auto">
					<p className="text-center text-2xl font-bold mb-5">
						Ratio of my donation with total donation
					</p>
					<Bar data={data2} />
				</div>
			</div>
		</div>
	);
};

export default UserStatistics;
