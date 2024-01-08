import React from 'react'
import heroItems from '@/app/enum/HeroSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Header } from '../components/Header'

import styles from './help.module.css'

const Hero = () => {
  return (
    <>
      <div style={{ backgroundImage: 'url(../assets/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>   
          <Header />
          <div className='p-2 md:p-20 text-white'>
            <div className='text-[32px] md:text-[48px] font-bold text-[#e09721]'>
                <p>Dobrodošli!</p>
            </div>
            <div className='pt-3 md:pt-12 text-[22px] md:text-[22px] text-left font-medium'>
                <p>Zapeo si s učenjem? Propustio predavanja i sad ne znaš kako dalje? <br /> 
                Ova stranica je prava za tebe! Drobrodošli na mjesto gdje ćete pronaći <br />
                sve materijale koji su potrebni za uspješno studiranje na Fakultetu elektrotehnike,<br/> 
                strojarstva i brodogradnje. Spremni za izazov? Ova stranica je vodič prema uspjehu.
                </p>
            </div>
            <div className='pt-6 pb-0 md:pt-6'>
              <button className='my-4 md:my-10 pl-4 md:pl-8 pr-4 md:pr-8 py-0 md:py-4 bg-[#e09721] rounded-lg text-[#062757] text-[22px] 
              hover: bg-[#c7861e] hover:text-white font-semibold'>
                Moj profil</button>
            
            </div>
          </div>
      </div>
      <div className='bg-[#e7ecf4]'>
        <div className='p-4 md:p-20 text-[#062757]'>
          <div className='flex flex-col md:flex-row justify-between pb-4 md:pb-6'>
            <div className='md:w-1/2'>
              <p className='text-[24px] md:text-[48px] font-semibold max-sm:text-[22px]'>
                Odaberi svoj<br /><span className='text-[#e09721]'>STUDIJ</span>
              </p>

            <p className='font-bold mt-3 text-[22px] '>Potrudili smo se postaviti materijale za sve! Pronađi predmete
            koji ti trebaju grupirane po studiju i semestru. 😊</p>


            </div>
          </div>
          <div className='flex '>
            {heroItems.map(item => (
              <div key={item.id} className='px-2 w-full md:w-1/2 lg:w-1/3'>
                <div className='flex py-2'>
                </div>
                <div>
                  <div className='py-2'>
                    <div className='flex items-center'>
                    {/* <Image src={item.img} width={120} height={120} /> */}

                    <div className={styles.icon}>
                    <div className={styles.centeredImage}>
                        <Image src={item.img} alt="Icon" width={100} height={100} />
                    </div>
                    </div>

                    </div>
                    {/* <p className='font-bold mt-3 text-[18px] '>{item.name}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className='flex justify-center items-center max-lg:hidden'>
            <div className='bg-[#e09721] mt-6 md:mt-12 mx-2 p-2 rounded-xl w-10 h-10 flex justify-center items-center cursor-pointer'>
              <FontAwesomeIcon className='' icon={faChevronLeft} color='#081C31' size='2x' />
            </div>
            <div className='bg-[#e09721] mt-6 md:mt-12 mx-2 p-2 rounded-xl w-10 h-10 flex justify-center items-center cursor-pointer'>
              <FontAwesomeIcon className='' icon={faChevronRight} color='#081C31' size='2x' />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Hero