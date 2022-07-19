import Link from 'next/link';

export default function Custom500() {
  return (
    <div>
      <h1>500 - Server-side error occurred</h1>
      <Link href={'/'}>
        <button>Back to Home page</button>
      </Link>
    </div>
  );
}
