import PropTypes from "prop-types";

const Title = ({ name, type }) => {
  return <h1 style={{ fontWeight: type }}>It's {name}'s first react app</h1>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Title.defaultProps = {
  type: "normal",
};

export default Title;
