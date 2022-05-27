import React, { useState } from "react";
import EditForm from "./EditForm";

function Display(props) {
  // console.log("props", props);
  const [editGuestDetails, setEditGuestDetails] = useState({});
  const { displayGuestList, handleDelete, handleEdit } = props;


  const edit = (items , props) => {
    handleEdit(items.id);
    setEditGuestDetails(items);
  };

  // console.log('editGuestDetails', editGuestDetails)
  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Guest List</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">first name</th>
            <th scope="col">Last name</th>
            <th scope="col">Food</th>
            <th scope="col">Time</th>
            <th scope="col">Attending</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayGuestList &&
            displayGuestList.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.first_name}</td>
                  <td>{items.last_name}</td>
                  <td>{items.food}</td>
                  <td>{items.day_or_night === "0" ? "Day" : "Night"}</td>
                  <td>{items.attendence === true ? "Yes" : "No"}</td>
                  <td>
                    <input
                      type="button"
                      value="Edit"
                      onClick={()=>edit(items)}
                      data-toggle="modal"
                      data-target="#myModal"
                      className="btn btn-outline-info"
                    />
                    <input
                      type="button"
                      value="X"
                      onClick={() => handleDelete(items.id)}
                      className="btn btn-outline-danger"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <EditForm editGuestDetails={editGuestDetails} />
    </div>
  );
}

export default Display;
