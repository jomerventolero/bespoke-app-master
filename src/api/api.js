import axios from 'axios'

const api = axios.get('http://127.0.0.1:8000/api')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

export default api