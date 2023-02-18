import Link from 'next/link'
import { Button } from '@/modules/common/components'

export default function TopBar() {
  return (
    <div className="bg-black h-[70px] w-full">
      <nav className="m-auto max-w-6xl w-full flex items-center justify-between px-4 h-full">
        <Link href="/">
          <strong className="block font-mochiy text-white text-xl md:text-2xl">
            Shiba Pulls
          </strong>
        </Link>

        <div>
          <Button>Connect</Button>
        </div>
      </nav>
    </div>
  )
}
