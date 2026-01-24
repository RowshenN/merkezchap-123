import React from 'react'

import img9 from "./../images/categories/bussiness_card.png";
import img10 from "./../images/categories/cakylyklar.png";
import img11 from "./../images/categories/esikler.png";
import img12 from "./../images/categories/flayerler.png";
import img13 from "./../images/categories/stikerler.png";
import img14 from "./../images/CaretLeft.svg";
import img15 from "./../images/CaretRight.svg";
import img16 from "./../images/services/bannerler.png";
import img17 from "./../images/services/blaknot.png";
import img18 from "./../images/services/esiklere cap.png";
import img19 from "./../images/services/gaplar.png";
import img20 from "./../images/services/hormat haty.png";
import img21 from "./../images/services/kalendar kici.png";
import img22 from "./../images/services/kalendar uly.png";
import img23 from "./../images/services/magnit.png";
import img24 from "./../images/services/rucka.png";
import img25 from "./../images/services/wizitkalar.png";
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
