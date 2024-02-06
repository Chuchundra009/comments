import { useState } from "react";
import "./AllInputs.scss";
import ListComments from "../ListComments/ListComments";

export default function AllInputs() {
  const [nick, setNick] = useState("");
  const [comment, setComment] = useState("");
  const [arrComments, setArrComments] = useState([]);
  const [inputError, setInputError] = useState({});

  function validateAndSave(e) {
    e.preventDefault();
    const errors = {};
    if (nick.trim() === "") {
      errors.nick = true;
    }
    if (comment.trim() === "") {
      errors.comment = true;
    }

    if (Object.keys(errors).length === 0) {
      addComment();
    } else {
      setInputError(errors);
    }
  }

  function addComment() {
    const lastId =
      arrComments.length > 0 ? arrComments[arrComments.length - 1].id : 0;
    const newComm = {
      id: lastId + 1,
      nick: nick,
      comment: comment,
    };
    setArrComments((a) => [newComm, ...a]);
    setNick("");
    setComment("");
  }

  return (
    <div className='container'>
      <form className='inputs'>
        <input
          type="text"
          placeholder="Введите свой ник"
          value={nick}
          onChange={(e) => {
            setNick(e.target.value);
            setInputError({ ...inputError, nick: false });
          }}
          style={{ borderColor: inputError.nick ? "red" : "" }}
        />
        <textarea
          placeholder="Введи комментарий"
          rows="15"
          cols="33"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            setInputError({ ...inputError, comment: false });
          }}
          style={{ borderColor: inputError.comment ? "red" : "" }}
        ></textarea>
        <button type="submit" onClick={validateAndSave}>
          оставить комментарий
        </button>
      </form>
      <div className='lists'>
        {arrComments.map((arrComment, index) => (
          <ListComments
            key={arrComment.id}
            nick={arrComment.nick}
            comment={arrComment.comment}
            newComment={"new-comment"}
            className={index === arrComments.length - 1 ? "new-comment" : ""}
          />
        ))}
      </div>
    </div>
  );
}
