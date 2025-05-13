
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    // Initialize Intersection Observer to animate elements when they enter viewport
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.target.id) {
            setActiveSection(entry.target.id);
          }
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
  
  // Blinking light effect
  const [isBlinking, setIsBlinking] = useState(false);
  
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 1500);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-fuchsia-100 to-cyan-100 dark:from-indigo-950 dark:to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-5xl mx-auto mb-12">
            {/* Blinking Light Indicator */}
            <div className={`absolute -top-4 -right-4 md:-top-6 md:-right-6 w-6 h-6 md:w-8 md:h-8 rounded-full ${isBlinking ? 'bg-yellow-400' : 'bg-transparent'} shadow-lg shadow-yellow-300/50 transition-all duration-300`}></div>
            
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                      alt="Starry night" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                          Modern Interactive Design
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-6">
                          Discover our exceptional features
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                      alt="Modern interior" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                          Responsive Excellence
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-6">
                          Beautiful on every device
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                      alt="Yellow lights" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                          Inspiring Innovation
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-6">
                          Creating memorable experiences
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none p-4">
                <CarouselPrevious className="pointer-events-auto" />
                <CarouselNext className="pointer-events-auto" />
              </div>
            </Carousel>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Welcome to Our Modern Website
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in stagger-delay-1">
              A beautifully crafted website with semantic HTML5, responsive design, and interactive features.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in stagger-delay-2">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                <Link to="/about" className="group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950/50" asChild>
                <Link to="/contact" className="group">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-block p-2 mb-4 rounded-full ${isBlinking ? 'bg-pink-100 dark:bg-pink-900/30' : 'bg-transparent'} transition-colors duration-300`}>
              <span className="inline-block text-lg font-medium px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">Premium Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600" data-animate>
              What Makes Us Unique
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto" data-animate>
              Discover what makes our website stand out from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Responsive Design",
                description: "Our website looks great on all devices, from desktops to smartphones.",
                color: "from-pink-500 to-rose-500"
              },
              {
                title: "Modern Interface",
                description: "Clean, intuitive design with smooth animations and interactions.",
                color: "from-violet-500 to-purple-500"
              },
              {
                title: "Semantic HTML5",
                description: "Built with accessibility and SEO best practices in mind.",
                color: "from-blue-500 to-indigo-500"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${activeSection === 'features' ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-animate
              >
                <div className={`w-14 h-14 mb-6 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section id="cta" className={`py-20 md:py-32 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden ${activeSection === 'cta' ? 'animate-fade-in' : ''}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_40%)] blur-xl"></div>
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full ${isBlinking ? 'opacity-70' : 'opacity-40'} transition-opacity duration-1000 animate-pulse`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}rem`,
                height: `${Math.random() * 10 + 5}rem`,
                background: 'rgba(255, 255, 255, 0.1)',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 4 + 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto" data-animate>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join us today and experience the difference for yourself.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link to="/contact" className="group">
                Contact Us <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
