import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaCamera,
  FaVideo,
  FaRegSmile,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PostInput = ({ onPost }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handlePost = () => {
    if (!text.trim() && !image && !video) return; // Empêche les posts vides

    onPost({
      username: "You",
      handle: "@yourhandle",
      date: new Date().toLocaleDateString(),
      text,
      image,
      video,
      likes: 0,
      comments: 0,
      shares: 0,
    });

    // Réinitialisation des champs
    setText("");
    setImage(null);
    setVideo(null);
  };

  return (
    <div className="p-4 flex items-start space-x-4">
      {/* User Avatar */}
      <div className="flex items-center p-4 text-white space-x-3">
        <img
          src="profile.png"
          alt="user_Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Input Box */}
      <div className="flex-1">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What is happening?!"
          className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
        />
        {/* Icons */}
        <div className="flex space-x-4 mt-2 text-blue-500">
          {/* Ajouter une image */}
          <label>
            <FaCamera className="text-xl cursor-pointer" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
              className="hidden"
            />
          </label>

          {/* Ajouter une vidéo */}
          <label>
            <FaVideo className="text-xl cursor-pointer" />
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(URL.createObjectURL(e.target.files[0]))}
              className="hidden"
            />
          </label>

          <FaRegSmile className="text-xl" />
          <FaCalendarAlt className="text-xl" />
          <FaMapMarkerAlt className="text-xl" />
        </div>
      </div>

      {/* Post Button */}
      <button
        onClick={handlePost}
        className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600"
      >
        Post
      </button>
    </div>
  );
};
PostInput.propTypes = {
  onPost: PropTypes.func.isRequired,
};

export default PostInput;

