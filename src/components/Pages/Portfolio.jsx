import Header from "../Header"
import Footer from "../Footer"


const products = [
  {
    id: 1,
    name: 'Audient Evo 4',
    color: 'Audient',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/AudientEvo43D.webp',
    imageAlt: 'Audient Evo 4 3D Modell',

  },
  {
    id: 2,
    name: 'Sound Board',
    color: 'Yamaha',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/Yamah3D.webp',
    imageAlt: 'Yamaha 3D Modell',

  },
  {
    id: 3,
    name: 'Apple Watch Pro 3',
    color: 'Apple',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/AppleWatch3D.webp',
    imageAlt: 'Apple Watch 3D Modell',

  },
  {
    id: 4,
    name: 'Valentino Parfume',
    color: 'Valentino',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/Valentino3D.webp',
    imageAlt: 'Valentino Parfume 3D Modell',

  },
  {
    id: 5,
    name: 'Keypad',
    color: 'Omnipad',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/Keypad3D.webp',
    imageAlt: 'Yamaha 3D Modell',

  },

  // More products...
]

const graphicdesign = [
  {
    id: 1,
    name: 'Nike Dream Big',
    color: 'Nike',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/Nike.png',
    imageAlt: 'Nike Think Big Grafik Design',

  },
  {
    id: 2,
    name: 'Brutalism Poster',
    color: 'Festival',
    href: '#',
    imageSrc: 'https://backend.dv-it.ch/wp-content/uploads/2024/06/Brutalism.png',
    imageAlt: 'Festival Poster',

  }



]


const navigation = {
  social: [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCAwIFKKP4Q8QDTMz5mreNVw',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }, {
      name: 'Instagram',
      href: 'https://www.instagram.com/tilltechofficial',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100089148592975&locale=de_DE',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: 'X',
      href: 'https://twitter.com/till_tech',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },



  ],
}

export default function Portfolio() {
  return (


    <div className="pattern-bg"> <Header />




      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">

        <div className="mx-auto max-w-7xl px-6 lg:px-0">

          <div className="mx-auto max-w-7xl pb-16 ">

            <div className="text-start">
              <h1 className=" text-h2 leading-10 font-bold tracking-tight text-gray-900 sm:text-6xl">
                Graphic Design Portfolio
              </h1>
              <p className="mt-6 sm:text-sup text-base  text-gray-600">
                Das sind unsere neusten Arbeiten. Noch mehr arbeiten findest du auf meinen Sozialen Medien! 👇          </p>

            </div>
            <div className=" mt-8 mb-8 flex justify-start space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-black hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>



        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">3D Modelle </h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 ">
            Alles ansehen
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>



        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products.map((product) => (
                <li key={product.id} className="inline-flex w-64  flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 shadow-xl">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>

                    </div>
                  </div>



                </li>
              ))}
            </ul>
          </div>
        </div>






        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0 mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Grafik Design </h3>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 ">
            Alles ansehen
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {graphicdesign.map((graphicdesign) => (
                <li key={graphicdesign.id} className="inline-flex w-64  flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 shadow-xl">
                      <img
                        src={graphicdesign.imageSrc}
                        alt={graphicdesign.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{graphicdesign.color}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={graphicdesign.href}>
                          <span className="absolute inset-0" />
                          {graphicdesign.name}
                        </a>
                      </h3>

                    </div>
                  </div>



                </li>
              ))}
            </ul>
          </div>
        </div>





















      </div>
      <Footer />
    </div>
  )
}
