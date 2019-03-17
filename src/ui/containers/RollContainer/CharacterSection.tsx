import React from "react";
import Title from "../../components/Title";
import PictureCluster from "../../components/Characters/PictureCluster";

const CharacterSection = props => {
  return (
    <>
      <Title type="h2" align="center">
        CHAMPIONS
      </Title>
      <PictureCluster Classes={props.characters} />
    </>
  );
};

export default CharacterSection;
