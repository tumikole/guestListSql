import React from "react";

const RsvpForm = (props) => {
  const {
    firstName,
    lastName,
    time,
    food,
    attendence,
    handleChange,
    handleSubmit,
    foodChoices
    
  } = props;
  return (
    <div>
            <h1 style={{textAlign:"center"}}>Guest Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First name</label>
          <input
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            className="form-control"
            name="lastName"
            value={lastName}
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

{foodChoices && foodChoices.map((item , index) => {
    return(
    <div class="form-group" key={index}>
    <div class="form-check">
      <input class="form-check-input" name="food" onChange={(e) => handleChange(e)} type="checkbox" value={item}/>
        <label class="form-check-label">{item}</label>

    </div>
  </div>
    )
}) }   
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
            <label class="form-check-label">No </label>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RsvpForm;
