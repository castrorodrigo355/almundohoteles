import axios from "axios"

const getHoteles = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/")
            .then(response => dispatch({
                type: "GET_HOTELES",
                hoteles : response.data
            })
    )}
}

const verHotel = hotel => {
    return (dispatch) => {
        const idHotel = hotel.id
        axios.get(`http://localhost:3000/${idHotel}`)
            .then(response => dispatch({
                type: "GET_HOTEL",
                selectedHotel : response.data
            })
        )
    }
}

const funcPalabra = e => {
    return {
        type: "ADD_LETRA",
        letras: e
    }
}

const search = (e, name) => {
    e.preventDefault();
    return (dispatch) => {
        axios.get("http://localhost:3000/api/" + name)
            .then(response => dispatch({
                type: "GET_SEARCH_NAME",
                hoteles : response.data
            })
    )}
}

export { getHoteles, verHotel, funcPalabra, search}