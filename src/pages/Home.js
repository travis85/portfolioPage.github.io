import React from "react";
import Typical from "react-typical"
import pic from "../assets/portfolioPic.jpeg"


const Home = () => {
  return (
    <div className="ProfileContainer  justify-center text-center place-items-center h-[10%] min-h-fit  ">
    <div className='ProfileParent flex flex-row'>
      <div className='ProfileDetails basis-2/3'>

        <div className=' flex flex-col mt-12 mb-10'>
          <span className='primar-text text-black'>
            {""}
            <h1 className='text-4xl'>
              {""}
              <Typical
                loop={Infinity}
                steps={[
                  'Motived Developer💻 ',
                  1100,
                  'Full Stack Developer💻 ',
                  1100,
                  'MERN DEV 💻' ,
                  1100,
                  'React Developer 💻',
                  1100,
                ]}
                wrapper="h1"
              />
            </h1>
            <span className='profileRoleTagLine text-xl'>
              knack for creative problem solving!
            </span>
          </span>
      </div>
      <div className='mb-10'>
        <button className="animate-bounce border-solid border-2 rounded py-1 px-2 ring-2  m-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          {''}
          Contact Me{''}
        </button>
        <a href='../Resume/Resume.pdf' download>
          <button className="animate-bounce border-solid border-2 rounded py-1 px-2 ring-2  bg-blue-800 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" >Resume</button>
        </a>
      </div>

      </div>
        <div className=' basis-1/3  flex justify-content-center  items-center shadow-xl mt-4'>
          <div className=''>
            <img className='rounded-full shadow-2xl h-52' src={pic}/>
            <div className=' text-2xl mt-10 mb-4'>
              <span className='primary-text'>
                {''}
                Hello I'm <span className='highlighted-text text-blue-900'>Travis</span><span className='ml-2'>
                <a href='https://github.com/travis85'>
                  <i className="bi bi-github"></i>
                </a>
                </span>
              </span>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Home