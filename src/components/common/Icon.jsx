const Icon = ({ children, className = "", ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`w-5 h-5 ${className}`}
    {...props}
  >
    {children}
  </svg>
);

export default Icon;