import React, { useContext, createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialValue = {
	nav: false,
	search: false,
	data: [],
	products: [],
	total: 0,
	singleproduct: {},
};

export const NavContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "Toggle_nav":
			return {
				...state,
				nav: !state.nav,
				search: false,
			};
		case "search":
			return {
				...state,
				search: !state.search,
				nav: false,
			};
		case "PRODUCT_DATA":
			return {
				...state,
				data: action.payload,
			};
		case "SINGLE_PRODUCT_DATA":
			return {
				...state,
				singleproduct: action.payload,
			};
		case "ADD_TO_CART":
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case "REMOVE_FROM_CART":
			console.log("REMOVE_FROM_CART", action.payload);

			return {
				...state,
				products: action.payload.products,
			};
		case "UPDATE_PRICE":
			console.log("UPDATE_PRICE", action.payload);

			return {
				...state,
				total: action.payload.total,
			};
		default:
			return state;
	}
};

const ContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialValue);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get("https://fakestoreapi.com/products");
				dispatch({ type: "PRODUCT_DATA", payload: res.data });
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const singleProduct = async (url) => {
		try {
			const res = await axios.get(url);
			dispatch({ type: "SINGLE_PRODUCT_DATA", payload: res.data });
		} catch (error) {
			console.log("error");
		}
	};
	const handleCartAdd = (product) => {
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				products: product,
			},
		});
		updatePrice(state.products);
	};
	const handleDelete = (product) => {
		const updatedCart = state.products.filter(
			(currentProduct) => currentProduct.products.title !== product.title
		);

		dispatch({
			type: "REMOVE_FROM_CART",
			payload: {
				products: updatedCart,
			},
		});
		updatePrice(updatedCart);
	};

	const updatePrice = (updatedCart) => {
		let totalPrice = 0;
		updatedCart.forEach(
			(item) => (totalPrice = totalPrice + item.products.price)
		);

		dispatch({
			type: "UPDATE_PRICE",
			payload: {
				total: totalPrice,
			},
		});
	};

	return (
		<div>
			<NavContext.Provider
				value={{ state, dispatch, handleCartAdd, handleDelete, singleProduct }}
			>
				{props.children}
			</NavContext.Provider>
		</div>
	);
};

export default ContextProvider;
