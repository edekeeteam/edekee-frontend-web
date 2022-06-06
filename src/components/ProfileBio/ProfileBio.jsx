/* eslint-disable react/prop-types */
import style from "./ProfileBio.module.scss";

export default function ProfileBio({ bio }) {
  return <p className={style.profileBio}>{bio}</p>;
}
