"use client";

// Optimized glass morphism component for better performance
export function OptimizedGlass({ children, className = "", intensity = "medium", ...props }) {
  const getGlassStyles = (intensity) => {
    switch (intensity) {
      case "light":
        return {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 15px 30px -8px rgba(0, 0, 0, 0.15)'
        };
      case "heavy":
        return {
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 35px 70px -15px rgba(0, 0, 0, 0.35)'
        };
      default: // medium
        return {
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px) saturate(150%)',
          WebkitBackdropFilter: 'blur(20px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        };
    }
  };

  return (
    <div
      className={`${className}`}
      style={{
        ...getGlassStyles(intensity),
        transform: 'translateZ(0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
      {...props}
    >
      {children}
    </div>
  );
}