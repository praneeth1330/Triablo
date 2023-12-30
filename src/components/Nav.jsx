import React, { useContext, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { NavContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { navLinks } from "../Data/NavLinks";
import { IoCartOutline } from "react-icons/io5";
import image from "../assets/logo-2.png";

const Nav = () => {
	const { state, dispatch } = useContext(NavContext);

	const handleToggle = () => {
		dispatch({
			type: "Toggle_nav",
		});
	};
	const handleSearch = () => {
		dispatch({
			type: "search",
		});
	};

	return (
		<>
			<div className="relative">
				<div className="lg:pt-5">
					<div className=" flex justify-between items-center lg:px-10  ">
						<NavLink to="/">
							<div className="flex items-center justify-center text-[#e]">
								<div className=" w-14 h-14 z-50">
									<img src={image} alt="logo image" />
								</div>
								<h1 className="text-2xl text-black">Triablo</h1>
							</div>
						</NavLink>
						<div className="flex items-center  space-x-3 text-lg">
							<div className="flex-col items-center text-3xl cursor-pointer">
								<IoSearchSharp onClick={handleSearch} />
							</div>
							<div className=" relative overflow-hidden">
								<NavLink to="/cart" className="text-4xl">
									<IoCartOutline className="" />
								</NavLink>
								<div className="text-sm text-white flex items-center justify-center bg-red-700 absolute top-0 right-0  rounded-full w-4 h-4 text-center font-bold">
									<span>{state.products.length}</span>
								</div>
							</div>
							<div className="lg:hidden flex text-3xl cursor-pointer ">
								{state?.nav ? (
									<AiOutlineClose onClick={handleToggle} />
								) : (
									<AiOutlineMenu onClick={handleToggle} />
								)}
							</div>

							<div className="lg:flex space-x-4 hidden  ">
								{navLinks?.map((name, index) => (
									<div className="" key={index}>
										<div className=" text-sm">
											<NavLink to={name.path}>{name.title}</NavLink>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="flex items-center justify-center relative">
						{state.search && (
							<div className="  ">
								<input
									type="text"
									placeholder="Search..."
									className="border rounded-lg  text-lg  bg-transparent border-black focus:outline-none px-2  h-10  "
								/>
							</div>
						)}
					</div>
					<div className="">
						{state.nav && (
							<div className="lg:hidden relative ">
								<div className="relative">
									<div className="flex items-center justify-center text-center bg-white">
										<div
											className={`${
												state.nav
													? "border w-full bg-white text-black h-80 top-12 fixed  py-5 flex-col items-center justify-center space-y-3 text-xl z-10  transition-all  duration-1000"
													: " -top-full -translate-y-0 duration-1000 transition-all"
											}`}
										>
											{navLinks?.map((name, index) => (
												<div className="" key={index}>
													<div className=" ">
														<NavLink to={name.path} onClick={handleToggle}>
															{name.title}
														</NavLink>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
