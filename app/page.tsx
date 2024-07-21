import Link from 'next/link'

export default function Home() {
  return (
    <div className="m-4">

      <h1 className="mb-4">This will be the landing page</h1>
      <Link href='/login' className='border p-2'>Login</Link>
      <Link href='/signup' className='border p-2'>Sign Up</Link>
    </div>
  );
}