import business from '../../assets/business.png'

export default function() {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-10 pt-10">
      <div>
        <h2 className="text-lg">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sit enim taciti nam torquent magna etiam mattis lobortis. Hac primis egestas risus habitasse dignissim in vivamus. Habitant per accumsan ad sit consectetur mollis pretium sit mus. Tempor urna nisi ridiculus proin sociosqu auctor adipiscing ornare. Finibus aenean dignissim orci finibus nisi ligula scelerisque aenean. Non tincidunt quam pretium ornare mauris ultrices pharetra netus. Consequat malesuada quisque adipiscing lacus quam dictumst.
        </p>
      </div>
      <div>
        <img src={business} />
      </div>
      <div></div>
    </div>
  )
}