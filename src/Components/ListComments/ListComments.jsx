import "./ListComments.scss";
import PropTypes from "prop-types";

export default function ListComments({ nick, comment, newComment }) {
  return (
    <div className={"list" + newComment}>
      <h4>{nick}</h4>
      <p>{comment}</p>
    </div>
  );
}

ListComments.propTypes = {
  nick: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  newComment: PropTypes.string,
};
