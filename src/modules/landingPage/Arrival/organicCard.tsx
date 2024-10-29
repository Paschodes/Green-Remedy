import Button from "../../../components/Forms/Button";
import stars from "../../../assets/Star.svg";

interface OrganicCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  rating: string;
}

const OrganicCard = ({
  title,
  description,
  price,
  imageSrc,
  rating,
}: OrganicCardProps) => {
  return (
    <div className="w-[300px] h-[580px] rounded-lg shadow-lg bg-white">
      <div
        className="w-[100%] h-[250px] bg-no-repeat bg-cover bg-center rounded-lg relative"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <p className="text-green-600 font-bold text-sm mb-2 absolute top-3 bg-white w-[101px] flex justify-center">
          New arrival
        </p>
        {/* <img
        src={imageSrc}
        alt={title}
        className="w-full h-[200px] rounded-md object-cover"
      /> */}
      </div>
      <div className="mt-4 p-4">
        <h2 className="text-[28px] font-semibold text-[#285434]">{title}</h2>
        <p className="text-black font-normal text-[18px] mt-2">{description}</p>
        <span className="text-[#285434] font-bold mt-2 block">{price}</span>
        <div className="flex items-center mt-2">
          <img src={stars} alt="Rating" className="w-[80px]" />
          <span className="text-[#2F4F38] font-semibold text-[18px] ml-2">
            ({rating})
          </span>
        </div>
        <Button
          title="Add to cart"
          className="bg-[#228B22] text-white mt-4 w-full py-2 rounded"
        />
      </div>
    </div>
  );
};

export default OrganicCard;
