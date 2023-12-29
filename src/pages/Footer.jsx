import React from "react";
import { section1, section2, section3, section4 } from "../Data/FooterData";
import {
	CiFacebook,
	CiInstagram,
	CiTwitter,
	CiYoutube,
	CiLinkedin,
} from "react-icons/ci";

const Footer = () => {
	return (
		<div className="flex items-center justify-center  py-10 text-white bg-[#071952]">
			<div className="lg:w-8/12 w-full flex-col items-center justify-center">
				<div className=" grid grid-cols-2 text-center py-20 border-b gap-y-10 md:grid-cols-4 capitalize">
					<div className="md:space-y-5 space-y-3">
						<h3 className="text-xl font-medium">Solution</h3>
						<div className="md:space-y-4 space-y-2">
							{section1.map((item, index) => (
								<div className="" key={index}>
									<h3>{item}</h3>
								</div>
							))}
						</div>
					</div>
					<div className="md:space-y-5 space-y-3">
						<h3 className="text-xl font-medium">support</h3>
						<div className="md:space-y-4 space-y-2">
							{section2.map((item, index) => (
								<div className="" key={index}>
									<h3>{item}</h3>
								</div>
							))}
						</div>
					</div>
					<div className="md:space-y-5 space-y-3 ">
						<h3 className="text-xl font-medium">company</h3>
						<div className="md:space-y-4 space-y-2">
							{section3.map((item, index) => (
								<div className="" key={index}>
									<h3>{item}</h3>
								</div>
							))}
						</div>
					</div>
					<div className="md:space-y-5 space-y-3">
						<h3 className="text-xl font-medium">legal</h3>
						<div className="md:space-y-4 space-y-2">
							{section4.map((item, index) => (
								<div className="" key={index}>
									<h3>{item}</h3>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className=" py-5 flex gap-10 items-center justify-between px-5">
					<p className="text-gray-500 text-sm">
						© 2020 Your Company, Inc. All rights reserved
					</p>
					<div className="flex flex-wrap items-center justify-center gap-x-5 text-2xl text-gray-500">
						<CiFacebook />
						<CiInstagram />
						<CiLinkedin />
						<CiTwitter />
						<CiYoutube />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
