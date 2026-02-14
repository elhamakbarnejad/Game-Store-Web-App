import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoGift } from "react-icons/go";
import { IoLibraryOutline } from "react-icons/io5";
import { GiAbstract088 } from "react-icons/gi";
import { Link } from "react-router";

const Topbar = ({ setFilter }) => {
  return (
    <div className="w-full h-15 shadow  bg-gray-950 mx-auto font-bold text-zinc-400 border border-sky-500 ">
      <div className="w-[90%]  z-999 mx-auto h-full flex items-center justify-between">
        <div className="flex items-center justify-between gap-10">
          <div className="text-5xl folnt-bold text-sky-600 cursor-pointer">
            {" "}
            <Link to="/">
              {" "}
              <GiAbstract088 />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3  *:hover:text-zinc-100 *:transition *:duration-150 *:cursor-pointer">
            <Link to="/">Home</Link>
            <select
              className="p-2 border rounded text-gray-100 w-20 text-sm"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option className="bg-gray-800 text-white" value="ALL">
                ALL
              </option>
              <option className="bg-gray-800 text-white" value="Racing">
                Racing
              </option>
              <option className="bg-gray-800 text-white" value="Survival">
                Survival
              </option>
              <option className="bg-gray-800 text-white" value="Adventure">
                Adventure
              </option>
              <option className="bg-gray-800 text-white" value="Party">
                Party
              </option>
              <option className="bg-gray-800 text-white" value="Puzzle">
                Puzzle
              </option>
              <option className="bg-gray-800 text-white" value="Action">
                Action
              </option>
              <option className="bg-gray-800 text-white" value="Platformer">
                Platformer
              </option>
              <option className="bg-gray-800 text-white" value="Arcade">
                Arcade
              </option>
              <option className="bg-gray-800 text-white" value="Sports">
                Sports
              </option>
              <option className="bg-gray-800 text-white" value="Shoot 'em up">
                Shoot 'em up
              </option>
              <option
                className="bg-gray-800 text-white"
                value="Tactical role-playing"
              >
                Tactical role-playing
              </option>
              <option
                className="bg-gray-800 text-white"
                value="Turn-based strategy"
              >
                Turn-based strategy
              </option>
            </select>
            <p className="text-sm w-full">Spacil Offers</p>
            <p>API</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-10">
          <div className="hidden md:flex items-center justify-center gap-3 *:hover:text-zinc-100 *:transition *:duration-150 *:cursor-pointer">
            <HiMiniMagnifyingGlass className="text-xl" />
            <GoGift className="text-xl" />
            <IoLibraryOutline className="text-xl" />
            <button>Login</button>
          </div>
          <button className="hidden sm:block  border-2 border-sky-600 p-3 rounded-md text-sky-600 hover:text-zinc-400 hover:border-zinc-400 transition duration-150 cursor-pointer">
            Join Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
