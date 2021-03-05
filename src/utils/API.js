import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/?results=25';

const API = {
    getEmployees: function() {
        return axios.get(BASEURL);
    }
};

export default API;
