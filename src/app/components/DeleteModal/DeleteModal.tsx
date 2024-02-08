import axios from "axios";
import React from "react";

const DeleteModal = ({
	id,
	getDonation,
}: {
	id: string;
	getDonation: () => void;
}) => {
	const handleDelete = () => {
		axios
			.delete(`http://localhost:5000/deleteDonation/${id}`)
			.then(function (response) {
				if (response.data.acknowledged) {
					getDonation();
					(document.getElementById("deleteModal") as HTMLFormElement)?.close();
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<dialog id="deleteModal" className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<p className="text-center text-black mb-5">
					Are you sure you want to delete?
				</p>
				<div className="flex justify-end">
					<button
						onClick={handleDelete}
						className="btn btn-error mr-5 text-white"
					>
						Delete
					</button>
					<button
						onClick={() =>
							(
								document.getElementById("deleteModal") as HTMLFormElement
							)?.close()
						}
						className="btn btn-primary"
					>
						Cancel
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default DeleteModal;
