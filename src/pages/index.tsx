import { Meta } from '@/modules/common/components'
import BaseLayout from '@/layouts/BaseLayout'

export default function Home() {
  return (
    <>
      <Meta title="Home" />

      <BaseLayout>
        <main>
          <h1 className="text-6xl mt-8 font-mochiy text-center">Hello</h1>
        </main>
      </BaseLayout>
    </>
  )
}
