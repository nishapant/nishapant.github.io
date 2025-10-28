import React, { useState, useEffect } from "react";
import vinyl from "./vinyl.webp";
import axios from "axios";
import LoadingBar from "./LoadingBar";
import { Link } from "react-router-dom";

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
        const apiKey = process.env.REACT_APP_LAST_FM_API_KEY;
        
        if (!apiKey) {
          console.warn('Last.fm API key not found. Please set REACT_APP_LAST_FM_API_KEY in your .env file');
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nishpant&api_key=${apiKey}&format=json&limit=1`
        );
        
        if (response.data.error) {
          console.error('Last.fm API error:', response.data.message);
          setLoading(false);
          return;
        }

        const tracks = response.data.recenttracks.track;
        if (!tracks || tracks.length === 0) {
          console.log('No recent tracks found');
          setLoading(false);
          return;
        }

        const data = Array.isArray(tracks) ? tracks[0] : tracks;
        const track = {
          name: data.name,
          artist: data.artist["#text"],
          url: data.url
        }
        setTrack(track);
      } catch (err) {
        console.error('Error fetching Last.fm data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMostRecentTrack();
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen">
        <header className="flex flex-row p-5 sm:p-10 gap-x-5 justify-center text-blue font-bold px-15 font-azeret">
          {/* <Link to="/projects" className="hover:underline hover:opacity-70">projects</Link> */}
          {/* <Link to="/writing" className="hover:underline hover:opacity-70">writing</Link> */}
          <Link to="/archive" className="hover:underline hover:opacity-70 text-sm sm:text-base">archive</Link>
          {/* <Link to="/curations" className="hover:underline hover:opacity-70">curations</Link> */}
        </header>
        <div className="flex flex-col items-center justify-center h-screen space-y-4 px-4">
          <div>
            <h1 className="text-magenta font-birthstone font-semibold text-[2.5em] sm:text-[3.4em] tracking-widest">
              NP
            </h1>
          </div>
          <div className="text-[1.1em] sm:text-[1.5em] text-blue font-semibold font-azeret max-w-[30em] mx-5 text-center">
            currently engineering at modern treasury. interests include music, design & vintage clothing
          </div>
        </div>
        <footer className="text-blue text-center p-5 sm:p-10 font-bold flex flex-col sm:flex-row justify-between items-center px-15 font-azeret space-y-4 sm:space-y-0">
          <div className="flex flex-row items-center"> 
            <img
              src={vinyl}
              alt="spinning"
              className="w-16 h-16 sm:w-20 sm:h-20 animate-spin-slow"
            />
            <div className="px-3 sm:px-5 text-left flex flex-col">
              <div className="text-sm sm:text-base">now listening to...</div>
              <a href={!loading && track ? track.url : "/"} target="_blank" rel="noreferrer" className="hover:underline hover:opacity-70">
                {loading || !track ? <LoadingBar /> :
                  <div className="text-magenta text-sm sm:text-base">
                    {track.name}
                  </div>
                }
                {loading || !track ? <LoadingBar /> :
                  <div className="text-magenta text-sm sm:text-base">
                    {track.artist}
                  </div>
                }
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-x-3 sm:gap-x-5 text-sm sm:text-base">
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
