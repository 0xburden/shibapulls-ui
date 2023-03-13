import Image from 'next/image'
import type { Member } from '@/modules/home/types'

interface Props {
  member: Member;
}

export default function TeamMember({ member }: Props) {
  const { name, subtitle, imageSrc, twitter } = member

  return (
    <div className="py-4 pb-8 flex flex-col-reverse items-center justify-center text-center">
      <div className="w-full mt-2">
        <strong className="font-mochiy text-lg">{name}</strong>

        <p className="text-sm mt-2 uppercase">{subtitle}</p>
      </div>

      <div className="w-full">
        {imageSrc ? (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={imageSrc}
              alt=""
              className="rounded-full h-[100px] w-[100px] object-cover m-auto"
            />
          </a>
        ) : (
          <div className="bg-gray-300 rounded-full h-[100px] w-[100px]" />
        )}
      </div>
    </div>
  )
}
