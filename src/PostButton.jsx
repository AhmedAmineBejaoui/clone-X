import  { useState } from "react";

const PostButton = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  const handlePostClick = () => {
    setShowPostModal(true);
  };

  const closePostModal = () => {
    setShowPostModal(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={handlePostClick}
        className="w-full bg-white text-black font-bold py-2 rounded-full hover:bg-gray-300"
      >
        Post
      </button>

      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-black text-white p-6 rounded-lg w-[500px]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Create a Post</h2>
              <button
                onClick={closePostModal}
                className="text-gray-500 hover:text-white"
              >
                ✕
              </button>
            </div>
            <textarea
              placeholder="What is happening?!"
              className="w-full mt-4 bg-gray-800 text-white p-2 rounded-md"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostButton;
