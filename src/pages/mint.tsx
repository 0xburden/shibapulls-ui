import { Meta, Button } from '@/modules/common/components'
import BaseLayout from '@/layouts/BaseLayout'

export default function Mint() {
  return (
    <>
      <Meta title="Mint" />

      <BaseLayout>
        <div className="min-h-[70vh] w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">??/300 Minted</h2>

          <div className="mt-4">
            <Button>Mint</Button>
          </div>
        </div>
      </BaseLayout>
    </>
  )
}
