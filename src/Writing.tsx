import React from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, WritingList, essays } from "./Site";
export default function Writing() {
  return <Layout title="Writing — Nisha Pant"><h1>Writing</h1><WritingList /></Layout>;
}
export function Essay() {
  const { slug } = useParams();
  const essay = essays.find(item => item.slug === slug);
  return <Layout title={`${essay?.title || "Writing"} — Nisha Pant`}><Link className="back-link" to="/writing">← Back to writing</Link><h1>{essay?.title || "Essay not found"}</h1><p className="essay-note">{essay ? "Full essay coming soon." : "This essay could not be found."}</p></Layout>;
}
