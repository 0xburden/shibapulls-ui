import { TeamMember } from '@/modules/home/components'

export default function Team() {
  return (
    <article>
      <section>
        <div className="bg-shiba-soft-pink w-full">
          <div className="max-w-6xl m-auto p-4">
            <h2 className="mt-4 text-xl font-mochiy text-center">Team</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 align-center mt-4">
              <TeamMember
                name="Person 1"
                subtitle="subtitle for Person 1 blah blah blah"
              />

              <TeamMember
                name="Person 2"
                subtitle="subtitle for Person 2 blah blah blah"
              />

              <TeamMember
                name="Person 3"
                subtitle="subtitle for Person 3 blah blah blah"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
