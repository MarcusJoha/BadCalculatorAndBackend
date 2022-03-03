import axios from "axios";

export function calculate(firstNumber, secondNumber, operator) {
    console.log("Fra api.js", firstNumber + operator + secondNumber)
    return axios
      .post("http://localhost:4040/calculation", {
         firstNumber: firstNumber,
         secondNumber: secondNumber,
         operator: operator,
        })
        .then((result) => {
            console.log("Answer", result.data["answer"])
            return result.data["answer"];
        })
        .catch((error) => {
            console.warn(error)
        });
}


export function getLog() {
    return axios.get("http://localhost:4040/calculation/all").then(response => {
        console.log(response.data)
        return response.data;
    })
}