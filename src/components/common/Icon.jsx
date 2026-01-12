export const StaticIcon = ({ children, className = "", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`w-5 h-5 ${className}`}
    {...props}
  >
    {children}
  </svg>
);

export const AnimatedIcon = ({ children, className = "", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`${className}`}
    {...props}
  >
    {children}
  </svg>
);
