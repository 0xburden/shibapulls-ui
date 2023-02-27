import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { HiExternalLink } from 'react-icons/hi'
import { Button } from '@/modules/common/components'
import { useIsMounted } from '@/modules/common/hooks'

export default function ConnectButton() {
  const [isOpen, setOpen] = useState(false)
  const isMounted = useIsMounted()

  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const handleDisconnect = useCallback(() => disconnect?.(), [disconnect])

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
          <strong
            className="text-center text-xl font-mochiy"
            style={{ fontFamily: 'var(--font-mochiy-pop-one)' }}
          >
            {isConnected ? ' Account ' : ' Choose Wallet '}
          </strong>

          {isConnected ? (
            <ul className="mt-4">
              <li className="mt-2">
                <a
                  href={`https://etherscan.io/address/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="w-full p-2 border-2 border-transparent rounded-[6px] hover:border-shiba-yellow hover:scale-[0.95] transition-all duration-100 flex items-center justify-center"
                  >
                    <div className="truncate text-ellipsis mr-0 w-20 text-center font-bold">
                      <span> {address} </span>
                    </div>
                    <HiExternalLink />
                  </button>
                </a>
              </li>
              <li className="mt-2">
                <button
                  type="button"
                  className="w-full p-2 border-2 border-transparent rounded-[6px] font-bold hover:border-shiba-yellow hover:scale-[0.95] transition-all duration-100"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              </li>
            </ul>
          ) : (
            <ul className="mt-4">
              {connectors.map((connector) => (
                <li key={connector.id} className="mt-2">
                  <button
                    type="button"
                    className="w-full font-bold p-2 border-2 border-transparent rounded-[6px] hover:border-shiba-yellow hover:scale-[0.95] transition-all duration-100"
                    onClick={() => connect({ connector })}
                  >
                    {connector.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center justify-center mt-8">
            <button type="button" className="text-sm" onClick={closeModal}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('content') as HTMLElement
  )

  return (
    <>
      <Button onClick={openModal}>{isConnected ? 'Account' : 'Connect'}</Button>
      {isOpen ? modal : null}
    </>
  )
}
