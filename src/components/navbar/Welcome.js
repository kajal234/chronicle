import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="container mt-5 color">
        <div className="row">
          <form action="" className="display_style">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="database"
                value="arterra"
                id="yes"
                // checked={databaseValue === "arterra"}
                // onChange={(e) => setDatabaseValue(e.target.value)}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Customer / Access
              </label>
            </div>
            <div
              className="form-check form-check-inline"
              style={{ marginLeft: "50px" }}
            >
              <input
                className="form-check-input"
                name="database"
                type="radio"
                value="zendesk"
                id="no"
                // checked={databaseValue === "zendesk"}
                // onChange={(e) => setDatabaseValue(e.target.value)}
              />

              <label className="form-check-label" for="flexRadioDefault2">
                Tickets
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Welcome;
