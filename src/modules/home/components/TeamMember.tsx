import Image from 'next/image'
import type { StaticImageData } from '@/modules/home/types'

interface Props {
  name?: string;
  subtitle?: string;
  imageSrc?: string | StaticImageData;
}

export default function TeamMember({ name, subtitle, imageSrc }: Props) {
  return (
    <div className="py-4 pb-8 flex flex-col-reverse items-center justify-center text-center">
      <div className="w-full mt-2">
        <strong className="font-mochiy text-lg">{name}</strong>

        <p className="text-sm mt-2">{subtitle}</p>
      </div>

      <div className="w-full">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            className="rounded-full h-[100px] w-[100px] object-cover m-auto"
          />
        ) : (
          <div className="bg-gray-300 rounded-full h-[100px] w-[100px]" />
        )}
      </div>
    </div>
  )
}
