import Link from "next/link";
import React, { ReactNode } from "react";
import PrivateAdminRoute from "../components/PrivateAdminRoute";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<PrivateAdminRoute>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					{/* Page content here */}
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden m-4"
					>
						Open drawer
					</label>
					{children}
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
						{/* Sidebar content here */}
						<li>
							<Link className="py-4" href={"/Dashboard/createDonation"}>
								Create Donation
							</Link>
						</li>
						<li>
							<Link className="py-4" href={"/Dashboard/updateDonation"}>
								Manage Donation
							</Link>
						</li>
						<li>
							<Link className="py-4" href={"/Dashboard/createAdmin"}>
								Create Admin
							</Link>
						</li>
						<li>
							<Link className="py-4" href={"/Dashboard/statistics"}>
								Donation Statistics
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</PrivateAdminRoute>
	);
};

export default DashboardLayout;
