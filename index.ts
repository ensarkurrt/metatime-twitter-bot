import clipboard from 'clipboardy';
import { TwitterApi } from 'twitter-api-v2';
require('dotenv').config();

/* Görev kısmında istenen 10 kelime için tweet içerisine ekleniyor */
const text =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

/* Görev etiketleri, 3 farklı görev için 3 farklı string kullanılmıştır. Görev sayısını arttırmak için array eklemek yeterli. */
const tags = [
  '#MetaAirdrop ve #Airdrop',
  '#MetaAirdrop ve #Airdrop',
  '#MetaAirdrop ve #Airdrop',
];

const username = process.env.TW_USERNAME;

const clientOptions = {
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
};
const twitterClient = new TwitterApi(clientOptions);

async function start() {
  for (let a = 0; a < tags.length; a++) {
    for (let b = 0; b < 3; b++) {
      const tweetId = await create_tweet(tags[b]);
      /*  Clipboard'a yapıştırma */
      pbcopy(generated_url(tweetId));
      /*  7 saniye bekleme */
      await new Promise((resolve) => setTimeout(resolve, 7000));
      const deleteResp = await delete_tweet(tweetId);
    }
  }
}

async function create_tweet(tags) {
  const createResp = await twitterClient.v2.tweet(text + ' ' + tags);
  console.log('Tweet Olusturuldu');
  return createResp.data.id;
}

async function delete_tweet(tweetId) {
  const deleteResp = await twitterClient.v2.deleteTweet(tweetId);
  console.log('Tweet Silindi');
  return deleteResp.data.deleted;
}

function generated_url(tweetId) {
  return `https://twitter.com/${username}/status/${tweetId}`;
}

/* Clipboard'a yapıştırma fonksiyonu */
async function pbcopy(data) {
  await clipboard.write(data);
}

start();
