const { saveGuest } = require('../queries/index')

const myRoutes = (app) => {
    app.post('/add_guest', async (req, res) => {
        const { firstName, lastName, food, day_or_night, attendence } = req.body

        try {
            let newGuest ={
                firstName, lastName, food, day_or_night, attendence
            }
            if ((firstName, lastName, food, day_or_night, attendence) === "") {
                res.send({ message: "Fill all empty fields" }).status(201)

            } else {
                let data = await saveGuest(newGuest)
                res.send({ message: "Guest saved succesfully", data }).status(200)
            }

        } catch (error) {

        }

    })
}

module.exports = { myRoutes }