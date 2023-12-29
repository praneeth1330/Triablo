import React from "react";
import video from "../assets/video.mp4";

const YourCustomization = () => {
	return (
		<div>
			<div>
				<div className="mt-10 relative capitalize text-center flex items-center justify-center">
					<video muted autoPlay loop className="h-[70vh] w-full object-cover">
						<source src={video} type="video/mp4" />
					</video>
					<div className="absolute  ">
						<h1 className="text-5xl text-white   font-medium tracking-wider">
							{" "}
							customize your style with us
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YourCustomization;
