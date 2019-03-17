import React from "react";
import styled from "styled-components";

import { Location } from "../../../ApexLib/Locations/Location";

// @ts-ignore
import MapSvg from "../../assets/almap_min.svg";
import Title from "../../components/Title";

interface LocationSectionProps {
  locations: Location[];
}

const MapContainer = styled.div`
  margin: auto;
  max-width: 580px;
`;

const ImageContainer = styled.div`
  height: 0;
  max-width: 100%;
  padding-bottom: 100%;

  background-image: url(${MapSvg});
  background-position: center;
  background-size: 100%;

  position: relative;
`;

const HighlightStyled = styled.div`
  position: absolute;
  top: ${p => p.coords.top}%;
  left: ${p => p.coords.left}%;
  width: ${p => p.coords.width}%;
  height: ${p => p.coords.height}%;

  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(100, 100, 255, 0.2);
`;

const RenderLocations = ({ locations }) => {
  return <>{locations.map(l => RenderHighlight(l))}</>;
};

const RenderHighlight = (location: Location) => {
  return <HighlightStyled coords={location.coords} />;
};

const LocationSection = (props: LocationSectionProps) => {
  const { locations } = props;
  return (
    <>
    <Title type="h2" align="center">DROP ZONE</Title>
    <MapContainer>
      <ImageContainer>
        <RenderLocations locations={locations} />
      </ImageContainer>
    </MapContainer>
    </>
  );
};

export default LocationSection;
