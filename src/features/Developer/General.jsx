import subscribe from "../../assets/images/subscribe.png";
import { errors } from "../../assets/data/data";
import AccordionItem from "../../components/Accordion";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
function General({ theme }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  const filteredFaqs = errors.filter((faq) =>
    faq.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className=" flex justify-end  relative md:w-[30rem] w-full h-14 border-2 border-bluePrimary dark:border-white rounded-2xl overflow-hidden ml-auto">
        <BsSearch
          color="#333"
          size={20}
          className="absolute right-4 2xl:top-4 top-3"
        />
        <input
          type="text"
          placeholder="Search errors"
          className="w-full px-4 text-lg h-full"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>
      <div
        className={`developer_error   px-6 pt-10`}
      >
        <div className=" w-full mx-auto">
          <h2 className="h2 text-start">Common Transaction Errors</h2>
          <p className="para  dark:!text-white">
            At CyberPay, we have put structures in place to ensure continuous
            high transaction success rate. We are guaranteeing that your
            customers will have smooth and seamless payment experience without
            transaction failures.
          </p>
          <p className="para dark:!text-white">
            However, regardless of the structures and plans, there are instances
            when a transaction fails due to various errors which cannot be
            avoided. We have listed some of the instances below as a guide to
            why or how a transaction failure occurs.
          </p>
        </div>

        <div className="mt-16">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              open={openIndex === index}
              title={highlightText(faq.title, searchInput)}
              answer={faq.answer}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>

      <div className="bg-bluePrimary flex md:flex-row flex-col justify-between items-center padding mb-5">
        <div className="text-white md:w-[55%] w-full">
          <h3 className="h3">
            How do I unsubscribe from CyberPay as Merchant?
          </h3>
          <p className="mt-5 leading-8">
            You can close your business on CyberPay at any time. To do this, log
            into your CyberPay Dashboard, go to “Settings”. <br />
            [1] then click on the Business tab. <br />
            [2] scroll all the way down, and click on “Close this business”.
            <br />
            [3] Here’re a few things you should know about closing a business on
            CyberPay:
          </p>
          <p className="mt-5 leading-8">
            &mdash; Only a business owner can close a business. <br />
            &mdash; When you close a business, all other users on the business
            will receive an email informing them that the business has been
            closed. <br />
            &mdash; You can only close a business if your business has no
            pending disputes. <br />
            &mdash; If after you close your business, a dispute is logged
            against your business, the business account will be re-opened, and
            you&#39;ll be notified of the dispute.
          </p>
        </div>

        <div className="md:w-[30%] md:block hidden">
          <img src={subscribe} className="w-full scale-75" alt="" />
        </div>
      </div>
    </>
  );
}

export default General;
