const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the zodiac API!!",
        status: "success"
    });
});

app.get('/sign', (req, res) => {
    const sing = [
        {
            id: 1,
            name: "Aries",
            dateRange: "March 21 - April 19",
            element: "Fire",
            rulingPlanet: "Mars",
            symbol: "Ram",
            color: "Red",
            logo: "https://i.ibb.co/LQTxGRd/aries.jpg"
        },
        {
            id: 2,
            name: "Taurus",
            dateRange: "April 20 - May 20",
            element: "Earth",
            rulingPlanet: "Venus",
            symbol: "Bull",
            color: "Green",
            logo: "https://i.ibb.co/sPLrrwD/taurus.jpg"
        },
        {
            id: 3,
            name: "Gemini",
            dateRange: "May 21 - June 20",
            element: "Air",
            rulingPlanet: "Mercury",
            symbol: "Twins",
            color: "Yellow",
            logo: "https://i.ibb.co/mBzGGpw/gemini.jpg"
        },
        {
            id: 4,
            name: "Cancer",
            dateRange: "June 21 - July 22",
            element: "Water",
            rulingPlanet: "Moon",
            symbol: "Crab",
            color: "Silver",
            logo: "https://i.ibb.co/JChgNxq/cancer.jpg"
        },
        {
            id: 5,
            name: "Leo",
            dateRange: "July 23 - August 22",
            element: "Fire",
            rulingPlanet: "Sun",
            symbol: "Lion",
            color: "Gold",
            logo: "https://i.ibb.co/YPFY0nS/leo.jpg"
        },
        {
            id: 6,
            name: "Virgo",
            dateRange: "August 23 - September 22",
            element: "Earth",
            rulingPlanet: "Mercury",
            symbol: "Virgin",
            color: "Brown",
            logo: "https://i.ibb.co/Yb8PNTW/virgo.jpg"
        },
        {
            id: 7,
            name: "Libra",
            dateRange: "September 23 - October 22",
            element: "Air",
            rulingPlanet: "Venus",
            symbol: "Scales",
            color: "Pink",
            logo: "https://i.ibb.co/Gvftwzt/libra.jpg"
        },
        {
            id: 8,
            name: "Scorpio",
            dateRange: "October 23 - November 21",
            element: "Water",
            rulingPlanet: "Pluto",
            symbol: "Scorpion",
            color: "Black",
            logo: "https://i.ibb.co/1LfFsgM/scorpio.jpg"
        },
        {
            id: 9,
            name: "Sagittarius",
            dateRange: "November 22 - December 21",
            element: "Fire",
            rulingPlanet: "Jupiter",
            symbol: "Archer",
            color: "Purple",
            logo: "https://i.ibb.co/mzdQKZ5/sagittarius.jpg"
        },
        {
            id: 10,
            name: "Capricorn",
            dateRange: "December 22 - January 19",
            element: "Earth",
            rulingPlanet: "Saturn",
            symbol: "Goat",
            color: "Brown",
            logo: "https://i.ibb.co/rG10wTL/capricorn.jpg"
        },
        {
            id: 11,
            name: "Aquarius",
            dateRange: "January 20 - February 18",
            element: "Air",
            rulingPlanet: "Uranus",
            symbol: "Water Bearer",
            color: "Blue",
            logo: "https://i.ibb.co/bPCZ2DB/aquarius.jpg"
        },
        {
            id: 12,
            name: "Pisces",
            dateRange: "February 19 - March 20",
            element: "Water",
            rulingPlanet: "Neptune",
            symbol: "Fish",
            color: "Light Green",
            logo: "https://i.ibb.co/9wnR1f1/pisces.jpg"
        }
    ];
    res.json(sing);
})

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})