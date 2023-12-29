import React from "react";

const AddressForm = () => {
	return (
		<div>
			<div className="flex-col lg:space-y-10">
				<div className="flex-col space-y-5 border-b-2 pb-5">
					<h4 className="uppercase font-semibold"> contact information</h4>
					<div className=" px-5 flex-col space-y-2">
						<label htmlFor="name" className="  ">
							Email
						</label>
						<input type="email" className="w-full h-10 rounded-lg" />
					</div>
				</div>
				<div className=" flex-col space-y-5">
					<h4 className="uppercase font-semibold"> shipping information</h4>
					<div className=" px-5 flex-col space-y-5">
						<div className="grid grid-cols-2 gap-2">
							<div className=" flex-col items-center  ">
								<div className="">
									<label htmlFor="name" className="  ">
										Firstname
									</label>
								</div>

								<input type="text" className="w-full h-10 rounded-lg" />
							</div>
							<div className=" flex-col items-center  ">
								<div className="">
									<label htmlFor="name" className="  ">
										lastname
									</label>
								</div>

								<input type="text" className="w-full h-10 rounded-lg" />
							</div>
						</div>
						<div className="">
							<label htmlFor="name" className="  ">
								Address
							</label>
							<input type="text" className="w-full h-10 rounded-lg" />
						</div>
						<div className="">
							<label htmlFor="name" className="  ">
								Appartment
							</label>
							<input type="text" className="w-full h-10 rounded-lg" />
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div className=" flex-col items-center  ">
								<div className="">
									<label htmlFor="name" className="  ">
										city
									</label>
								</div>

								<input type="text" className="w-full h-10 rounded-lg" />
							</div>
							<div className=" flex-col items-center  ">
								<div className="">
									<label htmlFor="name" className="  ">
										country
									</label>
								</div>

								<select
									name="country"
									id=""
									className="w-full h-10 rounded-lg px-2"
								>
									<option value="">select country</option>
									<option value=""> United States</option>
									<option value=""> India</option>
								</select>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div className=" flex-col items-center  ">
								<div className="">
									<label htmlFor="name" className="  ">
										state
									</label>
								</div>

								<input type="text" className="w-full h-10 rounded-lg" />
							</div>
							<div className=" flex-col items-center  ">
								<div className="">
									<label htmlFor="name" className="  ">
										postal code
									</label>
								</div>

								<input type="text" className="w-full h-10 rounded-lg" />
							</div>
						</div>
						<div className=" flex-col items-center  ">
							<div className="">
								<label htmlFor="name" className="  ">
									phone
								</label>
							</div>

							<input type="text" className="w-full h-10 rounded-lg" />
						</div>
						<div className="w-full text-center">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-lg">
								place order
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressForm;
