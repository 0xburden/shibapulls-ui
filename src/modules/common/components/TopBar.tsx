import Link from 'next/link'

export default function TopBar() {
  return (
    <div className="bg-black h-[70px] w-full">
      <nav className="m-auto max-w-6xl w-full flex items-center h-full">
        <Link href="/">
          <strong className="block font-mochiy text-white text-2xl">
            Shiba Pulls
          </strong>
        </Link>
      </nav>
    </div>
  )
}
