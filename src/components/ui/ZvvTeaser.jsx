const ZvvTeaser = ({ 
  image, 
  title, 
  description, 
  link = '#',
  imageAlt = '' 
}) => {
  return (
    <a 
      href={link}
      className="block bg-white rounded-zvv shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-zvv-gray-900 mb-2 group-hover:text-zvv-blue">
          {title}
        </h3>
        <p className="text-zvv-gray-600">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ZvvTeaser; 