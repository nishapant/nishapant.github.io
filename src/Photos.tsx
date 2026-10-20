import React from "react";
import { Layout, Photo } from "./Site";
const photos = [
  { name: "tahoe-sunset", caption: "Incline Village, Nevada", date: "October 2026" },
  { name: "brooklyn-purple-sky", caption: "Brooklyn, New York", date: "August 2026" },
  { name: "portland-head-light", caption: "Cape Elizabeth, Maine", date: "July 2026" },
  { name: "littleton-pond", caption: "Littleton, New Hampshire", date: "June 2026" },
  { name: "pollys-window", caption: "Sugar Hill, New Hampshire", date: "June 2026" },
  { name: "hyderabad-charminar", caption: "Hyderabad, India", date: "February 2026" },
  { name: "cloisters-mirror", caption: "New York, New York", date: "November 2025" },
  { name: "marble-falls-sunset", caption: "Marble Falls, Texas", date: "August 2025" },
  { name: "peru-mule", caption: "Peru", date: "March 2025" },
  { name: "swiss", caption: "St. Moritz, Switzerland", date: "December 2024" },
  { name: "nepal", caption: "Tanahun, Nepal", date: "March 2024" },
  { name: "sorrento", caption: "Sorrento, Italy", date: "June 2023" },
  { name: "reykjavik", caption: "Reykjavík, Iceland", date: "June 2023" },
  { name: "kaytranada", caption: "New York, New York", date: "September 2022" }
];
export default function Photos() {
  return <Layout title="Photos — Nisha Pant"><h1>Photos</h1><div className="gallery">{photos.map((photo, i) => <figure key={photo.name}><a href={`/photos/${photo.name}-960.webp`}><Photo name={photo.name} alt={photo.caption} eager={i < 3} /></a><figcaption>{photo.caption}<span>{photo.date}</span></figcaption></figure>)}</div></Layout>;
}
