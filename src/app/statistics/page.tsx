import React from "react";
import UserStatistics from "../components/UserStatistics/UserStatistics";
import PrivateRoute from "../components/PrivateRoute";

const Statistics = () => {
	return (
		<div>
			<PrivateRoute>
				<UserStatistics />
			</PrivateRoute>
		</div>
	);
};

export default Statistics;
