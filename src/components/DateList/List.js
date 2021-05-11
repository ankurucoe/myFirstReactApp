import React from "react";
import Listitem from "./_Listitem";

const List = ({ WeatherAppContents }) => {
  return (
    <div className="List list-group">
      {WeatherAppContents.map((cur, key) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Listitem CurDate={cur.Date} key={key} />
      ))}
    </div>
  );
};

export default List;
