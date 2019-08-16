const express = require("express");
const app = express();
const cors = require('cors');
const hotels = require("./data.json")
app.use(cors());
app.set('port', process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.json(hotels);
});

app.get("/:id", (req, res) => {
    const myHotel = hotels.filter((hotel) => hotel.id == req.params.id)
    res.json(myHotel)
});

app.get("/*", (req, res) => {
    res.end("Archivo no encontrado");
});
// ----------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server works on port: ${app.get('port')}`);
});