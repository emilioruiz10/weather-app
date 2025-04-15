const weatherCodeMap = {
	0: { name: "Clear sky", image: "☀️" },
	1: { name: "Mainly clear", image: "🌤️" },
	2: { name: "Partly cloudy", image: "⛅" },
	3: { name: "Overcast", image: "⛅" },
	45: { name: "Fog", image: "☁️" },
	48: { name: "Depositing rime fog", image: "☁️" },
	51: { name: "Light drizzle", image: "🌦️" },
	53: { name: "Moderate drizzle", image: "🌦️" },
	55: { name: "Dense drizzle", image: "🌧️" },
	56: { name: "Light freezing drizzle", image: "🌧️" },
	57: { name: "Dense freezing drizzle", image: "🌧️" },
	61: { name: "Slight rain", image: "🌧️" },
	63: { name: "Moderate rain", image: "🌧️" },
	65: { name: "Heavy rain", image: "🌧️" },
	66: { name: "Light freezing rain", image: "🌧️" },
	67: { name: "Heavy freezing rain", image: "🌧️" },
	71: { name: "Slight snow fall", image: "🌨️" },
	73: { name: "Moderate snow fall", image: "🌨️" },
	75: { name: "Heavy snow fall", image: "❄️" },
	77: { name: "Snow grains", image: "❄️" },
	80: { name: "Slight rain showers", image: "🌧️" },
	81: { name: "Moderate rain showers", image: "🌧️" },
	82: { name: "Violent rain showers", image: "🌧️" },
	85: { name: "Slight snow showers", image: "🌨️" },
	86: { name: "Heavy snow showers", image: "❄️" },
	95: { name: "Thunderstorm", image: "⚡" },
	96: { name: "Thunderstorm with slight hail", image: "⛈️" },
	99: { name: "Thunderstorm with heavy hail", image: "⛈️" },
};

export const getWeatherDescription = (code) => {
	return weatherCodeMap[code] || "Unknown weather";
}
