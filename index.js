const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the zodiac API!!",
        status: "success"
    });
});

app.get('/sign', (req, res) => {
    const sign = [
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
    res.json(sign);
});

app.get('/sign/:id', (req, res) => {
    const signId = [
        {
            id: 1,
            name: "Aries",
            dateRange: "March 21 - April 19",
            element: "Fire",
            rulingPlanet: "Mars",
            symbol: "Ram",
            color: "Red",
            strengths: [
                "Courageous",
                "Determined",
                "Confident",
                "Enthusiastic",
                "Optimistic",
                "Honest",
                "Passionate"
            ],
            weaknesses: [
                "Impatient",
                "Moody",
                "Impulsive",
                "Aggressive"
            ],
            description: "Aries is a leader, impulsive and adventurous. They often take initiative and have a competitive nature that drives them to be pioneers in whatever they do.",
            compatibility: [
                "Leo",
                "Sagittarius",
                "Gemini",
                "Aquarius"
            ]
        },
        {
            id: 2,
            name: "Taurus",
            dateRange: "April 20 - May 20",
            element: "Earth",
            rulingPlanet: "Venus",
            symbol: "Bull",
            color: "Green",
            strengths: [
                "Reliable",
                "Patient",
                "Practical",
                "Devoted",
                "Responsible",
                "Stable"
            ],
            weaknesses: [
                "Stubborn",
                "Possessive",
                "Uncompromising"
            ],
            description: "Taurus values stability and security. They are practical and reliable people, but they can also be very stubborn once they've made up their minds.",
            compatibility: [
                "Virgo",
                "Capricorn",
                "Cancer",
                "Pisces"
            ]
        },
        {
            id: 3,
            name: "Gemini",
            dateRange: "May 21 - June 20",
            element: "Air",
            rulingPlanet: "Mercury",
            symbol: "Twins",
            color: "Yellow",
            strengths: [
                "Affectionate",
                "Curious",
                "Adaptable",
                "Quick-witted",
                "Expressive"
            ],
            weaknesses: [
                "Nervous",
                "Inconsistent",
                "Indecisive"
            ],
            description: "Gemini is the sign of duality and communication. People born under this sign are quick thinkers and have a great ability to adapt to new situations.",
            compatibility: [
                "Libra",
                "Aquarius",
                "Aries",
                "Leo"
            ]
        },
        {
            id: 4,
            name: "Cancer",
            dateRange: "June 21 - July 22",
            element: "Water",
            rulingPlanet: "Moon",
            symbol: "Crab",
            color: "Silver",
            strengths: [
                "Tenacious",
                "Highly imaginative",
                "Loyal",
                "Emotional",
                "Sympathetic",
                "Persuasive"
            ],
            weaknesses: [
                "Moody",
                "Pessimistic",
                "Suspicious",
                "Manipulative",
                "Insecure"
            ],
            description: "Cancer is emotional and protective. Know for their loyalty and string attachment to family and home, they have a natural instinct to protect those they love.",
            compatibility: [
                "Scorpio",
                "Pisces",
                "Taurus",
                "Virgo"
            ]
        },
        {
            id: 5,
            name: "Leo",
            dateRange: "July 23 - August 22",
            element: "Fire",
            rulingPlanet: "Sun",
            symbol: "Lion",
            color: "Gold",
            strengths: [
                "Creative",
                "Passionate",
                "Generous",
                "Warm-hearted",
                "Cheerful",
                "Humorous"
            ],
            weaknesses: [
                "Arrogant",
                "Stubborn",
                "Self-centered",
                "Lazy",
                "Inflexible"
            ],
            description: "Leo is charismatic, energetic, and confident. They love being the center of attention and are highly creative, though they can sometimes appear domineering.",
            compatibility: [
                "Aries",
                "Sagittarius",
                "Gemini",
                "Libra"
            ]
        },
        {
            id: 6,
            name: "Virgo",
            dateRange: "August 23 - September 22",
            element: "Earth",
            rulingPlanet: "Mercury",
            symbol: "Virgin",
            color: "Brown",
            strengths: [
                "Loyal",
                "Analytical",
                "Kind",
                "Hardworking",
                "Practical"
            ],
            weaknesses: [
                "Shy",
                "Overly critical",
                "Perfectionist",
                "Worried"
            ],
            description: "Virgo is the sign of perfection and analysis. People born under this sign are detail-oriented and organized, but they can be overly critical of themselves and others.",
            compatibility: [
                "Taurus",
                "Capricorn",
                "Cancer",
                "Scorpio"
            ]
        },
        {
            id: 7,
            name: "Libra",
            dateRange: "September 23 - October 22",
            element: "Air",
            rulingPlanet: "Venus",
            symbol: "Scales",
            color: "Pink",
            strengths: [
                "Diplomatic",
                "Cooperative",
                "Fair-minded",
                "Social"
            ],
            weaknesses: [
                "Indecisive",
                "Avoids confrontations",
                "Holds grudges",
                "Self-pitying"
            ],
            description: "Libra is the sign of justice and balance. They always seek harmony in relationships and have a strong sense of diplomacy but can be indecisive when making decisions.",
            compatibility: [
                "Gemini",
                "Aquarius",
                "Leo",
                "Sagittarius"
            ]
        },
        {
            id: 8,
            name: "Scorpio",
            dateRange: "October 23 - November 21",
            element: "Water",
            rulingPlanet: "Pluto",
            symbol: "Scorpion",
            color: "Black",
            strengths: [
                "Brave",
                "Passionate",
                "Faithful",
                "Tenacious"
            ],
            weaknesses: [
                "Distrustful",
                "Jealous",
                "Secretive",
                "Violent"
            ],
            description: "Scorpio is an intense and emotional sign. People born under this sign are deeply passionate and determined. They can be very secretive and mysterious.",
            compatibility: [
                "Cancer",
                "Pisces",
                "Virgo",
                "Capricorn"
            ]
        },
        {
            id: 9,
            name: "Sagittarius",
            dateRange: "November 22 - December 21",
            element: "Fire",
            rulingPlanet: "Jupiter",
            symbol: "Archer",
            color: "Purple",
            strengths: [
                "Generous",
                "Idealistic",
                "Great sense of humor"
            ],
            weaknesses: [
                "Impatient",
                "Makes promises they can't keep",
                "Tactless"
            ],
            description: "Sagittarius is an adventurous and optimistic sign. They enjoy exploring new ideas and places and are always seeking to expand their horizons but can sometimes be reckless.",
            compatibility: [
                "Aries",
                "Leo",
                "Libra",
                "Aquarius"
            ]
        },
        {
            id: 10,
            name: "Capricorn",
            dateRange: "December 22 - January 19",
            element: "Earth",
            rulingPlanet: "Saturn",
            symbol: "Goat",
            color: "Brown",
            strengths: [
                "Responsible",
                "Disciplined",
                "Self-control",
                "Good leadership"
            ],
            weaknesses: [
                "Know-it-all",
                "Unforgiving",
                "Condescending",
                "Pessimistic"
            ],
            description: "Capricorn is an ambitious and pragmatic sign. They have a strong work ethic and set high goals but can be somewhat cold or distant in their approach to relationships.",
            compatibility: [
                "Taurus",
                "Virgo",
                "Scorpio",
                "Pisces"
            ]
        },
        {
            id: 11,
            name: "Aquarius",
            dateRange: "January 20 - February 18",
            element: "Air",
            rulingPlanet: "Uranus",
            symbol: "Water Bearer",
            color: "Blue",
            strengths: [
                "Progressive",
                "Original",
                "Independent",
                "Humanitarian"
            ],
            weaknesses: [
                "Aloof",
                "Temperamental",
                "Uncompromising",
                "Emotionally detached"
            ],
            description: "Aquarius is visionary, original, and humanitarian. People under this sign are innovative and enjoy breaking away from the conventional, although they can seem detached or distant.",
            compatibility: [
                "Gemini",
                "Libra",
                "Sagittarius",
                "Aries"
            ]
        },
        {
            id: 12,
            name: "Pisces",
            dateRange: "February 19 - March 20",
            element: "Water",
            rulingPlanet: "Neptune",
            symbol: "Fish",
            color: "Light Green",
            strengths: [
                "Compassionate",
                "Artistic",
                "Intuitive",
                "Gentle",
                "Wise",
                "Musical"
            ],
            weaknesses: [
                "Fearful",
                "Overly trusting",
                "Sad",
                "Tendency to scape reality"
            ],
            description: "Pisces is empathetic, sensitive, and spiritual. They are deeply compassionate individuals who often from an emotional connection with their surroundings, but they may be susceptible to external influences and have an escapist nature.",
            compatibility: [
                "Cancer",
                "Scorpio",
                "Taurus",
                "Capricorn"
            ]
        }
    ];
    
    const element = parseInt(req.params.id);
    const sign = signId.find(e => e.id === element);

    if (sign) {
        res.json(sign)
    } else {
        res.status(404).json({message: "Sign not found 404"})
    }
});

app.get('/es/sign', (req, res) => {
    const signES = [
        {
            id: 1,
            nombre: "Aries",
            fechas: "21 de Marzo - 19 de Abril",
            elemento: "Fuego",
            planetaRegente: "Marte",
            simbolo: "Carnero",
            color: "Rojo",
            logo: "https://i.ibb.co/LQTxGRd/aries.jpg"
        },
        {
            id: 2,
            nombre: "Tauro",
            fechas: "20 de Abril - 20 de Mayo",
            elemento: "Tierra",
            planetaRegente: "Venus",
            simbolo: "Toro",
            color: "Verde",
            logo: "https://i.ibb.co/sPLrrwD/taurus.jpg"
        },
        {
            id: 3,
            nombre: "Géminis",
            fechas: "21 de Mayo - 20 de Junio",
            elemento: "Aire",
            planetaRegente: "Mercurio",
            simbolo: "Gemelos",
            color: "Amarillo",
            logo: "https://i.ibb.co/mBzGGpw/gemini.jpg"
        },
        {
            id: 4,
            nombre: "Cáncer",
            fechas: "21 de Junio - 22 de Julio",
            elemento: "Agua",
            planetaRegente: "Luna",
            simbolo: "Cangrejo",
            color: "Plata",
            logo: "https://i.ibb.co/JChgNxq/cancer.jpg"
        },
        {
            id: 5,
            nombre: "Leo",
            fechas: "23 de Julio - 22 de Agosto",
            elemento: "Fuego",
            planetaRegente: "Sol",
            simbolo: "León",
            color: "Dorado",
            logo: "https://i.ibb.co/YPFY0nS/leo.jpg"
        },
        {
            id: 6,
            nombre: "Virgo",
            fechas: "23 de Agosto - 22 de Septiembre",
            elemento: "Tierra",
            planetaRegente: "Mercurio",
            simbolo: "Virgen",
            color: "Marrón",
            logo: "https://i.ibb.co/Yb8PNTW/virgo.jpg"
        },
        {
            id: 7,
            nombre: "Libra",
            fechas: "23 de Septiembre - 22 de Octubre",
            elemento: "Aire",
            planetaRegente: "Venus",
            simbolo: "Balanza",
            color: "Rosa",
            logo: "https://i.ibb.co/Gvftwzt/libra.jpg"
        },
        {
            id: 8,
            nombre: "Escorpio",
            fechas: "23 de Octubre - 21 de Noviembre",
            elemento: "Agua",
            planetaRegente: "Plutón",
            simbolo: "Escorpión",
            color: "Negro",
            logo: "https://i.ibb.co/1LfFsgM/scorpio.jpg"
        },
        {
            id: 9,
            nombre: "Sagitario",
            fechas: "22 de Noviembre - 21 de Diciembre",
            elemento: "Fuego",
            planetaRegente: "Júpiter",
            simbolo: "Arquero",
            color: "Púrpura",
            logo: "https://i.ibb.co/mzdQKZ5/sagittarius.jpg"
        },
        {
            id: 10,
            nombre: "Capricornio",
            fechas: "22 de Diciembre - 19 de Enero",
            elemento: "Tierra",
            planetaRegente: "Saturno",
            simbolo: "Cabra",
            color: "Marrón",
            logo: "https://i.ibb.co/rG10wTL/capricorn.jpg"
        },
        {
            id: 11,
            nombre: "Acuario",
            fechas: "20 de Enero - 18 de Febrero",
            elemento: "Aire",
            planetaRegente: "Urano",
            simbolo: "Portador de Agua",
            color: "Azul",
            logo: "https://i.ibb.co/bPCZ2DB/aquarius.jpg"
        },
        {
            id: 12,
            nombre: "Piscis",
            fechas: "19 de Febrero - 20 de Marzo",
            elemento: "Agua",
            planetaRegente: "Neptuno",
            simbolo: "Peces",
            color: "Verde claro",
            logo: "https://i.ibb.co/9wnR1f1/pisces.jpg"
        }
    ];
    res.json(signES);
});

app.get('/es/sign/:id', (req, res) => {
    const idES = [
        {
            id: 1,
            nombre: "Aries",
            fechas: "21 de Marzo - 19 de Abril",
            elemento: "Fuego",
            planetaRegente: "Marte",
            simbolo: "Carnero",
            color: "Rojo",
            fortalezas: [
                "Valiente",
                "Determinado",
                "Confiado",
                "Entusiasta",
                "Optimista",
                "Honesto",
                "Apasionado"
            ],
            debilidades: [
                "Impaciente",
                "Temperamental",
                "Impulsivo",
                "Agresivo"
            ],
            descripcion: "Aries es un signo de liderazgo, impulsivo y aventurero. A menudo toman la iniciativa y tienen una naturaleza competitiva que los lleva a ser pioneros en lo que hacen.",
            compatibilidad: [
                "Leo",
                "Sagitario",
                "Géminis",
                "Acuario"
            ]
        },
        {
            id: 2,
            nombre: "Tauro",
            fechas: "20 de Abril - 20 de Mayo",
            elemento: "Tierra",
            planetaRegente: "Venus",
            simbolo: "Toro",
            color: "Verde",
            fortalezas: [
                "Fiable",
                "Paciente",
                "Práctico",
                "Devoto",
                "Responsable",
                "Estable"
            ],
            debilidades: [
                "Terco",
                "Posesivo",
                "Intransigente"
            ],
            descripcion: "Tauro es un signo que valora la estabilidad y la seguridad. Son personas prácticas y confiables, pero también pueden ser muy tercos cuando han tomado una decisión.",
            compatibilidad: [
                "Virgo",
                "Capricornio",
                "Cáncer",
                "Piscis"
            ]
        },
        {
            id: 3,
            nombre: "Géminis",
            fechas: "21 de Mayo - 20 de Junio",
            elemento: "Aire",
            planetaRegente: "Mercurio",
            simbolo: "Gemelos",
            color: "Amarillo",
            fortalezas: [
                "Afectuoso",
                "Curioso",
                "Adaptable",
                "Ágil mentalmente",
                "Expresivo"
            ],
            debilidades: [
                "Nervioso",
                "Inconsistente",
                "Indeciso"
            ],
            descripcion: "Géminis es el signo de la dualidad y la comunicación. Las personas de este signo son rápidas de mente y tienen una gran capacidad para adaptarse a nuevas situaciones.",
            compatibilidad: [
                "Libra",
                "Acuario",
                "Aries",
                "Leo"
            ]
        },
        {
            id: 4,
            nombre: "Cáncer",
            fechas: "21 de Junio - 22 de Julio",
            elemento: "Agua",
            planetaRegente: "Luna",
            simbolo: "Cangrejo",
            color: "Plata",
            fortalezas: [
                "Tenaz",
                "Altamente imaginativo",
                "Leal",
                "Emocional",
                "Simpático",
                "Persuasivo"
            ],
            debilidades: [
                "Temperamental",
                "Pesimista",
                "Desconfiado",
                "Manipulador",
                "Inseguro"
            ],
            descripcion: "Cáncer es un signo emocional y protector. Son conocidos por su lealtad y fuerte apego a la familia y el hogar. A menudo tienen un instinto de proteger a los que aman.",
            compatibilidad: [
                "Escorpio",
                "Piscis",
                "Tauro",
                "Virgo"
            ]
        },
        {
            id: 5,
            nombre: "Leo",
            fechas: "23 de Julio - 22 de Agosto",
            elemento: "Fuego",
            planetaRegente: "Sol",
            simbolo: "León",
            color: "Dorado",
            fortalezas: [
                "Creativo",
                "Apasionado",
                "Generoso",
                "De buen corazón",
                "Alegre",
                "Humorístico"
            ],
            debilidades: [
                "Arrogante",
                "Terco",
                "Egocéntrico",
                "Perezoso",
                "Inflexible"
            ],
            descripcion: "Leo es un signo de carisma, energía y confianza. Les encanta ser el centro de atención y son muy creativos. A veces pueden parecer dominantes, pero su generosidad los caracteriza.",
            compatibilidad: [
                "Aries",
                "Sagitario",
                "Géminis",
                "Libra"
            ]
        },
        {
            id: 6,
            nombre: "Virgo",
            fechas: "23 de Agosto - 22 de Septiembre",
            elemento: "Tierra",
            planetaRegente: "Mercurio",
            simbolo: "Virgen",
            color: "Marrón",
            fortalezas: [
                "Leal",
                "Analítico",
                "Amable",
                "Trabajador",
                "Práctico"
            ],
            debilidades: [
                "Tímido",
                "Preocupado",
                "Crítico con los demás",
                "Perfeccionista"
            ],
            descripcion: "Virgo es un signo de perfección y análisis. Las personas nacidas bajo este signo son detallistas y muy organizadas, pero también pueden ser excesivamente críticos consigo mismos y con los demás.",
            compatibilidad: [
                "Tauro",
                "Capricornio",
                "Cáncer",
                "Escorpio"
            ]
        },
        {
            id: 7,
            nombre: "Libra",
            fechas: "23 de Septiembre - 22 de Octubre",
            elemento: "Aire",
            planetaRegente: "Venus",
            simbolo: "Balanza",
            color: "Rosa",
            fortalezas: [
                "Diplomático",
                "Cooperativo",
                "Justo",
                "Social"
            ],
            debilidades: [
                "Indeciso",
                "Evita confrontaciones",
                "Rencoroso",
                "Autocompasivo"
            ],
            descripcion: "Libra es el signo de la justicia y el equilibrio. Siempre buscan armonía en sus relaciones y tienen un fuerte sentido de la diplomacia, pero pueden ser indecisos al tomar decisiones.",
            compatibilidad: [
                "Géminis",
                "Acuario",
                "Leo",
                "Sagitario"
            ]
        },
        {
            id: 8,
            nombre: "Escorpio",
            fechas: "23 de Octubre - 21 de Noviembre",
            elemento: "Agua",
            planetaRegente: "Plutón",
            simbolo: "Escorpión",
            color: "Negro",
            fortalezas: [
                "Valiente",
                "Apasionado",
                "Fiel",
                "Tenaz"
            ],
            debilidades: [
                "Desconfiado",
                "Celoso",
                "Reservado",
                "Violento"
            ],
            descripcion: "Escorpio es un signo intenso y emocional. Las personas nacidas bajo este signo son profundamente apasionadas y tienen una naturaleza decidida. Pueden ser muy reservados y misteriosos.",
            compatibilidad: [
                "Cáncer",
                "Piscis",
                "Virgo",
                "Capricornio"
            ]
        },
        {
            id: 9,
            nombre: "Sagitario",
            fechas: "22 de Noviembre - 21 de Diciembre",
            elemento: "Fuego",
            planetaRegente: "Júpiter",
            simbolo: "Arquero",
            color: "Púrpura",
            fortalezas: [
                "Generoso",
                "Idealista",
                "Gran sentido del humor"
            ],
            debilidades: [
                "Impaciente",
                "Promesas exageradas",
                "Poco diplomático"
            ],
            descripcion: "Sagitario es un signo aventurero y optimista. Son personas que disfrutan explorando nuevas ideas y lugares, y siempre buscan expandir sus horizontes, pero a veces pueden ser imprudentes.",
            compatibilidad: [
                "Aries",
                "Leo",
                "Libra",
                "Acuario"
            ]
        },
        {
            id: 10,
            nombre: "Capricornio",
            fechas: "22 de Diciembre - 19 de Enero",
            elemento: "Tierra",
            planetaRegente: "Saturno",
            simbolo: "Cabra",
            color: "Marrón",
            fortalezas: [
                "Responsable",
                "Disciplinado",
                "Autocontrol",
                "Buen liderazgo"
            ],
            debilidades: [
                "Sabe-lo-todo",
                "Inflexible",
                "Condescendiente",
                "Pesimista"
            ],
            descripcion: "Capricornio es un signo ambicioso y pragmático. Tienen una fuerte ética de trabajo y se fijan metas altas, pero pueden ser algo fríos o distantes en su enfoque hacia las relaciones.",
            compatibilidad: [
                "Tauro",
                "Virgo",
                "Escorpio",
                "Piscis"
            ]
        },
        {
            id: 11,
            nombre: "Acuario",
            fechas: "20 de Enero - 18 de Febrero",
            elemento: "Aire",
            planetaRegente: "Urano",
            simbolo: "Portador de Agua",
            color: "Azul",
            fortalezas: [
                "Progresista",
                "Original",
                "Independiente",
                "Humanitario"
            ],
            debilidades: [
                "Se distancia emocionalmente",
                "Temperamental",
                "Inflexible",
                "Reservado"
            ],
            descripcion: "Acuario es un signo de visión de futuro, originalidad y humanitarismo. Las personas de este signo son innovadoras y les gusta romper con lo convencional, aunque a veces pueden parecer desapegadas o distantes.",
            compatibilidad: [
                "Géminis",
                "Libra",
                "Sagitario",
                "Aries"
            ]
        },
        {
            id: 12,
            nombre: "Piscis",
            fechas: "19 de Febrero - 20 de Marzo",
            elemento: "Agua",
            planetaRegente: "Neptuno",
            simbolo: "Peces",
            color: "Verde claro",
            fortalezas: [
                "Compasivo",
                "Artístico",
                "Intuitivo",
                "Amable",
                "Sabio",
                "Musical"
            ],
            debilidades: [
                "Temeroso",
                "Excesivamente confiado",
                "Triste",
                "Tendencia a escapar de la realidad"
            ],
            descripcion: "Piscis es un signo de empatía, sensibilidad y espiritualidad. Son personas muy compasivas que a menudo tienen una conexión emocional profunda con su entorno. Sin embargo, pueden ser susceptibles a las influencias externas y tienden a escapar de la realidad.",
            compatibilidad: [
                "Cáncer",
                "Escorpio",
                "Tauro",
                "Capricornio"
            ]
        }
    ];

    const element = parseInt(req.params.id);
    const sign = idES.find(e => e.id === element);

    if (sign) {
        res.json(sign)
    } else {
        res.status(404).json({message: "Sign not found 404"})
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});