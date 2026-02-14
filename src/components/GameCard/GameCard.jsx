import { FaWindows } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router";

const GameCard = ({ data }) => {
  const { id } = data;
  return (
    <Link to={`/${id}`}>
      {" "}
      <div className="w-full max-w-[320px] h-[380px] rounded-md bg-sky-50 overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
        <img
          src="./images/1.jpeg"
          alt="Pic"
          className="w-full h-44 object-cover"
        />
        <div className="p-2 flex flex-col justify-between h-[calc(100%-11rem)]">
          <h1 className="font-bold text-lg text-slate-900">{data.name}</h1>
          <h2 className="text-slate-700 text-sm">{data.publishers}</h2>
          <p className="text-green-700 font-bold text-md">Free</p>
          <div className="w-full flex items-center justify-between p-1 mt-2 rounded">
            <div className="flex items-center justify-center ">
              <FaPlusSquare className="text-slate-900" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="font-bold text-red-700">{data?.genre[0]}</p>
              <FaWindows className="text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
