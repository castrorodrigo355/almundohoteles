const express = require("express");
const app = express();
const cors = require('cors');
const hotels = require("./data.json")
app.use(cors());
app.set('port', process.env.PORT || 3000);
// const authValidator = require('./middlewares/authValidator');
// const routerSignUp = require('./routes/signup');
// app.use('/signup', routerSignUp);
// const routerSignIn = require('./routes/signin');
// app.use('/signin', routerSignIn);
// const routerUsuarios = require("./routes/usuarios");
// app.use("/usuarios", authValidator, routerUsuarios);
// const routerEventos = require("./routes/eventos");
// app.use("/eventos", authValidator, routerEventos);

app.get("/", (req, res) => {
    res.json(hotels);
});

app.get("/:id", (req, res) => {
    const myHotel = hotels.find((hotel) => hotel.id == req.params.id)
    res.json(myHotel)
});

app.get("/api/:name", (req, res) => {
    const resultHotels = hotels.filter(hotel => hotel.name.includes(req.params.name))
    res.json(resultHotels)
});

app.get("/*", (req, res) => {
    res.end("Archivo no encontrado");
});
// ----------------------------------------------------------
app.listen(app.get('port'), () => {
    console.log(`Server works on port: ${app.get('port')}`);
});