// pages/contact-us.tsx
import Link from 'next/link';
import MapImage from '../../public/map.jpg';

const ContactUsPage = () => {
  return (
    <div className=" min-h-screen">
     
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="flex flex-col-reverse md:flex-row items-center mb-8">
            <div className="md:w-1/2 md:mr-4">
              <h2 className="text-2xl font-semibold xs:mt-7 mb-4">Get in Touch</h2>
              <p className="text-lg leading-relaxed">
                Feel free to contact us for any inquiries or assistance. Our dedicated team is here to help you with all your lighting needs.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p>Patel Nagar, Chhindwara, 480001</p>
                <p>Madhya Pradesh , India </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p>+91 7489789842</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p>Email: <Link href="BreggoElectricals@gmail.com">BreggoElectricals@gmail.com</Link></p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={MapImage.src} alt="Map" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
