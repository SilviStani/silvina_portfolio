'use client';
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    window.location.replace(
      'https://wa.me/5491163632288?text=Hello!%20I\'m%20interested%20in%20learning%20more%20about%20your%20web%20development%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?'
    );
  }, []);

  return null;
};

export default page;
