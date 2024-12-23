const Search = () => {
    return (
      <div className="p-2 bg-gray-900 rounded-full flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-900 text-white placeholder-slate-1000 px-4 py-2 focus:outline-none w-full rounded-full"
        />
      </div>
    );
  };
  
  export default Search;
  