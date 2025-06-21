import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-700 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              Email: <Link href="mailto:vishwakarmabrothers17@gmail.com" className="text-blue-600 hover:underline">vishwakarmabrothers17@gmail.com</Link>
            </p>
            <p className="mb-2">
              Phone: <Link href="tel:+917489789842" className="text-blue-600 hover:underline">+91 7489789842</Link>
            </p>
            <p>Address: Patel Nagar, Chhindwara, Madhya Pradesh</p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              At Breggo Electricals, we're revolutionizing lighting with high-quality, energy-efficient LED solutions for homes, businesses, and beyond.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <p className="text-gray-600">
              Choose us for premium LED lighting, unmatched quality, eco-consciousness, and superior performance. Illuminate your world with confidence.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Social & Info */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-6">
            <Link href="#"><img src="/facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-75" /></Link>
            <Link href="#"><img src="/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-75" /></Link>
            <Link href="https://www.instagram.com/breggo_electricals/"><img src="/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-75" /></Link>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:underline" href="/t&c">Terms of Service</Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom with Aetherix Logo */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
          <p>&copy; 2025 Breggo Electricals. All rights reserved.</p>
          <div className="flex items-center space-x-3">
            <span>Designed & Developed by</span>
            <Link href="https://aetherixtechnologies.netlify.app" className="flex items-center space-x-2 hover:underline">
              <img src="/Company.jpg" alt="Aetherix Technologies Logo" className="h-6 w-6 rounded" />
              <span className="text-md font-semibold text-gray-800">Aetherix Technologies</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
