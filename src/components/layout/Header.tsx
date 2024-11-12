
import Navbar from '../Navbar'
import Socials from '../Socials'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {



  return(
    <div className="grid grid-cols-3 w-full pt-10">
      <Navbar />      
      <div className="text-center"><h1 className="text-xl">Tailwind Example</h1></div>
      <Socials />



    </div>
  )
}