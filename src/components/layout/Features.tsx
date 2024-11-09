
import currencies from '../../assets/currencies.png'
import network from '../../assets/network.png'
import officework from '../../assets/office-work.png'
import { Feature } from '../../lib/definitions'

export default function Features() {

  const features = [
    {
      img: currencies,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: network,
      text: "Ligula facilisis ligula, ultricies dictum eleifend litora. Taciti orci condimentum massa magna congue; nibh magnis netus."
    },
    {
      img: officework,
      text: "Rutrum primis sed accumsan lectus cursus; nam non condimentum. Aquisque nostra pellentesque dis montes tortor. In vivamus tortor dolor faucibus ligula varius."
    }
  ]

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div><h2>Features</h2></div>
      <div className="grid grid-cols-3">
        {features.map((feature) => {
          <Feature props={feat: Feature} />
        })}

      </div>
    </div>
  )
}
