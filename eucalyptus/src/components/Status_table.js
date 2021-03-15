import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Status_table.css";

function Status_table({ statusList }) {
  return (
    <tbody>
      <tr className="list_status">
        <td style={{ width: "8%" }} className="제출 번호">
          {statusList.SubNum}</td>
        <td style={{ width: "10%" }} className="문제 번호">
          <Link to={{
            pathname: `/problem/${statusList.Pnum}`,
          }}>{statusList.Pnum}</Link></td>
          <td style={{ width: "10%" }} className="아이디">
          <Link to={{
            pathname: `/user/${statusList.ID}`,
          }}>{statusList.ID}</Link></td>
        <td style={{ width: "40%" }} className="결과">
          {statusList.Permission?
            <Link to={{pathname: `/source/${statusList.subNum}`,}}>{statusList.Result}</Link> 
            : statusList.Result}   
        </td>
        <td style={{ width: "10%" }} className="언어">
          {statusList.LangType}</td>
        <td style={{ width: "10%" }} className="코드 길이">
          {statusList.CodeSize}</td>
      </tr>
    </tbody>
  );
}//Permission true일때만 코드 확인 가능.
//(데이터가 없어서 false일 때는 확인 못해봄)

Status_table.propTypes = {
  statusList: PropTypes.string.isRequired
};

export default Status_table;