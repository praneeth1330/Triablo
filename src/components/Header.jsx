import React from "react";
import Nav from "./Nav";

const Header = () => {
	return (
		<div
			className="bg-cover  md:bg-center  h-screen   w-full text-white lg:flex lg:justify-center "
			style={{
				backgroundImage: "url('./bg3.jpg')",
			}}
		>
			<div className="lg:w-8/12">
				<div className="flex items-center justify-center h-screen">
					<div className=" flex-col space-y-2 lg:space-y-5 align-middle text-center ">
						<h2 className="text-2xl md:text-5xl">THE STYLE FOR TODAY</h2>
						<p className="text-sm text-center">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
							Impedit, recusandae beatae?
						</p>
						<button className="rounded-full px-2 py-1 lg:px-5  bg-[#e8846b] hover:bg-[#222] text-sm font-sans">
							CHECK IT
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
