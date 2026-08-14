export function SpiderLoader() {
  return (
    <>
      {/* Loading bar at top */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-border overflow-hidden">
        <div className="h-full bg-foreground animate-loading-bar" />
      </div>
      
      {/* Center spider loader */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md">
        <div className="relative">
          {/* Spinning circle */}
          <div className="h-28 w-28 animate-spin rounded-full border-[3px] border-border border-t-foreground" />
          
          {/* Spider in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/spider-hanging.png"
              alt=""
              className="h-14 w-14 animate-pulse object-contain opacity-95"
            />
          </div>
        </div>
        
        {/* Optional loading text */}
        <p className="absolute bottom-1/3 text-sm text-muted-foreground animate-pulse">
          loading...
        </p>
      </div>
    </>
  );
}
