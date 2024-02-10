import React from 'react'
import angelDownSvg from '../../assets/svg/angle-down.svg'
import woman_at_beach from '../../assets/img/woman_at_beach.jpg'
import polkadotSvg from '../../assets/svg/polkadot.svg'
import checkSvg from '../../assets/svg/check.svg'
import phone_call from '../../assets/svg/phone_call.svg'
import location from '../../assets/svg/location.svg'
import clock from '../../assets/svg/clock.svg'
import person from '../../assets/svg/person.svg'

const HomeBg = () => {
  return (
  <div className="w-full h-screen absolute -z-50 top-0 left-0">
    <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/50"></div>
    <img src={"https://source.unsplash.com/1920x1080?island"} alt="beach" className='w-full h-full object-cover' />
  </div>
  )
}

const FilterSection = ({className}) => {
  return (
    <div className={`w-full h-fit p-10 md:p-5 bg-neutral-200 md:bg-white/20 backdrop-blur-md ${className}`}>
      <div className="w-full max-w-6xl bg-white text-slate-800 text-start grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
        <div className="col-span-1 p-5">
          <p className="">Where to</p>
        </div>
        <div className="col-span-1 p-5 flex items-center justify-between">
          <p className="">Destination</p>
          <img src={angelDownSvg} alt="v" className='w-3.5 object-contain' />
        </div>
        <div className="col-span-1 p-5 flex items-center justify-between">
          <p className="">Duration</p>
          <img src={angelDownSvg} alt="v" className='w-3.5 object-contain' />
        </div>
        <div className="col-span-1 h-full bg-blue-500 text-white flex items-center justify-center p-5">
          <p className="">Find Now</p>
        </div>
      </div>
    </div>
  )
}

const Section1 = () => {
  return (
    <section className="w-full px-5 md:px-0 max-w-6xl h-fit min-h-screen relative pt-20 sm:pt-52 md:pt-[20vh] flex items-center justify-center">
      <div className="w-full h-fit flex flex-col items-center gap-4 text-white text-center">
        <p className="text-xl">Let's travel the world with us</p>
        <h1 className="text-6xl md:text-[90px] leading-[1.2] font-bold uppercase">
          Explore the <br />world with <br /><span className="text-outline-1-white text-transparent">Qaveela</span>
        </h1>
        <FilterSection className={'hidden md:flex'} />
      </div>
    </section>
  )
}

const Section2 = () => {
  return (
    <section className="w-full max-w-6xl min-h-screen py-20">
      <div className="w-full min-h-screen flex items-center">
        <div className="w-full h-fit flex flex-col-reverse md:flex-row justify-between">
          <div className="w-full md:w-2/5 h-fit flex p-7 px-9 relative">
            <div className="absolute top-0 left-0 -z-10 w-1/2 aspect-[3/3.5] bg-cover" style={{ backgroundImage: `url(${polkadotSvg})` }}></div>
            <div className="absolute bottom-0 right-0 -z-10 w-4/5 aspect-[3/3.5] bg-cyan-600"></div>
            <img src={woman_at_beach} alt="a woman at beach" className='w-full aspect-[3/3.5] object-cover' />
          </div>
          <div className="w-full px-5 md:px-0 md:w-1/2 flex flex-col p-5 text-neutral-700">
            <div className="text w-full">
              <p className="uppercase mb-4">Best Travel Agency</p>
              <h2 className="text-5xl font-bold uppercase text-cyan-900 mb-8">Discover the <span className="text-cyan-600 mb-8">world</span> with our guide</h2>
              <p className='mb-8'>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
              <p className='mb-8'>Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-7 h-7 bg-cyan-600 rounded-full flex items-center justify-center">
                  <img src={checkSvg} alt="v" className='w-1/2 object-contain' />
                </div>
                <p>20 years of experience</p>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-7 h-7 bg-cyan-600 rounded-full flex items-center justify-center">
                  <img src={checkSvg} alt="v" className='w-1/2 object-contain' />
                </div>
                <p>150+ Tour Destinations</p>
              </div>
              <div className="flex items-end gap-4 mb-8">
                <div className="w-10 h-10">
                  <img src={phone_call} alt="v" className='w-full object-contain' />
                </div>
                <div className="">
                  <p>For more Informations</p>
                  <p className="text-xl text-cyan-600">+62 812 8282 1882</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TourCard = ({name}) => {
  return (
    <div className=" w-full h-full relative overflow-hidden group">
      <img src={`https://source.unsplash.com/1920x1080?${name}`} alt={name} className='w-full h-full object-cover group-hover:scale-110 duration-700 ease-out' />
      <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black/20 duration-500"></div>
      <div className="absolute top-5 right-5 w-fit h-fit py-2 px-4 bg-cyan-700 text-white">
        <p>$2500</p>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10 p-5 bord2 text-white group-hover:-translate-y-11 duration-700">
        <div className="w-full h-full relative z-20 bord2 border-purple-600">
          <div className="absolute bottom-0 left-0 w-fit h-fit py-4">
            <p className="text-3xl font-semibold">{name} Tour</p>
          </div>
          <div className="absolute bottom-0 left-0 w-20 border-b border-white group-hover:w-full duration-500"></div>
        </div>
        <div className="relative z-20 w-full h-fit py-5 flex items-center gap-5 bord2 border-red-600">
          <div className="flex gap-2 items-end text-sm md:text-base">
            <img src={clock} alt="p" className='w-4 object-contain'/>
            <p>10 Days</p>
          </div>
          <div className="flex gap-2 items-end">
            <img src={person} alt="p" className='w-4 object-contain'/>
            <p>12+</p>
          </div>
          <div className="flex gap-2 items-end">
            <img src={location} alt="p" className='w-4 object-contain'/>
            <p>{name}</p>
          </div>
        </div>
        <div className="absolute left-0 -bottom-1/2 w-full h-full bord2 bg-gradient-to-b from-black/0 to-black border-blue-600"></div>
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <section className="w-full min-h-screen bg-slate-200 py-32">
      <div className="w-full max-w-6xl px-5 md:px-0 mx-auto">
        <div className="w-fit h-fit text-cyan-600">
          <p className='uppercase mb-3'>Choose your place</p>
          <h2 className="text-5xl font-bold uppercase text-cyan-900 mb-8">Popular <span className='text-cyan-600'>tours</span></h2>
        </div>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 h-60 md:h-[500px]">
            <TourCard name={'maldives'} />
          </div>
          <div className="col-span-1 h-96 md:h-[500px] bg-cyan-600 relative overflow-hidden group">
            <TourCard name={'italy'} />
          </div>
          <div className="col-span-1 h-60 bg-cyan-600 relative overflow-hidden group">
            <TourCard name={'french'} />
          </div>
          <div className="col-span-1 h-60 bg-cyan-600 relative overflow-hidden group">
            <TourCard name={'greek'} />
          </div>
          <div className="col-span-1 h-60 bg-cyan-600 relative overflow-hidden group">
            <TourCard name={'canada'} />
          </div>
        </div>
      </div>
    </section>
  )
};

const Section4 = () => {
  return (
    <section className="w-full max-w-6xl min-h-screen bg-neutral-200 flex items-center justify-center">
      <p className="text-4xl font-semibold text-center">Sabar ya, lagi dibikin!</p>
    </section>
  )
}

const Home = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center overflow-x-hidden">
      <HomeBg />
      <Section1 />
      <FilterSection className={'flex md:hidden'} />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default Home;