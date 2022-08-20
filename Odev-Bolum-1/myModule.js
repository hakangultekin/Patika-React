import axios from "axios";

async function GetData(userid){
    const baseUserUrl = "https://jsonplaceholder.typicode.com/users/";
    const basePostUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
    let user = await axios(baseUserUrl + userid);
    let posts = await axios(basePostUrl + userid);

    let newObj = {...user.data}
    newObj['posts'] = posts.data
    return newObj;
}

export default GetData;