import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Products from './components/Products';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
