'use client';

/**
 * Box Flip Animation
 * From: yui540/css-animations (tips-2)
 * Technique: Multi-layer animation — pull rope → sway → flip rect
 */
export function BoxFlipAnimation() {
  return (
    <div className="relative w-full max-w-[320px] aspect-square bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden mx-auto mt-16">
      <style>{`
        @keyframes pull {
          from, to { transform: translate(-50%, 100%); }
          30% { transform: translate(-50%, 130%); }
          60% { transform: translate(-50%, 92%); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-10deg); }
          60% { transform: rotate(7deg); }
        }
        @keyframes sway-reverse {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(10deg); }
          60% { transform: rotate(-7deg); }
        }
        @keyframes turn {
          from { transform: rotate(0deg); }
          50% { transform: rotate(-190deg); }
          75% { transform: rotate(-175deg); }
          to { transform: rotate(-180deg); }
        }
        @keyframes turn-reverse {
          from { transform: rotate(-180deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-5deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
      <div className="absolute inset-0 scale-[1.5]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-20 h-20">
          {/* Rope */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-[3px] h-[45%]"
            style={{
              animation: 'pull 1s ease-in-out 0.2s both, pull 1s ease-in-out 2s forwards',
            }}
          >
            <div
              className="absolute inset-0 origin-top"
              style={{
                animation: 'sway 1.5s ease-in-out 0.2s both, sway-reverse 1.5s ease-in-out 2s forwards',
              }}
            >
              <div className="absolute bottom-0 left-0 w-full h-[200%] bg-white/15" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400%] aspect-square bg-white/30 rounded-full" />
            </div>
          </div>
          
          {/* Box */}
          <div className="absolute inset-0 bg-white/[0.08] rounded-[25%] overflow-hidden">
            <div
              className="absolute inset-0 origin-bottom"
              style={{
                animation: 'turn 1s ease-in-out 0.35s both, turn-reverse 1s ease-in-out 2.15s forwards',
              }}
            >
              <div className="absolute inset-0 origin-bottom">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-white/20" />
              </div>
              <div className="absolute inset-0 origin-bottom rotate-180">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
