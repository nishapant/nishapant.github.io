import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, WritingList, essays } from "./Site";
export default function Writing() {
  return <Layout title="Writing — Nisha Pant"><h1>Writing</h1><WritingList /></Layout>;
}
export function Essay() {
  const { slug } = useParams();
  const essay = essays.find(item => item.slug === slug);
  return <Layout title={`${essay?.title || "Writing"} — Nisha Pant`}><Link className="back-link" to="/writing">← Back to writing</Link><h1 className="essay-title">{essay?.title || "Essay not found"}</h1>{slug === "family-history" && <div className="essay-images"><figure><a href="/writing/marsyangdi-valley-dehazed.webp"><img src="/writing/marsyangdi-valley-dehazed.webp" alt="The Marsyangdi valley seen from Chok Chisapani" loading="lazy" /></a><figcaption>The Marsyangdi valley from Chok Chisapani, Nepal</figcaption></figure><figure><a href="/writing/chisapani-village-map.webp"><img src="/writing/chisapani-village-map.webp" alt="A village map of Chok Chisapani showing the river, village boundary and ancestral sites" loading="lazy" /></a><figcaption>Map of Chok Chisapani</figcaption></figure></div>}{slug === "building-a-cpu" && <div className="essay-images"><figure><a href="/writing/cpu-diagram.png"><img src="/writing/cpu-diagram.png" alt="CPU architecture diagram showing instruction memory, registers, control unit, ALU, and data memory" /></a></figure></div>}<p className="essay-note">{essay ? "Coming soon" : "This essay could not be found."}</p></Layout>;
}
