// The Record Shelf page shows these covers in this order, three per row.
//
// To make a cover clickable, paste its Spotify link into `href`
// (in Spotify: right-click the album, Share, Copy link to album).
// An empty `href` shows the cover without a link.
//
// To add an album: put a square JPEG (about 600x600 px) in `public/records/`
// and add another entry below. `alt` is not shown on the page; it describes the cover
// to screen readers.

export type Album = {
  image: string;
  alt: string;
  href: string;
};

export const records: Album[] = [
  {
    image: '/records/george-benson-breezin.jpg',
    alt: "George Benson, Breezin'",
    href: 'https://open.spotify.com/album/1ei5QjnfB7PHINJOH8Gft5',
  },
  {
    image: '/records/pink-floyd-delicate-sound-of-thunder.jpg',
    alt: 'Pink Floyd, Delicate Sound of Thunder',
    href: 'https://open.spotify.com/album/7DPoLqwNXzCTBpI1jrqjtv',
  },
  {
    image: '/records/herbie-hancock-empyrean-isles.jpg',
    alt: 'Herbie Hancock, Empyrean Isles',
    href: 'https://open.spotify.com/album/5HCi1WVOT9SGks2deeceFu',
  },
  {
    image: '/records/live-vol-1.jpg',
    alt: 'Live Vol. 1',
    href: 'https://open.spotify.com/album/4ckyPfMqe26PrOgEWdjWns',
  },
  {
    image: '/records/yussef-dayes-experience-live-from-malibu.jpg',
    alt: 'The Yussef Dayes Experience, Live from Malibu',
    href: 'https://open.spotify.com/album/5gohS1223mJrzBVQzakpjm',
  },
  {
    image: '/records/st-germain-tourist.jpg',
    alt: 'St Germain, Tourist',
    href: 'https://open.spotify.com/album/0YqCvOMhp8enM01an9Nntj',
  },
  {
    image: '/records/jamiroquai-travelling-without-moving.jpg',
    alt: 'Jamiroquai, Travelling Without Moving',
    href: 'https://open.spotify.com/album/4yrrPNjd9RcqnuDnoEhlER',
  },
  {
    image: '/records/dire-straits.jpg',
    alt: 'Dire Straits, Dire Straits',
    href: 'https://open.spotify.com/album/2rCS6Xwx32V27pvgFzLzlT',
  },
];
