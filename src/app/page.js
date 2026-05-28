import Banner from '@/components/Banner';
import React from 'react';
import PetPage from './pets/page';
import FeaturePets from '@/components/FeaturePets';
import WhyAdopt from '@/components/WhyAdopt';
import SuccessStories from '@/components/SuccessStories';
import PetCareTips from '@/components/PetCareTips';
import VolunteerBanner from '@/components/VolunteerBanner';

const page = () => {
  return (
    <div>
      <Banner />
      {/* <PetPage/> */}
      <FeaturePets />
      <WhyAdopt />
      <SuccessStories />
      <PetCareTips />
      <VolunteerBanner />
    </div>
  );
};

export default page;