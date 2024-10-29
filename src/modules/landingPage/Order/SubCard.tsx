interface SubCardProps {
  amount?: string;
  desc?: string;
  img?: string;
  title?: string;
  className?: string;
}
const SubCard = ({
  amount,
  desc,
  img,
  title,
  className = "",
}: SubCardProps) => {
  return (
    <div
      className={`w-[292px] h-[157px] bg-[#228B22] text-[#F8F8FF] flex flex-col items-center justify-center rounded-lg ${className}`}
    >
      <div className="w-[100%] items-start flex flex-col gap-4">
        <img src={img} alt="" />
        <h2 className="text-[24px] font-semibold">{title}</h2>
      </div>
      <span className="text-[48px] font-medium">{amount}</span>
      <p className="text-[16px] font-light">{desc}</p>
    </div>
  );
};

export default SubCard;
