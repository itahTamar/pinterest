import React from "react";

export const EditPin = () => {
  return (
    <div>
      <h2>Edit Pin</h2>
      <form>
        <p>Title</p>
        <input type="text" placeholder="Add a title" />
        <p>Description</p>
        <input
          id="Description"
          type="text"
          placeholder="Add a detailed description"
        />
        <p>Link</p>
        <input type="text" placeholder="Add a link" />
        <p>Board</p>
        <input type="text" placeholder="Add a board" />
      </form>
      <button>Delete</button>
      <button>Save</button>
    </div>
  );
};
