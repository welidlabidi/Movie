import React from "react";
const Input = ({ handle, search }) => {
  return (
    <form>
      <input
        onChange={handle}
        type="text"
        name="movie"
        placeholder="Search for a Movie..."
        onKeyPress={search}
      />
    </form>
  );
};

export default Input;
