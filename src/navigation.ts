import { getPermalink } from './utils/permalinks';
import { profile } from './data/profile';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Experience', href: getPermalink('/experience') },
    { text: 'Research', href: getPermalink('/research') },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: profile.links.map((l) => ({ ariaLabel: l.label, icon: l.icon, href: l.href })),
  footNote: `
    © ${new Date().getFullYear()} ${profile.name} · Built with <a class="underline" href="https://github.com/onwidget/astrowind">AstroWind</a>.
  `,
};
