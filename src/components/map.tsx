// 'use client';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix for default marker icons in Next.js
// const DefaultIcon = L.icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// // Key locations in Gaza Strip
// const locations = [
//   {
//     name: 'Gaza City',
//     position: [31.5017, 34.4668] as [number, number],
//     description: 'Largest city in the Gaza Strip',
//   },
//   {
//     name: 'Rafah',
//     position: [31.2969, 34.2435] as [number, number],
//     description: 'Southern city bordering Egypt',
//   },
//   {
//     name: 'Khan Younis',
//     position: [31.3469, 34.3065] as [number, number],
//     description: 'Major city in southern Gaza',
//   },
//   {
//     name: 'Jabalia',
//     position: [31.5381, 34.4953] as [number, number],
//     description: 'Site of Jabalia refugee camp',
//   },
// ];

// export default function GazaMap() {
//   return (
//     <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
//       <MapContainer center={[31.4, 34.4]} zoom={10} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {locations.map((location, index) => (
//           <Marker key={index} position={location.position}>
//             <Popup>
//               <div className="font-semibold">{location.name}</div>
//               <div className="text-sm">{location.description}</div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }
