import React from "react";
import Nav from "../components/Nav";
import { teammembers } from "../Data/TeamsData";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import Footer from "./Footer";

const Teams = () => {
	return (
		<>
			<div className="flex items-center justify-center">
				<div
					className="
		lg:w-8/12 *:flex-col items-center justify-center"
				>
					<div className=" capitalize border">
						<div className="my-10  capitalize px-10 space-y-5 ">
							<h4 className="text-3xl font-bold ">Our team</h4>
							<h4>
								We're a dynamic group of individuals who are passionate about
								what we do and <br /> dedicated to delivering the best results
								for our clients.
							</h4>
						</div>
						<div className=""></div>
						<div className="grid grid-cols-1  p-10  gap-9 rounded-lg lg:grid-cols-3">
							{teammembers.map((item, index) => (
								<div className="" key={index}>
									<div className="space-y-4">
										<div className=" h-60 object- overflow-hidden  ">
											<img
												src={item.image}
												alt=""
												className=" w-full h-60 object-cover rounded-lg"
											/>
										</div>
										<div className="space-y-2">
											<div className="space-y-1">
												<h2 className="font-bold text-lg tracking-wider">
													{item.name}
												</h2>
												<p className="text-gray-400 tracking-wide">
													{item.designation}
												</p>
											</div>
											<div className="flex items-center gap-3">
												<div className="">
													<a href={item.fb}>
														<span className="hover:bg-orange-400 text-2xl">
															<CiFacebook className="text-gray-400 " />
														</span>
													</a>
												</div>
												<div className="">
													<a href={item.fb}>
														<span className="hover:bg-orange-400 text-2xl">
															<CiTwitter className="text-gray-400 " />
														</span>
													</a>
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
		</>
	);
};

export default Teams;
