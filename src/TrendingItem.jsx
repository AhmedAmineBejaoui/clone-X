
const TrendingItem = (item) => {
    return (
      <div className="mb-4">
        <p className="text-gray-500 text-sm">{item.category}</p>
        <h3 className="font-bold">{item.title}</h3>
        {item.posts && <p className="text-gray-500 text-sm">{item.posts} posts</p>}
      </div>
    );
  };
  
  export default TrendingItem;
  