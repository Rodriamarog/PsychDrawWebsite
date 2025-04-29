import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-200px)]"> {/* Adjust min-h based on header/footer */}
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-4">
          <strong>Last updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <p>
          Welcome to PsychDraw! We are committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use our application. Please read this
          privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not
          access the application.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect via the
          Application depends on the content and materials you use, and includes:
        </p>
        <ul>
          <li>Personal Data (e.g., name, email address provided during registration)</li>
          <li>Derivative Data (e.g., IP address, browser type)</li>
          <li>Data from third-party services (e.g., Google authentication)</li>
          <li>Mobile Device Data (if applicable)</li>
          <li>Client Data (e.g., uploaded drawings, analysis reports - address security and confidentiality specific to your use case)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Use of Your Information</h2>
        <p>
          Having accurate information permits us to provide you with a smooth, efficient, and customized
          experience. Specifically, we may use information collected about you via the Application to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Provide the core functionality of the app (drawing analysis, reporting).</li>
          <li>Email you regarding your account or order.</li>
          <li>Improve the application and user experience.</li>
          <li>Comply with legal obligations.</li>
          {/* Add other specific uses */}
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be
          disclosed as follows:
        </p>
        <ul>
          <li>By Law or to Protect Rights</li>
          <li>Third-Party Service Providers (e.g., hosting, AI analysis provider, payment processor - be specific and ensure compliance)</li>
          <li>Business Transfers</li>
          {/* Add others as needed */}
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware
          that despite our efforts, no security measures are perfect or impenetrable, and no method of data
          transmission can be guaranteed against any interception or other type of misuse.
          {/* Add specifics about data encryption, access controls, HIPAA compliance if applicable */}
        </p>

        {/* Add sections on: Cookies, Data Retention, User Rights (Access, Correction, Deletion), Children's Privacy, Contact Information */}

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at: rodriamarog@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage; 