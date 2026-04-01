import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'All Projects',
          href: getBlogPermalink(),
        },
        {
          text: 'LiveWire',
          href: getPermalink('livewire', 'post'),
        },
        {
          text: 'Music In Medicine',
          href: getPermalink('music-in-medicine', 'post'),
        },
        {
          text: 'MindSpring',
          href: getPermalink('mindspring', 'post'),
        },
        {
          text: 'EEG on Emotions',
          href: getPermalink('emotional-flamenco', 'post'),
        },
        {
          text: 'La Catrina Monarca',
          href: getPermalink('catrina-monarca', 'post'),
        },
      ],
    },
    {
      text: 'Github',
      href: 'https://github.com/MaxineAnnelPachecoRamirez',
    },
    {
      text: 'YouTube',
      href: 'https://www.youtube.com/@MaxineAnnelPacheco-Ram%C3%ADrez',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/phdwithmaxineannel/',
    },
    {
      text: 'Figshare',
      href: 'https://figshare.com/authors/Maxine_Annel_Pacheco-Ram_rez/14013636',
    },
    {
      text: 'ORCID',
      href: 'https://orcid.org/my-orcid?orcid=0000-0003-0113-5911',
    },
  ],
  actions: [
    {
      text: 'Get Resume',
      href: 'https://uh.edu',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/MaxineAnnelPachecoRamirez' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
