"use-client"
import React from 'react';
import userExperience from '@/app/enum/userExperience';

export const Feed = () => {
  return (
    <section className='bg-[#062757]'>
      <div className='p-4 md:p-20 md:pb-0 relative pb-0' id="korisne-stranice">
        <div className='flex flex-col md:flex-col justify-between pb-8 md:pb-8'>
          <div className='md:w-1/2'>
            <p className='text-[36px] md:text-[48px] font-semibold max-sm:text-[36px] text-[#e7ecf4]'>
              <span className='text-[#e09721]'>Korisne stranice</span>
            </p>
          </div>
          <div className='flex flex-row md:w-1/2'>
            <p className='font-semibold pb-3 pt-6 pl-0 text-[#e7ecf4] text-[20px] md:text-[22px]'>
              Pronašli smo nekoliko web stranica koje će ti biti korisne u radu i učenju. Preporučujemo ti da ih posjetiš!
            </p>
          </div>
        </div>

        <div className='relative bg-[#041733] rounded-t-lg width-128px flex flex-wrap'>
          {userExperience.map((item, index) => (
            <a
              key={index}
              className='block font-semibold text-[20px] md:text-[30px] mx-3 p-5 md:p-8 text-white flex-shrink-0 flex-basis-50%'
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};