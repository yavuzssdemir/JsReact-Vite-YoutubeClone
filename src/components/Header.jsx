import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 sticky">
      <Link to={'/'}>
      <div className="flex items-center">
        <img
          className="w-[110px]"
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
        />
        <h1 className="text-white text-3xl">YouTube</h1>
      </div>
      </Link>
      <form className="bg-white rounded">
        <input type="text" className="px-4 py-1 rounded text-black" />
        <button className="mr-2">
          <FiSearch className="text-black" />
        </button>
      </form>
      <FaBell className="mr-4" />
    </header>
  );
};

export default Header;
