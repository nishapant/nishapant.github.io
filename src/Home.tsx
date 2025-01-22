import React, { useState, useEffect } from "react";
import vinyl from "./vinyl.webp";
import axios from "axios";
import LoadingBar from "./LoadingBar";

interface Track {
  name: string;
  url: string;
  artist: string;
}

function Home() {
  const [track, setTrack] = useState<Track | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMostRecentTrack = async () => {
      try {
        const response = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nishpant&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json&limit=1`
        );
        const data = response.data.recenttracks.track[0];
        const track = {
          name: data.name,
          artist: data.artist["#text"],
          url: data.url
        }
        setTrack(track);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadMostRecentTrack();
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen">
        <header className="flex flex-row p-10 gap-x-5 justify-center text-blue font-bold px-15 font-azeret">
          <a href="/projects" className="hover:underline hover:opacity-70">projects</a>
          <a href="/writing" className="hover:underline hover:opacity-70">writing</a>
          <a href="/archive" className="hover:underline hover:opacity-70">archive</a>
        </header>
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <div>
            <h1 className="text-magenta font-birthstone font-semibold text-[3.4em] tracking-widest">
              NP
            </h1>
          </div>
          <div className="text-[1.5em] text-blue font-semibold font-azeret max-w-[30em] mx-5 text-center">
            currently engineering at modern treasury. interests include music, design & vintage clothing
          </div>
        </div>
        <footer className="text-blue text-center p-10 font-bold flex justify-between items-center px-15 font-azeret">
          <div className="flex flex-row items-center"> 
            <img
              src={vinyl}
              alt="spinning"
              className="w-20 h-20 animate-spin-slow"
            />
            <div className="px-5 text-left flex flex-col">
              <div>now listening to...</div>
              <a href={!loading && track ? track.url : "/"} target="_blank" rel="noreferrer" className="hover:underline hover:opacity-70">
                {loading || !track ? <LoadingBar /> :
                  <div className="text-magenta">
                    {track.name}
                  </div>
                }
                {loading || !track ? <LoadingBar /> :
                  <div className="text-magenta">
                    {track.artist}
                  </div>
                }
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-x-5">
            <a href="https://github.com/nishapant" className="hover:underline hover:opacity-70">github</a>
            <a href="https://twitter.com/nishpant" className="hover:underline hover:opacity-70">twitter</a>
            <a href="https://on.soundcloud.com/aH8UhTznVxFqXgsr6" className="hover:underline hover:opacity-70">soundcloud</a>
            <a href="https://www.linkedin.com/in/nishapant/" className="hover:underline hover:opacity-70">linkedin</a>
          </div>
        </footer>
    </div>
  );
}

export default Home;
