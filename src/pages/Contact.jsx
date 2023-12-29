import React from "react";
import Nav from "../components/Nav";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Footer from "./Footer";

const Contact = () => {
	return (
		<>
			<div className="flex items-center justify-center mb-10">
				<div className="lg:w-8/12 flex-col justify-center   items-center capitalize">
					<div className="flex-col space-y-5 border-b-2 pb-5 lg:my-10">
						<h4 className="uppercase font-semibold text-center"> contact us</h4>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 border capitalize">
						<div className="flex items-center justify-center  bg-gradient-to-t from-[#eeeced] to-white">
							<div className=" py-20 px-10">
								<div className=" flex-col items-center justify- space-y-10">
									<h4 className="text-3xl font-bold text-center">
										get in touch
									</h4>
									<p className="tracking-wider">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Consectetur consequuntur distinctio, id doloremque excepturi
										dolorum illum ratione. Fugit earum aut, quas eaque nemo,
										sapiente cumque dolore impedit, non expedita odio.
									</p>
									<div className=" flex items-center justify-start space-x-5 text-gray-500">
										<div className="text-2xl">
											<HiOutlineBuildingOffice2 />
										</div>
										<p>
											545 Mavis Island <br /> Chicago, IL 99191
										</p>
									</div>
									<div className=" flex items-center justify-start space-x-5 text-gray-500">
										<div className="text-2xl">
											<FaPhoneAlt />
										</div>
										<p>+91 2657124878</p>
									</div>
									<div className=" flex items-center justify-start space-x-5 text-gray-500">
										<div className="text-2xl">
											<CiMail />
										</div>
										<p>help.triablo@help.com</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-col lg:space-y-10  ">
							<div className=" flex-col space-y-5  py-20 px-10 rounded-lg">
								<div className=" px-5 flex-col space-y-5">
									<div className="grid grid-cols-2 gap-2">
										<div className=" flex-col items-center  ">
											<div className="">
												<label htmlFor="name" className="  ">
													Firstname
												</label>
											</div>

											<input
												type="text"
												className="w-full h-10 rounded-lg border"
											/>
										</div>
										<div className=" flex-col items-center  ">
											<div className="">
												<label htmlFor="name" className="  ">
													lastname
												</label>
											</div>

											<input
												type="text"
												className="w-full h-10 rounded-lg border"
											/>
										</div>
									</div>
									<div className="  flex-col space-y-2">
										<label htmlFor="name" className="  ">
											Email
										</label>
										<input
											type="email"
											className="w-full h-10 rounded-lg border"
										/>
									</div>

									<div className=" flex-col items-center  ">
										<div className="">
											<label htmlFor="name" className="  ">
												phone
											</label>
										</div>

										<input
											type="text"
											className="w-full h-10 rounded-lg border"
										/>
									</div>
									<div className=" flex-col items-center  ">
										<div className="">
											<label htmlFor="name" className="  ">
												message
											</label>
										</div>

										<textarea
											name=""
											id=""
											className=" w-full border"
											cols="100"
											rows="10"
										></textarea>
									</div>
									<div className="text-end">
										<button className="py-2 px-4 bg-orange-400 rounded-full text-white font-semibold ">
											Send
										</button>
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

export default Contact;
