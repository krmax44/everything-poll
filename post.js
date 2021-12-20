import fs from 'fs/promises';
import toot from './mastodon.js';
import tweet from './twitter.js';

const wordsFile = await fs.readFile('nouns.txt', { encoding: 'utf-8' });
const words = wordsFile.split('\n');
const randomWord = words[Math.floor(Math.random() * words.length)];

const options = ['yes', 'no'];
const durationInMinutes = 24 * 60;

await tweet(randomWord, options, durationInMinutes);
await toot(randomWord, options, durationInMinutes * 60);
