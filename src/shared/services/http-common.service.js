import axios from "axios";

export default axios.create({
    baseURL:'https://my-json-server.typicode.com/FrancoSurco/myjsonserver',
    headers: {'Content-type': 'application/json'}
})