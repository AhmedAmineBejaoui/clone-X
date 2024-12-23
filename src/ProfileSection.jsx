// ProfileSection.jsx
const ProfileSection = () => {
    return (
      <div className="flex items-center p-4 text-white space-x-3">
        <img
          src="profile.png"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">AHMED AMIN BEJAOUI</p>
          <p className="text-gray-400">@AHMED_AMIN_BE</p>
        </div>
      </div>
    );
  };
  
  export default ProfileSection;