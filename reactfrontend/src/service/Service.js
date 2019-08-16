const url = `http://localhost:3000/`;

export default {
    getHotels
}

async function getHotels() {
    const request = await fetch(`${url}`);
    const data = await request.json();
    return data;
}