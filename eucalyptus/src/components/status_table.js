import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./status_table.css";

function Status({ SubNum, Result }) {
  return (
    <tbody>
      <tr className="list_status">
        <td  style={{ width: "20%" }}>
          <Link to={{
            pathname: '/status'
          }}>{SubNum}</Link></td>
        <td style={{ width: "80%" }}>
          {Result === "T" ? "맞았습니다." : "틀렸습니다."}</td>
      </tr>
    </tbody>
  );
}

Status.propTypes = {
  SubNum: PropTypes.string.isRequired,
  Result: PropTypes.string.isRequired
};

export default Status;
