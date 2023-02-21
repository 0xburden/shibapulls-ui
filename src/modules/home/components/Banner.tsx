import Image from 'next/image'
import bannerImg from '../../../../public/shibapulls-banner.png'

export default function Banner() {
  return (
    <div className="relative h-[300px] md:h-[400px]">
      <Image src={bannerImg} alt="" className="object-cover" priority fill />
    </div>
  )
}
