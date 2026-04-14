import { fallback, link, main, top } from './render.js';
import data from './stats.json';

export type Year = {
  from: string;
  to: string;
  days: number[];
};

const MAX_YEARS = 3;

type Theme = 'light' | 'dark';

function isTheme(s: string): s is Theme {
  return s === 'light' || s === 'dark';
}

/**
 * Path-based routes avoid `?` / `&` in readme HTML (GitHub/Camo can mangle query strings).
 * Pattern: /r{rev}/{section}/.../{theme}
 * Bump `rev` (e.g. r7 → r8) to bust caches when needed.
 */
function parsePath(pathname: string): {
  section: string;
  theme: Theme;
  linkIndex: number;
} | null {
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  if (parts.length < 3) return null;
  if (!/^r\d+$/i.test(parts[0])) return null;

  const rest = parts.slice(1);
  const themeStr = rest[rest.length - 1];
  if (!isTheme(themeStr)) return null;
  const theme = themeStr;
  const head = rest.slice(0, -1);

  if (head.length === 1 && head[0] === 'top') {
    return { section: 'top', theme, linkIndex: 0 };
  }
  if (head.length === 1 && head[0] === 'main') {
    return { section: 'main', theme, linkIndex: 0 };
  }
  if (head.length === 1 && head[0] === 'fallback') {
    return { section: 'fallback', theme, linkIndex: 0 };
  }
  if (head.length === 3 && head[0] === 'link' && head[1] === 'website') {
    return { section: 'link-website', theme, linkIndex: Number(head[2]) || 0 };
  }
  if (head.length === 3 && head[0] === 'link' && head[1] === 'twitter') {
    return { section: 'link-twitter', theme, linkIndex: Number(head[2]) || 0 };
  }
  if (head.length === 3 && head[0] === 'link' && head[1] === 'instagram') {
    return { section: 'link-instagram', theme, linkIndex: Number(head[2]) || 0 };
  }

  return null;
}

function buildSvg(
  section: string,
  theme: Theme,
  linkIndex: number,
  location: { city: string; country: string }
): string {
  if (section === 'top') {
    const { contributions } = data;
    return top({ height: 20, contributions, theme });
  }
  if (section === 'link-website') {
    return link({ height: 18, width: 100, index: linkIndex, theme })('Website');
  }
  if (section === 'link-twitter') {
    return link({ height: 18, width: 100, index: linkIndex, theme })('Twitter');
  }
  if (section === 'link-instagram') {
    return link({ height: 18, width: 100, index: linkIndex, theme })('Instagram');
  }
  if (section === 'fallback') {
    return fallback({ height: 180, width: 420, theme });
  }
  if (section === 'main') {
    const years = data.years.slice(0, MAX_YEARS);
    const options = {
      dots: {
        rows: 6,
        size: 24,
        gap: 5
      },
      year: {
        gap: 5
      }
    };

    const sizes = years.map((year) => {
      const columns = Math.ceil(year.days.length / options.dots.rows);
      const width = columns * options.dots.size + (columns - 1) * options.dots.gap;
      const height =
        options.dots.rows * options.dots.size + (options.dots.rows - 1) * options.dots.gap;
      return [width, height];
    });

    const length =
      sizes.reduce((acc, size) => {
        acc += size[0] + options.year.gap;
        return acc;
      }, 0) - options.year.gap;

    return main({ height: 290, years, sizes, length, location, theme, ...options });
  }

  return ':-)';
}

const worker: ExportedHandler = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let section = '';
    let theme: Theme = 'light';
    let linkIndex = 0;

    const fromPath = parsePath(url.pathname);
    if (fromPath) {
      section = fromPath.section;
      theme = fromPath.theme;
      linkIndex = fromPath.linkIndex;
    } else {
      const { searchParams } = url;
      theme = (searchParams.get('theme') ?? 'light') as Theme;
      if (!isTheme(theme)) theme = 'light';
      section = searchParams.get('section') ?? '';
      linkIndex = Number(searchParams.get('i')) || 0;
    }

    if (!section) {
      section = 'main';
    }

    const location = {
      city: (request.cf?.city || '') as string,
      country: (request.cf?.country || '') as string
    };

    const content = buildSvg(section, theme, linkIndex, location);

    return new Response(content, {
      headers: {
        'content-type': 'image/svg+xml',
        'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        pragma: 'no-cache',
        expires: '0'
      }
    });
  }
};

export default worker;
