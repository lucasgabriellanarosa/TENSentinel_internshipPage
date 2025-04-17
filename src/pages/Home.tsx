import { InternshipContainer } from "../components/InternshipContainer"
import { useInternship } from "../hooks/useInternship"

export const Home = () => {

  const { internshipData } = useInternship()

  return (
    <ul>
      <h2>Internships Opportunities</h2>

      {

        internshipData.map((_internship, key) => (
          <InternshipContainer key={key} id={key} />
        ))

      }

    </ul>
  )
}
