import Banner from '@/components/Banner';
import React from 'react';
import PetPage from './pets/page';
import FeaturePets from '@/components/FeaturePets';
import WhyAdopt from '@/components/WhyAdopt';
import SuccessStories from '@/components/SuccessStories';

const page = () => {
  return (
    <div>
      <Banner/>
      {/* <PetPage/> */}
      <FeaturePets/>
      <WhyAdopt/>
      <SuccessStories/>
    </div>
  );
};

export default page;