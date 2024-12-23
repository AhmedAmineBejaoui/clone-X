import "react";
import TrendingItem from "./TrendingItem";

const TrendingList = () => {
  const trendingData = [
    { title: "#اليمن", category: "Trending in Tunisia", posts: "23.3K" },
    { title: "قرطاج السينمائيه", category: "Trending in Tunisia", posts: null },
    { title: "محمد الزواري", category: "Trending in Tunisia", posts: null },
    { title: "ميلان", category: "Sports · Trending", posts: "2.07M" },
  ];

  return (
    <div className="p-6 border border-slate-600 rounded-[30px] bg-slate-1000 text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Whats happening</h2>
      {trendingData.map((item, index) => (
        <TrendingItem
          key={index}
          title={item.title}
          category={item.category}
          posts={item.posts}
        />
      ))}
      <button className="bg-cyan-600 text-white rounded-full py-3 px-10 mt-4 font-medium hover:bg-cyan-700">
        Show more
      </button>
    </div>
  );
};

export default TrendingList;
