import { TwitterApi } from 'twitter-api-v2';

export default async function tweet(text, options) {
  try {
    const client = new TwitterApi({
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      appKey: process.env.TWITTER_CONSUMER,
      appSecret: process.env.TWITTER_CONSUMER_SECRET
    });

    await client.v2.tweet(text, {
      poll: {
        options,
        duration_minutes: 24 * 60
      }
    });

    console.log('Posted on Twitter.');
  } catch (e) {
    throw new Error('Twitter Error');
  }
}
