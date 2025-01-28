export function Link({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color: string;
}): string {
  return `
    <a
      href="${href}"
      class="block w-64 m-4 bg-${color}-500 hover:bg-${color}-600 text-white font-semibold py-2 px-4 rounded-lg"
    >
      ${text}
    </a>
    `;
}
