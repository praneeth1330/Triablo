import React, { useEffect, useState } from "react";

const WhyTriablo = () => {
	const images = ["./04.png", "./03.png", "./02.png"];
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		}, 2000);
		return () => clearInterval(interval);
	}, [images.length]);
	return (
		<div className="w-full bg-[#eeeced]">
			<div className="">
				<h4 className="uppercase text-4xl tracking-widest text-center py-10 ">
					why people choose triablo?
				</h4>
			</div>
			<div className="flex items-center justify-center ">
				<div className="w-8/12 flex items-center justify-center">
					<div className=" flex-col md:grid grid-cols-3 items-center justify-center">
						<div className=" flex-col px-5  ">
							<div className="  text line-clamp-3 ">
								<h4 className=" text-xl lg:text-end  py-3 text-start">
									Preoreder system
								</h4>
								<p className=" text-gray-400 lg:text-end text-start">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									doloremque cum illo atque neque
								</p>
							</div>
							<div className=" lg:text-end text-start line-clamp-3 my-10">
								<h4 className=" text-xl">Fine Detailing</h4>
								<p className=" text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									doloremque cum illo atque neque
								</p>
							</div>
						</div>
						<div className=" w-full h-fit ">
							{/* image */}

							<img
								src={images[current]}
								alt={`Image ${current + 1}`}
								className="mx-auto   transition-all ease-in-out  duration-300 scroll-smooth "
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						</div>
						<div className="px-5">
							<div className=" line-clamp-3 ">
								<h4 className=" text-xl text-start">Easy Return</h4>
								<p className="text-start text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									doloremque cum illo atque neque
								</p>
							</div>
							<div className=" text-start line-clamp-3 my-10">
								<h4 className=" text-xl">Affordable</h4>
								<p className="text-gray-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									doloremque cum illo atque neque
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyTriablo;
