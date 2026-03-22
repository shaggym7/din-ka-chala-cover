import { ExternalLink, Music2, Instagram } from 'lucide-react';
import type { ReactNode } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f111a] flex flex-col items-center py-12 px-4 font-sans text-white">
      {/* Cover Image Section */}
      <div className="relative mt-4">
<img 
          src="/assets/Din_ka_Chala_-_Cover_Image_1774163770337.png"
          alt="Din Ka Chala Cover" 
          className="w-48 h-48 rounded-2xl object-cover shadow-2xl"
        />
        <div className="absolute -bottom-3 -right-3 bg-[#b535f6] p-2.5 rounded-full border-[6px] border-[#0f111a]">
          <Music2 size={18} className="text-white" fill="currentColor" />
        </div>
      </div>

      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold mt-6 mb-1">Din Ka Chala</h1>
      <p className="text-[#a0a0b0] text-lg mb-6">Aniket-Shagun</p>

      {/* Status Badge */}
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
        <div className="w-2 h-2 bg-[#1db954] rounded-full"></div>
        <span className="text-sm text-[#d0d0e0]">Now Streaming on All music Platforms</span>
      </div>

      {/* Links List */}
      <div className="w-full max-w-[400px] flex flex-col gap-3.5">
        <PlatformLink 
          name="YouTube Music" 
          icon={<YouTubeMusicIcon />} 
          bgColor="bg-[#e50000]" 
          url="https://music.youtube.com/watch?v=5OYG3WhrgUM&si=IRVsX_la0sYAze9h" 
        />
        <PlatformLink 
          name="Spotify" 
          icon={<SpotifyIcon />} 
          bgColor="bg-[#1db954]" 
          url="https://open.spotify.com/track/5ZbJqvrqTJ0ZoaU7PNvM4v?si=tNVa3SrMTiu3CnkNTyT4Yw" 
        />
        <PlatformLink 
          name="Amazon Music" 
          icon={<AmazonMusicIcon />} 
          bgColor="bg-[#0095d5]" 
          url="https://music.amazon.com/tracks/B0GSLRFNHX?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_GxSzgYkSPwIPvuz9vmrXAgmUU" 
        />
        <PlatformLink 
          name="Apple Music" 
          icon={<AppleMusicIcon />} 
          bgColor="bg-[#fa243c]" 
          url="https://music.apple.com/us/song/din-ka-chala/1885372567" 
        />
        <PlatformLink 
          name="Instagram" 
          icon={<div className="w-8 h-8 flex items-center justify-center"><Instagram size={28} /></div>} 
          bgClass="bg-gradient-to-r from-[#9b2cba] via-[#ea3c4b] to-[#f48a3e]" 
          url="https://www.instagram.com/reels/audio/1615446199766033?igsh=MWhvZXhzcGhvbTA4Nw%3D%3D" 
        />
      </div>

      {/* Footer */}
      <footer className="mt-12 mb-4 text-[#606070] text-sm">
        © 2026 LocalsVocalsMusic · All rights reserved
      </footer>
    </div>
  );
}

function PlatformLink({ name, icon, bgColor, bgClass, url }: { name: string, icon: ReactNode, bgColor?: string, bgClass?: string, url: string }) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] ${bgColor || ''} ${bgClass || ''}`}
    >
      <div className="flex items-center gap-4">
        {icon}
        <span className="font-semibold text-[17px] tracking-wide">{name}</span>
      </div>
      <ExternalLink size={20} className="opacity-60" />
    </a>
  );
}

// Custom SVGs for platforms
function YouTubeMusicIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
      </svg>
    </div>
  );
}

function SpotifyIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.681 18.72 12.96c.36.181.54.841.241 1.08zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.539-1.56.3z"/>
      </svg>
    </div>
  );
}

function AmazonMusicIcon() {
  return (
    <div className="w-8 h-8 bg-[#00e1d9] rounded-full flex flex-col items-center justify-center text-black leading-none">
      <span className="text-[7px] font-bold tracking-tighter mt-0.5">amazon</span>
      <span className="text-[7px] font-bold tracking-tighter">music</span>
    </div>
  );
}

function AppleMusicIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.118 7.373v7.255c0 1.529-1.255 2.784-2.784 2.784-1.529 0-2.784-1.255-2.784-2.784 0-1.529 1.255-2.784 2.784-2.784.392 0 .745.078 1.098.235V5.882l-5.49 1.098v8.627c0 1.529-1.255 2.784-2.784 2.784-1.529 0-2.784-1.255-2.784-2.784 0-1.529 1.255-2.784 2.784-2.784.392 0 .745.078 1.098.235V4.706l7.843-1.569v4.236z"/>
      </svg>
    </div>
  );
}

