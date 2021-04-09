import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { gtPostalCodeInfo } from "../actions/PostalCodeActions";
import Form from "../components/Autocomplete";
import Error from "../components/Error";


const Index = () => {

  const dispatch = useDispatch();

  const Info = useSelector((state) => state.postalCodeInfo.info);

  const [item,SelectedItem] = useState({});
  const [error,SvError] = useState(false);

  useEffect(() => {
    function getPostalCodeInfo() {
      if (Object.keys(Info).length === 0) {
        //Gets PostalCode Data if the array(Info) is empty
        dispatch(gtPostalCodeInfo());
      }
    }

    getPostalCodeInfo();
  }, []);

  return (
    <>
      <Navbar info={Info} />
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5 mx-auto">
            <Form info={Info} SelectedItem={SelectedItem} SvError={SvError} item={item} />
          </div>
          <div className="col-12 mt-5 mx-auto">
            {error ? <Error /> : null}
            <Table Info={Info} item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
