import React from "react";
import { Layout, Photo, WritingList } from "./Site";

export default function Home() {
  return <Layout><section className="intro"><div><h1>Nisha Pant</h1><ul className="bio">

    <li>I work at <a href="https://www.norm.ai/">Norm</a>, building compliance products and an AI-powered law firm through Norm Law</li>
<li>Before that, I was employee #15 at <a href="https://www.moderntreasury.com/">Modern Treasury</a>, where I worked on payments and platform infrastructure</li>
    <li>I’ve been learning about robotics and hardware</li>

    <li>I’m putting together a book on 300 years of my family’s history</li>
    <li>I listen to a lot of rap, electronic, and classic rock</li>
    <li>I like fashion, especially vintage clothes</li>
  </ul><section className="writing"><h2>Writing</h2><WritingList /></section></div>
  <aside className="collage" aria-label="From my photo archive"><div className="landscape"><Photo name="chisapani" alt="A terrace overlooking the hills in Chisapani, Nepal" eager /></div><div className="pair"><Photo name="paris" alt="A sculpture at the Louvre in Paris" eager /><Photo name="maine-coast" alt="Wildflowers along the coast in Cape Elizabeth, Maine" eager /></div></aside></section></Layout>;
}
