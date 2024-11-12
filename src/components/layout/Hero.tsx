import hero from '../../assets/hero.jpg'

export default function Hero() {
  return (
    <div className="flex justify-center items-center w-full pt-10">
      <img src={hero} />
    </div>
  )
}