export const checkExistedLocation = (arr, location) => {
  return arr.includes(location) ? true : false
 }

export const getCityAndCountry = (location) => {
  const selectedCity = location.split(',')[0];
  const selectedCountry = location.split(',')[1];
  return {selectedCity, selectedCountry};
}

export const capitalizeWords = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};