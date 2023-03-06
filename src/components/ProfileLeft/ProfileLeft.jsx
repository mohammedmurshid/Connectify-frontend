import React from "react";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import InfoCard from "../../components/InfoCard/InfoCard";
import FollowersCard from "../../components/FollowersCard/FollowersCard";

const ProfileLeft = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
