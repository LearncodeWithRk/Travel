export default function TermsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 prose dark:prose-invert max-w-4xl">
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to RoamFree! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our service, you agree to be bound by these Terms.
          </p>
          
          <h2>2. AI-Powered Services</h2>
          <p>
            Our itinerary generator uses artificial intelligence to create personalized travel plans. While we strive for accuracy, the generated content is for informational purposes only. You are responsible for verifying all details, such as opening hours, travel restrictions, and booking availability. RoamFree is not liable for any inaccuracies or issues arising from the use of the generated itinerary.
          </p>

          <h2>3. Bookings and Payments</h2>
          <p>
            When you book a package or service through RoamFree, you agree to the terms and conditions of the third-party providers (e.g., airlines, hotels). All payments are subject to their policies. We act as an intermediary and are not responsible for the services provided by these third parties.
          </p>
          
          <h2>4. User Conduct</h2>
          <p>
            You agree not to use our services for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You agree not to misuse our AI services by generating inappropriate or malicious content.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall RoamFree, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
          
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us through our contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
