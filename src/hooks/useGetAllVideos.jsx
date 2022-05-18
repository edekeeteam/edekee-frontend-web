import { useQuery } from "react-query";
import axios from "axios";

export default function useGetAllVideos() {
  return useQuery("videos", () =>
    axios.get("https://eked.herokuapp.com/v1/api/videos").then((res) => res.data)
  );
}
