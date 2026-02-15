import { Outlet } from "react-router";
import Topbar from "../../featurs/Topbar/Topbar";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
const MainLayout = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const controller = new AbortController();
    setLoader(true);
    const fetchGame = async () => {
      try {
        // const res = await fetch("https://api.sampleapis.com/switch/games", {
        const res = await fetch(
          "https://api.rawg.io/api/games?key=ede54b54ff07495ba2a5ad2557dae056&dates=2019-09-01,2019-09-30&platforms=18,1,7",
          {
            signal: controller.signal,
          },
        );
        if (res.status === 200) {
          const data = await res.json();
          setGames(data);
        } else {
          setError("There is a problem!!!");
        }
        setLoader(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchGame();
    return () => controller.abort();
  }, []);
  const allGenres = games?.results?.flatMap((game) => game.genres || []) || [];
  const uniqueGenres = [
    ...new Map(allGenres.map((genre) => [genre.id, genre])).values(),
  ];
  const nameGenres = uniqueGenres?.map((genre) => genre.name) || [];

  const filteredGames =
    filter === "ALL"
      ? games?.results || []
      : games?.results?.filter((game) =>
          game.genres.some((genre) => genre.name === filter),
        );
  if (loader) {
    return <Loader />;
  }
  return (
    <main>
      <section className="grow ">
        <Topbar filter={filter} setFilter={setFilter} nameGenres={nameGenres} />
        <div className=" mx-auto">
          <div className="relative z-10">
            <Outlet
              context={{
                games: games?.results || [],
                filteredGames,
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainLayout;
