'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
    Mate_SCFont,
    UbuntuFont,
    Noto_Sans_TCFont,
    RubikFont,
    PoppinsFont,
    CairoFont,
    RobotoFont,
    Crimson_TextFont,
    CaveatFont,
    InterFont,
} from "../Fonts/GoogleFonts"
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger' 
import Lenis from '@studio-freight/lenis'
import { url } from 'inspector'
import {animate, motion} from 'framer-motion'


function Header() {
    return (
        <div className="flex justify-between items-end py-6 px-6">
                <div style={RobotoFont.style} className='text-5xl font-semibold'>
                    GarbGallery
                </div>
                <div className='flex gap-5 text-xl'>
                    <Link href={"/"} className='text-lg font-medium'>
                        Home
                    </Link>
                    <Link href={"/"} className='text-lg flex  font-medium items-end'>
                        <p>
                            Shop
                        </p>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z" fill="black"/>
                            </svg> 
                        </span>
                    
                    </Link>
                    <Link href={"/"} className='text-lg font-medium'>
                        About
                    </Link>
                    <Link href={"/"} className='text-lg font-medium'>
                        Blog
                    </Link>
                </div>
            <div className='flex gap-4 h-full items-end '>
                <div className='flex gap-2 pl-3 h-full rounded-xl'>
                    <span className='py-2 cursor-pointer'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.1201 2.40753e-08C9.34671 0.000145054 7.5991 0.407392 6.02305 1.18776C4.447 1.96814 3.0882 3.09901 2.06002 4.48602C1.03184 5.87304 0.364097 7.47598 0.112499 9.16111C-0.139099 10.8462 0.0327432 12.5647 0.61369 14.1731C1.19464 15.7815 2.16784 17.2333 3.45211 18.4072C4.73638 19.5811 6.29446 20.4432 7.99638 20.9215C9.6983 21.3998 11.4947 21.4804 13.2357 21.1567C14.9767 20.833 16.6118 20.1143 18.0046 19.0606L22.7827 23.6474C23.0295 23.8762 23.36 24.0028 23.703 24C24.0461 23.9971 24.3742 23.865 24.6168 23.6321C24.8594 23.3993 24.997 23.0843 25 22.7549C25.0029 22.4256 24.8711 22.1084 24.6327 21.8715L19.8546 17.2847C21.1473 15.7105 21.9521 13.8187 22.1771 11.8259C22.402 9.83307 22.038 7.81971 21.1266 6.01622C20.2153 4.21274 18.7934 2.69199 17.0237 1.62803C15.2541 0.564065 13.2081 -0.000134569 11.1201 2.40753e-08ZM2.61576 10.6758C2.61576 8.51058 3.51175 6.43408 5.10661 4.90307C6.70148 3.37206 8.86458 2.51194 11.1201 2.51194C13.3755 2.51194 15.5386 3.37206 17.1335 4.90307C18.7284 6.43408 19.6244 8.51058 19.6244 10.6758C19.6244 12.8409 18.7284 14.9174 17.1335 16.4484C15.5386 17.9795 13.3755 18.8396 11.1201 18.8396C8.86458 18.8396 6.70148 17.9795 5.10661 16.4484C3.51175 14.9174 2.61576 12.8409 2.61576 10.6758Z" fill="black" fillOpacity="0.72"/>
                        </svg> 
                    </span>
                    <input type="text" placeholder='Find your product...'  className='w-[0px] text-sm font-medium  bg-[#F2F3F3] rounded-xl outline-none'/>
                </div>
                <span className='py-2 cursor-pointer'>
                    <svg width="25" height="22" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.68859 4.18585L7.68852 4.18588C5.31281 5.3015 3.55 7.97183 3.55 11.1802C3.55 14.4762 4.85995 17.0208 6.75892 19.2211L7.68859 4.18585ZM7.68859 4.18585C9.97285 3.11248 13.0852 3.36516 16.096 6.5814L16.0962 6.58159C16.2287 6.72287 16.388 6.83574 16.5648 6.913C16.7417 6.99027 16.9323 7.03022 17.125 7.03022C17.3177 7.03022 17.5083 6.99027 17.6852 6.913C17.862 6.83574 18.0213 6.72287 18.1538 6.58159L18.154 6.5814C21.1648 3.36516 24.2771 3.11248 26.5614 4.18585L26.5615 4.18588C28.9372 5.30148 30.7 7.97334 30.7 11.1802C30.7 14.4763 29.3914 17.0209 27.4911 19.2211C25.9222 21.0353 24.0219 22.543 22.1416 24.0347L22.1276 24.0459L22.127 24.0463L22.0861 24.0786C21.6534 24.4203 21.2204 24.7624 20.7969 25.1075C20.0054 25.7493 19.3179 26.2954 18.6594 26.6913L18.6592 26.6914C18.0025 27.0871 17.5119 27.2419 17.125 27.2419C16.7384 27.2419 16.2479 27.0858 15.5906 26.6913C14.932 26.2953 14.2445 25.7493 13.453 25.1074L13.4527 25.1072C13.015 24.7532 12.57 24.3994 12.1229 24.0447L12.1227 24.0445M7.68859 4.18585L12.1227 24.0445M12.1227 24.0445C10.2381 22.5525 8.33201 21.0401 6.75911 19.2213L12.1227 24.0445ZM6.49749 1.53841L6.49713 1.53857C3.06367 3.15635 0.7 6.89298 0.7 11.1817C0.7 15.3813 2.40499 18.584 4.62354 21.1506C6.39412 23.1997 8.55731 24.9109 10.4454 26.4036C10.8743 26.7427 11.2885 27.0715 11.6813 27.3908L11.6818 27.3912C12.4487 28.012 13.2895 28.6883 14.1459 29.2034L14.1462 29.2037C15.0022 29.717 16.0117 30.156 17.125 30.156C18.2383 30.156 19.2478 29.717 20.1038 29.2037L20.1039 29.2036C20.962 28.6884 21.8016 28.0118 22.5682 27.3912L22.5683 27.3912C22.9781 27.0593 23.3901 26.7302 23.8042 26.4039L23.8046 26.4036L23.8052 26.4031C25.6917 24.9105 27.8561 23.198 29.6264 21.1506L29.6265 21.1506C31.845 18.584 33.55 15.3813 33.55 11.1817C33.55 6.8931 31.1879 3.15626 27.7526 1.54154C24.5446 0.0335381 20.6224 0.468188 17.125 3.56567C13.6277 0.466653 9.70553 0.0319867 6.49749 1.53841Z" fill="black" stroke="black" strokeWidth="0.6"/>
                    </svg> 
                </span>
                <span className='py-2 cursor-pointer'>
                    <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.32299 3.34615H20.677C21.4814 3.34621 22.2578 3.64808 22.8583 4.19432C23.4588 4.74057 23.8416 5.49306 23.9338 6.30862L25.6999 21.924C25.7529 22.3927 25.7082 22.8675 25.5688 23.3173C25.4293 23.7671 25.1982 24.1817 24.8907 24.5339C24.5831 24.8861 24.2061 25.168 23.7842 25.361C23.3624 25.554 22.9054 25.6538 22.4431 25.6538H6.55688C6.09461 25.6538 5.63757 25.554 5.21576 25.361C4.79395 25.168 4.4169 24.8861 4.10935 24.5339C3.8018 24.1817 3.5707 23.7671 3.43123 23.3173C3.29176 22.8675 3.24706 22.3927 3.30006 21.924L5.06617 6.30862C5.15841 5.49306 5.54121 4.74057 6.14173 4.19432C6.74224 3.64808 7.51857 3.34621 8.32299 3.34615ZM1.80936 5.92492C1.99384 4.29381 2.75944 2.78882 3.96047 1.69634C5.1615 0.603855 6.71415 0.000116071 8.32299 0H20.677C22.2858 0.000116071 23.8385 0.603855 25.0395 1.69634C26.2406 2.78882 27.0062 4.29381 27.1906 5.92492L28.9567 21.5403C29.0628 22.4776 28.9734 23.4273 28.6944 24.3269C28.4155 25.2265 27.9533 26.0557 27.3382 26.7601C26.7231 27.4646 25.969 28.0283 25.1254 28.4143C24.2817 28.8003 23.3677 28.9999 22.4431 29H6.55688C5.63234 28.9999 4.71827 28.8003 3.87465 28.4143C3.03102 28.0283 2.27692 27.4646 1.66182 26.7601C1.04672 26.0557 0.584533 25.2265 0.305586 24.3269C0.0266394 23.4273 -0.0627608 22.4776 0.0432526 21.5403L1.80936 5.92492ZM7.94266 8.36538C7.94266 7.92166 8.11538 7.4961 8.42281 7.18234C8.73025 6.86858 9.14722 6.69231 9.582 6.69231C10.0168 6.69231 10.4337 6.86858 10.7412 7.18234C11.0486 7.4961 11.2213 7.92166 11.2213 8.36538V8.92308C11.2213 9.81053 11.5668 10.6616 12.1816 11.2892C12.7965 11.9167 13.6304 12.2692 14.5 12.2692C15.3696 12.2692 16.2035 11.9167 16.8184 11.2892C17.4332 10.6616 17.7787 9.81053 17.7787 8.92308V8.36538C17.7787 7.92166 17.9514 7.4961 18.2588 7.18234C18.5663 6.86858 18.9832 6.69231 19.418 6.69231C19.8528 6.69231 20.2698 6.86858 20.5772 7.18234C20.8846 7.4961 21.0573 7.92166 21.0573 8.36538V8.92308C21.0573 10.698 20.3665 12.4002 19.1367 13.6553C17.907 14.9103 16.2391 15.6154 14.5 15.6154C12.7609 15.6154 11.093 14.9103 9.86326 13.6553C8.63352 12.4002 7.94266 10.698 7.94266 8.92308V8.36538Z" fill="black"/>
                    </svg>
                </span>
                <Link href={"login"} className='py-2 px-12 rounded-md bg-black text-white'>
                    Login
                </Link>
            </div>
      </div>
    )
}

function Selection1() {
    return (
        <div className='flex justify-center items-center h-screen bg-black rounded-sm overflow-hidden sticky top-0'>
            <Image
                src="/images/G1.jpg"
                alt=""
                width={1920}
                height={1080}
                className='absolute top-0 left-0 object-cover w-full h-full z-0 opacity-85'
            />
            <div className='flex flex-col justify-center items-center  z-10'>
                <div className='text-6xl text-white text-center font-normal' style={Crimson_TextFont.style}>
                Classic exclusive
                </div>
                <div className='text-9xl text-white text-center  font-bold'  style={Crimson_TextFont.style}>
                {`Women's collection`}
                </div>
                <div className='text-5xl text-white text-center  font-semibold'  style={RobotoFont.style}>
                {`UPTO 40% OFF`}
                </div>
                <Link href={"/"} className='px-6 py-3 flex gap-5 items-center  mt-7  rounded-md bg-white'>
                    <p className='text-xl font' style={RobotoFont.style}>
                        Shop Now
                    </p>
                    <div>
                        <svg width="20" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3796 7.1544L1.98979 6.97155C1.70864 6.97155 1.43899 7.07428 1.24019 7.25713C1.04138 7.43998 0.929688 7.68798 0.929688 7.94657C0.929688 8.20516 1.04138 8.45316 1.24019 8.63601C1.43899 8.81887 1.70864 8.92159 1.98979 8.92159L26.3796 9.10444L20.6955 14.3334C20.4964 14.5165 20.3846 14.7648 20.3846 15.0237C20.3846 15.2827 20.4964 15.531 20.6955 15.7141C20.8946 15.8971 21.1645 16 21.4461 16C21.7276 16 21.9976 15.8971 22.1966 15.7141L29.6893 8.81974C29.788 8.72917 29.8663 8.62157 29.9198 8.50312C29.9732 8.38466 30.0007 8.25767 30.0007 8.12942C30.0007 8.00117 29.9732 7.87419 29.9198 7.75573C29.8663 7.63728 29.788 7.52968 29.6893 7.43911L22.1966 0.285937C21.9976 0.102855 21.7276 0 21.4461 0C21.1645 0 20.8946 0.102855 20.6955 0.285937C20.4964 0.46902 20.3846 0.717334 20.3846 0.976252C20.3846 1.23517 20.4964 1.48348 20.6955 1.66657L26.3796 7.1544Z" fill="black"/>
                        </svg> 
                    </div>
                </Link>
            </div>
        </div>
    )
}


const CategorieCard = ({title, img, url}:{title: string, img:string, url:string}) => {
    return (
        <div className='flex  justify-center items-center h-[700px] relative bg-[#F3F3F3] pb-8'>
            <Image
                src={img}
                alt=""
                width={1900}
                height={1080}
                className='object-cover w-full h-full absolute top-0 left-0 z-0'
            />
            <Link href={url} className='text-4xl font-medium mt-5 z-10 self-end bg-[#ffffff] px-[18%] py-5 rounded-lg setShadow' style={RobotoFont.style}>
                {title}
            </Link>
        </div>
    )
}

function Selection2() {
    
    return (
        <div className='flex gap-10 flex-col h-screen bg-white rounded-sm overflow-hidden sticky top-0 py-7'>
            <div className='flex justify-between items-center px-11 bg-black h-fit w-full'>
                <div className=' flex flex-col justify-start items-start  py-6 z-10'>
                    <p className='text-2xl text-white text-center font-medium' style={RobotoFont.style}>
                        Shop now, save more, enjoy life
                    </p>
                    <p style={CaveatFont.style} className='text-lg text-white text-center  font-medium'>
                    {`Treat yourself today - you've earned it!`}
                    </p>
                </div>
                <div className='text-white flex gap-3'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold' style={RobotoFont.style}>
                            01
                        </p>
                        <p>
                            Days
                        </p>
                    </div>
                    <div className='line w-[1px] min-h-full bg-white'/>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold' style={RobotoFont.style}>
                            11
                        </p>
                        <p>
                            Hours
                        </p>
                    </div>
                    <div className='line w-[1px] min-h-full bg-white'/>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-5xl font-semibold' style={RobotoFont.style}>
                            44
                        </p>
                        <p>
                            Minutes
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <p style={RobotoFont.style} className='text-3xl font-semibold  py-6'>
                    Shop by Categories
                    </p>
                    <Link href={"/"} className='underline text-lg font-medium' style={InterFont.style}>
                        See all
                    </Link>
                </div>
                <div className='grid grid-cols-3 gap-[200px] mt-14 px-11'>
                    <CategorieCard title={"men Clothing"} img={"/images/men.png"} url={"/"}/>
                    <CategorieCard title={"Women Clothing"} img={"/images/women.png"} url={"/"}/>
                    <CategorieCard title={"Kids Clothing"} img={"/images/Kids.png"} url={"/"}/>
                    
                </div>
            </div>
        </div>
    )
}

const SesionsCard = ({title, img, url}:{title: string, img:string, url:string}) => {
    const [hover, setHover] = useState(false)

    const titleHover = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeIn'
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.7,
                ease: 'easeIn'
            }
        }
    }
    const descriptionHover = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut'
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 1,
                ease: 'easeOut'
            }
        }
    }
    const hedden = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: 'easeIn'
            }
        },
        exit: {
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: 'easeIn'
            }
        }
    }
    
    return (
        <Link href={url} className='flex  justify-center items-center h-full w-full relative bg-[#000000] p-[50px] pb-[10px] pr] group'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image
                src={img}
                alt=""
                width={1900}
                height={1080}
                className='object-cover w-full h-full absolute top-0 left-0 z-0 group-hover:opacity-50 transition-all duration-500 group-hover:blur-[1px]'
            />
            <div className='flex  z-10 self-end justify-between'>
                <span className='max-w-[80%]'>
                    <motion.p
                        variants={titleHover}
                        initial='initial'
                        animate={hover ? 'animate' : 'initial'}
                        exit='exit'
                    className='text-4xl font-medium text-white' style={RobotoFont.style}>
                        {title}
                    </motion.p>
                    <motion.p
                        variants={descriptionHover}
                        initial='initial'
                        animate={hover ? 'animate' : 'initial'}
                        exit='exit'
                    className='text-lg text-white' style={RobotoFont.style}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse harum voluptatibus dolor deserunt natus molestiae id in.
                    </motion.p>
                </span>
                <motion.div
                    variants={hedden}
                    initial='initial'
                    animate={hover ? 'animate' : 'initial'}
                    exit='exit'
                className='w-[60px] h-[60px] rounded-full border-[2px] border-white flex justify-center items-center'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5 2C24.5 1.17157 23.8284 0.500001 23 0.500001H9.5C8.67157 0.500001 8 1.17157 8 2C8 2.82843 8.67157 3.5 9.5 3.5L21.5 3.5L21.5 15.5C21.5 16.3284 22.1716 17 23 17C23.8284 17 24.5 16.3284 24.5 15.5V2ZM3.06066 24.0607L24.0607 3.06066L21.9393 0.93934L0.93934 21.9393L3.06066 24.0607Z" fill="white"/>
                    </svg> 
                </motion.div>
            </div>
        </Link>
    )
}

function Selection3() {
    
    return (
        <div className='h-screen bg-white rounded-sm overflow-hidden sticky top-0 py-10  grid grid-cols-2 gap-10 grid-rows-3'>
            <div className='w-full h-full bg-[#000000] row-span-2 relative  cursor-pointer'>
            <SesionsCard title={"Summer Collection"} img={"/images/summer.jpg"} url={"/"}/>
     
            </div>
            <div className='w-full h-full bg-[#000] relative row-span-1 cursor-pointer'>
                <SesionsCard title={"Spring Collection"} img={"/images/spring.jpg"} url={"/"}/>
            </div>
            <div className='w-full h-full bg-[#000] relative row-span-2 cursor-pointer'>
                <SesionsCard title={"Winter Collection"} img={"/images/winter.jpg"} url={"/"}/>
            </div>
            <div className='w-full h-full bg-[#000] relative row-span-1 cursor-pointer'>
                <SesionsCard title={"Autumn Collection"} img={"/images/autumn.jpg"} url={"/"}/>
            </div>
        </div>
    )
}
const BestsellerCard = ({img, title, description, price, url}:{img:string, title:string, description:string, price:string,url:string}) => {
    return(
    <div className=' rounded-xl w-full h-[620px] '>
        <div className='w-full h-[480px] bg-black group relative'>
            <div className='absolute right-3 top-3 hidden group-hover:block z-10'>
                <span className='bg-white rounded-full p-2 cursor-pointer flex justify-center items-center'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_134_112)">
                        <path d="M7.629 4.50663C8.68483 2.61329 9.21233 1.66663 10.0015 1.66663C10.7907 1.66663 11.3182 2.61329 12.374 4.50663L12.6473 4.99663C12.9473 5.53496 13.0973 5.80413 13.3307 5.98163C13.564 6.15913 13.8557 6.22496 14.439 6.35663L14.969 6.47663C17.019 6.94079 18.0432 7.17246 18.2873 7.95663C18.5307 8.73996 17.8323 9.55746 16.4348 11.1916L16.0732 11.6141C15.6765 12.0783 15.4773 12.3108 15.3882 12.5975C15.299 12.885 15.329 13.195 15.389 13.8141L15.444 14.3783C15.6548 16.5591 15.7607 17.6491 15.1223 18.1333C14.484 18.6183 13.524 18.1758 11.6057 17.2925L11.1082 17.0641C10.5632 16.8125 10.2907 16.6875 10.0015 16.6875C9.71233 16.6875 9.43983 16.8125 8.89483 17.0641L8.39816 17.2925C6.479 18.1758 5.519 18.6175 4.8815 18.1341C4.24233 17.6491 4.34816 16.5591 4.559 14.3783L4.614 13.815C4.674 13.195 4.704 12.885 4.614 12.5983C4.52566 12.3108 4.3265 12.0783 3.92983 11.615L3.56816 11.1916C2.17066 9.55829 1.47233 8.74079 1.71566 7.95663C1.95983 7.17246 2.98483 6.93996 5.03483 6.47663L5.56483 6.35663C6.14733 6.22496 6.43816 6.15913 6.67233 5.98163C6.90566 5.80413 7.05566 5.53496 7.35566 4.99663L7.629 4.50663Z" stroke="black" strokeWidth="1.7"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_134_112">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg> 
                </span>
                <span className='bg-white mt-3 rounded-full p-2 cursor-pointer flex justify-center items-center'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_134_108)">
                        <path d="M10.0013 3.33337C12.3238 3.33337 14.3871 4.38087 15.8563 5.67754C16.5938 6.32837 17.2013 7.05921 17.6296 7.78671C18.0505 8.50087 18.3346 9.27504 18.3346 10C18.3346 10.725 18.0513 11.4992 17.6296 12.2134C17.2013 12.9409 16.5938 13.6717 15.8563 14.3225C14.3871 15.6192 12.323 16.6667 10.0013 16.6667C7.6788 16.6667 5.61547 15.6192 4.1463 14.3225C3.4088 13.6717 2.8013 12.9409 2.37297 12.2134C1.9513 11.4992 1.66797 10.725 1.66797 10C1.66797 9.27504 1.9513 8.50087 2.37297 7.78671C2.8013 7.05921 3.4088 6.32837 4.1463 5.67754C5.61547 4.38087 7.67964 3.33337 10.0013 3.33337ZM10.0013 5.00004C8.1813 5.00004 6.49464 5.82754 5.24964 6.92671C4.62964 7.47337 4.13964 8.07087 3.8088 8.63254C3.47047 9.20754 3.33464 9.68337 3.33464 10C3.33464 10.3167 3.47047 10.7925 3.8088 11.3675C4.13964 11.9292 4.62964 12.5259 5.24964 13.0734C6.49464 14.1725 8.1813 15 10.0013 15C11.8213 15 13.508 14.1725 14.753 13.0734C15.373 12.5259 15.863 11.9292 16.1938 11.3675C16.5321 10.7925 16.668 10.3167 16.668 10C16.668 9.68337 16.5321 9.20754 16.1938 8.63254C15.863 8.07087 15.373 7.47421 14.753 6.92671C13.508 5.82754 11.8213 5.00004 10.0013 5.00004ZM10.0013 7.50004C10.0746 7.50004 10.1471 7.50337 10.2188 7.50921C10.0379 7.82659 9.96624 8.19462 10.0149 8.55669C10.0636 8.91876 10.2299 9.25481 10.4882 9.51313C10.7465 9.77146 11.0826 9.93775 11.4447 9.98643C11.8067 10.0351 12.1748 9.96347 12.4921 9.78254C12.536 10.2843 12.4272 10.7877 12.18 11.2266C11.9329 11.6655 11.5589 12.0196 11.1071 12.2423C10.6554 12.4651 10.1468 12.5461 9.64816 12.4749C9.1495 12.4037 8.68398 12.1835 8.31261 11.8432C7.94124 11.5029 7.68132 11.0583 7.56693 10.5678C7.45254 10.0772 7.48901 9.56355 7.67155 9.09407C7.85409 8.62459 8.17419 8.22121 8.58991 7.93677C9.00563 7.65233 9.49758 7.5001 10.0013 7.50004Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_134_108">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg> 
                </span>
            </div>
            <div className='hidden group-hover:flex justify-center items-center w-[80%] py-3 rounded-sm cursor-pointer text-lg font-medium z-10 absolute bottom-3 left-1/2 -translate-x-1/2 bg-white transition duration-500'>
                Add to cart
            </div>
            <Image
                src={"/images/bestseller1.jpg"}
                alt=""
                width={1900}
                height={1080}
                className='object-cover w-full h-full group-hover:opacity-80 transition-all duration-500  z-0'
            />
        </div>
        <div className='flex flex-col justify-between content-between gap-2 px-5 py-3'>
            <p className='text-2xl font-medium capitalize' style={RobotoFont.style}>
                {
                    `T-shirt with a print`
                }
            </p>
            <p className='text-lg ' style={RobotoFont.style}>
                {
                    `t-shirt with a print and a round neck`
                }
            </p>
            <span className='flex gap-3  items-center'>
                <p className='text-2xl font-medium' style={RobotoFont.style}>
                    {
                        `$ 29.99`
                    }
                </p>
                <p className='text-lg text-[#00000092] line-through' style={RobotoFont.style}>
                    {
                        `$ 39.99`
                    }
                </p>
            </span>
        </div>
    </div>
    )
}

function Selection4() {
    
    return (
        <div className='min-h-screen h-fit bg-blue-50 rounded-sm overflow-hidden   sticky 3xl:top-0  md:-top-1/2 -top-[calc(100%+620px)] py-10 flex flex-col items-center gap-28'>
            <div className='flex flex-col items-center gap-20'>
                <p className='text-4xl font-bold  px-11'>
                    Our Bestseller
                </p>
                <div className='flex gap-1'>
                    <div className='px-8 py-1 cursor-pointer bg-[rgba(246,215,173,0.83)] rounded-full font-medium' style={InterFont.style}>
                        Men
                    </div>
                    <div className='px-8 py-1 cursor-pointer rounded-full font-medium' style={InterFont.style}>
                        Women
                    </div>
                    <div className='px-8 py-1 cursor-pointer rounded-full font-medium' style={InterFont.style}>
                        Kids
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-5 md:gap-12 lg:gap-28 2xl:grid-cols-3 3xl:grid-cols-4 2xl:gap-[20px] w-full h-full 3xl:gap-[20px] px-10'>
                <BestsellerCard img={"/images/bestseller1.jpg"} title={"T-shirt with a print"} description={"t-shirt with a print and a round neck"} price={"$ 29.99"} url={"/"}/>
                <BestsellerCard img={"/images/bestseller2.jpg"} title={"T-shirt with a print"} description={"t-shirt with a print and a round neck"} price={"$ 29.99"} url={"/"}/>
                <BestsellerCard img={"/images/bestseller3.jpg"} title={"T-shirt with a print"} description={"t-shirt with a print and a round neck"} price={"$ 29.99"} url={"/"}/>
                <BestsellerCard img={"/images/bestseller4.jpg"} title={"T-shirt with a print"} description={"t-shirt with a print and a round neck"} price={"$ 29.99"} url={"/"}/>
            </div>
            
        </div>
    )
}
function Selection5() {
    
    return (
        <div className='h-screen bg-[#F6F7F7] rounded-sm overflow-hidden sticky top-0   flex  justify-center items-center gap-28'>
            <div className='w-[60%] h-full flex flex-col justify-center items-center gap-10'>

            </div>
            <div className='w-[40%] h-full flex flex-col justify-center items-center gap-10 bg-black'>
                .

            </div>
        </div>
    )
}

export default function Home() {
    const bodyRef = useRef<HTMLDivElement>(null);
    useEffect( () => {

        const lenis = new Lenis()
    
        lenis.on('scroll', ScrollTrigger.update)
        
        gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
        })
        
        gsap.ticker.lagSmoothing(0)
    
      }, [])
    return (
        <div className='xl:max-w-[1900px] m-auto  '>
            <Header />
            <main className='px-10'>
                <Selection1 />
                <Selection2 />
                <Selection3 />
                <Selection4 />
                <Selection5 />
            </main>
        </div>
  )
}
