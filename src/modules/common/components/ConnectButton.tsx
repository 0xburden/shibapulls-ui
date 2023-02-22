import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/modules/common/components'
import { useIsMounted } from '@/modules/common/hooks'

export default function ConnectButton() {
  const [isOpen, setOpen] = useState(false)
  const isMounted = useIsMounted()

  const openModal = useCallback(() => {
    if (!isOpen) {
      setOpen(true)
    }
  }, [isOpen])

  const closeModal = useCallback(() => {
    if (isOpen) {
      setOpen(false)
    }
  }, [isOpen])

  if (!isMounted) {
    return null
  }

  const modal = createPortal(
    <div className="h-screen w-screen bg-black bg-opacity-50 bg-blur fixed top-0 right-0 left-0 bottom-0">
      <div className="flex items-center w-full">
        <div className="mt-8 m-auto max-w-sm flex flex-col w-full p-4 bg-black border-2 border-shiba-yellow text-white rounded-lg shadow-lg">
          <strong className="text-center font-mochiy text-lg">
            Choose Wallet
          </strong>
          <div className="flex items-center justify-center mt-8">
            <button type="button" className="text-sm" onClick={closeModal}>
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('body') as HTMLElement
  )

  return (
    <>
      <Button onClick={openModal}>Connect</Button>
      {isOpen ? modal : null}
    </>
  )
}
