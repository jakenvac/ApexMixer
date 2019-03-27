import React from "react";

// @ts-ignore
import Title from "../../components/Title";
import LocationsMap from "../../components/Locations/LocationsMap";

interface LocationSectionProps {
  locations: string[];
}

const LocationSection = (props: LocationSectionProps) => {
  const { locations } = props;
  return (
    <>
      <Title type="h2" align="center">
        DROP ZONE
      </Title>
      <LocationsMap locations={locations} />
    </>
  );
};

export default LocationSection;
