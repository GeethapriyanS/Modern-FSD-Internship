import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Page Routing : Welcome to the Home Page</h1>
      <nav>
        <Link href="/about">Go to About</Link><br />
        <Link href="/contact">Go to Contact</Link><br />
        <Link href="/blog/123">Go to Blog Post 123</Link>
      </nav>
    </div>
  );
}