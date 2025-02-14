import ZvvTeaser from '../ui/ZvvTeaser';
import PropTypes from 'prop-types';

const NEWS_DATA = [
  {
    image: 'https://www.zvv.ch/dam/jcr:d5a87d6a-7bce-4345-a5f9-5c4d8a03e1f6/kontaktstelle_hb_teaser.jpg',
    title: 'ZVV-Contact-Kundencenter am Zürich HB',
    description: 'Das ZVV-Kundencenter am HB zieht um. Ab dem 10. März 2025 begrüssen wir Sie in der Halle Landesmuseum.',
    link: '/news/kundencenter'
  },
  {
    image: 'https://www.zvv.ch/dam/jcr:6c0f6a4d-e528-4e7d-b0e4-c1a2c82d3e4a/qr_code_teaser.jpg',
    title: 'Via QR-Code zu Echtzeitinformationen',
    description: 'Rufen Sie die nächsten Abfahrtszeiten in Echtzeit ab. Einfach den QR-Code an der Haltestelle scannen und informiert bleiben.',
    link: '/news/qr-code'
  },
  {
    image: 'https://www.zvv.ch/dam/jcr:f5c6e2f1-7d4c-4ab0-8f3e-4c9b1c3a7c3e/billettautomat_teaser.jpg',
    title: 'Viele Wege zum ZVV-Ticket – auch ohne Smartphone',
    description: 'Der Zugang zu Tickets bleibt für alle Fahrgäste, auch ohne Smartphone, unkompliziert und vielfältig.',
    link: '/news/tickets'
  }
];

const NewsSection = ({ items = NEWS_DATA }) => {
  return (
    <section className="py-12 bg-zvv-gray-100">
      <div className="zvv-container">
        <h2 className="text-3xl font-bold mb-8">
          News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((news, index) => (
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

NewsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
};

export default NewsSection; 