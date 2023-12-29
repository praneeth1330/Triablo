import React from "react";
import { teammembers } from "../Data/TeamsData";
const urls = [
	"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

	"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
	"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const About = () => {
	return (
		<div className="flex items-center justify-center py-10">
			<div className="lg:w-8/12 w-full flex-col items-center justify-center">
				<div className=" space-y-5">
					<div className=" uppercase text-center text-5xl ">
						<h4>what about us</h4>
					</div>
					<div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 border">
						<div className=" flex items-center justify-center">
							<div className="space-y-5 px-10">
								<h4 className=" text-7xl font-medium ">
									We're changing the way people style.
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
									dolorum amet ipsa et omnis accusamus, sunt at explicabo, ex
									saepe sint unde earum dolores quibusdam veniam? Corporis
									debitis repellendus totam!
								</p>
							</div>
						</div>
						<div className="grid grid-cols-3  capitalize overflow-visible grid-flow-col-dense   p-5  border bg-gradient-to-t from-slate-400 to-slate-100 h-full object-contain">
							<div className="">
								<div className=" text-center text-3xl">we</div>

								<img src={urls[0]} alt="" className="rounded " />
								<img src={urls[1]} alt="" className="rounded " />
							</div>
							<div className="">
								<img src={urls[4]} alt="" className="rounded " />
								<h5 className=" text-3xl text-center">make you</h5>
								<img src={urls[5]} alt="" className="rounded " />
							</div>
							<div className="">
								<div className="text-3xl text-center">awesome</div>
								<img src={urls[3]} alt="" className="rounded " />
								<img src={urls[2]} alt="" className="rounded " />
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 py-10 lg:my-10 border capitalize">
						<div className=" flex items-center justify-center">
							<div className="space-y-5 px-10">
								<h4 className=" text-7xl font-medium ">our mission</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
									dolorum amet ipsa et omnis accusamus, sunt at explicabo, ex
									saepe sint unde earum dolores quibusdam veniam? Corporis
									debitis repellendus totam!
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Reiciendis ullam molestias culpa natus officia quo nihil
									eligendi ad, repudiandae, velit voluptatibus nisi dolorem
									commodi sunt ab dolor, adipisci provident libero!
								</p>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Repellat fuga nisi corrupti placeat ducimus labore
									exercitationem adipisci blanditiis excepturi est qui, unde
									veritatis Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Iure neque adipisci, odio, quam rerum corporis corrupti
									expedita, modi omnis porro molestias ipsam nihil ab obcaecati
									deleniti et ex atque ea. esse nesciunt in numquam voluptas,
									aliquam aut?
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center py-10">
							<div className=" space-y-5">
								<div className=" flex-col items-center justify-center text-center space-y-2 ">
									<p className="text-3xl font-bold ">578 million</p>
									<p className="text-sm text-gray-400">
										Transactions every 24 hours
									</p>
								</div>
								<div className=" flex-col items-center justify-center text-center space-y-2 ">
									<p className="text-3xl font-bold ">458k</p>
									<p className="text-sm text-gray-400">loved users</p>
								</div>
								<div className=" flex-col items-center justify-center text-center space-y-2 ">
									<p className="text-3xl font-bold ">45k</p>
									<p className="text-sm text-gray-400">
										addes coustomers monthly
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
