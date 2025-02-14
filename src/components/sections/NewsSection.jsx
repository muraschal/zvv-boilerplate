import ZvvTeaser from '../ui/ZvvTeaser';

const NEWS_DATA = [
  {
    image: '/news/kundencenter.jpg',
    title: 'ZVV-Contact-Kundencenter am Zürich HB',
    description: 'Das ZVV-Kundencenter am HB zieht um. Ab dem 10. März 2025 begrüssen wir Sie in der Halle Landesmuseum.',
    link: '#'
  },
  {
    image: '/news/qr-code.jpg',
    title: 'Via QR-Code zu Echtzeitinformationen',
    description: 'Rufen Sie die nächsten Abfahrtszeiten in Echtzeit ab. Einfach den QR-Code an der Haltestelle scannen und informiert bleiben.',
    link: '#'
  },
  {
    image: '/news/ticket.jpg',
    title: 'Viele Wege zum ZVV-Ticket – auch ohne Smartphone',
    description: 'Der Zugang zu Tickets bleibt für alle Fahrgäste, auch ohne Smartphone, unkompliziert und vielfältig.',
    link: '#'
  }
];

const NewsSection = () => {
  return (
    <section className="py-12 bg-zvv-gray-100">
      <div className="zvv-container">
        <h2 className="text-3xl font-bold mb-8">
          News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_DATA.map((news, index) => (
            <ZvvTeaser
              key={index}
              {...news}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 