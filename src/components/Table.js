import React from "react";
import { useSelector } from "react-redux";
import Item from "../components/Item";
import Spinner from "../components/Spinner";
import shortid from "shortid";

const Table = ({ Info,item }) => {
  
  const Loading = useSelector((state) => state.postalCodeInfo.loading);

  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Postal Code</th>
              <th scope="col">Department</th>
              <th scope="col">Municipality</th>
              <th scope="col">Neighbourhood</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(item).length > 0 ?  <Item key={shortid.generate()} item={item} />  :  Info.map((element) => (
              <Item key={shortid.generate()} item={element} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
