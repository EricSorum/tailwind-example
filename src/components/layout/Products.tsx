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
    <div className="flex justify-center items-center w-full flex-col py-10 mx-5 2xl:mx-0">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
        {products.map((product: ProductType) =>
          <div className="outline outline-slate-100 rounded-lg m-1 bg-slate-100 hover:bg-white hover:shadow-xl"> 
            <a href="javascript:void(0)"><img src={product.img} className="w-full max-w-[380px] p-10"/></a>
          </div>
          )
        }
      </div>
    </div>
  )
}
