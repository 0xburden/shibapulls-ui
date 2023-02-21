import { Meta, Button } from '@/modules/common/components'
import { Banner, Team } from '@/modules/home/components'
import BaseLayout from '@/layouts/BaseLayout'

export default function Home() {
  return (
    <>
      <Meta title="Home" />

      <BaseLayout preContent={<Banner />} postContent={<Team />}>
        <main>
          <section>
            <div className="m-auto py-4 pb-8 max-w-2xl text-center">
              <h1 className="text-xl md:text-2xl font-mochiy">
                Title Goes Here
              </h1>

              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <Button className="mt-8 m-auto text-sm">Mint Now!</Button>
            </div>
          </section>
        </main>
      </BaseLayout>
    </>
  )
}
