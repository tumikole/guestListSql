import React, { useState, useEffect } from "react";
import axios from "axios";

function EditForm(props) {
  const { editGuestDetails } = props;
  console.log("editGuestDetails", editGuestDetails);
  const [newDetails, setNewDetails] = useState({ ...editGuestDetails });
  console.log('newDetails', newDetails)

  useEffect(() => {
    editGuestDetails.first_name !== (null || undefined) &&
      newDetails.first_name === (null || undefined) &&
      setNewDetails(editGuestDetails);
  });
  let foodChoices = ["Chiken", "Salmon", "Lasagna"];


  const { first_name, last_name} = newDetails;

  const handleChange = (e) => {
    setNewDetails({
      ...newDetails,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "time") {
      if (e.target.value === "Day") {
        setNewDetails({
          ...newDetails,
          time: 0
        });
      } else {
        setNewDetails({
          ...newDetails,
          time: 1
        });
      }
    }

    if (e.target.name === "attendence") {
      if (e.target.value === "Yes") {
        setNewDetails({
          ...newDetails,
          attendence: true,
        });
      } else {
        setNewDetails({
          ...newDetails,
          attendence: false,
        });
      }
    }

    if (e.target.name === "food") {
      if (e.target.checked) {
        setNewDetails({
          ...newDetails,
          food: [...newDetails.food, e.target.value],
        });
      } else {
        let foods = newDetails.food.filter((value) => value !== e.target.value);

        setNewDetails({
          ...newDetails,
          food: foods,
        });
      }
    }
  };

  const handleUpdatedGuests = async (e) => {
    e.preventDefault();
    let res = await axios.put(
      `http://localhost:4000/update_guest/${newDetails.id}`,
      newDetails
      
    );
    console.log('res.data', res.data)
    return res.data;
  };

  return (
    <div>
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit guest</h4>
            </div>

            <div class="modal-body">
              <form onSubmit={handleUpdatedGuests} className="editForm">
                <div className="form-group">
                  <label>First name</label>
                  <input
                    className="form-control"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                    className="form-control"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="time"
                      value="Day"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label">Day</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="time"
                      value="Night"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label">Night</label>
                  </div>
                </div>

                <div>
                  <label class="form-check-label">Food</label>

                  {foodChoices &&
                    foodChoices.map((item, index) => {
                      return (
                        <div class="form-group" key={index}>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              name="food"
                              onChange={(e) => handleChange(e)}
                              type="checkbox"
                              value={item}
                            />
                            <label class="form-check-label">{item}</label>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="form-group">
                  <label>Are you attending?</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="attendence"
                      value="Yes"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="attendence"
                      value="No"
                      onChange={(e) => handleChange(e)}
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
                <div>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
