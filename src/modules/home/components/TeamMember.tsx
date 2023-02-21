import Image from 'next/image'

interface Props {
  name?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function TeamMember({ name, subtitle, imageSrc }: Props) {
  return (
    <div className="py-4 pb-8 flex">
      <div className="w-2/3 mr-4">
        <strong className="font-mochiy text-lg">{name}</strong>

        <p className="text-sm mt-2">{subtitle}</p>
      </div>

      <div className="w-1/3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            className="rounded-full h-[100px] w-[100px] object-cover"
            fill
          />
        ) : (
          <div className="bg-gray-300 rounded-full h-[100px] w-[100px]" />
        )}
      </div>
    </div>
  )
}
