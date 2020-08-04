import React from 'react';

import Topbar from '../../components/Topbar';
import Finder from '../../components/Finder';

function Home() {
  const courseLevels = [
    {
      id: 1,
      name: 'Iniciante',
    },
    {
      id: 5,
      name: 'Intermediário',
    },
    {
      id: 10,
      name: 'Avançado',
    },
  ];
  const courseTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 24,];

  return (
    <>
      <Topbar />

      <Finder levels={courseLevels} time={courseTime} />
    </>
  );
}

export default Home;