import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <article className="relative w-2/3 text-center mt-20 bg-slate-100 border-2 border-transparent px-2 md:px-5 lg:px-8 py-3 md:py-6 lg:py-12 rounded-sm md:rounded-md lg:rounded-lg shadow-sm md:shadow-md lg:shadow-lg transition-all">
      {children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
