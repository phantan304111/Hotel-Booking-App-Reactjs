//import thu vien
import React from "react";
import "./Review.css";
import ReviewCity from "./ReviewCity";
import ReviewHotel from "./ReviewHotel";
import ReviewType from "./ReviewType";
//Tao component review voi 3 phan - review city, review type va review hotel
const Review = (props) => {
  return (
    <div className="Review">
{/* Div review city, tao layout flex voi moi phan tu la mot phan tu city trong data */}
      <div className="Review_content">
        {props.citydatas.map((expense) => (
          // <NavBarItem/>

          <ReviewCity
            key={expense.name}
            name={expense.name}
            subText={expense.subText}
            image={expense.image}
          />
        ))}
      </div>
      <h3 className="Review_content">Browse by property type </h3>
      {/* Div review type, tao layout flex voi moi phan tu la mot phan tu type trong data */}
      <div className="Review_content">
        {props.typedata.map((expense) => (
          // <NavBarItem/>
          <ReviewType
            key={expense.name}
            name={expense.name}
            count={expense.count}
            image={expense.image}
          />
        ))}
      </div>

      <h3 className="Review_content">Homes Guest Loves</h3>
      {/* Div review hotel, tao layout flex voi moi phan tu la mot phan tu hotel trong data */}
      <div className="Review_content">
        {props.hoteldata.map((expense) => (
          <ReviewHotel
            key={expense.name}
            name={expense.name}
            city={expense.city}
            price={expense.price}
            rate={expense.rate}
            type={expense.type}
            image_url={expense.image_url}
          />
        ))}
      </div>
    </div>
  );
};
export default Review;
