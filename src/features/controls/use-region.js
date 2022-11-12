import { useDispatch, useSelector } from 'react-redux';
import { searchRegion, setRegions } from './control-slice';

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(searchRegion);

  const handleReg = (reg) => {
    dispatch(setRegions(reg?.value || ''));
  };

  return [region, handleReg];
};
