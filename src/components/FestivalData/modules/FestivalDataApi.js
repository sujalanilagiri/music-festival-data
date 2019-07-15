import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 150000;

export default class FestivalDataApi {
  static get() {
    
    return axios
      .get("/v1/festivals")
      .catch(function(error) {
        console.log('Api Call Failed',error)
      })
  }
  
}