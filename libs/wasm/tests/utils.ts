import { Client } from '../src/lib';

export const randSmall = () => {
  return crypto.randomUUID().split('-').at(-1);
};

export const defaultClient = () => {
  return new Client('http://localhost:9009');
};
