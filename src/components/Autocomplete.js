import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Autocomplete = ({ info, SelectedItem, SvError, item }) => {

  const handleOnSearch = (string) => {
    //Valid if the value typed by the user has less than 3 digits to reinitialize the selected item or if the item does not have any values,all postal codes will be shown again.
    if (string.length < 3 || Object.keys(item).length === 0) {
      SelectedItem("");
      SvError(false);
    }
    //Valid if the number just typed has more than five digits to throw an error, because all postal codes into db.json has not more than 5 digits.
    if (string.length > 5) {
      SvError(true);

      //After a second, the error message will disappear.
      setTimeout(() => {
        SvError(false);
      }, 1000);
    }
   //Valid if the value has five digits to searching it into the array and filter the corresponding data 
    if(string.length === 5){

      const dataFiltered = info.filter(
        (element) => element.postalcode === string
      );

      if (Object.keys(dataFiltered).length === 0) { //If there is not data filtered, throw an error.
        SvError(true);

        setTimeout(() => {
          SvError(false);
        }, 1000);
      }
    }
    
  };

  const handleOnSelect = (item) => {
    SelectedItem(item);
  };

  return (
    <ReactSearchAutocomplete
      items={Object.keys(info).length > 0 ? info : []}
      fuseOptions={{ keys: ["postalcode"] }}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      maxResults={1}
      placeholder={"Postal Code"}
      showIcon={true}
      autoFocus
      resultStringKeyName="postalcode"
      styling={{
        backgroundColor: "black",
        color: "white",
      }}
    />
  );
};

export default Autocomplete;
