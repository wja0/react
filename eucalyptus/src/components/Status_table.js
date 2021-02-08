import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Status_table.css";

function Status_table({ SubNum, Result }) {
  console.log(1)
  return (
    <tbody>
      <tr className="list_status">
        <td  style={{ width: "20%" }}>
          <Link to={{
            pathname: `/problem`,
          }}>{SubNum}</Link></td>
        <td style={{ width: "80%" }}>
          {Result}</td>
      </tr>
    </tbody>
  );
}

Status_table.propTypes = {
  SubNum: PropTypes.string.isRequired,
  Result: PropTypes.string.isRequired
};

export default Status_table;
