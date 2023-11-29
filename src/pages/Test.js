// ===============File Made Just For Testing Purpose=====================
import React from "react";
import data from "../Data.js";
const Test = () => {
  console.log(data);
  return (
    <div>
      {data.map((phobias, index) =>
        phobias && phobias.hasOwnProperty(`phobias1`)
          ? phobias[`phobias1`].map((phobia) => <div>{phobia.name}</div>)
          : null
      )}
    </div>
  );
};

export default Test;
