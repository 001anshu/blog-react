import { Button, Flowbite, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
const Header=()=>{
  const path=useLocation().pathname;
  return(
    <div className="">
    <Navbar className="border-b-2">
      <Link to={"/"} className="self-center text-xl sm:text-xl font-semibold dark:text-white"><span className="bg-gradient-to-r from-orange-400 to-yellow-200 rounded-md py-1 px-2 text-white">Vakhyam</span></Link>
      <form>
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={CiSearch}
          className="hidden md:inline"
        />
      </form>
      <Button className=" md:hidden  " color='gray'>
        <CiSearch/>
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button className="m-2  self-center" color='gray'>
          <FaMoon/>
        </Button>
        <Link to={"/signin"}>
        <Button className=" m-2 bg-gradient-to-r from-yellow-200 " color='gray'>Sign In</Button>
        </Link>
      <Navbar.Toggle className=""/>  
      </div>
      <Navbar.Collapse>
          <Navbar.Link className="" active={path==="/"} as={'div'}>
            <Link to='/' >
              Home
            </Link>
            </Navbar.Link> 
            <Navbar.Link className="" active={path==="/about"}  as={'div'}>
            <Link to='/about' >
              About
            </Link>
            </Navbar.Link> 
            <Navbar.Link className="" active={path==="/project"} as={'div'}> 
            <Link to='/project'>
              Projects
            </Link>
            </Navbar.Link> 
            
        </Navbar.Collapse>



    </Navbar>
    </div>
  )
}
export default Header;