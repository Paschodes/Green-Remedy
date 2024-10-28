import { HerbalCardProps } from "../../interface";

const HerbalCard = ({
  title,
  desc,
  img,
  className = "",
  imgClassName = "",
  h3pClassName = "",
}: //   style,
HerbalCardProps) => {
  return (
    <div
      className={`w-[400px]  rounded-lg border-solid border-4 border-[#98FF98] shadow-lg ${className}`}
    >
      <img src={img} className={`w-[100%] ${imgClassName}`} />
      <div
        className={`w-[100%] h-[224px] flex flex-col justify-center p-4 text-[#2F4F38] ${h3pClassName}`}
      >
        <h3 className="text-[28.6px] font-bold">{title}</h3>
        <p className="text-[18.39px] font-normal opacity-[60%]">{desc}</p>
      </div>
    </div>
  );
};

export default HerbalCard;
