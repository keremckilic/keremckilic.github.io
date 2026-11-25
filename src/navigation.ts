import { getPermalink } from './utils/permalinks';
import { profile } from './data/profile';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Experience', href: getPermalink('/experience') },
    { text: 'Research', href: getPermalink('/research') },
    { text: 'Record Shelf', href: getPermalink('/record-shelf') },
  ],
};

export const footerData = {
  footNote: `© ${new Date().getFullYear()} ${profile.name}`,
};
