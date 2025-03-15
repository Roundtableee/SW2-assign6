'use client';

import React, { useState } from 'react';
import { Rating } from '@mui/material';

interface CardProps {
  venueName: string;
  imgSrc: string;
  onRatingChange: (venueName: string, newRating: number) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
  // Local state for the star rating (does NOT reset if the venue is removed from the map).
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  /** When rating changes, update local state + notify CardPanel. */
  const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
    setRatingValue(newValue);
    onRatingChange(venueName, newValue ?? 0);
  };

  return (
    <div className="rounded-lg shadow-lg bg-white p-4 max-w-sm">
      <img
        src={imgSrc}
        alt={venueName}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2 text-black">{venueName}</h2>

      <Rating
        id={`${venueName} Rating`}
        name={`${venueName} Rating`}
        data-testid={`${venueName} Rating`}
        value={ratingValue}
        onChange={handleRatingChange}
      />
    </div>
  );
}
