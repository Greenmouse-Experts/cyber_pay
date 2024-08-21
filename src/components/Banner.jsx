import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../services/api";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowForward,
} from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Banner = () => {
  const { isLoading, data: banners = [] } = useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = banners.length;

  useEffect(() => {
    if (slideLength > 0) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideLength);
      }, 4000);
      return () => clearInterval(slideInterval);
    }
  }, [slideLength]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideLength);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideLength - 1 : prevSlide - 1
    );
  };

  if (isLoading || slideLength === 0) {
    return <div><Skeleton height={'30rem'} /></div>;
  }

  return (
    <div className={`h-[60%] relative`}>
      <div className="w-full flex justify-between items-center absolute top-[40%] z-50">
        <div
          className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer ml-[2%]"
          onClick={handlePrevSlide}
        >
          <IoIosArrowBack color="white" size={40} />
        </div>

        <div
          className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer  mr-[2%]"
          onClick={handleNextSlide}
        >
          <IoIosArrowForward color="white" size={40} />
        </div>
      </div>

      {banners.map((banner, index) => (
        <div
          key={index}
          className={`${
            index === currentSlide ? "flex" : "hidden"
          }  w-full bg-center bg-cover  landing`}
          style={{ backgroundImage: `url('${banner.image}')` }}
        >
           <div className="absolute inset-0 bg-black opacity-[0.6]"></div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="landing_text xl:h-[30rem]"
          >
            <h2 className={`h2 !text-white`}>{banner.title}</h2>
            <p className="text-white">{banner.description}</p>

            <div className="landing_link flex items-center gap-4">
              <div className="flex items-center gap-2">
                <NavLink
                  to={"https://merchant.cyberpay.ng/signup"}
                  className="bg-[#DD0A35] hover:bg-[#dd0a37] hover:-translate-y-[2px] transition-all text-lg px-8 py-5 sm:rounded-[4rem] !rounded-[15rem] text-white flex items-center gap-2 text-nowrap"
                >
                  Get Started
                  <span>
                    <IoMdArrowForward />
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Banner;
