import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Terms of Service | Mediterranean Aura",
  description: "Terms of Service for Mediterranean Aura luxury massage and wellness services.",
};

export default function TermsOfService() {
  return (
    <main className="relative min-h-screen bg-secondary flex flex-col">
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        <SectionTitle title="TERMS OF SERVICE" className="mb-12" />
        <div className="flex flex-col gap-4 font-apercu text-primary/80 leading-relaxed text-[0.9rem] md:text-base">
          <p className="mb-6 opacity-70 uppercase tracking-widest text-xs">Last Updated: March 2026</p>
          
          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">1. Acceptance of Terms</h2>
          <p className="mb-4">By booking or using the services provided by Mediterranean Aura (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">2. Services Information</h2>
          <p className="mb-4">Mediterranean Aura provides luxury wellness and massage experiences at your chosen villa or location. All services are subject to availability and prior booking. We reserve the right to modify or discontinue any service with appropriate notice.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">3. Booking and Cancellation</h2>
          <p className="mb-4">Bookings must be confirmed in advance. Cancellations made less than 24 hours before the scheduled appointment may be subject to a cancellation fee. We reserve the right to refuse service in cases of inappropriate behavior, unsafe environments, or any violation of our safety policies.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">4. Health and Liability</h2>
          <p className="mb-4">Clients are required to disclose any relevant medical conditions, allergies, or injuries prior to their session. Mediterranean Aura and its therapists are not liable for any adverse reactions or injuries arising from undisclosed health conditions.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">5. Website Use and Cookies</h2>
          <p className="mb-4">Our website may use cookies and analytics technologies to improve user experience and understand website performance. Analytics tools are activated only after consent is provided through our cookie banner. Please review our Privacy Policy for details about data processing and your choices.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">6. Contact</h2>
          <p className="mb-4">If you have any questions about these Terms, please contact us at info@mediterraneanaura.com or call us at +30 694 745 9658.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
