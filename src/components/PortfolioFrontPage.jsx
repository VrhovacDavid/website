
const products = [
    {
      id: 1,
      name: 'Mockup 1',
      color: 'Twitch',
      price: '$35',
      href: '#',
      imageSrc: '/Blend.svg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
   
    },
    {
        id: 2,
        name: 'Mockup 2',
        color: 'Wallpaper',
        price: '$35',
        href: '#',
        imageSrc: 'https://img.freepik.com/free-vector/abstract-paper-style-background_52683-135139.jpg?w=740',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },
      {
        id: 3,
        name: 'Mockup 3',
        color: 'Website',
        price: '$35',
        href: '#',
        imageSrc: 'https://img.freepik.com/free-vector/web-design-template-design_23-2150913748.jpg?w=740',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },    {
        id: 4,
        name: 'Mockup 4',
        color: '3D Modell',
        price: '$35',
        href: '#',
        imageSrc: 'https://media.sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042/thumbnails/7af9338238634ca3b0c3879b79313b9c/7a42ad415fa843d29895f51381b9fe87.jpeg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },    {
        id: 5,
        name: 'Mockup 5',
        color: 'Brutalism',
        price: '$35',
        href: '#',
        imageSrc: 'https://img.freepik.com/free-vector/hand-drawn-brutalism-poster-template_52683-157881.jpg?w=1060',
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