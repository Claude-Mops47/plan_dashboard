import React from "react";
import "./listing.css";
// Imported Icons ====>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// Imported Images ====>
import img_1 from "@/assets/images/image_1.jpg";
import img_2 from "@/assets/images/image_2.jpg";
import img_3 from "@/assets/images/image_3.jpg";
import img_4 from "@/assets/images/image_4.jpg";
import user_1 from "@/assets/images/image_5.jpg";
import user_2 from "@/assets/images/image_6.jpg";
import user_3 from "@/assets/images/image_7.jpg";
import user_4 from "@/assets/images/image_8.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings </h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img_1} alt="Image_Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img_2} alt="Image_Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img_3} alt="Image_Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img_4} alt="Image_Name" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user_1} alt="Image_person" />
              <img src={user_2} alt="Image_person" />
              <img src={user_3} alt="Image_person" />
              <img src={user_4} alt="Image_person" />
            </div>
            <div className="cardText">
              <span>
                14.565 Mopeno sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user_1} alt="Image_person" />
              <img src={user_3} alt="Image_person" />
              <img src={user_4} alt="Image_person" />
              <img src={user_2} alt="Image_person" />
            </div>
            <div className="cardText">
              <span>
                99,565 Mopeno sold <br />
                <small>
                  28 Sellers <span className="date">31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
