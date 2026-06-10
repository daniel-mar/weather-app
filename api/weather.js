export default async function handler(req, res) {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City parameter is required'});
    }

    // Access key safely injecting into process environment
    const apiKey = process.env.WEATHER_API_KEY;
    const baseUrl = 'https://api.weatherapi.com/v1/forecast.json';
    const url = `${baseUrl}?key=${apiKey}&q=${city}&days=5&api=no&alerts=no`;

    try {
        const apiResonse = await fetch(url);

        if (!apiResonse.ok) {
            return res.status(apiResonse.status).json({ error: 'Failed fetching weather data' });
        }

        const data = await apiResonse.json();
        return res.status(200).json(data);
    }   catch (error) {
        return response.status(500).json({ error: 'Internal Server Error' });
    }


}