// Funcion para pasar la latitud y longitud a geocode
export async function getGeocode(lat, lng) {
    return `${lat}, ${lng}`;
}

// Funcion para pasar la geocode a latitud y longitud
export async function getLatLon(geocode) {
    const [lat, lon] = geocode.split(',').map(coord => parseFloat(coord.trim()));
    return { lat, lon };
}

// Funcion para pasar gustos a kinds
export async function getKinds(gusto) {
    const kinds = {
        'restaurante': 'restaurant',
        'cafe': 'cafe',
        'bar': 'bar',
        'hotel': 'hotel',
        'museo': 'museum',
        'parque': 'park',
        'monumento': 'monument'
        // Agrega más tipos según sea necesario
    };
    return kinds[gusto];
}

// Funcion para pasar kinds a gustos
export async function getGustos(kind) {
    const gustos = {
        'restaurant': 'restaurante',
        'cafe': 'cafe',
        'bar': 'bar',
        'hotel': 'hotel',
        'museum': 'museo',
        'park': 'parque',
        'monument': 'monumento'
        // Agrega más tipos según sea necesario
    };
    return gustos[kind];
}
