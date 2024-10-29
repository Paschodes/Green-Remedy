import video from "../../../assets/video.png";
import SubCard from "./SubCard";
import customer from "../../../assets/customer.svg";
import trad from "../../../assets/trad.svg";
import edu from "../../../assets/edu.svg";
import Button from "../../../components/Forms/Button";
import herbsBig from "../../../assets/herbsBig.png";
import muri from "../../../assets/muri.png";

const Order = () => {
  const SubData = [
    {
      amount: "37k+",
      desc: "Years of Hard Work",
    },
    {
      amount: "500k+",
      desc: "Happy Customer",
    },
    {
      amount: "28",
      desc: "Qualified Team Member",
    },
    {
      amount: "750k+",
      desc: "Monthly Orders",
    },
  ];

  const GreenData = [
    {
      img: customer,
      title: "Customer Satisfaction",
      desc: "Your satisfaction is our priority. We offer a hassle-free return policy and excellent customer support to ensure you have the best experience.",
    },
    {
      img: trad,
      title: "Traditional Herbs",
      desc: "We source our herbs directly from trusted growers who follow traditional methods, ensuring you receive authentic and high-quality products.",
    },
    {
      img: edu,
      title: "Educational Resources",
      desc: "Access detailed information and guidance on the benefits and uses of each herb, helping you make informed decisions about your health.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-24 bg-[#F8F8F8]">
      <div className="flex gap-4 ">
        {SubData.map((card, index) => (
          <SubCard key={index} amount={card.amount} desc={card.desc} />
        ))}
      </div>
      <div className="mt-[8rem]">
        <div className=" flex flex-col items-center mb-10 gap-2">
          <h1 className="text-[#2F4F38] text-[36px] font-bold">
            How To Order Products On Our Website
          </h1>
          <p className="text-[#2F4F38] text-[16px] font-normal opacity-[60%] w-[465px] text-center">
            Watch this quick tutorial to learn how to easily purchase your
            favorite herbal products on our website.
          </p>
        </div>
        <div className="mt-[5rem]">
          <img src={video} alt="" />
        </div>
      </div>

      <div className="mt-[8rem]">
        <div className=" flex flex-col items-center mb-10 gap-2">
          <h1 className="text-[#2F4F38] text-[36px] font-bold">
            Why Choose Green Remedies
          </h1>
          <p className="text-[#2F4F38] text-[16px] font-normal opacity-[60%] w-[664px] text-center">
            Our safe and effective herbal remedies are distinguished by sensory
            evaluation techniques and the Organoleptic Method for quality and
            potency.
          </p>
        </div>
        <div className="flex gap-4">
          {GreenData.map((card, index) => (
            <SubCard
              key={index}
              img={card.img}
              title={card.title}
              desc={card.desc}
              className="items-start w-[405px] h-[433px] p-4 gap-3"
            />
          ))}
        </div>
      </div>

      <div className="flex px-24 w-[100%] h-[547px] bg-[#98FF98] rounded-lg justify-center items-center mt-[8rem]">
        <div className="w-[50%] flex flex-col items-start justify-center gap-6">
          <h1 className="text-[38px] font-semibold text-[#2F4F38]">
            Grab up to 50% OFF on any selected Herbal product
          </h1>
          <Button
            title="Buy Now"
            className="bg-white rounded-full w-[176px] h-[56px] text-[#2F4F38]"
          />
        </div>
        <div className="w-[50%]">
          <img src={herbsBig} alt="" />
        </div>
      </div>

      <div className="flex px-24 w-[100%] h-[547px] bg-white justify-center items-center mt-[8rem] space-x-40">
        <div className="w-[50%]">
          <img src={muri} alt="" />
        </div>
        <div className="w-[50%] flex flex-col items-start justify-center gap-5">
          <h1 className="text-[#2F4F38] text-[36px] font-bold">About Us</h1>
          <p className="text-[#2F4F38] text-[18px] font-semibold opacity-[60%] w-[446px]">
            At Green Remedies, we believe in the healing power of nature. Our
            mission is to bring you the finest traditional herbs, sourced
            directly from trusted growers. With a commitment to quality,
            sustainability, and customer satisfaction, we aim to enhance your
            well-being naturally. Discover our curated selection and embrace a
            healthier lifestyle.
          </p>
          <Button
            title="Learn more &#8594;"
            className="w-[203px] h-[50px] text-[#285434]"
            style={{ borderRadius: "24px", border: "1px solid #285434" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
