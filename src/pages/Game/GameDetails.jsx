import { useOutletContext, useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import { TiPlus } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

const GameDetails = () => {
  const { games } = useOutletContext();
  const { gameID } = useParams();

  const mainGame = games.slice(0, 99).find((game) => {
    return game.id === Number(gameID);
  });

  if (!mainGame) {
    return <Loader />;
  }
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url("./images//3.webp")` }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 text-white p-6 w-full  flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-stretch justify-center w-full max-w-7xl mx-auto min-h-screen gap-8 px-4">
          <div className="w-full p-5 flex flex-col items-start justify-between gap-10">
            <h1 className="text-4xl font-bold ">
              <span className="text-amber-400">{mainGame.name}:</span>
              <br />
              The Sands of Time Remake
            </h1>
            <div className="grid grid-cols-1  xl:grid-cols-3 gap-1 w-full  p-0 items-start  justify-between *:items-start *:xl:items-center">
              <div className="flex flex-col  justify-center gap-2 ">
                <p className="font-bold text-lg">Recommended👍</p>
                <p className="text-gray-500 text-sm">101 ratings</p>
              </div>
              <div className="flex flex-col  justify-center gap-2">
                <p className="font-bold text-lg">#1899</p>
                <p className="text-gray-500 text-sm">Action</p>
              </div>
              <div className="flex flex-col  justify-center gap-2">
                <p className="font-bold text-lg">#1</p>
                <p className="text-gray-500 text-sm">Top 2026</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-between w-full  p-0">
              {" "}
              <h1 className="text-4xl font-bold">releaseDates </h1>
              <div className="grid grid-cols1  xl:grid-cols-2 gap-6 w-full  p-0">
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="font-bold text-xl"> Australia</p>
                  <p className="text-amber-400 text-md">
                    {mainGame.releaseDates.Australia}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="font-bold text-xl"> Europe</p>
                  <p className="text-amber-400 text-md">
                    {mainGame.releaseDates.Europe}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="font-bold text-xl"> Japan</p>
                  <p className="text-amber-400 text-md">
                    {mainGame.releaseDates.Japan}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="font-bold text-xl"> NorthAmerica</p>
                  <p className="text-amber-400 text-md">
                    {mainGame.releaseDates.NorthAmerica}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center *:flex *:items-center *:justify-center w-full gap-5 *:gap-2  *:font-bold *:transition-all *:duration-150 flex-col sm:flex-row">
              <button className="h-10  rounded-lg bg-white hover:opacity-60 text-black p-2">
                <TiPlus />
                Write a review 101
              </button>
              <button className="h-10  rounded-lg bg-white hover:opacity-60 text-black p-2">
                <FaRegComment /> Write a comment
              </button>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl font-bold">About:</h2>
              <p className="text-justify">
                The Prince has returned! Experience the classic tale that
                redefined action-adventure gaming in this full-scale remake for
                a new generation. You are the Prince of Persia. Embark on a
                journey to save your kingdom from the treacherous Vizier. Master
                the Sands of Time and use your dagger to reverse, accelerate,
                freeze, and slow time itself. Fight cursed enemies and solve
                puzzles along the way. Experience incredible graphical
                enhancements and re-designed gameplay mechanics. Unlock Prince
                of Persia, the original game from 1989, along your journey.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 lg:*:text-lg *:text-xl">
              <p className=" font-bold">
                System requirements for PlayStation 5
              </p>
              <p className=" font-bold">System requirements for PC</p>
              <p className=" font-bold">
                System requirements for PlayStation 4{" "}
              </p>
              <p className="text-sm text-gray-100">Read more... </p>
            </div>
          </div>

          <div className="w-full p-5 flex flex-col items-center justify-between gap-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 *:rounded-lg">
              <img
                src="./images//d1.jpg"
                alt="Pic"
                className="w-full h-40 object-cover"
              />
              <img
                src="./images//d2.jpg"
                alt="Pic"
                className="w-full h-40 object-cover"
              />
              <img
                src="./images//d3.jpg"
                alt="Pic"
                className="w-full h-40 object-cover"
              />
              <img
                src="./images//d4.jpg"
                alt="Pic"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="flex items-center justify-center *:flex *:items-center *:justify-center w-full gap-5 *:gap-2  *:font-bold *:transition-all *:duration-150 p-2 ">
              <button className="h-10 w-[80%] rounded-lg bg-white hover:opacity-60 text-black p-4">
                <BiEdit />
                Edit the game info{" "}
              </button>
            </div>
            <p className="text-gray-500 text-sm">Last Modified: Aug 17, 2025</p>
            <h2 className="text-2xl font-bold">
              Collections with Oddworld: Munch's Oddysee (1997)
            </h2>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <h2 className="text-2xl font-bold text-gray-400 mb-5">
                Top contributors
              </h2>

              <div className="flex flex-col items-center justify-between  w-full px-8 gap-5">
                {" "}
                <div className="flex items-center justify-between gap-2 w-full">
                  {" "}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img
                        src="./images//pic-manager.jpg"
                        alt="Pic"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-200 text-sm ">Мамонтофф</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 ">
                    <button className="h-10 w-15 sm:w-25 text-sm sm:text-md rounded-lg bg-white hover:opacity-60 text-black p-4 flex items-center justify-center gap-2 ">
                      <TiPlus className="hidden sm:block" />
                      Follow
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 w-full">
                  {" "}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img
                        src="./images//pic-manager.jpg"
                        alt="Pic"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-200 text-sm ">ThatOneMedic</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2  sm:flex-row">
                    <button className="h-10 w-15 sm:w-25 text-sm sm:text-md rounded-lg bg-white hover:opacity-60 text-black p-4 flex items-center justify-center gap-2 ">
                      <TiPlus className="hidden sm:block" />
                      Follow
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 w-full">
                  {" "}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img
                        src="./images//pic-manager.jpg"
                        alt="Pic"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-200 text-sm ">Sinkler</p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 ">
                    <button className="h-10 w-15 sm:w-25 text-sm sm:text-md rounded-lg bg-white hover:opacity-60 text-black p-4 flex items-center justify-center gap-2 ">
                      <TiPlus className="hidden sm:block" />
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              <h2 className="mt-5 text-justify">
                Other games in the series Oddworld: Soulstorm, Oddworld: New 'n'
                Tasty, Oddworld: The Oddboxx, Oddworld: Stranger's Wrath,
                Oddworld Adventures 2, Oddworld Adventures, Oddworld: Abe's
                Exoddus, Oddworld: Abe's Oddysee DLC's and editions Oddworld:
                Munch's Oddysee HD, Oddworld: Munch's Oddysee (2001) Tags
                Singleplayer, Steam Achievements, steam-trading-cards, Partial
                Controller Support, Classic, Comedy, controller support, 3D
                Platformer Website http://www.oddworld.com/
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
