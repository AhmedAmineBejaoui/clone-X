import { useState } from "react";
import Sidebar from "./Sidebar";
import Top from "./Top";
import PostInput from "./PostInput";
import Tweet from "./Tweet";
import TrendingList from "./TrendingList";
import Card from "./Card";
import Search from "./Search";
import FollowList from "./FollowList";

const App = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      username: "Elon Musk",
      handle: "@elonmusk",
      date: "Dec 16",
      text: "Working on something exciting!",
      image: "elonmask.png",
      likes: 5,
      comments: ["Excited to see it!", "Can't wait for the update!"],
      reposts: 3,
    },
    {
      id: 2,
      username: "TheSpaceEngineer",
      handle: "@mcrs981",
      date: "Dec 18",
      text: "So there's a real fun mystery around Superheavy's upgraded gridfins for Block 2 and 3. Possibly even a new shape.",
      image: "Space.png",
      likes: 8,
      comments: ["I love SpaceX!", "Interesting!"],
      reposts: 4,
    },
  ]);

  // Fonction pour gérer les likes
  const handleLike = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  // Fonction pour gérer les reposts
  const handleRepost = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, reposts: tweet.reposts + 1 } : tweet
      )
    );
  };

  // Fonction pour gérer les commentaires
  const handleComment = (id, newComment) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? { ...tweet, comments: [...tweet.comments, newComment] }
          : tweet
      )
    );
  };

  // Fonction pour ajouter un nouveau tweet
  const handleNewPost = (newTweet) => {
    setTweets([{ ...newTweet, id: Date.now(), likes: 0, comments: [], reposts: 0 }, ...tweets]);
  };

  const [activeTab, setActiveTab] = useState("For You");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 border border-slate-600">
        {/* Header */}
        <Top onTabChange={handleTabChange} />

        {/* Display Content based on Active Tab */}
        <div className="mt-4">
          {activeTab === "For You" ? (
            <div>For You Content</div>
          ) : (
            <div>Other Content</div>
          )}
        </div>

        {/* Post Section */}
        <PostInput onPost={handleNewPost} />

        {/* Divider */}
        <div className="border-b border-gray-700"></div>

        {/* Tweets Section */}
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <Tweet
              {...tweet}
              onLike={() => handleLike(tweet.id)}
              onRepost={() => handleRepost(tweet.id)}
              onComment={handleComment}
            />
            <div className="border-b border-gray-700"></div>
          </div>
        ))}
      </div>

      {/* Sidebar droite */}
      <div className="min-h-screen bg-black text-white p-4">
        {/* Search Bar */}
        <Search />

        {/* Spacer */}
        <div className="mt-4"></div>

        {/* Premium Card */}
        <div className="p-6 bg-slate-1000 text-white shadow-lg">
          <Card
            title="Subscribe to Premium"
            description="Subscribe to unlock new features and if eligible, receive a share of revenue."
            buttonText="Subscribe"
          />
          <div className="mt-4"></div>
          <TrendingList />
          <div className="mt-4">
            <FollowList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
