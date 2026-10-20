import React from "react";
import { Layout, Photo } from "./Site";
const photos = [
  { name: "nepal", caption: "Tanahun, Nepal", date: "March 2024" },
  { name: "newport", caption: "Newport, Rhode Island", date: "May 2024" },
  { name: "ny", caption: "New York, New York", date: "February 2024" },
  { name: "iceland", caption: "Reykjavík, Iceland", date: "June 2023" },
  { name: "sorrento", caption: "Sorrento, Italy", date: "June 2023" },
  { name: "swiss", caption: "St. Moritz, Switzerland", date: "December 2024" },
  { name: "reykjavik", caption: "Reykjavík, Iceland", date: "June 2023" }
];
export default function Photos() {
  return <Layout title="Photos — Nisha Pant"><h1>Photos</h1><div className="gallery">{photos.map((photo, i) => <figure key={photo.name}><a href={`/photos/${photo.name}-960.webp`}><Photo name={photo.name} alt={photo.caption} eager={i < 3} /></a><figcaption>{photo.caption}<span>{photo.date}</span></figcaption></figure>)}</div></Layout>;
}
