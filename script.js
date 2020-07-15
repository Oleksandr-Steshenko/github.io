const response = fetch(
  "https://my-json-server.typicode.com/IlyaLytvynov/ads-box-server/ads"
);
const content = response.json();

console.log(content[0].productUrl);
