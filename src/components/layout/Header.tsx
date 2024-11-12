
import Navbar from '../Navbar'
import Socials from '../Socials'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  return(
    <>
    <div className="text-center"><h1 className="text-xl py-10">Tailwind Example</h1></div>
    
    <div className="flex flex-col xs:flex-row gap-3 items-center justify-between w-full mx-5 2xl:mx-0">
      <Navbar />      
      <Socials />
    </div>
    </>
  )
}