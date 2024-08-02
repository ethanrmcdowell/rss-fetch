import fetch from 'node-fetch';
import { Parser } from 'xml2js';

async function fetchRSSFeed(url) {
    try {
      const response = await fetch(url);
      const rssText = await response.text();
  
      const parser = new Parser();
      const rssJson = await parser.parseStringPromise(rssText);
  
      return rssJson;
    } catch (error) {
      console.error('Error fetching or parsing RSS feed:', error);
    }
  }

// const rssUrl = 'https://www.clickondetroit.com/arc/outboundfeeds/rss/category/news/?outputType=xml&size=10';
const rssUrl = 'https://www.mlive.com/arc/outboundfeeds/rss/?outputType=xml';

fetchRSSFeed(rssUrl).then(rssJson => {
    let articles = JSON.stringify(rssJson, null, 2);
    console.log(rssJson.rss.channel[0].item[0]['media:content']);
    // console.log(JSON.stringify(rssJson, null, 2));
});