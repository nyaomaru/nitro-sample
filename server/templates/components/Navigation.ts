import { Link } from './Link';

export function Navigation(): string {
  const links = [
    { href: '/assets', color: 'cyan', text: 'Assets' },
    { href: '/fetch', color: 'pink', text: 'Fetch' },
    { href: '/test', color: 'orange', text: 'Storage test' },
  ];

  return `
      <div class="flex-1 m-4">
        ${links.map(Link).join('')}
      </div>
    `;
}
