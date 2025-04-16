import { useContext } from 'react';
import { InternshipContext } from '../contexts/InternshipContext';

export const useInternship = () => {
  const context = useContext(InternshipContext);

  if (!context) {
    throw new Error('useInternship deve ser usado dentro de um <InternshipProvider>');
  }

  return context;
};