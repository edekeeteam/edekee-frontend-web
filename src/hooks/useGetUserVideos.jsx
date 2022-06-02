import { useQuery } from "react-query";
import axios from "axios";

export default function useGetAllVideos() {
  return useQuery("videos", () =>
    axios
      .get("http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/video", {
        headers: {
          Authorization: "token",
        },
      })
      .then((res) => res.data)
  );
}
