'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();
  
  // Convert pathname to breadcrumb items
  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(path => path);
    
    // Create breadcrumb items
    const items = paths.map((path) => {
      // Convert path to display text (e.g., 'about' to 'About us')
      let title = path;
      if (path === 'about') {
        title = 'About us';
      } else {
        title = path
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      
      return {
        title,
        path: `/${path}`
      };
    });

    return [{ title: 'Home', path: '/' }, ...items];
  };

  const breadcrumbs = getBreadcrumbs();

  if (pathname === '/') return null;

  return (
    <nav className="flex px-4 py-4 text-gray-700 max-w-7xl mx-auto w-full" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <Link
              href={item.path}
              className={`text-base ${
                index === breadcrumbs.length - 1
                  ? 'text-gray-500 cursor-default'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              {item.title}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-gray-400 text-lg">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 