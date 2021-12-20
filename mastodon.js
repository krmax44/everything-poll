import got from 'got';

export default async function toot(status, options, expires_in) {
  try {
    await got.post(`${process.env.MASTODON_API_URL}/statuses`, {
      json: {
        status,
        poll: {
          options,
          expires_in
        }
      },
      headers: {
        Authorization: `Bearer ${process.env.MASTODON_ACCESS_TOKEN}`
      }
    });
  } catch (e) {
    throw new Error('Mastodon Error');
  }
}
