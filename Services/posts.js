import axios from "axios";

const API_URL = `https://jsonplaceholder.typicode.com/`;

async function getPostById(id) {
    const url = `${API_URL}posts/${id}`;
    const reponse = await axios.get(url);
    return reponse.status === 200 ? reponse.data : null;
}
async function getCommentsByPostId(postId){
    const url = `${API_URL}posts/${postId}/comments`;
    const reponse = await axios.get(url);
    return reponse.status === 200 ? reponse.data : null;
}
export const apiPosts = {
    getPostById,
    getCommentsByPostId
}