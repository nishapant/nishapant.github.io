import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Layout({ children, title = "Nisha Pant" }: { children: React.ReactNode; title?: string }) {
  const { pathname } = useLocation();
  useEffect(() => { document.title = title; window.scrollTo(0, 0); }, [pathname, title]);
  return <main><nav aria-label="Main"><NavLink to="/" end>About</NavLink><NavLink to="/writing">Writing</NavLink><NavLink to="/archive">Photos</NavLink></nav>{children}<footer><a href="https://github.com/nishapant">GitHub</a><a href="https://x.com/nishpant">X</a><a href="https://on.soundcloud.com/aH8UhTznVxFqXgsr6">SoundCloud</a><a href="https://www.linkedin.com/in/nishapant/">LinkedIn</a></footer></main>;
}

export function Photo({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState("loading");
  useEffect(() => { if (ref.current?.complete) setStatus(ref.current.naturalWidth ? "loaded" : "error"); }, []);
  return <div className={`photo-frame ${status}`} aria-busy={status === "loading"}><img ref={ref} src={`/photos/${name}-960.webp`} srcSet={`/photos/${name}-480.webp 480w, /photos/${name}-960.webp 960w`} sizes="(max-width: 760px) 90vw, 420px" alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" onLoad={() => setStatus("loaded")} onError={() => setStatus("error")} />{status === "error" && <span className="photo-error">Photo unavailable</span>}</div>;
}

export const essays = [
  { slug: "building-a-cpu", title: "Building a CPU" },
  { slug: "family-history", title: "Tracing 300 years of family history" }
];

export function WritingList() {
  return <div className="writing-list">{essays.map(essay => <Link key={essay.slug} to={`/writing/${essay.slug}`}>{essay.title}</Link>)}</div>;
}
