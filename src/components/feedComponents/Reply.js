import React from "react";
import { useDispatch } from "react-redux";
import { deleteReply } from "../../actions";
function Reply({ reply }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteReply(reply.replyId));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid black",
      }}
    >
      <div>replier id: {reply.replierId}</div>
      <div>reply: {reply.post}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Reply;
