"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Github, Globe, Linkedin, Mail, Settings, Star, Twitter, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Business with Technology"
          description="We deliver cutting-edge IT solutions that drive growth, efficiency, and innovation for modern businesses"
          tag="IT Solutions"
          tagIcon={Zap}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Our Services", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We are a leading IT company dedicated to transforming businesses through innovative technology solutions that drive growth and success"
          buttons={[
            { text: "Learn More", href: "team" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Services"
          description="Comprehensive IT solutions tailored to meet your business needs and drive digital transformation"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Cloud Infrastructure",
              description: "Scalable cloud solutions that grow with your business, ensuring reliability and performance",
              imageSrc: "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Cybersecurity",
              description: "Advanced security measures to protect your data and systems from modern threats",
              imageSrc: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Mobile Development",
              description: "Custom mobile applications that deliver exceptional user experiences across all platforms",
              imageSrc: "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "AI Solutions",
              description: "Intelligent automation and machine learning solutions to optimize your operations",
              imageSrc: "https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced professionals dedicated to delivering exceptional IT solutions"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              description: "Former VP at Microsoft with 15+ years in enterprise technology solutions and digital transformation",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              description: "Lead architect with expertise in cloud infrastructure and AI systems, previously at Google and AWS",
              imageSrc: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Design Director",
              description: "UX/UI expert crafting intuitive digital experiences, former design lead at Apple and Airbnb",
              imageSrc: "https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://portfolio.com" }
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "Lead Developer",
              description: "Full-stack developer specializing in scalable applications, with experience at Netflix and Spotify",
              imageSrc: "https://images.pexels.com/photos/5474032/pexels-photo-5474032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Github, url: "https://github.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Trusted by leading companies worldwide for our innovative IT solutions"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Robert Martinez",
              role: "CTO",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Lisa Wang",
              role: "VP Technology",
              company: "GrowthLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3867837/pexels-photo-3867837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "James Thompson",
              role: "Founder",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Maria Garcia",
              role: "IT Director",
              company: "TechVentures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7793637/pexels-photo-7793637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Business?"
          description="Contact us today to discuss how our IT solutions can drive your business forward"
          inputPlaceholder="Enter your email address"
          buttonText="Get Quote"
          termsText="By submitting, you agree to receive communications about our services and solutions"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechFlow"
          columns={[
            {
              items: [
                { label: "Services", href: "feature" },
                { label: "Cloud Solutions", href: "feature" },
                { label: "Cybersecurity", href: "feature" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Support", href: "contact" },
                { label: "Testimonials", href: "testimonial" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}