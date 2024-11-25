import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-300 via-white bg-blend-screen  text-gray-700 py-8 border-t  border-gray-300">
      <div className="p-7 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Email: <Link href="mailto:vishwakarmabrothers17@gmail.com">BreggoElectricals@gmail.com</Link></p>
            <p>Phone: <Link href="tel:+91 7489789842">+91 7489789842</Link></p>
            <p>Address : Patel Nagar, Chhindwara ,Madhya Pradesh</p>
          </div>

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <p>At Breggo Electricals, we're revolutionizing lighting with high-quality, energy-efficient LED solutions for homes, businesses, and beyond.</p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Why Choose Us ?</h2>
            <p>Choose us for premium LED lighting solutions, unmatched quality, eco-consciousness, and superior performance. Illuminate your world with confidence.</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-10 ">
          <Link href="#">
            <img src="/facebook.svg" alt="Facebook" className="w-10 h-8 hover:shadow-xl" />
          </Link>
          <Link href="#">
            <img src="/twitter.svg" alt="Twitter" className="w-10 h-8 hover:shadow-xl" />
          </Link >
          <Link href="https://www.instagram.com/vb_leds?igsh=OTU3ZnRleGwyMHp2
">
            <img src="/instagram.svg" alt="Instagram" className="w-10 h-8 hover:shadow-xl" />
          </Link>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 flex justify-between items-center lg:p-12">
          <p>&copy; 2024 Breggo Electricals. All rights reserved.</p>
          <div className="flex space-x-4 ">
            <Link className='hover:font-semibold ' href="/privacy-policy">Privacy Policy</Link>
            <Link className='hover:font-semibold' href="/t&c">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
