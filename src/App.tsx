import { ExternalLink, Music2 } from 'lucide-react';
import type { ReactNode } from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07090f] flex flex-col items-center py-14 px-4 font-sans text-white overflow-hidden">

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#b535f6]/10 rounded-full blur-[130px]" />

      {/* Cover Image */}
      <div className="relative mt-6 z-10">
        <div className="absolute inset-0 rounded-3xl bg-[#b535f6]/20 blur-2xl scale-110" />
        <img
          src="/assets/Din_ka_Chala_-_Cover_Image_1774163770337.png"
          alt="Din Ka Chala Cover"
          className="relative w-52 h-52 rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
        />
        <div className="absolute -bottom-3 -right-3 bg-[#b535f6] p-2.5 rounded-full border-[5px] border-[#07090f] shadow-lg shadow-[#b535f6]/50">
          <Music2 size={15} className="text-white" fill="currentColor" />
        </div>
      </div>

      {/* Title & Artist */}
      <h1 className="text-[28px] font-bold mt-9 mb-1 tracking-tight z-10">Din Ka Chala</h1>
      <p className="text-white/40 text-xs mb-7 tracking-[0.2em] uppercase font-medium z-10">Aniket · Shagun</p>

      {/* Status Badge */}
      <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 rounded-full mb-10 backdrop-blur-sm z-10">
        <div className="motion-safe:animate-pulse w-1.5 h-1.5 bg-[#1db954] rounded-full" />
        <span className="text-xs text-white/50 tracking-wide">Now Streaming · All Platforms</span>
      </div>

      {/* Platform Links */}
      <div className="w-full max-w-[380px] flex flex-col gap-3 z-10">
        <PlatformLink
          name="YouTube Music"
          icon={<YouTubeMusicIcon />}
          iconBg="bg-[#e50000]"
          url="https://music.youtube.com/watch?v=5OYG3WhrgUM&si=IRVsX_la0sYAze9h"
        />
        <PlatformLink
          name="Spotify"
          icon={<SpotifyIcon />}
          iconBg="bg-[#1db954]"
          url="https://open.spotify.com/track/5ZbJqvrqTJ0ZoaU7PNvM4v?si=tNVa3SrMTiu3CnkNTyT4Yw"
        />
        <PlatformLink
          name="Amazon Music"
          icon={<AmazonMusicIcon />}
          iconBg="bg-[#0095d5]"
          url="https://music.amazon.com/tracks/B0GSLRFNHX?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_GxSzgYkSPwIPvuz9vmrXAgmUU"
        />
        <PlatformLink
          name="Apple Music"
          icon={<AppleMusicIcon />}
          iconBg="bg-[#fa243c]"
          url="https://music.apple.com/us/song/din-ka-chala/1885372567"
        />
        <PlatformLink
          name="Instagram"
          icon={<InstagramIcon />}
          iconBg="bg-gradient-to-br from-[#9b2cba] via-[#ea3c4b] to-[#f48a3e]"
          url="https://www.instagram.com/reels/audio/1615446199766033?igsh=MWhvZXhzcGhvbTA4Nw%3D%3D"
        />
      </div>

      {/* Footer */}
      <footer className="mt-14 mb-4 text-white/20 text-xs tracking-widest uppercase z-10">
        ©️ 2026 LocalsVocalsMusic
      </footer>
    </div>
  );
}

function PlatformLink({ name, icon, iconBg, url }: { name: string; icon: ReactNode; iconBg: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between px-4 py-3.5 rounded-2xl
                 bg-white/[0.05] backdrop-blur-md border border-white/[0.08]
                 hover:bg-white/[0.09] hover:border-white/[0.14]
                 transition duration-200 hover:scale-[1.02] active:scale-[0.98]
                 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090f]"
    >
      {/* Glossy top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex items-center gap-3.5">
        <div className={⁠ w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} flex-shrink-0 ⁠}>
          {icon}
        </div>
        <span className="font-medium text-[15px] text-white/85 tracking-wide">{name}</span>
      </div>
      <ExternalLink size={14} className="text-white/25 group-hover:text-white/55 transition-colors flex-shrink-0" />
    </a>
  );
}

function YouTubeMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22">
      <polygon points="9 7 18 12 9 17 9 7" fill="white" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.681 18.72 12.96c.36.181.54.841.241 1.08zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.539-1.56.3z" />
    </svg>
  );
}

function AmazonMusicIcon() {
  return (
    <div className="flex flex-col items-center justify-center leading-none">
      <span className="text-[7px] font-bold tracking-tighter text-white">amazon</span>
      <span className="text-[7px] font-bold tracking-tighter text-white">music</span>
    </div>
  );
}

function AppleMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.118 7.373v7.255c0 1.529-1.255 2.784-2.784 2.784-1.529 0-2.784-1.255-2.784-2.784 0-1.529 1.255-2.784 2.784-2.784.392 0 .745.078 1.098.235V5.882l-5.49 1.098v8.627c0 1.529-1.255 2.784-2.784 2.784-1.529 0-2.784-1.255-2.784-2.784 0-1.529 1.255-2.784 2.784-2.784.392 0 .745.078 1.098.235V4.706l7.843-1.569v4.236z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
