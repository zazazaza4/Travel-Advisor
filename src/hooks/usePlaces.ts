import { useEffect, useState } from "react";

import TravelApi, { BoundaryParams, TypeEnum } from "../api/travelApi";

export const usePlaces = (type: TypeEnum, boundary: BoundaryParams) => {
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);

      try {
        const placesData = await TravelApi.getList(type, boundary);
        setPlaces(placesData);
      } catch (e) {
        console.log(e);
        setError("Error fetching places");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [type, boundary]);

  return { places, loading, error };
};
