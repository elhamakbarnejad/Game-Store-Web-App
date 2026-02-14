import GameCard from "../../components/GameCard/GameCard";
import { useOutletContext } from "react-router";

const Home = () => {
  const { games, filteredGames } = useOutletContext();
  console.log(games);
  if (!games) {
    return <Loader />;
  }
  return (
    <div className="bg-slate-900 w-full min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white p-6 w-full  flex items-center justify-center">
        {" "}
        <div className="w-[65%]  min-h-screen grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center mx-auto">
          {filteredGames.slice(0, 99).map((game) => {
            return <GameCard key={game.id} data={game} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
