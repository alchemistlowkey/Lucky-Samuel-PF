import axios from 'axios';

export async function GET({ url, request }) {
    const visitor_name = url.searchParams.get('visitor_name') || 'Visitor';
    const client_ip = request.headers.get('x-forwarded-for') || request.headers.get('client-ip') || '127.0.0.1';

    const location = url.searchParams.get('location') || 'New York'

    // Get the city location (for simplicity, let's use New York)

    // WeatherAPI.com API details
    const apiKey = '53255cbf84a046b4b9f155901240107';
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    // Fetch the weather data
    let temperature = 'unknown';
    try {
        const response = await axios.get(weatherApiUrl);
        temperature = response.data.current.temp_c;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return {
            status: 500,
            body: { message: 'Internal Error' }
        };
    }

    const greeting = `Hello, ${visitor_name}!, the temperature is ${temperature} degrees Celsius in ${location}`;

    const responseBody = {
        client_ip: client_ip,
        location: location,
        greeting: greeting
    };

    return new Response(JSON.stringify(responseBody), { status: 200 });
}
