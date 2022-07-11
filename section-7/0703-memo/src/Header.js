import React, { memo } from "react";

const Header = () => {
  console.log("rendered");

  return (
    <div>
      <h1>Header aqui</h1>
    </div>
  );
};

export default memo(Header);
