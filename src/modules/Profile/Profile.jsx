/* eslint-disable react/prop-types */
import React from "react";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

export default function ProfileModule({ data, isCurrentUser }) {
  return (
    <>
      <ProfileHeader data={data} isCurrentUser={isCurrentUser} />
      <ProfileBody />
    </>
  );
}

// export default ProfileModule;
