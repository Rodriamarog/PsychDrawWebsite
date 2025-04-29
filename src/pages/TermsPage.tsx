import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-200px)]"> {/* Adjust min-h based on header/footer */}
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose lg:prose-xl max-w-none">
        <p className="text-lg mb-4">
          <strong>Last updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the PsychDraw
          application (the "Service") operated by [Your Company Name] ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these
          Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part
          of the terms then you may not access the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Accounts</h2>
        <p>
          When you create an account with us, you must provide us information that is accurate, complete, and
          current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
          termination of your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any
          activities or actions under your password, whether your password is with our Service or a third-party
          service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Subscriptions & Payments</h2>
        <p>
          Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in
          advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly
          or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
          {/* Detail payment terms, renewal, cancellation, refund policy (or lack thereof) */}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by users), features and functionality are
          and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected
          by copyright, trademark, and other laws of both the [Your Country] and foreign countries.
          {/* Clarify ownership of user-generated content like drawings and AI reports */}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">User Content (Drawings & Reports)</h2>
        <p>
          Our Service allows you to upload, store, process, and generate content, including drawings and analysis reports
          ("User Content"). You retain ownership of your User Content. However, by using the Service, you grant us
          a license to use, process, and store your User Content as necessary to provide and improve the Service.
          {/* Be VERY specific here, especially regarding data usage for AI model training, anonymity, etc. Needs legal review. */}
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Disclaimer (Very Important)</h2>
        <p>
          The AI-generated insights and reports provided by PsychDraw are intended for informational purposes only and
          as a supplementary tool for qualified clinical professionals. They do **NOT** constitute medical advice,
          diagnosis, or treatment recommendations. The analysis is based on algorithms and patterns and may not be
          accurate or applicable in all cases. Clinical judgment by a qualified professional is paramount. We make
          no warranties regarding the accuracy, completeness, or reliability of the AI analysis.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Limitation Of Liability</h2>
        <p>
          In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or
          affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from...
          {/* Consult lawyer for appropriate clauses */}
        </p>

        {/* Add sections on: Termination, Governing Law, Changes to Terms, Contact Information */}

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at: rodriamarog@gmail.com
        </p>
      </div>
    </div>
  );
};

export default TermsPage; 