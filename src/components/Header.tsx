export const Header = () => {
  return (
    <header className="bg-headerColor flex justify-between px-8 py-4 text-gray-300 w-full">

        <div className="flex justify-center items-center gap-2 text-2xl">
            <img src="./logo.png" className="w-12" />
            <h1>TEN - Internships</h1>
        </div>

        <ul className="flex justify-center items-center gap-6">
            <li>
                Info
            </li>
            <li>
                Courses
            </li>
            <li>
                PAP
            </li>
            <li>
                Login
            </li>
            <li>
                Sign-Up
            </li>
        </ul>
    </header>
  )
}
