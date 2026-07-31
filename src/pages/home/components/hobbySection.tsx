import { useState } from "react";
import {
  Dumbbell,
  ExternalLink,
  Footprints,
  Headphones,
  Mic,
  Music,
} from "lucide-react";
import { XLogo } from "../../../components/xLogo";

const genres = ["BNK48", "CGM48", "48 Group", "T-POP", "J-POP"];

const activities = [
  { icon: Footprints, title: "Running", note: "clearing my head on a run" },
  { icon: Dumbbell, title: "Badminton", note: "playing with friends" },
  { icon: Headphones, title: "Music", note: "always in my ears" },
  { icon: Mic, title: "Podcasts", note: "listening in my free time" },
];

const X_HANDLE = "mydiarywithU";

const photos = [
  { src: "/img/me-1.jpg", alt: "At a BNK48 event" },
  { src: "/img/me-2.jpg", alt: "At a CGM48 event" },
  { src: "/img/me-3.jpg", alt: "At an idol event" },
];

export const HobbyContent = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mono text-xs text-gray-400 mb-4">
        portfolio › hobbies.txt
      </div>
      <div className="mono tok-comment mb-6">
        # things I enjoy outside of work
      </div>

      <div className="bento">
        {/* Biggest card — music + photos */}
        <div className="bento-main border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-sm transition flex flex-col">
          <div className="relative flex-1 min-h-[280px] bg-gray-900 flex items-center justify-center overflow-hidden">
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
            <div className="absolute bottom-2 left-2 flex gap-2">
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => setActive(i)}
                  aria-label={p.alt}
                  className={`h-12 w-12 rounded-lg overflow-hidden border-2 transition ${
                    active === i
                      ? "border-violet-400"
                      : "border-white/40 hover:border-white opacity-80"
                  }`}
                >
                  <img
                    src={p.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Music size={18} className="text-violet-600" />
              <span className="font-bold text-gray-900 text-lg">
                Idol &amp; Pop Music
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              My biggest hobby is following idol and pop music. I'm a fan of the
              48 Group and go to BNK48 and CGM48 events, and I keep up with T-POP
              and J-POP releases. Music is what I put on while I code, commute,
              or just relax.
            </p>
            <div className="flex gap-2 flex-wrap mt-1">
              {genres.map((g) => (
                <span key={g} className="ide-chip accent">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Top right — sports & listening */}
        <div className="bento-side border border-gray-200 rounded-2xl p-5 hover:border-violet-300 hover:shadow-sm transition flex flex-col gap-3">
          <div className="mono tok-comment text-xs"># active &amp; chill</div>
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 text-violet-600 shrink-0">
                  <Icon size={17} />
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 text-sm">
                    {a.title}
                  </div>
                  <div className="text-xs text-gray-500">{a.note}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom right — X profile */}
        <XProfileCard />
      </div>
    </div>
  );
};

const topics = ["idol", "concerts", "music", "daily life"];

const XProfileCard = () => {
  const url = `https://x.com/${X_HANDLE}`;

  return (
    <div className="bento-bottom border border-gray-200 rounded-2xl overflow-hidden hover:border-violet-300 hover:shadow-sm transition flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 gap-2">
        <span className="mono text-xs tracking-wider text-gray-400">
          FIND ME ON
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 mono text-xs text-violet-600 hover:text-violet-800 shrink-0"
        >
          <ExternalLink size={13} />
          open
        </a>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-3 p-6 flex-1">
        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-black text-white">
          <XLogo size={26} />
        </span>

        <div>
          <div className="mono font-bold text-gray-900">@{X_HANDLE}</div>
          <div className="text-xs text-gray-500 mt-1">
            where I post about what I'm listening to
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap justify-center">
          {topics.map((t) => (
            <span
              key={t}
              className="mono text-[11px] text-gray-600 bg-gray-50 border border-gray-200 rounded px-2 py-0.5"
            >
              #{t}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-sm flex items-center gap-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition mt-1"
        >
          <XLogo size={14} />
          Follow on X
        </a>
      </div>
    </div>
  );
};
