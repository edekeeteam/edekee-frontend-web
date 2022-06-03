/* eslint-disable react/prop-types */
import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

function ProfileModule({ data, isCurrentUser }) {
  return <ProfileHeader data={data} isCurrentUser={isCurrentUser} />;
}

export default ProfileModule;
