import { Helmet } from 'react-helmet-async'
import Categories from '../components/Categories';
import ServiceCollection from '../components/ServiceCollection';

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Merkez Çaphana | Services</title>
        <meta name="description" content="..." />
      </Helmet>
      <div className="mb-[70px] mt-[50px]">
        <Categories center={true} />
      </div>
      {/* =====================================================hyzmatlar======================================================== */}
      <ServiceCollection />
    </div>
  );
}

export default Services
