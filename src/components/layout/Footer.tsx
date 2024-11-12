export default function Footer() {
  return(
    <div className="border-t w-full py-10">
      <div className="grid grid-cols-3">
        <ul className="">
          <li><a>Privacy Policy</a></li>
          <li><a>Terms and Conditions</a></li>
        </ul>
        <ul>
          <li><i className="bi bi-pin-map pr-3"></i>100 Address Lane, Town City, ST  55555</li>
          <li><i className="bi bi-telephone pr-3"></i>(555) 555-555</li>
        </ul>
        <ul className="flex justify-end">
          <li>© 2024 Copyright Eric Sorum</li>
        </ul>

      </div>
    
  </div>
  )
}