import { useEffect, useState } from "react";

export default function HotelsDetails({ hotelId }) {
  const [hotelData, setHotelData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHotelData() {
      try {
        const response = await fetch(`/api/hotels/${hotelId}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error fetching hotel data: ${response.status}`);
        }
        const data = await response.json();
        setHotelData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchHotelData();
  }, [hotelId]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
        {isLoading ? (
          <p className="text-center">Loading hotel details...</p>
        ) : error ? (
          <p className="text-center">Error: {error.message}</p>
        ) : hotelData ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">{hotelData.name}</h1>
            <p className="text-gray-700 mb-2">{hotelData.description}</p>
            <p className="text-gray-700 mb-2">Address: {hotelData.address}</p>
            <p className="text-gray-700 mb-2">Rating: {hotelData.rating}</p>
            {/* Add more hotel details here */}
          </div>
        ) : (
          <p className="text-center">No hotel data available.</p>
        )}
      </div>
    </div>
  );
}
