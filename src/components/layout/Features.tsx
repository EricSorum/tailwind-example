
import currencies from '../../assets/currencies.png'
import network from '../../assets/network.png'
import officework from '../../assets/office-work.png'
import { FeatureType } from '../../lib/definitions'
import Feature from '../Feature'

export default function Features() {

  const features: FeatureType[] = [
    {
      id: 1,
      img: currencies,
      txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      img: network,
      txt: "Ligula facilisis ligula, ultricies dictum eleifend litora. Taciti orci condimentum massa magna congue; nibh magnis netus."
    },
    {
      id: 3,
      img: officework,
      txt: "Rutrum primis sed accumsan lectus cursus; nam non condimentum. Aquisque nostra pellentesque dis montes tortor. In vivamus tortor dolor faucibus ligula varius."
    }
  ]

  return (
    <div className="flex justify-center items-center w-full flex-col pt-5">
      <div><h2>Features</h2></div>
      <div className="grid grid-cols-3">
        {features.map((feature: FeatureType) => (
            <div key={feature.id}>
              <Feature {...feature} />
            </div>
          ))}
      </div>
    </div>
  )
}
