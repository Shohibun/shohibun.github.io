import "./App.css";
import "./stylesheets/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import React from "react";
import $ from "jquery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/LandingPages";

class App extends React.Component {
  componentDidMount() {
    // Scrolling
    $("#ourservice").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#service").offset().top - 70,
        },
        1000
      );
    });

    $("#whyus").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#us").offset().top - 70,
        },
        1000
      );
    });

    $("#testimonial").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#test").offset().top - 70,
        },
        1000
      );
    });

    $("#faq").click(function () {
      $("html, body").animate(
        {
          scrollTop: $("#fq").offset().top - 70,
        },
        1000
      );
    });

    // Background tranparan
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".fixed-top").css("background", "transparent");
      } else {
        $(".fixed-top").css("background", "#F1F3FF");
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
