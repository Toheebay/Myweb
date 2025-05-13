
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-purple-100 to-white dark:from-purple-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 animate-fade-in stagger-delay-1">
              Reach out to us with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-animate>
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Address</h3>
                    <address className="not-italic text-gray-700 dark:text-gray-300">
                      Block 331 Jakande Estate<br />
                      Lagos, Nigeria
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Email</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a href="mailto:adebayoajani23@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        adebayoajani23@gmail.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <a href="tel:+2347067412852" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        +234 706 741 2852
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Hours</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
                
                {/* Nigeria Map */}
                <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                    alt="Nigeria Map" 
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
              
              <Card data-animate className="border-purple-200 dark:border-purple-900">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-purple-700 dark:text-purple-400">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : "border-purple-200 dark:border-purple-900 focus:border-purple-500 focus:ring-purple-500"}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-purple-700 dark:text-purple-400">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : "border-purple-200 dark:border-purple-900 focus:border-purple-500 focus:ring-purple-500"}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-purple-700 dark:text-purple-400">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-red-500" : "border-purple-200 dark:border-purple-900 focus:border-purple-500 focus:ring-purple-500"}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-purple-700 dark:text-purple-400">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : "border-purple-200 dark:border-purple-900 focus:border-purple-500 focus:ring-purple-500"}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
