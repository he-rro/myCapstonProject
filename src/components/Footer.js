import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {


  return (
    <div className="flex justify-around items-center bg-slate-200  mt-14">
      <span>Copyright &copy; 2021 Travely. </span>
      <ul className="flex justify-between items-center ">
        <li className="m-5">
          <Link to="#">About Us</Link>
        </li>
        <li >
          <Link   className="bg-gradient-to-r   from-pink-500 to-violet-700 cursor-pointer
         hover:from-pink-500  hover:to-yellow-500 rounded-full  text-white font-medium p-2" 
         to="/subscribe">Subscribe</Link>
        </li> 
      </ul>
      <ul className="social__links flex justify-between items-center">
        <li className="m-5">
          <BsFacebook />
        </li>
        <li className="m-5">
          <AiFillInstagram />
        </li>
        <li className="m-5">
          <BsLinkedin />
        </li>
      </ul>
    </div>
  );
}

