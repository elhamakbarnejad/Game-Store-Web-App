import { useOutletContext, useParams } from "react-router";
import { TiPlus } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { FaArrowTurnUp } from "react-icons/fa6";
import Loader from "../../components/Loader/Loader";

const GameDetails = () => {
  const { games } = useOutletContext();
  const { gameID } = useParams();

  const mainGame = games.find((game) => {
    return game.id === Number(gameID);
  });
  if (!mainGame) {
    return <Loader />;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat bg-center "
      style={{ backgroundImage: `url("./images/3.webp")` }}
    >
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 text-white p-6 w-full flex items-stretch justify-center border-2 border-amber-500">
        <div className="flex flex-col lg:flex-row items-stretch justify-center w-full max-w-7xl mx-auto min-h-screen gap-8 px-4 shadow shadow-amber-500 rounded-4xl">
          <div className="w-full p-5 flex flex-col items-start justify-between gap-5">
            <h1 className="text-7xl font-bold text-amber-200">
              {mainGame.name}
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-1 w-full  p-0 items-start  justify-between">
              <div className="flex flex-col justify-center gap-2 ">
                <p className="font-bold text-lg">Ratings Count</p>
                <p className="text-gray-500 text-sm">
                  {mainGame.ratings_count}{" "}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2 ">
                <p className="font-bold text-lg">Reviews Count</p>
                <p className="text-gray-500 text-sm">
                  {mainGame.reviews_count}{" "}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2 ">
                <p className="font-bold text-lg">Suggestions Count</p>
                <p className="text-gray-500 text-sm">
                  {mainGame.suggestions_count}{" "}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 w-full  p-0 items-start  justify-between">
              {" "}
              <div className="text-zinc-200  text-md flex-flex-col  items-center justify-center shadow w-full p-1">
                <h1 className="font-bold text-amber-200">platform:</h1>
                <div> {mainGame.platforms[0]?.platform.name}</div>
                <div> {mainGame.platforms[1]?.platform.name}</div>
                <div> {mainGame.platforms[2]?.platform.name}</div>
                <div> {mainGame.platforms[3]?.platform.name}</div>
              </div>
              <div className="text-zinc-200  text-md flex-flex-col items-center justify-center shadow w-full p-1 ">
                <h1 className="font-bold text-amber-200">Genres:</h1>
                <div> {mainGame.genres[0]?.name}</div>
                <div> {mainGame.genres[1]?.name}</div>
                <div> {mainGame.genres[2]?.name}</div>
                <div> {mainGame.genres[3]?.name}</div>
              </div>
            </div>

            <div className="flex items-center justify-center *:flex *:items-center *:justify-center w-full gap-5 *:gap-2  *:font-bold *:transition-all *:duration-150 flex-col sm:flex-row">
              <button className="h-10  rounded-lg bg-white hover:opacity-80 text-black p-2">
                <TiPlus className="text-amber-500" />
                Write a review
              </button>
              <button className="h-10  rounded-lg bg-white hover:opacity-80 text-black p-2">
                <FaRegComment className="text-amber-500" /> Write a comment
              </button>
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl font-bold text-amber-200">About</h2>
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
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl font-bold text-amber-200">
                Playground Man! Ragdoll Show! Play Online 🎮
              </h2>
              <p className="text-justify">
                Welcome to an exhilarating universe where destruction meets
                puzzles in an explosive dance of ragdoll physics and wooden
                stickmen! Dive into a free online experience where every level
                is a new challenge to conquer. Whether you're on your phone or
                computer, this game offers an unparalleled opportunity to unwind
                and engage your mind. Perfect for fans of physics puzzles and
                ragdoll simulators, Playground Man! Ragdoll Show! is your ticket
                to a playground of endless fun.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl font-bold text-amber-200">
                How to play Playground Man! Ragdoll Show! for free? 👾
              </h2>
              <p className="text-justify">
                You can play Playground Man! Ragdoll Show! for free on Playgama.
                Take a look at our huge selection of free online games,
                including Playground Man! Ragdoll Show! and lots of other great
                titles.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl font-bold text-amber-200">
                Frequently Asked Questions 👾
              </h2>
              <p className="text-justify">
                What is the main objective of Obby: Climb and Slide? To reach
                the top of the tower while collecting coins that can be used to
                enhance your climbing capabilities. Can I play Obby: Climb and
                Slide on my mobile device? Yes, the game is available on both
                mobile devices and computers, offering seamless gameplay across
                platforms. How do I earn more coins in the game? Collect coins
                during your climb and invest in pets that increase your coin
                earnings.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 items-start justify-center gap-1">
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/gb.webp" className="w-8 h-8 rounded-full" />
                United Kingdom
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/br.webp" className="w-8 h-8 rounded-full" />
                Brazil
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/it.webp" className="w-8 h-8 rounded-full" />
                Italy
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/us.webp" className="w-8 h-8 rounded-full" />
                United States
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/jp.webp" className="w-8 h-8 rounded-full" />
                Japan
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/pl.webp" className="w-8 h-8 rounded-full" />
                Poland
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/ir.webp" className="w-8 h-8 rounded-full" />
                Iran
              </button>
              <button className="w-30 h-12 flex items-center justify-between text-white text-sm bg-zinc-950 px-4 rounded-full border shadow-white border-amber-200">
                <img src="/images/fr.webp" className="w-8 h-8 rounded-full" />
                France
              </button>
            </div>
          </div>

          <div className="w-full p-5 flex flex-col items-start justify-between gap-5">
            <div className="w-full p-5 grid lg:grid-cols-2 gap-2 grid-cols-1">
              {mainGame.short_screenshots.slice(0, 4).map((img) => (
                <img
                  src={img.image}
                  alt="Pic"
                  className="w-full h-60 object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="hidden sm:fle items-center justify-center *:flex *:items-center *:justify-center w-full gap-5 *:gap-2  *:font-bold *:transition-all *:duration-150 p-2 ">
              <button className="h-10 w-[80%] rounded-lg bg-white x hover:opacity-60 text-black p-4">
                <BiEdit />
                Edit the game info{" "}
              </button>
            </div>
            <div className="flex flex-col justify-center gap-1 ">
              <p className="font-bold text-lg">Updated</p>
              <p className="text-gray-500 text-sm">{mainGame.updated} </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-2xl font-bold text-amber-200">Game Tips</h2>
              <p className="text-justify">
                Mastering Obby: Climb and Slide requires a blend of patience and
                precision. Focus on collecting coins strategically to upgrade
                your floaties, as faster climbing significantly improves your
                progress. Invest in pets early to maximize your coin collection
                efficiency. Keep an eye on your surroundings and plan your moves
                ahead to avoid pitfalls. Remember, practice makes perfect, so
                don't be discouraged by initial setbacks.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <h2 className="text-xl font-bold text-amber-200 mb-5">
                Top contributors
              </h2>
              <div className="flex flex-col items-center justify-between  w-full px-8 gap-5">
                {" "}
                <div className="flex items-center justify-start gap-15 w-full ">
                  {" "}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <img
                        src="./images//pic-manager.jpg"
                        alt="Pic"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-200 text-sm ">Мамонтофф</p>
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <button className="h-7 w-20  text-sm hidden sm:flex rounded-lg bg-white hover:opacity-85 text-black   items-center justify-center duration-150 transition-all ">
                      <TiPlus className="hidden sm:block" />
                      Follow
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-15 w-full">
                  {" "}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <img
                        src="./images//pic-manager.jpg"
                        alt="Pic"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-200 text-sm ">Мамонтофф</p>
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <button className="h-7 w-20  text-sm hidden sm:flex rounded-lg bg-white hover:opacity-85 text-black   items-center justify-center duration-150 transition-all ">
                      <TiPlus className="hidden sm:block" />
                      Follow
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-15 w-full ">
                  {" "}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                      <img
                        src="./images//pic-manager.jpg"
                        alt="Pic"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-gray-200 text-sm ">Мамонтофф</p>
                  </div>
                  <div className="flex flex-col items-center justify-center ">
                    <button className="h-7 w-20  text-sm  hidden sm:flex rounded-lg bg-white hover:opacity-85 text-black   items-center justify-center duration-150 transition-all ">
                      <TiPlus className="hidden sm:block" />
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-md font-bold text-amber-200">
                Free Online Games at Playgama
              </h2>
              <p className="text-justify text-md text-gray-400">
                Playgama features the latest and best free online games. You can
                enjoy playing fun games without interruptions from downloads,
                intrusive ads, or pop-ups. Just load up your favorite games
                instantly in your web browser and enjoy the experience.
              </p>
            </div>
            {/* !!!!!!!!!!!!!!!!!!!!!!!!!! */}

            <button
              onClick={scrollToTop}
              className="h-10 w-50 mt-4  text-xl  rounded-lg bg-rose-800 hover:opacity-85 text-white  flex items-center justify-center gap-4 duration-150 transition-all "
            >
              <FaArrowTurnUp className="hidden sm:block font-bold" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
