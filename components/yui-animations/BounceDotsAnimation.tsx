'use client';

/**
 * Bouncing Dots Animation
 * From: yui540/css-animations (tips-4)
 * Technique: Staggered scale + jump with CSS custom properties for per-dot timing
 */
export function BounceDotsAnimation() {
  return (
    <div className="relative w-full max-w-[320px] aspect-square bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden mx-auto mt-16">
      <style>{`
        @keyframes bounce-scale1 {
          from { transform: scale(1, 1); }
          20% { transform: scale(1.2, 0.7); }
          60% { transform: scale(0.8, 1.2); }
          to { transform: scale(1, 1); }
        }
        @keyframes bounce-scale2 {
          from, to { transform: scale(1, 1); }
          50% { transform: scale(1.2, 0.7); }
        }
        @keyframes bounce-jump {
          from { left: 0; }
          to { left: var(--x); }
          from, to { transform: translateY(0); }
          50% { transform: translateY(var(--y)); }
        }
      `}</style>
      
      <div className="absolute inset-0 grid grid-cols-[repeat(3,auto)] justify-center content-center gap-[30px]">
        {/* Dot 1 */}
        <div 
          className="relative w-[30px] h-[30px]"
          style={{ '--delay': '0s', '--y': '-150%', '--x': 'calc(30px * 2)' } as React.CSSProperties}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full origin-bottom"
            style={{
              animation: 'bounce-scale1 0.6s ease-in-out calc(0s + var(--delay)) both',
            }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-full bg-[#ff3366] origin-bottom"
              style={{
                animation: `
                  bounce-jump 0.6s ease-in-out calc(0.2s + var(--delay)) both,
                  bounce-scale2 0.2s ease-out calc(0.8s + var(--delay)) forwards
                `,
              }}
            />
          </div>
        </div>
        
        {/* Dot 2 */}
        <div 
          className="relative w-[30px] h-[30px]"
          style={{ '--delay': '0.15s', '--y': '-250%', '--x': 'calc(30px * 2)' } as React.CSSProperties}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full origin-bottom"
            style={{
              animation: 'bounce-scale1 0.6s ease-in-out calc(0s + var(--delay)) both',
            }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-full bg-[#ff3366] origin-bottom"
              style={{
                animation: `
                  bounce-jump 0.6s ease-in-out calc(0.2s + var(--delay)) both,
                  bounce-scale2 0.2s ease-out calc(0.8s + var(--delay)) forwards
                `,
              }}
            />
          </div>
        </div>
        
        {/* Dot 3 */}
        <div 
          className="relative w-[30px] h-[30px]"
          style={{ '--delay': '0.3s', '--y': '-300%', '--x': 'calc(30px * -4)' } as React.CSSProperties}
        >
          <div 
            className="absolute top-0 left-0 w-full h-full origin-bottom"
            style={{
              animation: 'bounce-scale1 0.6s ease-in-out calc(0s + var(--delay)) both',
            }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-full rounded-full bg-[#ff3366] origin-bottom"
              style={{
                animation: `
                  bounce-jump 0.6s ease-in-out calc(0.2s + var(--delay)) both,
                  bounce-scale2 0.2s ease-out calc(0.8s + var(--delay)) forwards
                `,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
