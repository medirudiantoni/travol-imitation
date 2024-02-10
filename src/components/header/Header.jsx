import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

const NavLogo = ({isMenu}) => {
  return (
    <div className="nav-logo relative -translate-y-1 z-50">
      <p className={`text-4xl font-semibold bord2 ${isMenu ? 'text-white' : 'text-inherit'}`}>Qaveela</p>
    </div>
  )
}

const NavToggle = ({onClick, inView}) => {
  return (
    <div onClick={onClick} className="w-6 h-4 flex flex-col justify-between md:hidden relative z-10">
      <svg width="12" height="3" viewBox="0 0 12 3" className="duration-150 top-0">
        <rect width="12" height="1.5" rx="0.5" className={`${inView ? 'fill-white' : 'fill-black'}`} />
      </svg>
      <svg width="24" height="3" viewBox="0 0 24 3" className="duration-150 top-0">
        <rect width="24" height="1.5" rx="0.5" className={`${inView ? 'fill-white' : 'fill-black'}`} />
      </svg>
      <svg width="12" height="3" viewBox="0 0 12 3" className="duration-150 top-0 self-end">
        <rect width="12" height="1.5" rx="0.5" className={`${inView ? 'fill-white' : 'fill-black'}`} />
      </svg>
    </div>
  )
}

const menus = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Tours', subMenus: [
    { name: 'Tours 1', link: '/tours/tours-1' },
    { name: 'Tours 2', link: '/tours/tours-2' },
    { name: 'Tour details', link: '/tours/tour-details' },
  ] },
  { name: 'Destination', link: '/destination' },
  { name: 'Blog', link: '/blog' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'Contact', link: '/contact' },
];

const NavSubMenu = ({subMenus}) => {
  return (
    <div className="absolute z-10 left-0 top-full md:top-full w-fit h-5/6 whitespace-nowrap scale-0 group-hover:scale-100">
      <div className="relative md:top-full w-fit h-fit bg-black shadow-xl md:bg-white/20 backdrop-blur-md py-2 px-4 flex flex-col gap-2">
        {subMenus && subMenus.map((subMenu, i) => {
          return (
            <Link key={i} to={subMenu.link}>
              <p className="hover:text-blue-500">{subMenu.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const NavMenu = ({isMenu}) => {
  const [isMobile, setMobile] = useState(false);
  const resize = () => {
    setMobile(window.innerWidth < 768);
  }
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [])
  return (
    <div 
      className="flex items-center justify-center absolute top-0 left-full w-screen h-screen bg-black/50 backdrop-blur-md p-5  text-white md:text-inherit md:w-fit md:h-fit md:relative md:left-0 md:bg-white/0 md:backdrop-blur-none md:p-0 duration-150 ease-out"
      style={{ transform: `translateX(${ isMobile ? isMenu ? '-100%' : '0%' : '0%' })` }}
      >
      <div className="flex flex-col gap-3 text-2xl w-full pb-10 border-b md:text-base md:items-center md:justify-between md:w-fit md:h-fit md:relative md:flex-row md:pb-0 md:border-0">
        {menus.map((menu, i) => {
          return (
            <div className='relative group w-fit' key={i}>
              <div>
                <Link to={menu.link ? menu.link : false}>
                  <div className="relative px-1.5 group w-fit">
                    <div className="hover:text-blue-500 peer flex items-center gap-[6px] max-w-fit">
                      <p>{menu.name}</p>
                      {menu.subMenus && (
                        <div>
                            <svg viewBox="0 0 512 260" className='w-3.5 translate-y-0.5' fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M481.707 0L270.955 210.752C266.899 214.645 261.494 216.819 255.872 216.819C250.25 216.819 244.845 214.645 240.789 210.752L30.1653 0.106669L0 30.272L210.624 240.917C222.824 252.544 239.03 259.03 255.883 259.03C272.735 259.03 288.942 252.544 301.141 240.917L511.872 30.1653L481.707 0Z" className='fill-white' />
                            </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
              {menu.subMenus && (
                <NavSubMenu subMenus={menu.subMenus} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}



const Header = () => {
  const [isMenu, setMenu] = useState(false);
  useEffect(() => {
    isMenu ? document.documentElement.style.overflowY = 'hidden' : document.documentElement.style.overflowY = 'scroll';
  }, [isMenu])
  const {ref: ref, inView: inView} = useInView();
  return (
    <header className="absolute z-50 top-0 left-0 w-full">
      <div ref={ref} className="w-full h-16 -z-50 absolute top-0 left-0"></div>
      <div className={`fixed top-0 left-0 w-full px-5 h-fit flex items-center justify-center duration-150 ${inView ? 'text-white' : 'bg-white text-slate-900'}`}>
        <div className={`w-full max-w-6xl h-full border-b border-white py-5 flex items-center justify-between text-inherit`}>
          <NavLogo isMenu={isMenu}/>
          <NavToggle onClick={() => setMenu(!isMenu)} inView={inView} />
          <NavMenu isMenu={isMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header