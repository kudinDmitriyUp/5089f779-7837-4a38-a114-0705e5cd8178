"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { CheckCircle, Sparkles, Users, Mail, MapPin, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="glass-outline-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Labubi Collective"
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplitImage
          logoText="LABUBI"
          description="Discover rare and exclusive labubi collectibles. Each piece is unique, beautifully crafted, and designed for collectors who appreciate fine artistry and limited editions."
          buttons={[
            { text: "Browse Collection", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154629371-ydqho6ui.png"
          splitImageAlt="Featured labubi collectible figure"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154632964-kdqtn4ap.jpg"
          imageAlt="Labubi collection display"
          frameStyle="card"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Collection"
          description="Handpicked labubi designs curated for serious collectors"
          products={[
            {
              id: "1",
              brand: "Labubi Collective",
              name: "Midnight Dreamer",
              price: "$89.99",
              rating: 5,
              reviewCount: "234",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154630397-2e9tmo68.jpg",
              imageAlt: "Midnight Dreamer labubi figure"
            },
            {
              id: "2",
              brand: "Labubi Collective",
              name: "Celestial Wonder",
              price: "$99.99",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154631233-0x766zqt.jpg",
              imageAlt: "Celestial Wonder labubi figure"
            },
            {
              id: "3",
              brand: "Labubi Collective",
              name: "Emerald Forest",
              price: "$94.99",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154632106-qx4f0a5y.jpg",
              imageAlt: "Emerald Forest labubi figure"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Labubi"
          description="We are passionate about bringing authentic, limited-edition labubi collectibles to enthusiasts worldwide. Each figure is carefully selected to ensure quality and uniqueness."
          tag="Our Story"
          bulletPoints={[
            {
              title: "Authentic Designs",
              description: "Only genuine, officially licensed labubi collectibles in our collection",
              icon: CheckCircle
            },
            {
              title: "Limited Editions",
              description: "Exclusive releases and rare finds unavailable elsewhere",
              icon: Sparkles
            },
            {
              title: "Collector Community",
              description: "Join thousands of collectors sharing their passion",
              icon: Users
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154632964-kdqtn4ap.jpg"
          imageAlt="Labubi collectible display"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imagePosition="right"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The quality and authenticity of these labubi figures are unmatched. I've been collecting for years and this is the most reliable source I've found. Every piece exceeds expectations."
          rating={5}
          author="Maria Chen, Collector"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154634313-y5tjxwwi.jpg",
              alt: "Maria Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766152149165-8nddns07.jpg",
              alt: "John Smith"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154635301-vse33sxl.jpg",
              alt: "Sarah Williams"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766154636179-coolkx53.jpg",
              alt: "Michael Johnson"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our labubi collectibles"
          tag="Help"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "Are all labubes authentic?",
              content: "Yes, we only offer officially licensed labubi collectibles from authorized distributors. Each piece comes with authenticity verification."
            },
            {
              id: "2",
              title: "What is the shipping timeframe?",
              content: "Standard shipping takes 5-7 business days. We also offer expedited shipping options for urgent orders."
            },
            {
              id: "3",
              title: "Do you offer returns?",
              content: "We offer a 30-day return policy for unopened figures in original packaging. Opened collectibles may be exchanged for different designs."
            },
            {
              id: "4",
              title: "How often do you restock?",
              content: "New releases are added weekly. Subscribe to our newsletter for early access to limited editions and exclusive drops."
            },
            {
              id: "5",
              title: "Are there international shipping options?",
              content: "Yes, we ship worldwide with calculated shipping costs at checkout. Customs and duties are the buyer's responsibility."
            },
            {
              id: "6",
              title: "Can I pre-order upcoming releases?",
              content: "Absolutely! Pre-orders are available for upcoming releases. Early orders guarantee your piece when it becomes available."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated on New Releases"
          description="Subscribe to our newsletter for exclusive previews of upcoming labubi designs, special collector events, and member-only discounts."
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime from our mailing list."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Labubi Collective"
          title="Your trusted source for authentic labubi collectibles"
          columns={[
            {
              title: "Shop",
              items: [
                { label: "New Releases", href: "#products" },
                { label: "All Labubes", href: "#products" },
                { label: "Limited Editions", href: "#products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Shipping Info", href: "/shipping" }
              ]
            }
          ]}
          contactItems={[
            {
              icon: Mail,
              text: "support@labubi-collective.com"
            },
            {
              icon: MapPin,
              text: "Worldwide Shipping Available"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}