import { useState, useEffect } from "react";
import axios from "axios";

// Singleton to store fetched data
let sensorData: any[] = [];
let fetchPromise: Promise<void> | null = null;

// Function to fetch and cache all paginated data
export const fetchSensorData = async () => {
  if (fetchPromise) return fetchPromise;

  fetchPromise = new Promise<void>(async (resolve, reject) => {
    try {
      const limit = 5000; // Or adjust as needed
      let page = 1;
      let total = 0;
      let allData: any[] = [];
      let finished = false;

      console.log("Fetching sensor data in paginated chunks...");

      while (!finished) {
        const response = await axios.get(
          `https://plan-tree-amber.vercel.app/sensor-data?page=${page}&limit=${limit}`
        );

        const { data, total: totalRecords } = response.data;

        if (page === 1) total = totalRecords;

        if (!Array.isArray(data)) {
          throw new Error("Response data is not an array");
        }

        allData = [...allData, ...data];
        console.log(`Fetched page ${page}, ${data.length} records`);

        if (allData.length >= total) {
          finished = true;
        } else {
          page++;
        }
      }

      sensorData = allData;
      console.log(`Total sensor records fetched: ${sensorData.length}`);
      resolve();
    } catch (error) {
      console.error("Error fetching sensor data:", error);
      reject(error);
    } finally {
      fetchPromise = null;
    }
  });

  return fetchPromise;
};

// Hook for accessing sensorData
export const useSensorData = () => {
  const [data, setData] = useState(sensorData);
  const [loading, setLoading] = useState(!sensorData.length);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (sensorData.length === 0) {
      setLoading(true);
      fetchSensorData()
        .then(() => {
          setData(sensorData);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, []);

  return { data, loading, error };
};
