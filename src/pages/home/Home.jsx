import React from "react";
import NavBar from "../../components/HomePage/NavBar";
import Header from "../../components/Header/Header";
import Review from "../../components/Review/Review";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
//tao dummy data cua trang REVIEW, gom thong tin tu cac json navbar, city,hotel,type va footer truyen tu props
const DUMMY_EXPENSES = [
	{
		"type": "Stays",
		"icon": "fa-bed",
		"active": true
	},
	{
		"type": "Flights",
		"icon": "fa-plane",
		"active": false
	},
	{
		"type": "Car rentals",
		"icon": "fa-car",
		"active": false
	},
	{
		"type": "Attractions",
		"icon": "fa-bed",
		"active": false
	},
	{
		"type": "Airport taxis",
		"icon": "fa-taxi",
		"active": false
	}
];

const City_Data =[
	{
		"name": "Dublin",
		"subText": "123 properties",
		"image": "./images/city_1.webp"
	},
	{
		"name": "Reno",
		"subText": "533 properties",
		"image": "./images/city_2.webp"
	},
	{
		"name": "Austin",
		"subText": "532 properties",
		"image": "./images/city_3.webp"
	}
]
const Type_Data =[
	{
		"name": "Hotels",
		"count": 233,
		"image": "./images/type_1.webp"
	},
	{
		"name": "Apartments",
		"count": 2331,
		"image": "./images/type_2.jpg"
	},
	{
		"name": "Resorts",
		"count": 2331,
		"image": "./images/type_3.jpg"
	},
	{
		"name": "Villas",
		"count": 2331,
		"image": "./images/type_4.jpg"
	},
	{
		"name": "Cabins",
		"count": 2331,
		"image": "./images/type_5.jpg"
	}
]
const Hotel_Data =[
	{
		"name": "Aparthotel Stare Miasto",
		"city": "Madrid",
		"price": 120,
		"rate": 8.9,
		"type": "Excellent",
		"image_url": "./images/hotel_1.webp"
	},
	{
		"name": "Comfort Suites Airport",
		"city": "Austin",
		"price": 140,
		"rate": 9.3,
		"type": "Exceptional",
		"image_url": "./images/hotel_2.jpg"
	},
	{
		"name": "Four Seasons Hotel",
		"city": "Lisbon",
		"price": 99,
		"rate": 8.8,
		"type": "Excellent",
		"image_url": "./images/hotel_3.jpg"
	},
	{
		"name": "Hilton Garden Inn",
		"city": "Berlin",
		"price": 105,
		"rate": 8.9,
		"type": "Excellent",
		"image_url": "./images/hotel_4.jpg"
	}
]



const Home = (props) => {
	
	return (
		<div>
				{/*Tao trang homepage tu cac components!gom 1 component Navbar,Header,Review,Form va footer
				 truyen dummy data trang review sang cac component con  */}
			<NavBar items ={DUMMY_EXPENSES}/>
			<Header/>		
			<Review citydatas = {City_Data} typedata ={Type_Data}hoteldata={Hotel_Data}/>
			<Form/>	
				{/*nhan dummy data footer tu App  */}
	<Footer  footerdata={props.footerdata}/>
		</div>
	);
};

export default Home;
