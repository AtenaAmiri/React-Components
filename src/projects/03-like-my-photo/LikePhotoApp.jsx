import React, { useState } from "react";
import Title from "../components/Title";
import DogImg from "./Img/dog.jpg";
import {
  AiFillSmile,
  AiOutlineComment,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

export default function LikePhotoApp() {
  //   let like = false;

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like Photo App"} />
      <Title classes={"subtitle"} text={`likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>
        <img
          src={DogImg}
          alt="img"
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
