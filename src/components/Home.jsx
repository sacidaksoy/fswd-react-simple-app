import React from "react";
import { Carousel } from "react-bootstrap";
import FormPage from "../utils/Form";
import "../style.css";

export default function home() {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.camptocamp.com/expertise/partner-and-products/redhat/image-thumb__438__hero-header-slider-mobile/redhat_header_example.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/SP_RHEL2-2x_0.png?itok=VZxToY8s"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/01/2021_RHEL_9_Featured_Article_image_A.png?itok=ZQyRZ_Ai"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <FormPage />
    </>
  );
}
