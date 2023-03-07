import React from "react";

const ParagraphList = (props) => {
  return (
    <div>
      {props.paragraph.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </div>
  );
};

export default ParagraphList;
