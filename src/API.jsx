export const geoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": 'Your API Key Goes Here',
    "X-RapidAPI-Host": 'wft-geo-db.p.rapidapi.com'
  },
};

export const dateTimeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'Your API Key Goes Here',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	},
};

export const geoAPIUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=500000";

export const geoAPITime = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60/dateTime';

export const weatherAPIUrl = "https://api.openweathermap.org/data/2.5";
export const weatherAPIKey = "Your OpenWeather Map API Key";
