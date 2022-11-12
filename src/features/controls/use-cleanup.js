import { useDispatch } from 'react-redux';
import { clearFilters } from './control-slice';

export const useCleanup = () => {
  const dispatch = useDispatch();

  const clearUp = () => {
    dispatch(clearFilters());
  };

  return [clearUp];
};
