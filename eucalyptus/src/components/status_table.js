import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./status_table.css";

function Status({ SubNum, Result }) {
  return (
    <div className="status">
      <Link
        to={{
          pathname: '/status',
          state: {
            SubNum,
            Result
          }
        }}
      >
                  <tbody>
                    <tr id={SubNum}>
                        <td>
                            {SubNum}
                        </td>
                        <td>
                            {Result=="T"?"맞았습니다.":"틀렸습니다."}
                        </td>
                    </tr>
                </tbody>
      </Link>
    </div>
  );
}

Status.propTypes = {
  SubNum: PropTypes.string.isRequired,
  Result: PropTypes.string.isRequired
};

export default Status;
