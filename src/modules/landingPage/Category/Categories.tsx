import Button from "../../../components/Forms/Button";
import leaves from "../../../assets/leaves.png";
import HerbalCard from "../../../components/Cards/HerbalCard";
import tea from "../../../assets/greenTea.png";
import bath from "../../../assets/soapWash.png";
import seeds from "../../../assets/leafs.png";
import herbal from "../../../assets/roots.png";
import Support from "./support";

const Category = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="flex justify-between px-10 w-[100%] h-[578px] items-center p-4 bg-[#228B22] text-[#F8F8FF] ">
          <div className="w-[40%] justify-center gap-8 flex-col flex">
            <h1 className="text-[48px] font-bold ">
              Embrace Nature's <br /> Healing Power
            </h1>
            <p>
              At Green Remedies, we connect you with nature's finest remedies to
              enhance your well-being. Explore our collection and find the
              perfect natural solution for your health needs.
            </p>
            <Button
              title="Explore our herbs"
              className="bg-[#F8F8FF] text-[#228b22] w-[35%] rounded-full p-[1rem]"
              style={{
                borderRadius: "30px",
                padding: "1rem",
              }}
            />
          </div>

          <div className="w-[40%]">
            <img src={leaves} alt="leaves" />
          </div>
        </div>

        <Support />
      </div>

      <div className="w-[100%] p-4 items-center justify-center flex flex-col gap-6 mt-[15rem] mb-[10rem]">
        <div className="w-[675px] flex flex-col items-center mb-10 gap-2">
          <h1 className="text-[#2F4F38] text-[36px] font-bold ">
            Explore Our Herbal Categories
          </h1>
          <p className="text-[#2F4F38] text-[16px] font-normal opacity-[60%]">
            Discover a wide variety of herbal products tailored to support your
            health and wellness needs. Browse through our categories to find the
            perfect remedies for your lifestyle.
          </p>
        </div>
        <div className="flex gap-2">
          <HerbalCard
            title="Herbal Teas"
            desc="Strengthen your body's defences with our range of herbal teas."
            img={tea}
          />
          <div className="flex flex-col gap-4">
            <HerbalCard
              title="Herbal Seeds and Plants"
              desc="Find peace and calm with our stress-relief herbs."
              img={seeds}
              imgClassName="h-[115.42px]"
              className="h-[254.34px]"
              h3pClassName="h-[150px] "
            />
            <HerbalCard
              title="Herbal Remedies"
              desc="Support your digestive system with our natural remedies."
              img={herbal}
              imgClassName="h-[115.42px]"
              className="h-[254.34px]"
              h3pClassName="h-[150px] "
            />
          </div>
          <HerbalCard
            title="Herbal Bath Products"
            desc="Enhance your natural beauty with our herbal skin care products."
            img={bath}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
