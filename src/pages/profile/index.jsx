import React from "react";
// eslint-disable-next-line import/no-named-as-default
import Tag from "../../components/Tag/Tag";

function Profile() {
  return (
    <div style={{ width: "100%", height: "500px", position: "relative", backgroundColor: "green" }}>
      {/* <Tag topPos={40} leftPos={60} title="my name" price={5000} /> */}
      <Tag topPos={40} leftPos={40} title="Names" price={600} />
      <Tag topPos={60} leftPos={50} title="Names haaaaa" price={600} />
      <Tag topPos={20} leftPos={40} title="Names haaaaadddsdsfsdf" price={600} />
      <Tag topPos={60} leftPos={20} title="Names haaaaa sdfdsfdsfds" price={600} />
    </div>
    // <div>profile</div>
  );
}

export default Profile;
