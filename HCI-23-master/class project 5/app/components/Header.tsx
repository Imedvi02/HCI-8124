"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sitemap from '@/app/enum/sitemap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    return (
        <div className='w-full flex flex-row justify-between pt-7 px-4 md:px-20 pb-4 bg-[#e7ecf4]'>
                <Link href={"/"}>
                    <div className='flex items-center'>
                        <Image src="/assets/icons/logo.png" width={78} height={68} alt="logo" />
                        <span className='font-bold text-[48px] text-[#051d41] pt-3'>FESBbaš</span>
                    </div>
                </Link>
                <div className='flex align-middle justify-end pt-4 max-lg:hidden font-bold'>
                    {
                        sitemap.map((item) => (
                            <div className="pt-3 pr-3 md:pr-6 md:mr-6" key={item.id}>
                                <Link className="font-regular text-[22px] text-[#e09721] hover:text-[#c7861e]" href={item.link}>{item.name}</Link>
                            </div>
                        ))
                    }
                </div>
                <div className='items-center justify-end pt-6 px-4 hidden max-lg:block '>
                    <FontAwesomeIcon icon={faBars}  rotation={showMenu? 90:180} color={"#bf790e"} onClick={() => (setShowMenu(!showMenu))} size='2x' />
                    <>
                        {showMenu && <div className='absolute top-15 right-2 z-50 bg-[#051d41] rounded-xl p-4'>
                            {
                                <>
                                    {sitemap.map((item) => (
                                        <div className="py-1 pr-3 md:pr-6 md:mr-6" key={item.id}>
                                            <Link className="font-regular text-white" href={item.link}>{item.name}</Link>
                                        </div>

                                    ))}
                                    <div className="border-t pt-3 mt-3 flex justify-center text-white" onClick={() => (setShowMenu(!showMenu))}><FontAwesomeIcon icon={faClose}/></div>
                                </>
                            }
                        </div>}
                    </>
                </div>
            </div>
    );
};