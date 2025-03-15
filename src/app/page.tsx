'use client';

import React from 'react';
import Banner from '../components/Banner';
import CardPanel from '../components/CardPanel';

export default function HomePage() {
  return (
    <div>
      <Banner />
      {/* CardPanel handles the rating logic & rendering of cards */}
      <CardPanel />
    </div>
  );
}
