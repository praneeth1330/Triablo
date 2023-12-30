import React, { useContext } from "react";
import { NavContext } from "../context/ContextProvider";
import { IoCart } from "react-icons/io5";
import Fade from "react-reveal/Fade";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const ProductCards = () => {
	const { state, dispatch, handleCartAdd } = useContext(NavContext);
	console.log(state.data);

	return (
		<div className="flex items-center justify-center my-10">
			<div className="lg:w-8/12 flex justify-center items-center">
				<div className="">
					<div className="text-center my-10">
						<h3 className="lg:text-4xl text-2xl tracking-widest">
							WE MAKE YOU AWESOME
						</h3>
					</div>
					<div className=" flex items-center justify-center ">
						<div className=" grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2   lg:gap-10 gap-5 p-2  ">
							{state?.data.slice(0, 8).map((data, index) => (
								<div className="  " key={data.id}>
									<div className=" h-fit group border p-2 pb-0 flex items-center justify-center">
										<div className=" h-fit w-full group ">
											<div className="relative overflow-hidden flex items-center justify-center  ">
												<img
													className="lg:h-60 h-40   object-contain "
													src={data.image}
													alt=""
												/>
												<div className="absolute gap-3  h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
													<NavLink to={`singleproduct/${data.id}`}>
														<div className=" flex items-center justify-center text-center text-white   rounded-full h-10 w-10 bg-[#e8846b] hover:bg-[#222]">
															<div className="">
																<IoSearchSharp />
															</div>
														</div>
													</NavLink>
													<div className="flex items-center justify-center ">
														<button
															className=" text-white  rounded-full bg-[#e8846b] hover:bg-[#222] h-10 w-10"
															onClick={() => handleCartAdd(data)}
														>
															+
														</button>
													</div>
												</div>
												<div className="absolute bottom-0 w-full lg:h-20 h-10  text-white  bg-gray-500 bg-opacity-30 flex justify-start items-center">
													<p className="lg:text-xl mt-2 ml-1 border-r-2 border-black pr-5 inline-block text-orange-600 hover:text-[#222] ">
														${data.price}
													</p>
													<h2 className="mt-3 text-wrap text-xs pl-2 opacity-100 text-[#e8846b]">
														{data.title.slice(0, 20)}
													</h2>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCards;
