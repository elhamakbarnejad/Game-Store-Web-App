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
        const res = await fetch("https://api.sampleapis.com/switch/games", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const data = await res.json();
          setGames(data);
          console.log(data);
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

  const filteredGames =
    filter === "ALL"
      ? games.slice(0, 99)
      : games.slice(0, 99).filter((game) => game.genre.includes(filter));
  if (loader) {
    return <Loader />;
  }
  return (
    <main>
      <section className="grow ">
        <Topbar filter={filter} setFilter={setFilter} />
        <div className=" mx-auto">
          <div className="relative z-10">
            <Outlet context={{ games, filteredGames }} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainLayout;
