"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Calendar, Code, FolderOpen, Github, Globe, Lightbulb, Linkedin, Mail, MessageSquare, Palette, Smartphone, Sparkles, TrendingUp, User, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Idan Zeidman"
          button={{
            text: "Contact Me",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Idan Zeidman"
          description="Full-stack developer & UI designer creating exceptional digital experiences with modern web technologies"
          tag="Portfolio"
          tagIcon={User}
          imageSrc="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Two male developers at desks programming in a modern office workspace with large monitors."
          buttons={[
            {
              text: "View My Work",
              href: "feature"
            },
            {
              text: "Get In Touch",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Me"
          description="Passionate developer with expertise in modern web technologies, creating user-centered solutions that drive business growth"
          tag="Who I Am"
          tagIcon={Sparkles}
          imageSrc="https://images.pexels.com/photos/4580147/pexels-photo-4580147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A young man wearing a mask works at a home office with a laptop during the pandemic."
          imagePosition="right"
          bulletPoints={[
            {
              title: "Full-Stack Development",
              description: "Expert in React, Node.js, and modern web frameworks",
              icon: Code
            },
            {
              title: "UI/UX Design",
              description: "Creating intuitive and beautiful user interfaces",
              icon: Palette
            },
            {
              title: "Problem Solving",
              description: "Analytical approach to complex technical challenges",
              icon: Lightbulb
            }
          ]}
          buttons={[
            {
              text: "Download CV",
              href: "https://linkedin.com/in/idanzeidman"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Skills & Expertise"
          description="Technical skills and areas of specialization that I bring to every project"
          tag="What I Do"
          tagIcon={Zap}
          features={[
            {
              title: "Web Development",
              description: "Building responsive, scalable web applications using React, Next.js, and modern JavaScript frameworks",
              icon: Globe,
              button: {
                text: "Learn More",
                href: "https://github.com/idanzeidman"
              }
            },
            {
              title: "UI/UX Design",
              description: "Designing user-centered interfaces with focus on usability, accessibility, and visual appeal",
              icon: Palette,
              button: {
                text: "View Designs",
                href: "https://dribbble.com/idanzeidman"
              }
            },
            {
              title: "Mobile Development",
              description: "Creating cross-platform mobile applications with React Native and Flutter",
              icon: Smartphone,
              button: {
                text: "See Projects",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Portfolio Highlights"
          description="Key achievements and project statistics from my development career"
          tag="By The Numbers"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: FolderOpen,
              title: "Projects",
              value: "25+"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Clients",
              value: "15+"
            },
            {
              id: "3",
              icon: Calendar,
              title: "Years Experience",
              value: "3+"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Client Testimonials"
          description="What clients say about working with me"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Product Manager",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of a confident businesswoman standing with arms crossed in modern office space."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "Digital Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8382073/pexels-photo-8382073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Focused businessman in a suit engaged in a serious discussion indoors with dramatic lighting."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Startup Founder",
              company: "InnovateLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9301461/pexels-photo-9301461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A cheerful young man in a white shirt smiling at his desk in a modern office environment."
            },
            {
              id: "4",
              name: "David Kim",
              role: "CEO",
              company: "Growth Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5990037/pexels-photo-5990037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A multicultural team engaged in a meeting around a conference table with laptops."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear from you. Let's discuss how we can bring your ideas to life."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company (Optional)",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your project...",
            rows: 5,
            required: true
          }}
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Idan Zeidman"
          copyrightText="© 2025 Idan Zeidman. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Web Development",
                  href: "feature"
                },
                {
                  label: "UI/UX Design",
                  href: "feature"
                },
                {
                  label: "Mobile Apps",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "My Story",
                  href: "about"
                },
                {
                  label: "Skills",
                  href: "feature"
                },
                {
                  label: "Portfolio",
                  href: "metric"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Github,
              href: "https://github.com/idanzeidman",
              ariaLabel: "GitHub Profile"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/idanzeidman",
              ariaLabel: "LinkedIn Profile"
            },
            {
              icon: Mail,
              href: "mailto:idan@example.com",
              ariaLabel: "Email Contact"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}