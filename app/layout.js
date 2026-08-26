import './globals.css';
import './variants.css';

export const metadata = {
  title: 'Consumer Alert: Federal Hemp Rules Change November 12, 2026',
  description: 'Sponsored consumer information about the federal hemp definition change and access to hemp-derived THC products.',
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
