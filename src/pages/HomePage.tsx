// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../features/data/dataSlice';
import DataDisplay from '../components/DataDisplay';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData('https://restcountries.com/v3.1/all') as any);  // APIからデータを取得
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <DataDisplay />  {/* 取得したデータを表示 */}
    </div>
  );
};

export default HomePage;
