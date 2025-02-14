const ZvvButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClass = variant === 'primary' ? 'zvv-button-primary' : 'zvv-button-secondary';
  
  return (
    <button 
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ZvvButton; 