import React, { Component, useEffect} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card/Card";


import "./Slider.css";


function my_Slider(props) {
      const settings = {
        className: "slides center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 1000
      }
    return (
      <div className="Slider" style={{padding:24}}>
          <Slider {... settings} >
              {props.myPack.map(item => <Card itemCard = {item} key={item.id}/>)} 
          </Slider>
      </div>
    )
}




export default my_Slider;