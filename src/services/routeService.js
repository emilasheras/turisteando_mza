import { supabase } from '../lib/supabaseClient';

// Parse GPX file and return array of [lon, lat] coordinates
export async function parseGpxFile(file) {
  const text = await file.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, 'application/xml');
  const pts = Array.from(xml.getElementsByTagName('trkpt')).map(pt => [
    parseFloat(pt.getAttribute('lon')),
    parseFloat(pt.getAttribute('lat'))
  ]);
  if (pts.length === 0) throw new Error('GPX sin puntos de ruta');
  return pts;
}

function haversineDistance([lon1, lat1], [lon2, lat2]) {
  const R = 6371000; // metros
  const toRad = deg => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function totalDistance(coords) {
  let dist = 0;
  for (let i = 1; i < coords.length; i++) {
    dist += haversineDistance(coords[i - 1], coords[i]);
  }
  return dist;
}

export async function uploadRoute({ name, description, gpxFile, activityType }) {
  const coordinates = await parseGpxFile(gpxFile);
  const distance = totalDistance(coordinates);
  const geo = { type: 'LineString', coordinates };

  const { data, error } = await supabase
    .from('route')
    .insert({
      name,
      description,
      activity_type: activityType,
      distance_m: distance,
      geo
    })
    .select();

  if (error) throw error;
  return data[0];
}

export async function fetchRoutes() {
  const { data, error } = await supabase.from('route').select('*');
  if (error) throw error;
  return data;
}
