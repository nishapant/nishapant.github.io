import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Layout, WritingList, essays } from "./Site";
export default function Writing() {
  return <Layout title="Writing — Nisha Pant"><h1>Writing</h1>{essays.length ? <WritingList /> : <p>No published writing yet</p>}</Layout>;
}
export function Essay() {
  const { slug } = useParams();
  const essay = essays.find(item => item.slug === slug);
  if (!essay) return <Navigate to="/" replace />;
  return <Layout title={`${essay.title} — Nisha Pant`}><h1>{essay.title}</h1></Layout>;
}
