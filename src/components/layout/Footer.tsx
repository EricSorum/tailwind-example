export default function Footer() {
  return(
    <div className="border-t w-full py-10">
      <div className="flex flex-col items-start gap-3 md:grid grid-cols-3 mx-5 2xl:mx-0">
        <ul className="flex flex-col items-center md:items-start w-full">
          <li><a>Privacy Policy</a></li>
          <li><a>Terms and Conditions</a></li>
        </ul>
        <ul className="flex flex-col items-center md:items-start w-full text-center">
          <li><i className="bi bi-pin-map pr-3"></i>100 Address Lane Town City, ST  55555</li>
          <li><i className="bi bi-telephone pr-3"></i>(555) 555-555</li>
        </ul>
        <div className="flex flex-col items-center md:items-end w-full">
          © 2024 Copyright Eric Sorum
        </div>
      </div>
    </div>
  )
}