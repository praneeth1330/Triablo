import React from "react";
import { brands } from "../Data/BrandsData";

const Brands = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="lg:w-8/12 flex-col items-center justify-center">
				<div className="my-10 space-y-10 ">
					<div className="flex items-center justify-center uppercase text-center  text-5xl">
						BRANDS CO_lab with us
					</div>
					<div className="">
						{brands?.map((data, index) => (
							<div className="border py-3" key={index}>
								<div className="flex gap-10">
									<div className="">
										<img
											src={data.src}
											alt=""
											className="w-72 h-72 object-contain p-5"
										/>
									</div>
									<div className="space-y-2 w-full">
										<h2 className="text-2xl font-bold">{data.name}</h2>
										<h4 className=" text-xl ">About Brand</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Molestias dolore nemo at facere eaque amet porro assumenda
											consequuntur. Eligendi nam nulla fuga pariatur doloribus
											quibusdam. Sint eos molestias laborum provident!
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
