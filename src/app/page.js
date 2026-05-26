import Banner from '@/components/Banner';
import FeaturedPets from '@/components/FeaturePets';
import PetCard from '@/components/PetCard';
import React from 'react';
import PetPage from './pets/page';

const page = () => {
  return (
    <div>
      <Banner/>
      <PetPage/>
    </div>
  );
};

export default page;