import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Privacy Policy | Mediterranean Aura",
  description: "Privacy Policy for Mediterranean Aura luxury massage and wellness services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-secondary flex flex-col">
      <div className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
        <SectionTitle title="PRIVACY POLICY" className="mb-12" />
        <div className="flex flex-col gap-4 font-apercu text-primary/80 leading-relaxed text-[0.9rem] md:text-base">
          <p className="mb-6 opacity-70 uppercase tracking-widest text-xs">Last Updated: March 2026</p>
          
          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when you make a booking, contact us, or interact with our services. This may include your name, contact information, villa location, and relevant health information necessary for your safety during treatments.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, communicate with you regarding your bookings, and ensure your safety and comfort during sessions.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">3. Data Security and Sharing</h2>
          <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We do not sell or share your personal information with third parties for their marketing purposes.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">4. Your Rights</h2>
          <p className="mb-4">You may request access to, correction, or deletion of your personal information at any time. If you wish to exercise these rights, please contact us using the information provided below.</p>

          <h2 className="text-2xl md:text-3xl font-canela font-light text-primary mt-8 mb-2">5. Contact Us</h2>
          <p className="mb-4">For privacy-related inquiries, please reach out via email at info@mediterraneanaura.com or by phone at +30 694 745 9658.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
