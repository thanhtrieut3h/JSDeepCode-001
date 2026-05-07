import { apiWeather } from "./Services/weather.js";
import { apiPosts } from "./Services/posts.js";

async function showWeather(city){
    const dt = await apiWeather.getWeatherByCity(city);
    return dt; // promise
}
/*
showWeather("HaNoi").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/
async function post(){
    const p = await apiPosts.getPostById(1);
    if(p != null){
        const idPost = (p.id === undefined) ? 0 : p.id;
        const cmt = await apiPosts.getCommentsByPostId(idPost);
        console.log(cmt);
    }
}
post();