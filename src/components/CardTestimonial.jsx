import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <article className="relative w-2/3 text-left mt-20 bg-slate-100 border-2 border-transparent px-8 py-12 rounded-sm md:rounded-md lg:rounded-lg transition-all">
      {children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
