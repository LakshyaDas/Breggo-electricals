// pages/terms.tsx

import Head from 'next/head';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Terms and Conditions - Breggo Electricals</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions of Breggo Electricals</h1>
      <div className="bg-white rounded-lg shadow-md p-6 lg:w-3/4 lg:mx-auto">
        <p className="mb-8 text-lg">
          Welcome to Breggo Electricals. These terms and conditions outline the rules and regulations for the use of our website
          and services.
        </p>
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using our website and services, you agree to be bound by these terms and conditions. If you disagree with
          any part of these terms and conditions, you must not use our website or services.
        </p>
        <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
        <p className="mb-6">
          "Breggo Electricals", "we", "our", or "us" refers to the company providing the website and services. "You" or "user" refers
          to the individual accessing or using our website and services.
        </p>
        <h2 className="text-xl font-semibold mb-4">3. Intellectual Property Rights</h2>
        <p className="mb-6">
          The content, design, logos, trademarks, and other intellectual property displayed on our website are owned by Breggo
          Electricals and are protected by intellectual property laws. You may not use, reproduce, or distribute any content from
          our website without our prior written consent.
        </p>
        <h2 className="text-xl font-semibold mb-4">4. Use of Website</h2>
        <p className="mb-6">
          You agree to use our website and services only for lawful purposes and in accordance with these terms and conditions. You
          must not use our website in any way that could damage, disable, overburden, or impair our website or interfere with any
          other party's use of our website.
        </p>
        <h2 className="text-xl font-semibold mb-4">5. Product Information</h2>
        <p className="mb-6">
          We strive to provide accurate and up-to-date information about our products. However, we do not warrant the accuracy,
          completeness, or reliability of any product information on our website. Product prices and availability are subject to
          change without notice.
        </p>
        <h2 className="text-xl font-semibold mb-4">6. Privacy Policy</h2>
        <p className="mb-6">
          Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your
          personal information.
        </p>
        <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p className="mb-6">
          To the fullest extent permitted by law, Breggo Electricals shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising
          from your use of our website or services.
        </p>
        <h2 className="text-xl font-semibold mb-4">8. Indemnification</h2>
        <p className="mb-6">
          You agree to indemnify and hold harmless Breggo Electricals, its officers, directors, employees, agents, and affiliates
          from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way related to your
          breach of these terms and conditions or your use of our website or services.
        </p>
        <h2 className="text-xl font-semibold mb-4">9. Changes to Terms and Conditions</h2>
        <p className="mb-6">
          We reserve the right to modify or replace these terms and conditions at any time. Your continued use of our website and
          services after any such changes constitutes acceptance of the updated terms and conditions.
        </p>
        <h2 className="text-xl font-semibold mb-4">10. Governing Law</h2>
        <p className="mb-6">
          These terms and conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without
          regard to its conflict of law provisions.
        </p>
        <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
        <p className="mb-8">
          If you have any questions or concerns about these terms and conditions, please contact us.
        </p>
        <p className="text-sm text-gray-500">Effective Date: [Date]</p>
      </div>
    </div>
  );
};

export default TermsPage;
