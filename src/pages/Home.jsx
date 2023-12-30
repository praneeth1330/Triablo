import React from "react";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
import { brands } from "../Data/BrandsData";
import WhyTriablo from "../components/WhyTriablo";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import YourCustomization from "../components/YourCustomization";
import Deliverys from "../components/Deliverys";

const Home = () => {
	return (
		<>
			<div className="">
				<div className="">
					<Header />
					<ProductCards />
					<div className="flex items-center justify-center my-10">
						<div className="lg:w-8/12 flex-col items-center justify-center space-y-5">
							<div className="">
								<h1 className="text-3xl lg:text-4xl text-center">BRANDS</h1>
							</div>
							<div className="flex flex-wrap lg:gap-10 gap-2 my-2 justify-center">
								{brands?.map((data, index) => (
									<div
										className="lg:w-28 w-16 flex items-center justify-center mb-4"
										key={index}
									>
										<img src={data.src} alt="" />
									</div>
								))}
							</div>
						</div>
					</div>
					{/* changes made */}
					<WhyTriablo />
				</div>
				<Deliverys />
			</div>
			<YourCustomization />
		</>
	);
};

export default Home;
