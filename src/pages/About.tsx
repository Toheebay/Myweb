
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Initialize Intersection Observer for animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in stagger-delay-1">
              Learn more about our company and our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate>
              <div className="aspect-video bg-secondary rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" data-animate>Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p data-animate>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultrices aliquam, nunc nisl aliquet nunc, 
                  vitae aliquam nisl nunc eu nisi. Sed euismod, nisl nec ultrices aliquam, nunc nisl aliquet nunc.
                </p>
                <p data-animate>
                  Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
                  Nulla quis lorem ut libero malesuada feugiat.
                </p>
                <p data-animate>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
                  Cras ultricies ligula sed magna dictum porta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-animate>
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-animate>
              The principles that guide our work and company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly explore new ideas and technologies to stay ahead."
              },
              {
                title: "Quality",
                description: "We never compromise on the quality of our work and deliverables."
              },
              {
                title: "Integrity",
                description: "Honesty and transparency are at the core of everything we do."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and collective creativity."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-background p-6 rounded-lg shadow-sm"
                data-animate
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-animate>
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-animate>
              Meet the talented individuals who make our company great.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                position: "CEO & Founder",
              },
              {
                name: "John Smith",
                position: "CTO",
              },
              {
                name: "Emily Johnson",
                position: "Design Lead",
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="text-center"
                data-animate
              >
                <div className="w-40 h-40 bg-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto" data-animate>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's connect and discuss how we can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
