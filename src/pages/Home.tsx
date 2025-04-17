import { InternshipContainer } from "../components/InternshipContainer"
import { useInternship } from "../hooks/useInternship"

export const Home = () => {

  const { internshipData } = useInternship()

  return (
    <ul className="flex flex-col bg-blue-800">

      <h2 className="text-3xl">Internships Opportunities</h2>

      {

        internshipData.map((_internship, key) => (
          <InternshipContainer key={key} id={key} />
        ))

      }

    </ul>
  )
}
