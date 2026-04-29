'use client';

/**
 * Folding Lines Animation
 * From: yui540/css-animations (tips-3)
 * Technique: Sequential rotation with transform-origin changes
 */
export function FoldLinesAnimation() {
  return (
    <div className="relative w-full max-w-[320px] aspect-square bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden mx-auto mt-16">
      <style>{`
        @keyframes fold-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(90deg); }
        }
        @keyframes fold-rotate-over {
          from { transform: rotate(0deg); }
          50% { transform: rotate(90deg); }
          75% { transform: rotate(84deg); }
          to { transform: rotate(90deg); }
        }
      `}</style>
      
      <div className="absolute inset-0 grid justify-start items-center pl-[30px]">
        <div className="relative w-[70px] aspect-square origin-left-bottom">
          {/* Shadow */}
          <div 
            className="absolute rounded-full bg-white/30"
            style={{
              bottom: 'calc(-26px / 2)',
              left: 'calc(-26px / 2)',
              width: 'calc(100% + 26px)',
              height: '26px',
            }}
          />
          
          {/* Right line */}
          <div 
            className="absolute inset-0 origin-right-bottom"
            style={{
              animation: 'fold-rotate 0.3s ease-in-out 0.2s both, fold-rotate 0.3s ease-in-out 2.3s reverse forwards',
            }}
          >
            <div 
              className="absolute bg-white/50 rounded-full"
              style={{
                top: 'calc(-26px / 2)',
                right: 'calc(-26px / 2)',
                width: '26px',
                height: 'calc(100% + 26px)',
              }}
            />
            
            {/* Top line */}
            <div 
              className="absolute inset-0 origin-right-top"
              style={{
                animation: 'fold-rotate 0.3s ease-in-out 0.5s both, fold-rotate 0.3s ease-in-out 2s reverse forwards',
              }}
            >
              <div 
                className="absolute bg-white/40 rounded-full"
                style={{
                  top: 'calc(-26px / 2)',
                  left: 'calc(-26px / 2)',
                  width: 'calc(100% + 26px)',
                  height: '26px',
                }}
              />
              
              {/* Left line */}
              <div 
                className="absolute inset-0 origin-left-top"
                style={{
                  animation: 'fold-rotate-over 0.6s ease-in-out 0.8s both, fold-rotate 0.3s ease-in-out 1.7s reverse forwards',
                }}
              >
                <div 
                  className="absolute bg-white/60 rounded-full"
                  style={{
                    top: 'calc(-26px / 2)',
                    left: 'calc(-26px / 2)',
                    width: '26px',
                    height: 'calc(100% + 26px)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
