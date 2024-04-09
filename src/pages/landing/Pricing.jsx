import React from 'react'
import price from "../../assets/images/price.png"
import { useTheme } from '../../ThemeContext'
import Header from "../../layout/landing/Heading"
import "../../Stylesheet/why.scss"
import { Link } from 'react-router-dom'
import { RxArrowRight } from "react-icons/rx";
import { BsCheckCircleFill } from "react-icons/bs";



const Pricing = () => {
    const { theme } = useTheme()
    return (
        <div className={`price ${theme === 'light' ? 'price' : 'darkprice'}`}>
            <Header head="Pricing" body="Our pricing plans are simple with no hidden fee suitable for every business and individual." img={price} />

            <div className="main_price">
                <div className="prices">
                    <div className="our_head">
                        <h2 data-aos="fade-right" data-aos-duration="1000"  className="h2">
                            Providing users with convenient and <br /> secure payment methods to choose from.
                        </h2>
                        <Link data-aos="fade-left" data-aos-duration="1000" >
                            Learn More
                            <RxArrowRight />
                        </Link>
                    </div>
                    <div className="price_div">
                        <div data-aos="flip-left" data-aos-duration="1000"  className="price_card bg-indigo-50 rounded-2xl">
                            <div className="card_head">
                                <div className="price_date">
                                    <span>Free</span>
                                    <h1>₦0</h1>
                                    <p>Yearly / Monthly</p>
                                </div>
                                <div className="price_list">
                                    <p><BsCheckCircleFill /> Merchant Aggregator </p>
                                    <p><BsCheckCircleFill />  Payment Gateway</p>
                                </div>
                            </div>
                            <Link data-aos="zoom-in" data-aos-duration="1100" >Start for free</Link>

                        </div>
                        <div data-aos="flip-right" data-aos-duration="1000"  className="price_card bg-pink-100 rounded-2xl">
                            <div className="card_head">
                                <div className="price_date">
                                    <span>Free</span>
                                    <h1>₦0</h1>
                                    <p>Yearly / Monthly</p>
                                </div>
                                <div className="price_list">
                                    <p><BsCheckCircleFill /> Domestic Cards 1.58% capped N2000 </p>
                                    <p><BsCheckCircleFill />  Domestic Cards 1.48% capped at N1700</p>
                                    <p><BsCheckCircleFill />  Domestic Cards 1.38% capped @ N1,600</p>
                                    <p><BsCheckCircleFill />  Domestic Cards 1.33% capped @ N1,600</p>
                                    <p><BsCheckCircleFill />  International Cards 3.78%</p>

                                </div>
                            </div>
                            <Link data-aos="zoom-in" data-aos-duration="1100" >Start for free</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing