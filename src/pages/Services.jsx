import Categories from '../components/Categories';
import ServiceCollection from '../components/ServiceCollection';

const Services = () => {
  return (
    <div>
      <div className="mb-[70px] mt-[50px]">
        <Categories center={true} />
      </div>
      {/* =====================================================hyzmatlar======================================================== */}
      <ServiceCollection />
    </div>
  );
}

export default Services
