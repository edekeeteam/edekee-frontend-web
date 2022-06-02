import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileModule from "../../modules/Profile/Profile";
// import { useAuthContext } from "../../context/AuthContext";
// eslint-disable-next-line import/no-named-as-default

function Profile() {
  const [profileDetails, setProfileDetails] = useState([]);
  // const { user } = useAuthContext();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/user/${userId}`, {
        headers: {
          Authorization: "token",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        const { data } = res.data;
        setProfileDetails(data);
        console.log(profileDetails);

        // res.data
      });
  }, []);
  return (
    <div>
      <ProfileModule data={profileDetails} />
      {/* <Tag topPos={40} leftPos={60} title="my name" price={5000} /> */}
      {/* <Tag topPos={40} leftPos={40} title="Names" price={600} />
      <Tag topPos={60} leftPos={50} title="Names haaaaa" price={600} />
      <Tag topPos={20} leftPos={40} title="Names haaaaadddsdsfsdf" price={600} />
      <Tag topPos={60} leftPos={20} title="Names haaaaa sdfdsfdsfds" price={600} /> */}
    </div>
    // <div>profile</div>
  );
}

export default Profile;
