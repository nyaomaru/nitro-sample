import { Link } from './Link';

export function Navigation(): string {
  return `
      <div class="flex-1 m-4">
        ${Link({
          href: '/assets',
          color: 'cyan',
          text: 'Assets',
        })}
        ${Link({
          href: '/fetch',
          color: 'pink',
          text: 'Fetch',
        })}
        ${Link({
          href: '/test',
          color: 'orange',
          text: 'Storage test',
        })}
    </div>
    `;
}
