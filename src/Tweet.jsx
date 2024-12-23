import { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaRegHeart, FaRetweet, FaComment, FaShare } from 'react-icons/fa';



const Tweet = ({ username, handle, date, text, image, video, comments, likes, shares, onComment }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentList, setCommentList] = useState(comments);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setIsCommenting(!isCommenting);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setCommentList([...commentList, commentText]);
      setCommentText("");
      setIsCommenting(false);
      onComment(); // Notify parent component that a comment has been added
    }
  };

  return (
    <div className="p-4 border-b border-gray-700 text-white">
      {/* User Info */}
      <div className="flex items-center space-x-2">
        <img
          src="elonmask.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <span className="font-bold">{username}</span>{" "}
          <span className="text-gray-500">{handle} · {date}</span>
        </div>
      </div>

      {/* Tweet Content */}
      <p className="mt-2">{text}</p>

      {/* Tweet Image or Video */}
      {image && !video && (
        <img
          src={image}
          alt="Tweet Image"
          className="mt-4 rounded-lg w-full"
        />
      )}
      {video && (
        <video
          src={video}
          controls
          className="mt-4 rounded-lg w-full"
        />
      )}

      {/* Tweet Actions */}
      <div className="flex justify-between items-center mt-4 text-gray-500">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500" onClick={handleCommentClick}>
          <FaComment />
          <span>{commentList.length}</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
          <FaRetweet />
          <span>{shares}</span>
        </div>
        <div
          className={`flex items-center space-x-1 cursor-pointer ${
            isLiked ? "text-red-500" : "hover:text-red-500"
          }`}
          onClick={handleLikeClick}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
          <span>{likeCount}</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-400">
          <FaShare />
        </div>
      </div>

      {/* Comment Section */}
      {isCommenting && (
        <div className="mt-4">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Publish
          </button>
        </div>
      )}

      {/* Display Comments */}
      {commentList.length > 0 && (
        <div className="mt-4">
          <h4 className="font-bold text-gray-300">Comments:</h4>
          <ul className="mt-2">
            {commentList.map((comment, index) => (
              <li key={index} className="text-gray-400 mt-1">
                {comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  video: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.string), // List of comments
  likes: PropTypes.number,
  shares: PropTypes.number,
  onComment: PropTypes.func, // Function to notify parent component
};

Tweet.defaultProps = {
  comments: [],
  likes: 0,
  shares: 0,
};

export default Tweet;
