
import currencies from '../../assets/currencies.png'
import network from '../../assets/network.png'
import officework from '../../assets/office-work.png'

export default function Features() {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div><h2>Features</h2></div>
      <div className="grid grid-cols-3">
        <div>
          <img src={currencies} />
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div>
          <img src={network} />
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div>
          <img src={officework} />
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
      </div>
    </div>
  )
}
