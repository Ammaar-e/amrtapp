import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>AMRT App</h1>
      <p><Link href="/join" prefetch={false}>Welcome to the AMRT application! </Link></p>
      <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      />
    </div>
  );
}

