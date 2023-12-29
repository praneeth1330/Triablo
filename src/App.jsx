import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Nav from "./components/Nav";
import Footer from "./pages/Footer";
import Brands from "./pages/Brands";
import About from "./pages/About";

const App = () => {
	return (
		<div className="">
			<BrowserRouter>
				<div>
					<div className="w-full items-center flex justify-center">
						<div className="lg:w-8/12 w-full items-center justify-center">
							<Nav />
						</div>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="Products" element={<Products />} />
					<Route path="cart" element={<Cart />} />
					<Route path="TEAM" element={<Teams />} />
					<Route path="CONTACTS" element={<Contact />} />
					<Route path="BRANDS" element={<Brands />} />
					<Route path="ABOUT" element={<About />} />
					<Route path="singleproduct/:id" element={<SingleProduct />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
