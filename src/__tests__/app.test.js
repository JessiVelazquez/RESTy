import React from 'react';
import Results from '../results.js';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('should test return data from API exists', async () => {
  const raw = await fetch('https://swapi.dev/api/people/', {method:'GET'});
  let data = await raw.json();
  let entries = data.results;
  let results = Object.entries(entries);

  render(<Results src={results} />);

  console.log(results);
  expect(results);

});

it('should verify expected length of API call return (10)', async () => {
  const raw = await fetch('https://swapi.dev/api/people/', {method:'GET'});
  let data = await raw.json();
  let entries = data.results;
  let results = Object.entries(entries);

  render(<Results src={results} />);

  console.log(results);
  expect(results).toHaveLength(10);

});

