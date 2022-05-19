import { useQuery } from "react-query";
import axios from "axios";

export default function useGetAllVideos() {
  return useQuery("videos", () =>
    axios.get("https://eked.herokuapp.com/v1/api/video").then((res) => res.data)
  );
}

export function useGetJson(url) {
  return useQuery("json", () => {
    axios.get(url).then((res) => res.data);
  });
}
