import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const useProducts = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useProducts must be used within DataProvider');
  }
  return context;
};
