import React, { useState, useEffect } from 'react';

const WeatherDetailsComponent = () => {
  const [selectedCity, setSelectedCity] = useState('chennai');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '08cb8790e5874cf386b115631242201';

  let cityList = ['ahmedabad', 'bengaluru', 'chennai', 'delhi', 'hyderabad', 'jaipur', 'kolkata', 'mumbai', 'pune', 'surat', 'london', 'paris', 'athens', 'moscow', 'istanbul', 'dubai', 'mumbai', 'colombo', 'almaty', 'bangkok', 'beijing', 'tokyo', 'sydney', 'auckland', 'honolulu', 'anchorage', 'losangeles', 'denver', 'chicago', 'newyork', 'buenosaires', 'riodejaneiro', 'capetown', 'cairo', 'riyadh', 'tehran', 'karachi', 'dhaka', 'jakarta', 'wellington','Wayanad','cochin'];

  useEffect(() => {
    fetchWeatherData();
  }, [selectedCity, apiKey]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}&aqi=no`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error('Error while fetching weather data:', error);
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const getWeatherImage = () => {
    if (!weatherData) return null;
    const condition = weatherData.current.condition.text.toLowerCase();
    return condition.includes('cloudy') ? 'https://tse3.mm.bing.net/th?id=OIP.T4ma_rmCdsaIgLXbwUxyxwHaDF&pid=Api&P=0&h=180' :
      'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        backgroundImage: `url(${getWeatherImage()})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px',
        color: '#fff',
      }}
    >
      <h1>Weather details of some important cities</h1>
      <label htmlFor="citySelect" style={{ display: 'block', marginBottom: '10px', color: '#fff' }}>Select City:</label>
      <select id="citySelect" value={selectedCity} onChange={handleCityChange} style={{ width: '50%', padding: '10px', borderRadius: '4px', border: '1px solid #fff', color: '#333', appearance: 'auto' }}>
        {cityList.map((data, index) => (
          <option key={index} value={data}>{data}</option>
        ))}
      </select>

      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ color: 'red' }}>Weather in {selectedCity}</h2>
          <p style={{ color: 'red' }}>Temperature: {weatherData.current.temp_c}°C</p>
          <p style={{ color: 'red' }}>Condition: {weatherData.current.condition.text}</p>
          <p style={{ color: 'red' }}>Humidity: {weatherData.current.humidity}%</p>
          <p style={{ color: 'red' }}>Wind Speed: {weatherData.current.wind_kph} km/h</p>
          <p style={{ color: 'red' }}>Pressure: {weatherData.current.pressure_mb} mb</p>
        </div>
      )}

      <div style={{ marginTop: '20px', textAlign: 'left', color: 'black' , backgroundColor :'white'}}>
        <h2 style={{ textAlign: 'center' }}>Climate Impact Insights</h2>
        <p style={{ textAlign: 'left' }}>1. Welcome to our Climate Change Weather App! Delve into real-time weather conditions in cities worldwide and discover their impact on our planet.</p>
        <p style={{ textAlign: 'left' }}>2. Explore and gain insights into the current climate conditions, including temperature, humidity, wind speed, and more. Our app not only provides weather updates but also connects you with the broader narrative of climate change.</p>
        <p style={{ textAlign: 'left' }}>3. Select a city from the dropdown menu to observe the intricate relationship between human activities, local ecosystems, and the changing climate. Each weather detail tells a story of environmental shifts and the need for sustainable practices.</p>
        <p style={{ textAlign: 'left' }}>4. Stay connected to climate realities and plan your day with accurate weather information, fostering a deeper understanding of the ongoing changes in our environment. Use this knowledge to make informed choices that contribute to a more sustainable and resilient future.</p>
        <p style={{ textAlign: 'left' }}>5. Whether you're planning a trip, heading out for work, or simply curious about the weather, our Climate Change Weather App is your gateway to understanding and addressing environmental challenges. Take a moment to reflect on the interconnectedness of our actions and their impact on the global climate.</p>
        <p style={{ textAlign: 'left' }}>6. Bookmark your favorite cities to track their climate updates and join us in building a community committed to climate awareness. Embrace a sustainable lifestyle by exploring eco-friendly tips and practices integrated into our app. Together, let's strive for a harmonious coexistence with nature, one weather update at a time!</p>
        <p style={{ textAlign: 'center' }}>Stay tuned for more features and enhancements as we work together towards a sustainable future!</p>
      </div>
    </div>
  );
};

export default WeatherDetailsComponent;