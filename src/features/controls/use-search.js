import { useDispatch, useSelector } from 'react-redux';
import { searchSelector, setSearch } from './control-slice';

export const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
