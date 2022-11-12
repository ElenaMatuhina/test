import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetails, loadCountryByName, selectDetail } from "./detail-slice";

export const useDetails = (name) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => dispatch(clearDetails());
  }, [name, dispatch]);

  const details = useSelector(selectDetail);
  
  return details;

}