// import React, { useState } from "react";
// import axios from "axios";
import { useParams, Outlet } from "react-router-dom";
import ProfileModule from "../../modules/Profile/Profile";
import useGetProfile from "../../hooks/profile/useGetProfile";
// eslint-disable-next-line import/no-named-as-default

function Profile() {
  const { userId } = useParams();

  const { data, isLoading } = useGetProfile(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data) {
    return (
      <div>
        <ProfileModule data={data} />
        <Outlet />
      </div>
    );
  }
}

export default Profile;
