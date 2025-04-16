import { useInternship } from "../hooks/useInternship";

export const Home = () => {

  const { internshipData } = useInternship();

  console.log(internshipData)

  return (
    <div>Home</div>
  )
}
