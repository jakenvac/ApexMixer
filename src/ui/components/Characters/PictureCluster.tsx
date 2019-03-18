import React from "react";
import styled from "styled-components";

import ProfilePicture from "./ProfilePicture";

interface PictureClusterProps {
  Classes: string[];
}

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 430px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: center;
`;

const RenderProfilePictures = (props: PictureClusterProps) => {
  const classes = props.Classes;
  const profilePictures = classes.map((c, i) => <ProfilePicture player={c} key={i} />);
  return <>{profilePictures}</>;
};

const PictureCluster = (props: PictureClusterProps) => {
  return (
    <PictureContainer>
      <RenderProfilePictures {...props} />
    </PictureContainer>
  );
};

export default PictureCluster;
