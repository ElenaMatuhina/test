import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadingNetCountries, selectNetCountries } from './detail-slice';

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNetCountries);

  useEffect(() => {
    if (borders.length) dispatch(loadingNetCountries(borders));
  }, [borders, dispatch]);

  return neighbors;
};
