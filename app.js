

async function addMarker(){
  
  const response = await fetch('./location.json');
  const resData = await response.json();
  console.log(resData);
}