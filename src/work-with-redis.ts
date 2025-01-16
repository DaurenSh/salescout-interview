// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library

import { createClient } from 'redis';

async function manageRedis(): Promise<void> {
  const client = createClient();
  client.on('error', (err) => console.error('Redis Client Error:', err));
  
  await client.connect();

  await client.set('myKey', 'Hello from Redis');
  await client.set('user:name', 'Alice');
  await client.set('user:age', '25');

  const keyToRead = 'user:name';
  const value = await client.get(keyToRead);
  console.log(`Value for key "${keyToRead}": ${value}`);

  await client.disconnect();
}

module.exports = { manageRedis };
