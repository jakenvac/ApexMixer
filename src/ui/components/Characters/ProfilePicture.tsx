import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProfilePictureProps {
  player?: string;
  key?: any;
}

const PlayerData = {
  bangalore: { filter: "hue-rotate(0deg)", icon: "bomb", name:"Bangalore" },
  bloodhound: { filter: "hue-rotate(10deg)", icon: "eye", name:"Bloodhound" },
  lifeline: { filter: "hue-rotate(-70deg)", icon: "heartbeat", name:"Lifeline" },
  caustic: { filter: "hue-rotate(50deg) saturate(.4)", icon: "radiation", name:"Caustic" },
  gibraltar: { filter: "hue-rotate(50deg)", icon: "shield-alt", name:"Gibraltar" },
  mirage: { filter: "hue-rotate(40deg)", icon: "running", name:"Mirage" },
  pathfinder: { filter: "hue-rotate(-170deg)", icon: "robot", name:"Pathfinder" },
  wraith: { filter: "hue-rotate(-100deg)", icon: "ghost", name: "Wraith" },
  none: { filter: "saturate(0)", icon: "dice", name: "-" }
};

const Parallelogram = styled.div`
  width: 150px;
  height: 100px;
  transform: skew(-20deg);
  position: relative;
  overflow: hidden;
  border: 5px solid ${p => p.theme.colors.black};
  margin: ${p => p.theme.sizes.sm.padding};
`;

const Unskew = styled.div`
  transform: skew(20deg);
  width: 126%;
  height: 100%;
  position: relative;
  left: -20px;
  padding: 0px 42px;
  &:before {
    z-index: -99999;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-image: url(${require("../../assets/IconBg.jpg")});
    filter: ${p => p.filter};
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding-bottom: 25px;
  padding-left: 10px;
`;

const Label = styled.div`
  text-align: center;
  background: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  position: absolute;
  bottom: -4px;
  left: -20px;
  right: 0px;
  font-family: ${p => p.theme.fonts.title};
  text-transform: uppercase;
`;

const ProfilePicture = (props: ProfilePictureProps) => {
  const { player = "none" } = props;
  const PlayerInfo = PlayerData[player.toLowerCase()];
  const PlayerFilter = PlayerInfo.filter;

  return (
    <Parallelogram>
      <Unskew filter={PlayerFilter}>
        <Body>
          <FontAwesomeIcon color="white" icon={PlayerInfo.icon} />
        </Body>
        <Label>{PlayerInfo.name}</Label>
      </Unskew>
    </Parallelogram>
  );
};

export default ProfilePicture;
