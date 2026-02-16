import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoGift } from "react-icons/go";
import { IoLibraryOutline } from "react-icons/io5";
import { GiAbstract088 } from "react-icons/gi";
import { Link } from "react-router";

const Topbar = ({ setFilter, nameGenres }) => {
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
onChange={(e) => setFilter(e.target.value)} >
<option className="bg-gray-800 text-white" value="ALL">
ALL
</option>{" "}
{nameGenres?.map((g) => (
<option className="bg-gray-800 text-white" value={g}>
{g}
</option>
))}
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
// console.log(data);
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
const allGenres = games?.results?.flatMap((game) => game.genres);
const nameGenres = allGenres?.map((gener) => {
return gener.name;
});
console.log(nameGenres);
const filteredGames =
filter === "ALL"
? games
: games?.results?.filter((game) =>
game.genres.some((genre) => genre.name === filter),
);
if (loader) {
return <Loader />;
}
return (

<main>
<section className="grow ">
<Topbar filter={filter} setFilter={setFilter} />
<div className=" mx-auto">
<div className="relative z-10">
<Outlet context={{ games, filteredGames, nameGenres }} />
</div>
</div>
</section>
</main>
);
};

export default MainLayout;

سلکت باکس درست نمیشه

---

مشکل سلکت باکس شما این است که آرایه nameGenres خالی است و به درستی پر نمی‌شود. چند مشکل در کد شما وجود دارد:

مشکلات اصلی:
عدم بررسی وجود results: در خط allGenres = games?.results?.flatMap(...) از ?. استفاده کرده‌اید اما در خط بعدی این کار را نکرده‌اید.

عدم حذف مقادیر تکراری: ژانرها تکراری هستند و سلکت باکس مقادیر تکراری نشان می‌دهد.

ساختار داده games: در filteredGames شما کل آبجکت games را برمی‌گردانید در حالی که باید games.results را برگردانید

---

<img
          src={data?.background_image}
          alt="Pic"
          className="w-full h-44 object-cover"
        />
نشون نمیده
مشکل از HTTP هست. تصاویر API راوج از طریق HTTPS سرو می‌شوند ولی لینک‌هایی که برمی‌گردانند HTTP هستند. مرورگر مدرن لود محتوای不安全 (HTTP) رو در سایت‌های HTTPS بلاک می‌کنه.

دو راه حل:

راه حل ۱ - سریع (تغییر لینک در لحظه):

jsx
<img
src={data?.background_image?.replace('http://', 'https://')}
alt={data?.name}
className="w-full h-44 object-cover"
/>

---

import GameCard from "../../components/GameCard/GameCard";
import { useOutletContext } from "react-router";

const Home = () => {
const { games, filteredGames } = useOutletContext();
console.log(games);
if (!games) {
return <Loader />;
}
return (

<div
className="w-full min-h-screen bg-cover bg-no-repeat bg-center "
style={{ backgroundImage: url("./images//bg-2.jpg") }} >
<div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 text-white p-6 w-full  flex items-center justify-center">
        {" "}
        <div className="w-[65%]  min-h-screen grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 justify-items-center mx-auto">
          {filteredGames.slice(0, 99).map((game) => {
            return <GameCard key={game.id} data={game} />;
          })}
        </div>
      </div>
    </div>

);
};

export default Home;
تنظیمات عکس بک گراند و ... را چک کن
به‌نظر می‌رسد مشکل اصلی در تنظیمات بک‌گراند و لایه‌بندی divها باشد. چند نکته مهم در کد شما هست که باید بررسی شود:

1. مسیر عکس بک‌گراند

در این خط:

style={{ backgroundImage: `url("./images//bg-2.jpg")` }}

دو تا اسلش (//) وجود دارد. بهتر است یکی باشد: 2. مشکل لایه تیره (overlay)

این div:

<div className="absolute inset-0 bg-black/75"></div>

چون parent شما relative ندارد، ممکن است overlay کل صفحه را اشتباه بپوشاند.

اصلاح:

به div اصلی کلاس relative بدهید:

<div
  className="relative w-full min-h-screen bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: `url("/images/bg-2.jpg")` }}
>
3. بررسی Loader

در کد شما:

if (!games) {
return <Loader />;
}

اما Loader import نشده است. اگر import نشود، صفحه سفید می‌شود.

import Loader from "../../components/Loader/Loader";

---

****\*****کد طولانی تو چت بود****\*****; export default GameDetails; در 640px به پایین بک گراند کل صفحه از سمت راست کمی سفیده و اجزا از کادر صفحه رفتن بیرون
مشکلی که گفتی معمولاً به دو دلیل اتفاق می‌افتد:

یک عنصر عرض بیشتری از صفحه گرفته (overflow)

استفاده از w-[90%] همراه با gap یا padding باعث شده مجموع عرض از 100٪ بیشتر شود

در کد تو چند نقطه خطرناک وجود دارد.

علت اصلی در کد تو

این بخش:

<div className="flex items-stretch justify-center w-[90%] min-h-screen gap-15">

در موبایل:

flex به‌صورت افقی است

دو ستون کنار هم قرار گرفته‌اند

عرض هر کدام w-full است

به علاوه gap-15

نتیجه:
عرض کل از صفحه بزرگ‌تر می‌شود → اسکرول سفید از راست

راه‌حل استاندارد ریسپانسیو

در موبایل باید layout عمودی شود، نه افقی.

اصلاح اصلی

<div className="flex flex-col lg:flex-row items-stretch justify-center w-full max-w-7xl mx-auto min-h-scre
