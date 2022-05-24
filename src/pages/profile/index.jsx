import React, { useEffect } from "react";
import axios from "axios";
import ProfileModule from "../../modules/Profile/Profile";
// eslint-disable-next-line import/no-named-as-default

function Profile() {
  useEffect(() => {
    const userId = "0147743e-bba3-4b9d-bf17-3c8080e477ea";
    axios
      .get(`https://eked.herokuapp.com/v1/api/user/${userId}`, {
        headers: {
          Authorization: "token",
        },
      })
      .then((res) => {
        console.log(res.data.data);

        // res.data
      });
  }, []);
  return (
    <div>
      <ProfileModule />
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
