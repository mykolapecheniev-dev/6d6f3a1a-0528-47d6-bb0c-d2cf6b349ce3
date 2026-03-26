"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Collection", id: "products" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Chita"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "gradient-bars" }}
      title="Chita Flowers Studio"
      description="Artisan floral arrangements crafted with love, nature, and elegance for your special moments."
      buttons={[{ text: "View Collection", href: "#products" }]}
      mediaItems={[
        { imageSrc: "https://pixabay.com/get/g09e0cf623dbe6940b1fe77ce435cf1661ceaaffa28bd2fb0c90052d63af21da2b9be024c16043c7d237786ff6c54fcbf5f291fd7b830217ddd59ea091b123746_1280.jpg", imageAlt: "Luxury Bouquet" },
        { imageSrc: "https://pixabay.com/get/gaa79bc34a46510d2fbe5b0da0735f28a142c90d13f7a2e14c9ae4b76aedd1094ccab18a15b9030e38a21d0402e5c467342a5b6c33a6c8291328608e80aaef60d_1280.jpg", imageAlt: "Floral Design" },
        { imageSrc: "https://pixabay.com/get/g9b720a5ae8ba02a309ed1360ac807d512493e3a9a48e4bb98211c7f3c89fc20d2fa0f7b1791b21ec7287fd123ba68935665d64c2dd48dce59e14c645bcb35a68_1280.jpg", imageAlt: "Studio Setting" },
        { imageSrc: "https://pixabay.com/get/g213dbc4d458ea83c0d75834ab8d21003390cbefa6587021781b6f0154db113bb2f1b13a6fb46bef0865731596bb555e2977846e74c11bb4935fba4d9fc7bb148_1280.jpg", imageAlt: "Bouquet Details" },
        { imageSrc: "https://pixabay.com/get/g3192a70f1728c22b49cb723aeaad2e8102beafa3cd8b158acf1860446f7347e09274ea89f7367ac76e1c2dba787b56a74903349d5905ef3282a96237eed3a9e5_1280.jpg", imageAlt: "Flower Varieties" },
        { imageSrc: "https://pixabay.com/get/gcd8785b7b43d1ca9c2999cd1e8f8d167b68caf23042aeb0187d454a92aa85cef87753d69f59c1199559c8e355fab13920009e2108465f6f38ba0958d11cc6b13_1280.jpg", imageAlt: "Petal Texture" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Nature's beauty, " },
        { type: "image", src: "https://pixabay.com/get/g32fe7065ba8504b5aa804c0051280294edd19f9c396d8463163b518f90d2717d5cc62b0e3514d222f664fc1ab939cf78b2a1d586bb9ba03d722c9bc710362446_1280.jpg", alt: "Studio flowers" },
        { type: "text", content: " crafted by hand." },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Eternal Roses", price: "$85", imageSrc: "https://pixabay.com/get/g763bbb968761ad6bbafdaf6bbe5c40e97f5a40ba6e7284117bd734313f0c72eb738bfc9b559d71cd6f7682806200e169b222b46fbea6b6aed2bc05feb588586c_1280.jpg" },
        { id: "p2", name: "Spring Harmony", price: "$65", imageSrc: "https://pixabay.com/get/gcd7293c303974bf43392f55046edefac6e63b0a7dbe5144ad5d71ec43f8d0447d5d92319c717b295d5be12004e9481be861f5402d47ebd755a553e51549292bf_1280.jpg" },
        { id: "p3", name: "Exotic Orchids", price: "$120", imageSrc: "https://pixabay.com/get/g910663d1774b51916a65d09e14beca8aa98bf8d3888e836427161dad07981a8c6ca0a2d3bf8d80683543993f6fb091bb9c9aa9c36d09a31f83b7c1d1446a5ca7_1280.jpg" },
      ]}
      title="Our Signature Arrangements"
      description="Each bouquet is a unique story told through delicate petals and vibrant greens."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      animationType="blur-reveal"
      testimonials={[
        {
          id: "1",          name: "Elena R.",          handle: "@elena_r",          testimonial: "Chita creates the most magical arrangements. Always fresh and so artistic.",          imageSrc: "https://pixabay.com/get/g1de641f045ffd6e2c9e5bbbfc124bef5819016d8c1864baa2c58c07856e4633de8ab33d0b7d60fb10d7e6a9cb806448ea5ee20e94cec28ba040b9a8e10d40f1c_1280.jpg"},
        {
          id: "2",          name: "Mark S.",          handle: "@marks",          testimonial: "Perfect bouquets every single time. My wife loved them.",          imageSrc: "https://pixabay.com/get/g5855e6dd31832cc4de8725ef01ec5410d9fc543f5bb81555a11f3d3257dbe047a4bf60ca4a62e4a0ab5f44d17ebd24e45223c9e6b056f062d646a642c976a17c_1280.jpg"},
        {
          id: "3",          name: "Sarah L.",          handle: "@sarahl",          testimonial: "The attention to detail in their floral designs is absolutely unmatched.",          imageSrc: "https://pixabay.com/get/gbb3378e8cb28e538ebb9a8b4117aa86133f505e4355c2987eb87f35ff6a45b590773400aa36acf3a2a6c5f7a09da2775f41937e8e84b1c1ad3e41bda8535b201_1280.jpg"},
        {
          id: "4",          name: "David K.",          handle: "@dk_flo",          testimonial: "Simply beautiful art in floral form. Highly recommend.",          imageSrc: "https://pixabay.com/get/gd70551a9afe6e9f053f590bd1161874fc3905c552fc14cf43dc9fd8ff870553069b3fcbceb9011c03903158215a93839f6539c58b8e62c7c2007bcc99e2f3e58_1280.jpg"},
      ]}
      title="Words of Love"
      description="Discover why our clients choose Chita for their most precious floral needs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Let's Connect"
      title="Bring beauty to your space."
      description="Whether it's an event or a simple gift, we're here to help you choose the perfect flowers."
      buttons={[{ text: "Contact Us", href: "mailto:hello@chita.studio" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Chita Studio",          items: [
            { label: "About Us", href: "#about" },
            { label: "Portfolio", href: "#products" },
            { label: "Reviews", href: "#testimonials" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "FAQ", href: "#" },
            { label: "Shipping Info", href: "#" },
            { label: "Privacy Policy", href: "#" },
          ],
        },
      ]}
      bottomLeftText="© 2024 Chita Flowers Studio"
      bottomRightText="Crafted with passion."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}