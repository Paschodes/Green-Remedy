import ship from "../../../assets/ship.svg";
import supportCus from "../../../assets/support.svg";
import payment from "../../../assets/payment.svg";
import money from "../../../assets/moneyback.svg";

const Support = () => {
  return (
    <div className="flex w-[80%] h-[209.27px] bg-[#FFFFFF] text-[16.97px] text-[#2F4F38] font-semibold rounded-lg  items-center absolute top-[32rem] right-36 shadow-2xl">
      <div className="w-[25%] flex flex-col items-center">
        <img src={ship} alt="" />
        <h4 className="">Free Shipping</h4>
        <p className="text-[13.2px] font-normal">Free shipping with discount</p>
      </div>
      <div className="w-[25%] flex flex-col h-full justify-center items-center border-light border-x-4">
        <img src={supportCus} alt="" />
        <h4>Great Support 24/7</h4>
        <p className="text-[13.2px] font-normal ">Instant access to Contact</p>
      </div>
      <div className="w-[25%] flex flex-col items-center h-full justify-center border-r-4">
        <img src={payment} alt="" />
        <h4>100% Secure Payment</h4>
        <p className="text-[13.2px] font-normal">
          We ensure your money is save
        </p>
      </div>
      <div className="w-[25%] flex flex-col items-center">
        <img src={money} alt="" />
        <h4>Money-Back Guarantee</h4>
        <p className="text-[13.2px] font-normal">
          30 days money-back guarantee
        </p>
      </div>
    </div>
  );
};

export default Support;
