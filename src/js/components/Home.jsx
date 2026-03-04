import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";




const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
				<Card />
				<Card />
				<Card />
				<Card />
				
				</div>
			
		</div>
	);
};

export default Home;
