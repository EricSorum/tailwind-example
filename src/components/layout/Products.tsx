import ameneties from '../../assets/ameneties.png'
import authentication from '../../assets/authentication.png'
import fingerprint from '../../assets/fingerprint.png'
import marketing from '../../assets/marketing.png'
import retail from '../../assets/retail.png'
import global from '../../assets/global.png'
import { ProductType } from '../../lib/definitions'

export default function Features() {

  const products: ProductType[] = [
    {
      id: 1,
      img: ameneties,
      url: '',
      alt: 'First product'
    },
    {
      id: 2,
      img: authentication,
      url: '',
      alt: 'Second product'
    },
    {
      id: 3,
      img: fingerprint,
      url: '',
      alt: 'Third product'
    },
    {
      id: 4,
      img: marketing,
      url: '',
      alt: 'Fourth product'
    },
    {
      id: 5,
      img: retail,
      url: '',
      alt: 'Fifth product'
    },
    {
      id: 6,
      img: global,
      url: '',
      alt: 'Sixth product'
    }
  ]

  return (
    <div className="flex justify-center items-center w-full flex-col pt-10">
      <div className="grid grid-cols-3 gap-10">
        {products.map((product: ProductType) => 
            <img src={product.img} className="max-w-[380px]"/>              
          )
        }
      </div>
    </div>
  )
}
