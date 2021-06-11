const fetchHTTP = async (url = '', data = '') => {
  console.log('data',url.concat(data))
  const response = await fetch(data ? url.concat(data) : url, {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });
  return response.json().catch(error => console.log('fetch error', error));
};

export default fetchHTTP;
