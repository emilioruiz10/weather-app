const weatherCodeMap = {
	0: {
		name: "Clear sky",
		image: "/images/sunny.png",
		background: "/images/bg-sunny.webp",
	},
	1: {
		name: "Mainly clear",
		image: "/images/sunny.png",
		background: "/images/bg-sunny.webp",
	},
	2: {
		name: "Partly cloudy",
		image: "/images/cloudy.png",
		background: "/images/bg-cloudy.jpg",
	},
	3: {
		name: "Overcast",
		image: "/images/cloudy.png",
		background: "/images/bg-cloudy.jpg",
	},
	45: {
		name: "Fog",
		image: "/images/fog.png",
		background: "/images/bg-fog.jpg",
	},
	48: {
		name: "Depositing rime fog",
		image: "/images/fog.png",
		background: "/images/bg-fog.jpg",
	},
	51: {
		name: "Light drizzle",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	53: {
		name: "Moderate drizzle",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	55: {
		name: "Dense drizzle",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	56: {
		name: "Light freezing drizzle",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	57: {
		name: "Dense freezing drizzle",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	61: {
		name: "Slight rain",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	63: {
		name: "Moderate rain",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	65: {
		name: "Heavy rain",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	66: {
		name: "Light freezing rain",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	67: {
		name: "Heavy freezing rain",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	71: {
		name: "Slight snow fall",
		image: "/images/sonw.png",
		background: "/images/bg-snow.jpg",
	},
	73: {
		name: "Moderate snow fall",
		image: "/images/sonw.png",
		background: "/images/bg-snow.jpg",
	},
	75: {
		name: "Heavy snow fall",
		image: "/images/sonw.png",
		background: "/images/bg-snow.jpg",
	},
	77: {
		name: "Snow grains",
		image: "/images/sonw.png",
		background: "/images/bg-snow.jpg",
	},
	80: {
		name: "Slight rain showers",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	81: {
		name: "Moderate rain showers",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	82: {
		name: "Violent rain showers",
		image: "/images/rain.png",
		background: "/images/bg-rain.webp",
	},
	85: {
		name: "Slight snow showers",
		image: "/images/sonw.png",
		background: "/images/bg-snow.jpg",
	},
	86: {
		name: "Heavy snow showers",
		image: "/images/sonw.png",
		background: "/images/bg-snow.jpg",
	},
	95: {
		name: "Thunderstorm",
		image: "/images/thunder.png",
		background: "/images/bg-snow.jpg",
	},
	96: {
		name: "Thunderstorm with slight hail",
		image: "/images/thunder.png",
		background: "/images/bg-snow.jpg",
	},
	99: {
		name: "Thunderstorm with heavy hail",
		image: "/images/thunder.png",
		background: "/images/bg-snow.jpg",
	},
};

export const getWeatherDescription = (code) => {
	return weatherCodeMap[code] || "Unknown weather";
};
