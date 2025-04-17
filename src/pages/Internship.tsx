import { Link, useParams } from "react-router"
import { useInternship } from "../hooks/useInternship"

export const Internship = () => {

  let { id } = useParams()
  const numericId = Number(id);

  const { internshipData } = useInternship()

  return (
    <div>
      <Link to="/">
        Go Back
      </Link>
      {
        internshipData > [] ?
        <div>
          <h2>{internshipData[numericId].title}</h2>

          <ul>
            <h3>Role and Responsabilities</h3>
            {internshipData[numericId].role?.map((role, key) => (
              <li key={key}>{role}</li>
            ))}
          </ul>

          <ul>
            <h3>Qualifications</h3>
            {internshipData[numericId].qualifications?.map((qualification, key) => (
              <li key={key}>{qualification}</li>
            ))}
          </ul>

          <ul>
            <h3>What we Offer</h3>
            {internshipData[numericId].offer?.map((offer, key) => (
              <li key={key}>{offer}</li>
            ))}
          </ul>

        </div>
        :
        <></>
      }

      <a href="#" target="_blank">
        Apply Now
      </a>
    </div>
  )
}
