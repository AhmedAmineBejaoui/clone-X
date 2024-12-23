import "react";
import FollowItem from "./FollowItem";

const FollowList = () => {
    const followData = [
      { 
        name: "NASA", 
        username: "@NASA", 
        avatar: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" 
      },
      { 
        name: "Science Magazine", 
        username: "@ScienceMagazine", 
        avatar: "Scince.png" 
      },
      { 
        name: "Physics World", 
        username: "@PhysicsWorld", 
        avatar: "physics.png" 
      },
    ];
  
    return (
      <div className="p-6 border border-slate-600 rounded-[30px] bg-slate-1000 text-white shadow-lg">
       
        <h2 className="text-lg font-bold mb-4">Who to follow</h2>
        {followData.map((item, index) => (
          <FollowItem
            key={index}
            name={item.name}
            username={item.username}
            avatar={item.avatar}
          />
        ))}
        <button className="text-blue-500 hover:underline mt-0 text-sm">
          Show more
        </button>
      </div>
    );
  };

export default FollowList;
