import React, { useState, useEffect } from "react";
import axios from "axios";
import RsvpForm from "./RsvpForm";
import Display from "./Display";

function Main() {
  const [guestForm, setGuestForm] = useState({
    firstName: "",
    lastName: "",
    time: 0,
    food: [],
    attendence: true,
  });

  const [showDisplay, setShowDisplay] = useState(true);
  const [displayGuestList, setDisplayGuestList] = useState([]);

  useEffect(() => {
    displayGuestList.length === 0 && displayList();
  }, []);

  let foodChoices = ["Chiken", "Salmon", "Lasagna"];

  const handleChange = (e) => {
    setGuestForm({
      ...guestForm,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "time") {
      if (e.target.value === "Day") {
        setGuestForm({
          ...guestForm,
          time: 0,
        });
      } else {
        setGuestForm({
          ...guestForm,
          time: 1,
        });
      }
    }

    if (e.target.name === "attendence") {
      if (e.target.value === "Yes") {
        setGuestForm({
          ...guestForm,
          attendence: true,
        });
      } else {
        setGuestForm({
          ...guestForm,
          attendence: false,
        });
      }
    }

    if (e.target.name === "food") {
      if (e.target.checked) {
        setGuestForm({
          ...guestForm,
          food: [...guestForm.food, e.target.value],
        });
      } else {
        let foods = guestForm.food.filter((value) => value !== e.target.value);

        setGuestForm({
          ...guestForm,
          food: foods,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { firstName, lastName, food, time, attendence } = guestForm;
    if (
      firstName !== "" &&
      lastName !== "" &&
      time !== null &&
      attendence !== null
    ) {
      await axios.post("http://localhost:4000/add_guests", guestForm);
      setShowDisplay(false);
      displayList();
    }
  };

  const displayList = async () => {
    let res = await axios.get("http://localhost:4000/get_guestList");
    setDisplayGuestList(res.data);
  };
  const handleDelete = async (id) => {
    let res = await axios.delete(`http://localhost:4000/delete_guest/${id}`);
    displayList();
    return res.data;
  };

  const handleEdit = async (id) => {
    let res = await axios.put(`http://localhost:4000/update_guest/${id}`);
    return res.data;
  };
  return (
    <div>
      {showDisplay ? (
        <Display
          displayGuestList={displayGuestList && displayGuestList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <RsvpForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          foodChoices={foodChoices}
        />
      )}
    </div>
  );
}

export default Main;
