import React from "react";
import { Layout, Photo, WritingList } from "./Site";

export default function Home() {
  return <Layout><section className="intro"><div><h1>Nisha Pant</h1><ul className="bio">
    <li>I’m currently at <a href="https://www.norm.ai/">Norm</a>, previously an engineer at <a href="https://www.moderntreasury.com/">Modern Treasury</a></li>
    <li>Recently, I’ve been learning more about robotics and hardware</li>
    <li>I’m writing a lineage book covering 300 years of my family’s history</li>
    <li>I listen to a lot of music, especially rap, electronic, and classic rock</li>
    <li>I’m interested in fashion, especially vintage clothing</li>
  </ul><section className="writing"><h2>Writing</h2><WritingList /></section></div>
  <aside className="collage" aria-label="From my photo archive"><div className="landscape"><Photo name="chisapani" alt="A terrace overlooking the hills in Chisapani, Nepal" eager /></div><div className="pair"><Photo name="paris" alt="A sculpture at the Louvre in Paris" eager /><Photo name="kaytranada" alt="Blue light at a KAYTRANADA concert" eager /></div></aside></section></Layout>;
}
