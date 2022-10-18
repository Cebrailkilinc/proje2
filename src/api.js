import axios from "axios"

export default class Service{
   async userService(){
      return await axios.get("https://jsonplaceholder.typicode.com/users")
    }
}