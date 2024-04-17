import React from 'react'
import "../../Stylesheet/pension.scss"
import { useTheme } from '../../ThemeContext'
import Heading from '../../layout/landing/Heading';
import solution from "../../assets/images/solution.png"
import pen from "../../assets/images/pension.png"


const MicroPension = () => {
  const { theme } = useTheme();

  return (
    <div className={`pension ${theme === 'light' ? "" : "darkabout"}`}>
      <Heading img={solution} head="Micropension" body="A successful financial plan creates the necessary foundation for future wealth creation and sustenance." />
      <div className="empower padding">
        <h2 data-aos="fade-right" data-aos-duration="1000"  className="h2">Empowering Nigeria's Informal Sector: Introducing the Micro Pension Scheme (MPS)</h2>
        <p data-aos="zoom-in-left" data-aos-duration="1000" >
          The Micro Pension Scheme (MPS) is designed to help traders, artisans, professionals and other self employed people in the informal sector which constitutes the larger percentage of Nigeria’s working population save easily by providing a regular flow of income in retirement.
        </p>
      </div>

      <div className="remit padding bg-sky-500">
        <div className="remit_text">
          <h3 className='h3'>Remit Your Pension</h3>
          <p className='para'>The process of remitting your pension has become easier as a part of your monthly income can be credited into your pension savings account using the following channels:</p>
        </div>
        <div className="remit_div text-black">
          <p>USSD Channel - <br /> Dial Code *55701#</p>
          <p>Web-Micropen.ng</p>
          <p> Micropen Mobile App</p>
        </div>
      </div>

      <div className="topay padding">
        <div data-aos="flip-left" data-aos-duration="1000"   className='bg-sky-950 rounded-[21px]'>
          <h3 className="h3">To pay for pension, using USSD channel, follow the processes below:</h3>
          <div className="topay_list">
            <p>a. Dial *55701# (if you are using the USSD channel).</p>
            <p>b. Select your Pension Fund Administrator (PFA).</p>
            <p>c. Input your PEN.</p>
            <p>d. Input amount you want to pay.</p>
            <p>e. Select your preferred payment method.</p>
            <p>f. Authorise your payment.</p>
            <p>g. Notification is received from the PFA for successful transaction.</p>
          </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="1000" className='bg-black rounded-[21px] to_pay'>
          <h3 className="h3">To pay for pension, using Web and Mobile App channels, follow the processes below:</h3>
          <div className='topay_list'>
            <p>a. Type www.micropen.ng on the web page.</p>
            <p>b. Sign in with your registered details – user name and password.</p>
            <p>c. Select your Pension Fund Administrator (PFA).</p>
            <p>d. Input your PEN.</p>
            <p>e. Input amount you want to pay.</p>
            <p>f. Select your preferred payment method.</p>
            <p>g. Authorise your payment.</p>
          </div>

        </div>
      </div>

      <div className="fund padding">
        <div data-aos="fade-left" data-aos-duration="1000"  className="fund_text">
          <div>
            <h3 className="h3">
              Pension Fund Administrators (PFAs)
            </h3>
            <p className="para">A Pension Fund Administration is an entity licensed by the National Pension Commission and charged with the responsibility of managing and investing the pension funds.</p>
          </div>
          <div><h3 className="h3">Pension Fund Custodians (PFCs)</h3><p className="para">Pension Fund Custodians are companies licensed by the National Pension Commission to keep pension money and assets for the employee on behalf of the PFA.</p></div>
          <div><h3 className="h3">Personal Enrollment Number (PEN)</h3><p className="para">This is a pre-issued identification number by the PFA. The number is unique to an individual contributor and only one PFA.</p></div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000"  className="fund_img">
          <img src={pen} alt="" />
        </div>
      </div>

    </div>
  )
}

export default MicroPension