
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Initialize Intersection Observer to animate elements when they enter viewport
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
              Welcome to Our Modern Website
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in stagger-delay-1">
              A beautifully crafted website with semantic HTML5, responsive design, and interactive features.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in stagger-delay-2">
              <Button size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-animate>
              Our Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-animate>
              Discover what makes our website stand out from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Responsive Design",
                description: "Our website looks great on all devices, from desktops to smartphones."
              },
              {
                title: "Modern Interface",
                description: "Clean, intuitive design with smooth animations and interactions."
              },
              {
                title: "Semantic HTML5",
                description: "Built with accessibility and SEO best practices in mind."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-secondary/50 p-8 rounded-lg"
                data-animate
              >
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 text-primary">
                  {/* Simple placeholder for an icon */}
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us today and experience the difference for yourself.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
