import Navbar from '../Navbar'

export default function Header() {
  return(
    <div className="grid grid-cols-3 w-full pt-5">
      <Navbar />      
      <div className="text-center"><h1>Tailwind Example</h1></div>
      <div className="text-right">Social links</div>

    </div>
  )
}