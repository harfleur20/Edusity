import React, { useEffect, useRef, useState } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testimonial.css";

const Testimonial = () => {
  
  const sliderRef = useRef(null);
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    // 4 slides => 0, -25, -50, -75
    setTx((prev) => (prev > -75 ? prev - 25 : prev));
  };

  const slideBackward = () => {
    setTx((prev) => (prev < 0 ? prev + 25 : prev));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${tx}%)`;
    }
  }, [tx]);

  return (
    <div className="testimonial">
      <img
        src={next_icon}
        alt="Next Icon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="Back Icon"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={sliderRef}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity is a great university with excellent faculty and
                facilities. I highly recommend it to anyone looking for a
                quality education.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>Emily Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I'am a student at Edusity and I'm very happy with the quality of
                education and the support I've received.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Francis Kenne</h3>
                  <span>Edusity, FRA</span>
                </div>
              </div>
              <p>
                Edusity has provided me with an excellent education and a
                supportive environment. I'm grateful for the opportunities I've
                had here.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Michelle Brown</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I've been a student at Edusity for two years and I've had an
                amazing experience. The professors are knowledgeable and
                supportive, and the campus is beautiful.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
