
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
import { ArrowRight, Fire } from "lucide-react";

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

  // Fire animation effect
  const [fireIntensity, setFireIntensity] = useState(0.7);
  
  useEffect(() => {
    const fireInterval = setInterval(() => {
      setFireIntensity(prev => 0.6 + Math.random() * 0.4);
    }, 150);
    
    return () => clearInterval(fireInterval);
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
                    <div className="absolute inset-0">
                      <img 
                        src="public/lovable-uploads/74e7fe0d-88f0-4427-8800-67779dcefa8e.png" 
                        alt="Adebayo Toheeb - Software Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Burning Fire Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-600/40 mix-blend-overlay"></div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1/3"
                      style={{
                        background: `linear-gradient(to top, rgba(255,69,0,0.7), transparent)`,
                        opacity: fireIntensity
                      }}
                    >
                      {/* Animated Fire Particles */}
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute bottom-0 rounded-full bg-orange-500"
                          style={{
                            left: `${15 + Math.random() * 70}%`,
                            width: `${10 + Math.random() * 20}px`,
                            height: `${30 + Math.random() * 50}px`,
                            opacity: 0.6 + Math.random() * 0.4,
                            animation: `flames ${1 + Math.random()}s ease-in-out infinite alternate`,
                            filter: 'blur(4px)',
                            transform: `scale(${0.8 + fireIntensity * 0.4})`
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center">
                      <div className="p-8 md:p-12 bg-gradient-to-r from-black/70 to-transparent rounded-r-xl">
                        <div className="flex items-center mb-2">
                          <Fire className="h-6 w-6 text-orange-500 mr-2 animate-pulse" style={{filter: 'drop-shadow(0 0 5px rgba(255,165,0,0.7))'}} />
                          <span className="text-orange-300 font-semibold">Igniting Innovation</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                          Adebayo Toheeb
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-2">
                          Software Developer
                        </p>
                        <p className="text-sm md:text-base text-white/70">
                          Transforming ideas into elegant solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-xl shadow-xl">
                    <div className="absolute inset-0">
                      <img 
                        src="public/lovable-uploads/4140d4ff-5038-49ec-a97e-4790115a0ea0.png" 
                        alt="Chakin Kim - AI Software Engineer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                      <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                          Chakin Kim
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-2">
                          AI Software Engineer
                        </p>
                        <p className="text-sm md:text-base text-white/70">
                          Pioneering intelligent solutions
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

      {/* Developer Story Section */}
      <section id="story" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`inline-block p-2 mb-4 rounded-full ${isBlinking ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-transparent'} transition-colors duration-300`}>
              <span className="inline-block text-lg font-medium px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">Developer Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600" data-animate>
              The Journey of Innovation
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 p-8 md:p-10 rounded-xl shadow-lg backdrop-blur-sm" data-animate>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-full border-4 border-orange-500/50 shadow-lg">
                <img 
                  src="public/lovable-uploads/74e7fe0d-88f0-4427-8800-67779dcefa8e.png" 
                  alt="Adebayo Toheeb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Adebayo Toheeb</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Software Developer</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${isBlinking ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300'} transition-colors duration-300`}>
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Available for Projects
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h4 className="text-xl font-semibold mb-4">The Spark of Creation</h4>
              <p className="mb-6">
                Adebayo Toheeb's journey into software development began with a simple curiosity about how digital experiences are created. What started as tinkering with code soon blossomed into a passionate pursuit of technological excellence.
              </p>
              
              <p className="mb-6">
                Based in Lagos, Nigeria, Adebayo quickly distinguished himself through his unique approach to problem-solving and his commitment to creating elegant, efficient solutions. His methodology combines technical expertise with a deep understanding of user needs, resulting in applications that are both powerful and intuitive.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Transforming Challenges into Opportunities</h4>
              <p className="mb-6">
                Throughout his career, Adebayo has embraced complex challenges as opportunities for innovation. His portfolio showcases a diverse range of projects, from responsive web applications to sophisticated software systems, each demonstrating his versatility and technical prowess.
              </p>
              
              <p className="mb-6">
                What sets Adebayo apart is not just his coding skills, but his vision for how technology can enhance human experiences. He approaches each project with a commitment to excellence and an eye for detail that transforms good ideas into exceptional digital products.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Looking to the Future</h4>
              <p>
                Today, Adebayo continues to push the boundaries of what's possible in software development. Whether he's crafting interactive user interfaces, optimizing backend systems, or exploring emerging technologies, his work is characterized by innovation, quality, and a genuine desire to make a positive impact through code.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" asChild>
                <Link to="/contact" className="group">
                  Connect with Adebayo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-indigo-950 dark:to-gray-900">
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
