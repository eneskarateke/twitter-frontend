import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTweet,
  sendReply,
  likeTweet,
  unlikeTweet,
  retweetTweet,
  updateTweet,
} from "../../actions";
import Modal from "react-modal";
import "./tweetcard.css";
import jwt_decode from "jwt-decode";
import Reply from "./Reply";

function TweetCard({ tweet }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.feed.token);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const decodedToken = jwt_decode(token);
  const loggedInUserId = decodedToken.sub;
  const isOwner = loggedInUserId === tweet.email;

  const [userLikeId, setUserLikeId] = useState(null);
  const [retweeted, setRetweeted] = useState(false);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updatedTweetText, setUpdatedTweetText] = useState("");

  const handleOpenUpdateModal = () => {
    setIsUpdateModalOpen(true);
    setUpdatedTweetText(tweet.post);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setUpdatedTweetText("");
  };

  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const userLike = tweet.likes.find(
      (like) => like.likerEmail === loggedInUserId
    );
    if (userLike) {
      setUserLikeId(userLike.likeId);
      setIsLiked(true);
    } else {
      setUserLikeId(null);
      setIsLiked(false);
    }
  }, [tweet.likes, loggedInUserId]);

  const handleDeleteClick = () => {
    dispatch(deleteTweet(tweet.id));
  };

  const handleRetweet = () => {
    if (!retweeted) {
      dispatch(retweetTweet(tweet.id));
      setRetweeted(true);
    } else {
      return null;
    }
  };

  const handleLikeClick = () => {
    if (isLiked) {
      if (userLikeId) {
        dispatch(unlikeTweet(userLikeId));
      }
    } else {
      dispatch(likeTweet(tweet.id));
    }
  };

  const handleReplyClick = () => {
    setIsReplyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsReplyModalOpen(false);
  };

  const handleReplySubmit = () => {
    dispatch(sendReply(tweet.id, replyText));
    setIsReplyModalOpen(false);
  };
  const handleUpdateTweetSubmit = () => {
    dispatch(updateTweet(tweet.id, { tweet: updatedTweetText }));
    setIsUpdateModalOpen(false);
  };

  return (
    <div>
      <p>{tweet.post}</p> <span> userid: {tweet.userId}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <button onClick={handleReplyClick}>Reply</button>
          <span>{tweet.replies.length}</span>
        </div>

        <div>
          <button onClick={handleLikeClick}>
            {isLiked ? "Unlike" : "Like"}
          </button>
          <span>{tweet.likes.length}</span>
        </div>
        <div>
          <button onClick={handleRetweet}>
            {retweeted ? "Unretweet" : "Retweet"}
          </button>
          <span>{tweet.retweets.length}</span>
        </div>

        {isOwner && (
          <div>
            <button onClick={handleDeleteClick}>Delete Tweet</button>
          </div>
        )}
        {isOwner && (
          <div>
            <button onClick={handleOpenUpdateModal}>Update Tweet</button>
          </div>
        )}
      </div>
      {tweet.replies.length > 0 &&
        tweet.replies.map((reply, index) => {
          return (
            <div key={index}>
              <Reply reply={reply} />
            </div>
          );
        })}
      <div className="modal-container">
        <Modal
          isOpen={isReplyModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Reply Modal"
          className="custom-modal"
          overlayClassName="custom-overlay"
          appElement={document.getElementById("root")}
        >
          <h2>Reply to Tweet</h2>
          <textarea
            rows="4"
            cols="40"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Enter your reply..."
          />
          <button onClick={handleReplySubmit}>Submit Reply</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </Modal>
      </div>
      <div className="modal-container">
        <Modal
          isOpen={isUpdateModalOpen}
          onRequestClose={handleCloseUpdateModal}
          contentLabel="Update Tweet Modal"
          className="custom-modal"
          overlayClassName="custom-overlay"
          appElement={document.getElementById("root")}
        >
          <h2>Update Tweet</h2>
          <textarea
            rows="4"
            cols="40"
            value={updatedTweetText}
            onChange={(e) => setUpdatedTweetText(e.target.value)}
            placeholder="Enter your updated tweet..."
          />
          <button onClick={handleUpdateTweetSubmit}>Submit Update</button>
          <button onClick={handleCloseUpdateModal}>Cancel</button>
        </Modal>
      </div>
    </div>
  );
}

export default TweetCard;
