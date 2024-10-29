import Button from "../../../components/Forms/Button";
import herb from "../../../assets/herbs.png";
import capsule from "../../../assets/capsules.png";
import OrganicCard from "./organicCard";

const Arrivals = () => {
  const cardsData = [
    {
      title: "Organic Turmeric Plant",
      description: "Boost your health with our organic turmeric plant.",
      price: "N5,000",
      imageSrc: capsule,
      rating: "4.7",
    },
    {
      title: "Organic Turmeric Herbs",
      description: "Boost your health with our organic turmeric herbs.",
      price: "N5,000",
      imageSrc: herb,
      rating: "4.7",
    },
    {
      title: "Organic Turmeric Capsules",
      description: "Boost your health with our organic turmeric capsules.",
      price: "N5,000",
      imageSrc: capsule,
      rating: "4.7",
    },
  ];
  return (
    <div className="bg-[#98FF98] w-[100%] p-32 items-center flex flex-col">
      <div className="w-[663px] items-center flex flex-col gap-4">
        <h1 className="text-[#2F4F38] text-[36px] font-semibold">
          Our latest arrivals
        </h1>
        <p className="text-[2F4F4F] text-[20px] font-normal">
          Explore our newest herbal products, carefully selected for quality and
          effectiveness. Find fresh solutions for your health and wellness
          needs.
        </p>
        <Button title="Shop All" className="bg-[#228B22] text-white mt-8" />
      </div>

      <div className="flex gap-6 justify-center mt-[4rem]">
        {cardsData.map((card, index) => (
          <OrganicCard
            key={index}
            title={card.title}
            description={card.description}
            price={card.price}
            imageSrc={card.imageSrc}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Arrivals;
