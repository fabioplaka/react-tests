import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};