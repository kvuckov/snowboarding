import axios from 'axios';

const host = "https://www.maestral-kitesurfing.com/api/v1/send-email"
// const host = "http://localhost:4000/api/v1/send-snwbrd-email"

const sendEmail = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(host, { data })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response ? error.response.data : error.message);
            });
    });
}

export default sendEmail;