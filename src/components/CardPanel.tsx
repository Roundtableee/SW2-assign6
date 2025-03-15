'use client';

import React, { useReducer } from 'react';
import Card from './Card';

/** Define action types for our reducer. */
type Action =
  | { type: 'SET_RATING'; payload: { venueName: string; rating: number } }
  | { type: 'REMOVE_VENUE'; payload: { venueName: string } };

/** Reducer to manage a Map<string, number> that stores (venueName -> rating). */
function ratingReducer(state: Map<string, number>, action: Action) {
  switch (action.type) {
    case 'SET_RATING': {
      const { venueName, rating } = action.payload;
      const newState = new Map(state);
      newState.set(venueName, rating);
      return newState;
    }
    case 'REMOVE_VENUE': {
      const { venueName } = action.payload;
      const newState = new Map(state);
      newState.delete(venueName);
      return newState;
    }
    default:
      return state;
  }
}

/** Initial ratings set to 0 for all three venues. */
const initialRatingMap = new Map<string, number>([
  ['The Bloom Pavilion', 0],
  ['Spark Space', 0],
  ['The Grand Table', 0],
]);

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatingMap);

  /** Callback to update rating in the Map. */
  const handleRatingChange = (venueName: string, newRating: number) => {
    dispatch({ type: 'SET_RATING', payload: { venueName, rating: newRating } });
  };

  return (
    <div>
      {/* Render three cards in a row */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          onRatingChange={handleRatingChange}
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          onRatingChange={handleRatingChange}
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          onRatingChange={handleRatingChange}
        />
      </div>

      {/* Show a list of venues + ratings below. Clicking a venue removes it from the Map. */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {Array.from(ratingMap.entries()).map(([venue, rating]) => (
          <div
            key={venue}
            data-testid={venue}
            style={{
              cursor: 'pointer',
              border: '1px solid #ccc',
              display: 'inline-block',
              padding: '8px 12px',
              margin: '5px',
            }}
            onClick={() => dispatch({ type: 'REMOVE_VENUE', payload: { venueName: venue } })}
          >
            {venue} : {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
