import React from "react";

const Item = ({ item }) => {
  return (
    <tr className="table-active">
      <td>{item.postalcode}</td>
      <td>{item.department}</td>
      <td>{item.municipality}</td>
      <td>{item.neighbourhood}</td>
    </tr>
  );
};

export default Item;
