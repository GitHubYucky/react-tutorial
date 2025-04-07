// src/components/DataDisplay.tsx
import React from 'react';
import { useSelector } from 'react-redux';

const DataDisplay: React.FC = () => {
  const { data, loading, error } = useSelector((state: any) => state.data);  // Reduxからデータを取得

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Fetched Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DataDisplay;
