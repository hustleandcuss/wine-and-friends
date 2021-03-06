import axios from "axios";
import {endpoint} from "@/config.js";

// Mocking requests
// You should comment this section once you have a backend running
// import MockAdapter from "axios-mock-adapter";
// let mock = new MockAdapter(axios, { delayResponse: 1000 });
// mock.onPost("/").reply(200, { dog: true });
// mock.onPost("/feedback").reply(200, { message: "Feedback received" });
// End of the mock implementation section

export function getRandomWine() {
    return new Promise(function (resolve, reject) {
        axios
            .get(endpoint + "/random2")
            .then(response => {
                resolve({
                    wine: response.data
                });
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function getDrunkFast(params) {
    return new Promise(function (resolve, reject) {
        axios
            .get(endpoint + "/drunkfast", {params})
            .then(response => {
                resolve({
                    message: response.data
                });
            })
            .catch(error => {
                reject(error);
            });
    });
}

// export function feedbackPhoto(photo, dog) {
//   return new Promise(function(resolve, reject) {
//     axios
//       .post(endpoint + "/feedback", {
//         photo: btoa(photo),
//         dog: dog
//       })
//       .then(() => {
//         resolve();
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

export default {
    getRandomWine,
    getDrunkFast
};
