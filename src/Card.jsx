// Card.jsx
import "react";


// eslint-disable-next-line react/prop-types
const Card = ({ title, description, buttonText }) => {
  return (
    <div className="p-6 border border-slate-600 rounded-[30px]">
        <h2 className="first-letter:uppercase font-bold text-3xl mb-4">{title}</h2>
        <p className="first-letter:uppercase  text-2xl max-w-[360px] mb-4">{description}</p>
        <button className=" first-letter:uppercase bg-cyan-600 py-3 px-10 rounded-full text-lg font-medium hover:bg-cyan-700">{buttonText}</button>
      </div>
  );
};

export default Card;



