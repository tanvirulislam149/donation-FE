"use client";
import axios from "axios";
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
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	BarElement,
	Title
);

const AdminStatistics = () => {
	const [barData, setBarData] = useState([]);
	useEffect(() => {
		axios(`http://localhost:5000/allDonationStat`)
			.then(function (response) {
				setBarData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const data = {
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
	console.log(barData);
	return (
		<div className="m-5">
			<Bar data={data} />
		</div>
	);
};

export default AdminStatistics;
