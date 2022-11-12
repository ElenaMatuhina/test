import { useDetails } from './use-details';
import { Info } from './Info';

export const CountryDetail = ({ name, navigate }) => {
  const { currentCountry, status, error } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h3>Loading...</h3>}
      {error && <h2>Can't fetch data</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
