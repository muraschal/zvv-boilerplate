const ZvvButton = ({ 
  children, 
  variant = 'primary', 
  as: Component = 'button', 
  className = '', 
  ...props 
}) => {
  const baseClass = variant === 'primary' ? 'zvv-button-primary' : 'zvv-button-secondary';
  
  return (
    <Component
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ZvvButton; 