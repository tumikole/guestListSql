const { getClient } = require("../database/index");

const sqlQueries = async (statement, parameters) => {
  const client = await getClient();
  try {
    res = await client.query(statement, parameters);
    return res.rows;
  } catch (error) {
    console.log(error);
    client.release();
  }
};


const saveGuest = async (data) => {
    const { firstName, lastName, day_or_night ,food, attendence } = data;
    console.log('data', data)
    let statement =
      "INSERT INTO student (first_name , last_name , day_night, food , attendence) VALUES ($1 ,$2 ,$3 , $4, $5) RETURNING first_name , last_name , day_night, food , attendence;";
    let parameters = [firstName, lastName, day_or_night ,food, attendence];
    return await sqlQueries(statement, parameters);
  };

  module.exports = {saveGuest}