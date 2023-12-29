import React, { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { NavContext } from "../context/ContextProvider";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const SingleProduct = () => {
	const { state, singleProduct, handleCartAdd } = useContext(NavContext);
	const { id } = useParams();
	console.log(useParams());
	const {
		id: dataid,
		title,
		description,
		category,
		image,
		price,
	} = state.singleproduct;
	useEffect(() => {
		singleProduct(`https://fakestoreapi.com/products/${id}`);
	}, []);
	return (
		<>
			<div className="flex items-center justify-center">
				<div className="lg:w-8/12 w-full flex-col items-center justify-center">
					<div className="">
						<div className="my-10 text-center">
							<h4 className="capitalize text-2xl font-bold">product details</h4>
						</div>
						<div className=" text-2xl my-5">
							<NavLink to="/">
								<span className="text-gray-500 cursor-pointer">Home</span>
							</NavLink>
							/{category}
						</div>
						<div className=" grid grid-cols-1 lg:grid-cols-2  p-2 lg:border items-start justify-center   ">
							<div className="flex items-center justify-center lg:border border-b  lg:rounded-lg">
								<div className="w-72 lg:w-auto ">
									<img src={image} alt="" className="p-5 rounded-lg " />
								</div>
							</div>
							<div className="">
								<div className="px-10 border lg:border-0 flex-col lg:space-y-5 space-y-2 py-10 ">
									<div className="flex items-start text-center lg:pt-10   justify-start">
										<h4 className="text-2xl ">{title}</h4>
									</div>
									<div className="flex items-center justify-between lg:justify-start lg:gap-10">
										<h4 className="font-bold">
											Rating {state?.singleproduct?.rating?.rate}
										</h4>
										<p className="text-blue-500 text-lg font-semibold capitalize">
											see all{" "}
											<span className="text-orange-400 underline">
												{state?.singleproduct?.rating?.count}
											</span>{" "}
											reviews
										</p>
									</div>
									<div className="">
										<h4 className="font-semibold">Description</h4>
										<p>{description}</p>
									</div>
									<div className="">
										<h4 className="text-2xl font-semibold">$ {price}</h4>
									</div>
									<select
										name=""
										id=""
										className=" px-5 py-2 bg-white capitalize"
									>
										<option value="">select size</option>
										<option value="">small</option>
										<option value="">Medium</option>
										<option value="">Large</option>
										<option value="">X Large</option>
									</select>
									<div className="">
										<div className=" flex gap-5 w-full">
											<button
												onClick={() => handleCartAdd(state?.singleproduct)}
												className="px-3 py-2 w-full border rounded-lg font-bold text-white bg-blue-500 "
											>
												Add To Cart
											</button>
											<div className="px-3 py-2 w-full border rounded-lg font-bold text-white bg-orange-500 text-center">
												<NavLink to="/cart " className=" text-center ">
													<button
														className=" "
														onClick={() => handleCartAdd(state?.singleproduct)}
													>
														Buy Now
													</button>
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
