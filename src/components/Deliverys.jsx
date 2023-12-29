import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { CiMedal } from "react-icons/ci";

const Deliverys = () => {
	return (
		<div className=" flex items-center justify-center py-20">
			<div className="lg:w-8/12 w-full px-2 flex-col items-center justify-center">
				<div className=" flex items-center justify-between text-gray-500 gap-3 text-wrap ">
					<div className="flex-col items-center justify-center  space-y-3 text-center">
						<div className="text-4xl lg:text-5xl flex items-center justify-center hover:text-orange-500 ">
							<CiDeliveryTruck />
						</div>
						<h2 className="text-black text-3xl">24h</h2>
						<p className="uppercase text-sm">AVARAGE DELIVERY TIME</p>
					</div>
					<div className="flex-col items-center justify-center space-y-3 text-center">
						<div className="text-4xl lg:text-5xl flex items-center justify-center hover:text-orange-500 ">
							<IoBagHandleOutline />
						</div>
						<h2 className="text-black text-3xl">95457</h2>
						<p className="uppercase text-sm">PRODUCTS SOLD</p>
					</div>
					<div className="flex-col items-center justify-center space-y-3 text-center">
						<div className="text-4xl lg:text-5xl flex items-center justify-center hover:text-orange-500 ">
							<SlLike />
						</div>
						<h2 className="text-black text-3xl">98%</h2>
						<p className="uppercase text-sm">HAPPY CLIENTS</p>
					</div>
					<div className="flex-col items-center justify-center space-y-3 text-center">
						<div className="text-4xl lg:text-5xl flex items-center justify-center hover:text-orange-500 ">
							<CiMedal />
						</div>
						<h2 className="text-black text-3xl">20</h2>
						<p className="uppercase text-sm">YEARS OF EXPERIENCE</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deliverys;
