export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 prose dark:prose-invert max-w-4xl">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you use our services. This includes:
            <ul>
              <li><strong>Personal Preferences:</strong> When you use our AI Itinerary Generator, we collect information about your destination, dates, budget, and interests to create a personalized plan.</li>
              <li><strong>Contact Information:</strong> When you contact us or book a service, we may collect your name, email address, and phone number.</li>
            </ul>
          </p>
          
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
            <ul>
                <li>Provide, maintain, and improve our services, including the AI Itinerary Generator.</li>
                <li>Communicate with you about products, services, offers, and events.</li>
                <li>Respond to your comments, questions, and requests.</li>
            </ul>
          </p>

          <h2>3. Data Storage and AI Processing</h2>
          <p>
            The information you provide to the AI Itinerary Generator is processed by our AI models to generate your travel plan. We may store anonymized data to improve our AI models and services. We do not sell your personal information to third parties.
          </p>
          
          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2>5. Your Choices</h2>
          <p>
            You may update, correct or delete information about you at any time by contacting us. Please note that we may retain certain information as required by law or for legitimate business purposes.
          </p>
          
          <h2>6. Changes to this Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
