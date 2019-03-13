import React, { Component } from "react";

function Favorites(props) {
  console.log(props.isFavorite)
  return (
    <div>
      <button type="button" onClick={props.likeHandler}>
         { props.isFavorite === "❤️" ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

export default Favorites;
