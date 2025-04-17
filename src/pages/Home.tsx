import { InternshipContainer } from "../components/InternshipContainer"
import { useInternship } from "../hooks/useInternship"

export const Home = () => {

  const { internshipData } = useInternship()

  return (
    <ul className="flex flex-col w-1/2 py-12 gap-8">

      <h2 className="text-3xl">Internships Opportunities</h2>

      <ul className="flex flex-col gap-4">
        {

          internshipData.map((_internship, key) => (
            <InternshipContainer key={key} id={key} />
          ))

        }
      </ul>

    </ul>
  )
}
