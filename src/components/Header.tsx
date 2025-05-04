const Header = () => (
<header className="w-full bg-black text-white p-4">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
