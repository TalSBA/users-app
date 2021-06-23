import axios from "axios";

const users = [
    {
        "FullName": "Jon Doe",
        "DateOfBidrh": "26/09/1989",
        "ID": "230496504"
    },
    {
        "FullName": "Jon Doe",
        "DateOfBidrh": "26/09/1989",
        "ID": "230496504"
    },
    {
        "FullName": "Jon Doe",
        "DateOfBidrh": "26/09/1989",
        "ID": "230496504"
    }

]

export function getUsers() {
   return axios.get('https://localhost:44390/weatherforecast/GetUsers').then(response =>  response.data
    );
}

export function saveUser(user) {

}