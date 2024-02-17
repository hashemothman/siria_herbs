
import Products from './Components/Products/Products'
import {createBrowserRouter,Outlet, RouterProvider,ScrollRestoration} from 'react-router-dom'
import NavbarTop from './Components/NavbarAll/NavbarTop/NavbarTop';
import ProductDetailsPage from './Components/Products/ProductDetailsPage';
import ContactUs from './Components/Contact Us/ContactUs';
import Iso from './Components/ISO/Iso';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { useState } from 'react';
import im2 from '../src/Components/Products/assest/images/Gold1.svg';
import backGold from '../src/Components/Products/assest/images/backGold.svg';
import iconGold from '../src/Components/Products/assest/images/iconGold.svg'
import blurGold from '../src/Components/Products/assest/images/RectangleGold.png';
import blurMalika from '../src/Components/Products/assest/images/blurMalika.png';
import grayGold from '../src/Components/Products/assest/images/grayGold.svg';
import backOgaro from '../src/Components/Products/assest/images/backOgaro.svg';
import iconOgaro from '../src/Components/Products/assest/images/iconOgaro.svg';
import Ogaro1 from '../src/Components/Products/assest/images/Ogaro1.svg';
import grayOgaro from '../src/Components/Products/assest/images/grayOgaro.svg';
import backMalica from '../src/Components/Products/assest/images/backMalica.png';
import iconMalica from '../src/Components/Products/assest/images/iconMalica.svg';
import Malika1 from '../src/Components/Products/assest/images/Malika1.svg';
import backProMalika from '../src/Components/Products/assest/images/backProMalik.svg';
import Malika2 from '../src/Components/Products/assest/images/Malika2.svg';
import backAvie from '../src/Components/Products/assest/images/backAvie.svg';
import blurAvie from '../src/Components/Products/assest/images/blurAvie.png';
import Avie1 from '../src/Components/Products/assest/images/Avie11.svg';
import Avie2 from '../src/Components/Products/assest/images/Avie22.svg';
import backProAvie from '../src/Components/Products/assest/images/backProAvie.svg';
import iconAvie from '../src/Components/Products/assest/images/iconAvie.svg';
import NavbarDown from './Components/NavbarAll/NavbarDown/NavbarDown';
import Home from './Components/Home/Home';
function App() {
  const [brandInfo, setBrandInfo] = useState(null);
  const products = brandInfo && brandInfo.products;
  console.log(products)
  const handleBrandClick = (brand) => {
    if (brand === 'GreenGold') {
      setBrandInfo({
        background: backGold,
        icon:iconGold,
        blur:blurGold,
        titleup:'Your Health is Gold',
        discriptionBrand:' Syrian Green Gold represents all the Syrian natural plants and herbs from the desert, the mountain, the coast, the Ghouta al-Sham and the Hauran plain. A wide variety of natural products with a special Syrian flavor.Collected carefully and lovingly with Syrian hands and expertise.',
        cat1:'Plastic Box',
        cat2:'Tin bag',
        cat3:'Carton Boxes',
        cat4:'Tea bag',
        cat5:'Zaatar',
        
        products: [
          {
            name: 'SWEET VIOLET',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
            name: 'LEMON VERBENA',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
            name: 'POMEGRANATE',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
            name: 'اسم المنتج 11',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
            name: 'اسم المنتج 11',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
            name: 'اسم المنتج 11',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
         
            name: 'اسم المنتج 2',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category2',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
         
            name: 'اسم المنتج 33',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category3',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
         
            name: 'اسم المنتج 44',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category4',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          {
         
            name: 'اسم المنتج 55',
            imageUrl:im2,
            imgback: grayGold,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category5',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:im2,
              otherImage2:im2,
              otherImage3:im2,
            },
            reltedImages:{
              reltedImage1:im2,
              reltedImage2:im2,
              reltedImage3:im2,
              reltedImage3:im2,
              reltedImage4:im2,
              reltedImage5:im2,
              reltedImage6:im2,
              reltedImage7:im2,
              reltedImage8:im2,
              
            }
          },
          // ... المزيد من المنتجات ...
        ]
      });
    } else if (brand === 'Ogaro') {
      setBrandInfo({
        background: backOgaro,
        icon:iconOgaro,
        blur:blurMalika,
        titleup:'Your Health is Ogaro',
        discriptionBrand:'Ogaro oil is associated with the spiritual heritage of our country , Through deep roots that pulsate with the life of the Syrian countryside . This oil is considered to be the greatest gift nature has bestowed on us.',
        cat1:'Bottle',
        cat2:'Glass',
        cat3:'Spray',
        
        products: [
          {
            name: 'olive oil',
            imageUrl:Ogaro1,
            imgback: grayOgaro,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Ogaro1,
              otherImage2:Ogaro1,
              otherImage3:Ogaro1,
            },
            reltedImages:{
              reltedImage1:Ogaro1,
              reltedImage2:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage4:Ogaro1,
              reltedImage5:Ogaro1,
              reltedImage6:Ogaro1,
              reltedImage7:Ogaro1,
              reltedImage8:Ogaro1,
              
            }
          },
          {
            name: 'olive oil',
            imageUrl:Ogaro1,
            imgback: grayOgaro,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Ogaro1,
              otherImage2:Ogaro1,
              otherImage3:Ogaro1,
            },
            reltedImages:{
              reltedImage1:Ogaro1,
              reltedImage2:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage4:Ogaro1,
              reltedImage5:Ogaro1,
              reltedImage6:Ogaro1,
              reltedImage7:Ogaro1,
              reltedImage8:Ogaro1,
              
            }
          },
          {
            name: 'olive oil',
            imageUrl:Ogaro1,
            imgback: grayOgaro,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Ogaro1,
              otherImage2:Ogaro1,
              otherImage3:Ogaro1,
            },
            reltedImages:{
              reltedImage1:Ogaro1,
              reltedImage2:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage4:Ogaro1,
              reltedImage5:Ogaro1,
              reltedImage6:Ogaro1,
              reltedImage7:Ogaro1,
              reltedImage8:Ogaro1,
              
            }
          },
          {
            name: 'olive oil',
            imageUrl:Ogaro1,
            imgback: grayOgaro,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category2',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Ogaro1,
              otherImage2:Ogaro1,
              otherImage3:Ogaro1,
            },
            reltedImages:{
              reltedImage1:Ogaro1,
              reltedImage2:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage4:Ogaro1,
              reltedImage5:Ogaro1,
              reltedImage6:Ogaro1,
              reltedImage7:Ogaro1,
              reltedImage8:Ogaro1,
              
            }
          },
          {
            name: 'olive oil',
            imageUrl:Ogaro1,
            imgback: grayOgaro,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category3',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Ogaro1,
              otherImage2:Ogaro1,
              otherImage3:Ogaro1,
            },
            reltedImages:{
              reltedImage1:Ogaro1,
              reltedImage2:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage3:Ogaro1,
              reltedImage4:Ogaro1,
              reltedImage5:Ogaro1,
              reltedImage6:Ogaro1,
              reltedImage7:Ogaro1,
              reltedImage8:Ogaro1,
              
            }
          },
          // ... المزيد من المنتجات ...
        ]
      });
    } else if (brand === 'Malika') {
      setBrandInfo({
        background: backMalica,
        icon:iconMalica,
        blur:blurMalika,
        titleup:'Your Health is Yellow',
        discriptionBrand:'Malika Honey is considered to be the greatest gift nature has bestowed on us. malika can be used topically for both hair and skin health, as well as internally for both medicinal and spiritual healing. Skin Care Benefits include: Anti Bacterial Properties – Antioxidant Rich. This sweet golden liquid from the beehive also produces a Glow!',
        cat1:'Jar',
        cat2:'bag',
       
        
        products: [
          {
            name: 'SYRIAN HONEY',
            imageUrl:Malika1,
            imgback: backProMalika,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Malika1,
              otherImage2:Malika1,
              otherImage3:Malika1,
            },
            reltedImages:{
              reltedImage1:Malika1,
              reltedImage2:Malika1,
              reltedImage3:Malika1,
              reltedImage3:Malika1,
              reltedImage4:Malika1,
              reltedImage5:Malika1,
              reltedImage6:Malika1,
              reltedImage7:Malika1,
              reltedImage8:Malika1,
              
            }
          },
          {
            name: 'SYRIAN HONEY',
            imageUrl:Malika2,
            imgback: backProMalika,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Malika1,
              otherImage2:Malika1,
              otherImage3:Malika1,
            },
            reltedImages:{
              reltedImage1:Malika1,
              reltedImage2:Malika1,
              reltedImage3:Malika1,
              reltedImage3:Malika1,
              reltedImage4:Malika1,
              reltedImage5:Malika1,
              reltedImage6:Malika1,
              reltedImage7:Malika1,
              reltedImage8:Malika1,
              
            }
          },
          {
            name: 'SYRIAN HONEY',
            imageUrl:Malika2,
            imgback: backProMalika,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category2',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Malika1,
              otherImage2:Malika1,
              otherImage3:Malika1,
            },
            reltedImages:{
              reltedImage1:Malika1,
              reltedImage2:Malika1,
              reltedImage3:Malika1,
              reltedImage3:Malika1,
              reltedImage4:Malika1,
              reltedImage5:Malika1,
              reltedImage6:Malika1,
              reltedImage7:Malika1,
              reltedImage8:Malika1,
              
            }
          },
          {
            name: 'SYRIAN HONEY',
            imageUrl:Malika2,
            imgback: backProMalika,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category2',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Malika1,
              otherImage2:Malika1,
              otherImage3:Malika1,
            },
            reltedImages:{
              reltedImage1:Malika1,
              reltedImage2:Malika1,
              reltedImage3:Malika1,
              reltedImage3:Malika1,
              reltedImage4:Malika1,
              reltedImage5:Malika1,
              reltedImage6:Malika1,
              reltedImage7:Malika1,
              reltedImage8:Malika1,
              
            }
          },
          
          // ... المزيد من المنتجات ...
        ],
      });
    }
    else if (brand === 'Avie') {
      setBrandInfo({
        background: backAvie,
        icon:iconAvie,
        blur:blurAvie,
        titleup:'Your Health is Green',
        discriptionBrand:'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains, dried in the shade and sterilized according to the latest techniques under the supervision of pharmacists.Genus, species, and medical parts are chosen identically to the scientific pharmacopoeia.',
        cat1:'Capsules',
        cat2:'Tin bag',
        cat3:'Carton Boxes',
        cat4:'Tea bag',
       
        
        products: [
          {
            name: 'SLIM & FIT',
            imageUrl:Avie1,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category1',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category2',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category2',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category3',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category3',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category4',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          {
            name: 'dugestive',
            imageUrl:Avie2,
            imgback: backProAvie,
            description: 'Mediterranean aromatic medicinal herbs rich of active components, carefully collected from the syrian coastal mountains',
            category: 'category4',
            productNumber:'444',
            weight: '14',
            coverDescription:'bbbbbb',
            coverNumber:'12',
            ingredients:'ingredients ingredients ingredients ingredients',
            additionalDescription:'additionalDescription additionalDescription additionalDescription',
            brand:brand,
            otherImages :{
              otherImage1:Avie1,
              otherImage2:Avie1,
              otherImage3:Avie1,
            },
            reltedImages:{
              reltedImage1:Avie1,
              reltedImage2:Avie1,
              reltedImage3:Avie1,
              reltedImage3:Avie1,
              reltedImage4:Avie1,
              reltedImage5:Avie1,
              reltedImage6:Avie1,
              reltedImage7:Avie1,
              reltedImage8:Avie1,
              
            }
          },
          
          // ... المزيد من المنتجات ...
        ],
      });
    }
    
  };

  const Layout=()=>{
    return(
      <div>
        <NavbarTop/>
       
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
      </div>
    )
  };
  
const router=createBrowserRouter([
  {
    path:"/siriaherbs/",
    element:<Layout/>,
    children:[
      {
        path:"/siriaherbs/",
        element:<Home/>
       
      },
      {
        path:"/siriaherbs/Products",
        element:<Products/>,
       
      },
      {
        path:"/siriaherbs/ProductDetailsPage/:id",
        element:<ProductDetailsPage/>,
       
      },
      {
        path:"/siriaherbs/ContactUs",
        element:<ContactUs/>,
       
      },
      {
        path:"/siriaherbs/Iso",
        element:<Iso/>,
       
      },
      {
        path:"/siriaherbs/About",
        element:<About/>
       
      },
      
     

    ],
  },
]);
  return (
    <div>
    <RouterProvider
    router={router}/>
  </div>
  );
}

export default App;
