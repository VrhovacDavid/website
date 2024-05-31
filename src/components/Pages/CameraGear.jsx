import Header from '../Header'
import Footer from '../Footer'
const products = [
    [
        {
            "id": 1,
            "name": "Sony A7IV",
            "href": "https://amzn.to/3wWYfNA",
            "price": "2399.-",
            "description": "Meine Hauptkamera. Ich filme alles damit, es ist bei Weitem die beste Kamera, die ich je besessen habe. Sie kommt einer Kinokamera sehr nahe, ohne jedoch eine zu sein.",
          
            "imageSrc": "https://www.dpreview.com/files/p/articles/9494401150/Product-Images/Sony_a7IV_3qtr.jpeg",
            "imageAlt": "Sony A7IV"
        },
        {
            "id": 2,
            "name": "Rode VideoMic NTG",
            "href": "https://amzn.to/4dWlBnj",
            "price": "$208.-",
            "description": "Mein Shotgun Mikrofon, für mein Run and Gun Setup perfekt",
          
            "imageSrc": "https://www.mueller-spring.ch/media/image/product/3315/md/pa-dj-produkte-mikrophone-rode-videomic-ntg~5.jpg",
            "imageAlt": "Rode VideoMic NTG"
        },
        {
            "id": 3,
            "name": "Rode Wireless GO 2",
            "href": "https://amzn.to/3Vxom7v",
            "price": "249.-",
            "description": "Mein Rund um Wireless Mikrofon, mit dem nehme ich alles auf von Content Creation bis hin zu Interviews, etc.",
          
            "imageSrc": "https://www.allround-pc.com/wp-content/uploads/2021/04/Rode-Wireless-GO-2-Mikrofon-System-Testbericht-5.jpg",
            "imageAlt": "Rode Wireless GO 2"
        },
        {
            "id": 4,
            "name": "SmallRig Vibe P96L",
            "href": "https://amzn.to/3x4tvdu",
            "price": "56.-",
            "description": "Videoleuchte für Produkt und Background",
       
            "imageSrc": "https://www.digitec.ch/im/productimages/9/0/2/8/3/7/6/7/6/5/6/4/6/9/6/5/5/7/0/20ded0f2-5530-4c37-bb3d-cd53484177c7_cropped.jpg?impolicy=ProductTileImage&resizeWidth=500&resizeHeight=375&cropWidth=500&cropHeight=375&resizeType=downsize&quality=high",
            "imageAlt": "SmallRig Vibe P96L"
        },
        {
            "id": 5,
            "name": "SmallRig Full Cage Sony A7IV",
            "href": "https://amzn.to/3VkL5U4",
            "price": "68.-",
            "description": "Halterung von SmallRig hier kann ich alle Attachement's hinzufügen",

            "imageSrc": "https://assets.brack.ch/images2/7/5/4/216073457/216073457_xxl.jpg",
            "imageAlt": "SmallRig Full Cage Sony A7IV"
        },
        {
            "id": 6,
            "name": "SmallRig Tripod AP-02",
            "href": "https://amzn.to/3VopEl8",
            "price": "109.-",
            "description": "Mein Stativ das ich auf Reisen mitnehme, oder allgemein für Content Creation, ich kann Landscape oder Portrait einstellen, und das Material ist auch Premium",
     
            "imageSrc": "https://assets.brack.ch/images2/5/8/5/291669585/291669585_xxl.jpg",
            "imageAlt": "SmallRig Tripod AP-02"
        },
        {
            "id": 7,
            "name": "SmallRig RC 350D RC 120D COB LED",
            "href": "https://amzn.to/3X2g20o",
            "price": "800.-",
            "description": "Dauerlicht, in einem Kombi Paket, perfekt mit der App und auch die Effekte sind super.",
         
            "imageSrc": "https://www.digitec.ch/im/Files/7/3/8/1/2/3/8/3/257934173_xxl3.jpg?impolicy=ProductTileImage&resizeWidth=648&resizeHeight=486&cropWidth=648&cropHeight=486&resizeType=downsize&quality=high",
            "imageAlt": "SmallRig RC 350D RC 120D COB LED"
        },
        {
            "id": 8,
            "name": "SmallRig Stativ RA-S280",
            "href": "https://amzn.to/3X3085R",
            "price": "57.-",
            "description": "Für meine Dauerlichter eine Halterung",
     
            "imageSrc": "https://assets.brack.ch/images2/8/3/5/229773538/229773538_xxl.jpg",
            "imageAlt": "SmallRig Stativ RA-S280"
        },
        {
            "id": 9,
            "name": "SmallRig Softbox RA-D55",
            "href": "https://amzn.to/3VnarAJ",
            "price": "45.-",
            "description": "Parabol Softbox für ein weiches Licht",
        
            "imageSrc": "https://assets.brack.ch/images2/6/5/6/229774656/229774656_xxl.jpg",
            "imageAlt": "SmallRig Softbox RA-D55"
        },
        {
            "id": 10,
            "name": "DJI Mini 4 Pro",
            "href": "https://amzn.to/3wTQwzX",
            "price": "1028.-",
            "description": "Die beste 249g Drohne die ich jemals gehabt habe.",
            
            "imageSrc": "https://assets.brack.ch/images2/6/8/9/303556986/303556986_xxl.jpg",
            "imageAlt": "DJI Mini 4 Pro"
        },
        {
            "id": 11,
            "name": "Manfrotto Fotorucksack Gear Backpack M III",
            "href": "https://amzn.to/3yPrLW0",
            "price": "104.-",
            "description": "Mein Fotorucksack, den nehme ich an jedes Shooting mit",
         
            "imageSrc": "https://assets.brack.ch/images2/4/5/5/214993554/214993554_xxl.jpg",
            "imageAlt": "Manfrotto Fotorucksack Gear Backpack M III"
        },
        {
            "id": 12,
            "name": "SmallRig Cage AtomX 5inch Shinobi",
            "href": "https://amzn.to/4aLfQ97",
            "price": "76.-",
            "description": "Käfig für mein Atomos Shniobi Monitor",
    
            "imageSrc": "https://assets.brack.ch/images2/2/5/6/56174652/56174652_xxl.jpg",
            "imageAlt": "SmallRig Cage AtomX 5inch Shinobi"
        },
        {
            "id": 13,
            "name": "Atomos Monitor Shinobi HDMI",
            "href": "https://amzn.to/4aHos0u",
            "price": "356.-",
            "description": "Falls ich mich selber sehen muss währen einer Aufnahme benutze ich den Atomos Monitor",
    
            "imageSrc": "https://assets.brack.ch/images2/2/8/8/57880882/57880882_xxl.jpg",
            "imageAlt": "Atomos Monitor Shinobi HDMI"
        },
        {
            "id": 14,
            "name": "SmallRig Monitor Halterung",
            "href": "https://amzn.to/4c2rOMO",
            "price": "33.-",
            "description": "Nach oben und unten verstellbarer Monitor halter für mein Atomos Shinobi",
      
            "imageSrc": "https://assets.brack.ch/images2/1/7/1/58385171/58385171_xxl.jpg",
            "imageAlt": "SmallRig Monitor Halterung"
        },
        {
            "id": 15,
            "name": "DJI Osmo Pocket 3 Creator Combo",
            "href": "https://amzn.to/450Qu61",
            "price": "623.-",
            "description": "Für aufnahmen unterwegs, oder wenns schnell gehen muss, einer der besten Kameras die benutzten durfte.",
   
            "imageSrc": "https://stormsend1.djicdn.com/tpc/uploads/carousel/image/af165fd726382501a5ed83a156b17783@ultra.jpg",
            "imageAlt": "DJI Osmo Pocket 3 Creator Combo"
        }
    ]

]

const pages = [
    { name: 'Links', href: '#', current: false },
    { name: 'Camera Gear', href: '#', current: true },
  
]  
export default function CameraGear() {
    return (

        
        <div className="pattern-bg">
             <Header/>
             <div className="overflow-hidden bg-transaprent py-10 sm:py-32">
      <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8">
        <div className=" mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4 content-center align-middle justify-center">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Content Creation Kit</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Essential Video Kits von TillTech</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Hier ist mein unverzichtbares Video-Set; alle meine Videos drehe ich mit dieser Ausrüstung.
              </p>   <p className="mt-6 text-lg leading-8 text-gray-600">
              Hinweis: Einige der bereitgestellten Links sind Affiliate Links. Wenn du über diese Links etwas kaufst, erhalte ich eine kleine Provision, ohne dass für dich zusätzliche Kosten entstehen. Das unterstützt mich enorm dabei, weiterhin das zu tun, was ich liebe. Vielen Dank. 🙏
              </p>
              
            </div>
          </div>
          <img
  src="https://www.wimarys.com/wp-content/uploads/2023/06/photography-camera-gear-guide.png"
  alt="Product screenshot"
  className="w-[48rem] max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:block md:-ml-4 lg:-ml-0 hidden"
  width={2432}
  height={1442}
/>

        </div>
      </div>
    </div>
            <div className="mx-auto max-w-4xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              



                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {products[0].map((product) => ( // Geändert zu products[0] um direkt das Produktarray zu nutzen
                        <div
                            key={product.id} // Stellt sicher, dass jeder Schlüssel einzigartig ist
                            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                        >
                            <div className="aspect-h-1 aspect-w-1 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96 ">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                                />
                            </div>
                            <div className="flex flex-1 flex-col space-y-2 p-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-gray-500">{product.description}</p>
                                <div className="flex flex-1 flex-col justify-end">
                                    <p className="text-base font-medium text-gray-900">{product.price}</p>
                                    <button
                                        type="button"
                                        className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                                    >
                                        Bei Amazon Kaufen
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}