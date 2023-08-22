import {
  BrowserRouter,
  Routes,
  Route,
	//import thu vien
} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
//tao dummy data theo file json
const Footer_Data=[
	{
		"col_number": 1,
		"col_values": [
			"Countries",
			"Regions",
			"Cities",
			"Districts",
			"Airports",
			"Hotels"
		]
	},
	{
		"col_number": 2,
		"col_values": [
			"Homes",
			"Apartments",
			"Resorts",
			"Villas",
			"Hostels",
			"Guest houses"
		]
	},
	{
		"col_number": 3,
		"col_values": [
			"Unique places to stay",
			"Reviews",
			"Unpacked: Travel articles",
			"Travel communities",
			"Seasonal and holiday deals"
		]
	},
	{
		"col_number": 4,
		"col_values": [
			"Car rental",
			"Flight Finder",
			"Restaurant reservations",
			"Travel Agents"
		]
	},
	{
		"col_number": 5,
		"col_values": [
			"Curtomer Service",
			"Partner Help",
			"Careers",
			"Sustainability",
			"Press center",
			"Safety Resource Center",
			"Investor relations",
			"Terms & conditions"
		]
	}
]

//truyen dummy data vao cac trang chinh
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home footerdata={Footer_Data}/>} />
        <Route path="/search" element={<Search footerdata={Footer_Data}/>}/>
        <Route path="/detail" element={<Detail footerdata={Footer_Data}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
//export app
export default App;
