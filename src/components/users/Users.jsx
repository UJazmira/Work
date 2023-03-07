import React from "react";
import "./Users.css";
const Users = (props) => {
  return (
    <div>
      <h3>ТАБЛИЦА</h3>
      <table border={1}>
        <thead>
          <tr className="salary_list">
            <th>Name</th>
            <th>SurName</th>
            <th>Days</th>
            <th>salaryPerDay</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr key={item.id} className="salary">
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.days}</td>
              <td>{item.salaryPerDay}</td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
