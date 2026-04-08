import { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altText?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, altText }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50); // percentage 0-100

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-none md:rounded-sm group">
      {/* Before Image (Background) */}
      <img
        src={beforeImage}
        alt={altText ? `${altText} - Before` : "Before"}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <span 
        className="absolute bottom-4 left-4 bg-brand-dark/80 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10 pointer-events-none transition-opacity"
        style={{ opacity: position < 15 ? 0 : 1 }}
      >
        Before
      </span>

      {/* After Image (Foreground, clipped) */}
      <img
        src={afterImage}
        alt={altText ? `${altText} - After` : "After"}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          clipPath: `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`
        }}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <span 
        className="absolute bottom-4 right-4 bg-white/80 text-brand-dark text-[10px] font-bold uppercase tracking-widest px-2 py-1 z-10 pointer-events-none transition-opacity"
        style={{ opacity: position > 85 ? 0 : 1 }}
      >
        After
      </span>

      {/* Center Divider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-px bg-brand-accent pointer-events-none z-20 flex items-center justify-center transition-transform"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 rounded-full bg-brand-accent shadow-lg flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1">
            <div className="w-px h-3 bg-white" />
            <div className="w-px h-3 bg-white" />
          </div>
        </div>
      </div>

      {/* Invisible Range Input Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
        aria-label="Image comparison slider"
      />
    </div>
  );
}
