
const products = [
    {
      id: 1,
      name: 'Instagram Story',
      color: 'Blend',
      price: '$35',
      href: '#',
      imageSrc: '/Blend.svg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
   
    },
    {
        id: 2,
        name: 'Product 3D Modell',
        color: 'Valentino',
        price: '$35',
        href: '#',
        imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/244550197361593.662f83461160d.png',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },
      {
        id: 3,
        name: 'Think Big',
        color: 'Nike',
        price: '$35',
        href: '#',
        imageSrc:   '/Portfolio/Nike.png',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },    {
        id: 4,
        name: 'Keyboard',
        color: 'Yamaha',
        price: '$35',
        href: '#',
        imageSrc: '/3DImage.avif',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },    {
        id: 5,
        name: 'Brutalism',
        color: 'Personal',
        price: '$35',
        href: '#',
        imageSrc: '/Brutalism.webp',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },
    // More products...
  ]
  
  export default function PortfolioFrontPage() {
    return (

      <div className=" bg-transparent " id='portfolio' >
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 ">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900">Portfolio</h3>
          <a href="/portfolio" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Ganzes Portfolio ansehen <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-x-0"
            >
              {products.map((product) => (
                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                      loading="lazy"
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <h4 className="mt-1 text-lg font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h4>
                  
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}