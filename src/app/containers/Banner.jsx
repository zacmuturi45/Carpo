import React from 'react'
import Image from 'next/image'
import How from "../assets/truck.svg"
import location from "../assets/pin.svg"
import texting from "../assets/texting.svg"
import delivery from "../assets/delivery.svg"
import compass from "../assets/compass.svg"

export default function Banner() {
  return (
    <main className="wrapper col-8-md">
      <div className='how-maindiv dsp-f fd-r'>
        <div className="howimage">
          <p className='cl-grey-4 fs-lg mt-2'>Never let <span className='cl-red-5'>deliveries</span> take up <br/>your entire schedule again.</p>

          {/* <Image src={How} width={500} height={400} /> */}
        </div>
        <div className='howtext'>
          <h1 className='cl-grey-4 mt-2'>Let <span className="cl-red-5">Carpo</span> handle your logistics so you can focus on running your business.</h1>
          {/* <ul>
                      <li><span>1</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit, ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li><span>1</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit, ipsum dolor sit amet consectetur adipisicing elit.</li>
                      <li><span>1</span>Lorem, ipsum dolor sit amet consectetur adipisicing el, ipsum dolor sit amet consectetur adipisicing elitit.</li>
                  </ul> */}
        </div>

      </div>
    </main>
  )
}
//   return (
//     <main className="wrapper faq-wrapper col-8-md">
//       <div className='how-maindiv dsp-f fd-c justify-center ai-c'>
//         <div className='howtext dsp-f justify-flex-start fd-c ai-c'>
//           <h1 className='cl-grey-4 red m-b-2'>Get started in 4 easy steps</h1>
//           <div className="cards dsp-f mt-5">
//             <div className="dsp-f">
//               <Image src={location} className='card-image'/>
//               <div>
//                 <h3>Lorem, ipsum.</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>

//             <div>
//             <Image src={texting} className='card-image' />
//               <div>
//                 <h3>Lorem, ipsum.</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>

//             <div>
//             <Image src={delivery} className='card-image' />
//               <div>
//                 <h3>Lorem, ipsum.</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>

//             <div id='card-images'>
//             <Image src={compass} className='card-image' />
//               <div>
//                 <h3>Lorem, ipsum.</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="howimage">
//           <Image src={How} width={500} height={400} />
//         </div> */}
//       </div>
//     </main>
//   )
// }

