import React, { useContext } from "react";
import { NavContext } from "../context/ContextProvider";
import Nav from "../components/Nav";
import AddressForm from "../components/AddressForm";
import { MdDelete } from "react-icons/md";
import Footer from "./Footer";

const Cart = () => {
	const { state, handleDelete } = useContext(NavContext);
	console.log(state.products.length);
	console.log("total is", state.total);

	return (
		<>
			<div className="flex items-center justify-center mb-10">
				<div className="lg:w-8/12 w-full flex-col justify-center items-center capitalize">
					<h4 className="uppercase  text-2xl text-center py-5">Your cart</h4>
					<div className=" bg-[#eeeced] rounded-lg">
						<div className="grid grid-cols-1 lg:grid-cols-2 lg:p-10 p-5  flex-col-reverse space-y-reverse">
							<div className="my-10 lg:mt-0 ">
								<div className="uppercase font-semibold pb-5">
									<h4>order summery</h4>
								</div>
								<div className=" bg-white rounded-lg   ">
									<div className="flex-col items-center justify-between  text-sm   ">
										{state.products?.map((item) => (
											<div className="border p-8 " key={item.products.id}>
												<div className="relative flex flex-auto  justify-start space-x-5">
													<div className=" w-24 rounded-lg ">
														<img
															src={item.products.image}
															alt=""
															className="p-2 rounded-lg"
														/>
													</div>
													<div className="flex-col space-y-3 ">
														<h4>{item.products.title?.slice(0, 20)}</h4>
														<select>
															<option value="">M</option>
															<option value="">L</option>
															<option value="">S</option>
														</select>
														<p className="font-bold">$ {item.products.price}</p>
													</div>
													<div className=" absolute top-0 right-0 text-2xl">
														<MdDelete
															onClick={() => handleDelete(item.products)}
														/>
													</div>
												</div>
											</div>
										))}
									</div>
									<p className=" text-end  p-5">Total Price: $ {state.total}</p>
								</div>
							</div>
							<AddressForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
