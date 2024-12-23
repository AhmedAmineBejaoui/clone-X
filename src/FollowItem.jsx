import "react";

// eslint-disable-next-line react/prop-types
const FollowItem = ({ name, username, avatar }) => {
    return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-gray-500 text-sm">{username}</p>
          </div>
        </div>
        <button className="bg-white text-black font-medium rounded-full px-4 py-1 hover:bg-gray-200">
          Follow
        </button>
      </div>
    );
  };
  
  export default FollowItem;
