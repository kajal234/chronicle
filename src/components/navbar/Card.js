import React, { useEffect, useState } from "react";
import {
  getDropDownValues,
  getCustormerData,
  customers as cust,
} from "../../Customer.js";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Card = () => {
  const [databaseValue, setDatabaseValue] = useState("arterra");
  const [dropdownvalues, setDropdownvalues] = useState([]);
  const [searchInput, setSearchInput] = useState({
    input: "",
    error: false,
  });
  const [selectValue, setSelectValue] = useState("");
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    //Network call for getting dropdown values of arterra or zendesk
    const response = getDropDownValues(databaseValue);
    setDropdownvalues(response);
  }, [databaseValue]);

  const submitCustData = (e) => {
    e.preventDefault();
    if (searchInput.input === "" || selectValue === "") {
      setSearchInput({
        ...searchInput,
        error: true,
      });
    } else {
      const customersData = getCustormerData(selectValue, searchInput.input);
      setCustomers(customersData);
    }
  };
  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div
                className="card-header text-white"
                style={{ backgroundColor: "rgb(2,238,242)" }}
              >
                <p className="h4 display_property">Select Tool</p>

                <form action="" className="display_style">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="database"
                      value="arterra"
                      checked={databaseValue === "arterra"}
                      onChange={(e) => setDatabaseValue(e.target.value)}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Arterra
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      name="database"
                      type="radio"
                      value="zendesk"
                      checked={databaseValue === "zendesk"}
                      onChange={(e) => setDatabaseValue(e.target.value)}
                    />

                    <label className="form-check-label" for="flexRadioDefault2">
                      Zendesk
                    </label>
                  </div>
                </form>
              </div>

              <div className="card-body body_style">
                <form className="form-inline row align-items-center justify-content-center d-flex h-100">
                  <div className="col-md-5">
                    <div className="input-group inline">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setSelectValue(e.target.value)}
                        value={selectValue}
                      >
                        {dropdownvalues.map((optVal) => (
                          <option value={Object.keys(optVal)[0]}>
                            {Object.values(optVal)[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className=" input-group">
                      <input
                        type="text"
                        value={searchInput.input}
                        onChange={(e) => {
                          setSearchInput({
                            ...searchInput,
                            input: e.target.value,
                            error: false,
                          });
                        }}
                        className="form-control"
                        placeholder="search"
                      />
                    </div>
                    {searchInput.error ? (
                      <p style={{ color: "red", fontSize: "10px" }}>
                        Please Enter Search Input
                      </p>
                    ) : null}
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-sm btn-primary"
                      style={{ marginLeft: "40px" }}
                      onClick={submitCustData}
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-sm btn-primary"
                      // style={{ float: "right" }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ag-theme-alpine mt-4"
          style={{ width: "100%", height: "500px" }}
        >
          {customers.length > 0 ? (
            <AgGridReact
              rowData={customers}
              defaultColDef={defaultColDef}
              columnDefs={Object.keys(customers[0])
                .filter((key) => key != "id")
                .map((key) => {
                  return {
                    headerName: convertCamelCaseToWord(key),
                    field: key,
                    filter: true,
                    sortIndex: true,
                  };
                })}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;

const convertCamelCaseToWord = (word) => {
  const result = word[0].toUpperCase() + word.substr(1);
  return result.charAt(0).toUpperCase() + result.slice(1);
};
