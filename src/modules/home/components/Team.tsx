import { TeamMember } from '@/modules/home/components'
import type { StaticImageData, Member } from '@/modules/home/types'

import mashiro from '../../../../public/mashiro.jpg'
import morphyn from '../../../../public/morphyn.png'
import burden from '../../../../public/burden.png'
import nymph from '../../../../public/nymph.png'

const members: Member[] = [
  {
    name: 'Mashiro',
    subtitle: 'Founder/artist',
    imageSrc: mashiro as StaticImageData,
    twitter: 'MashiroTrades',
  },
  {
    name: 'Morphyn',
    subtitle: 'Community Manager',
    imageSrc: morphyn as StaticImageData,
    twitter: 'morphPOGdot23',
  },
  {
    name: 'Burden',
    subtitle: 'Frontend dev',
    imageSrc: burden as StaticImageData,
    twitter: '0xburden',
  },
  {
    name: 'Nymph',
    subtitle: 'Backend dev',
    imageSrc: nymph as StaticImageData,
    twitter: 'CryptoNymph',
  },
]

export default function Team() {
  return (
    <article>
      <section>
        <div className="bg-shiba-soft-pink w-full">
          <div className="max-w-2xl lg:max-w-6xl m-auto p-4">
            <h2 className="mt-4 text-xl font-mochiy text-center">Team</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 align-center mt-4">
              {members.map((member) => (
                <TeamMember key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
