import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://ali-express1.p.rapidapi.com/product/4000479928418',
  params: {language: 'en'},
  headers: {
    'X-RapidAPI-Key': '821756e08dmsh535a850fc734ba0p10eb4ajsnebe217850727',
    'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
  }
};

let randomClothes;

try {
	const response = await axios.request(options);
	randomClothes = [response.data];
} catch (error) {
	console.error(error);
} 

export default randomClothes;