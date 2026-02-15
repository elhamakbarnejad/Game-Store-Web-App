import { FaWindows } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router";

const GameCard = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/${data.id}`} className="">
      <div className="w-78 h-120 rounded-md bg-sky-50 overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center">
        <div className="w-full h-40">
          <img
            src={data?.background_image?.replace("http://", "https://")}
            alt={data.name}
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start h-80  w-full  ">
          <h1 className="font-bold text-xl text-zinc-100 h-20 shadow w-full px-2 flex items-center justify-center bg-sky-950 text-center">
            {data.name}
          </h1>
          <div className="flex items-center justify-between gap-2 h-7 shadow w-full rounded-sm p-1 ">
            {" "}
            <h1 className="font-bold text-md text-slate-900 ">
              Playtime:
              <span className="text-rose-500 font-bold text-sm">
                {" "}
                {data?.playtime}min{" "}
              </span>
            </h1>
            <h1 className="font-bold text-md text-slate-900">
              Released:
              <span className="text-rose-500 font-bold text-sm">
                {" "}
                {data?.released}
              </span>
            </h1>
          </div>
          <div className="flex  justify-between gap-1 h-32 w-full items-stretch">
            {" "}
            <div className="text-zinc-200  text-md flex-flex-col  items-center justify-center shadow w-full p-1 bg-sky-950">
              <h1 className="font-bold text-rose-600">platform:</h1>
              <div> {data.platforms[0]?.platform.name}</div>
              <div> {data.platforms[1]?.platform.name}</div>
              <div> {data.platforms[2]?.platform.name}</div>
              <div> {data.platforms[3]?.platform.name}</div>
            </div>
            <div className="text-zinc-200  text-md flex-flex-col items-center justify-center shadow w-full p-1  bg-sky-950">
              <h1 className="font-bold text-rose-600">Genres:</h1>
              <div> {data.genres[0]?.name}</div>
              <div> {data.genres[1]?.name}</div>
              <div> {data.genres[2]?.name}</div>
              <div> {data.genres[3]?.name}</div>
            </div>
          </div>
          <h1 className="text-sm text-zinc-200 h-7 shadow w-full p-1 bg-sky-950 item-start flex justify-start mt-1">
            Updated: {data.updated}
          </h1>
          <div className="w-full flex items-center justify-between rounded p-2 h-10">
            <div className="flex items-center justify-center ">
              <FaPlusSquare className="text-slate-900" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaWindows className="text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
