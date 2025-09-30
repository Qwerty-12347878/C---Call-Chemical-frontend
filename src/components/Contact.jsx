// src/components/Contact.jsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.5 } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    company: "", 
    subject: "", 
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Phone", 
      details: "+1 (555) 123-4567", 
      subDetails: "Mon–Fri 8AM–6PM" 
    },
    { 
      icon: Mail, 
      title: "Email", 
      details: "info@ccallchemical.com", 
      subDetails: "sales@ccallchemical.com" 
    },
    { 
      icon: MapPin, 
      title: "Address", 
      details: "123 Industrial Avenue", 
      subDetails: "City, State 12345" 
    },
    { 
      icon: Clock, 
      title: "Business Hours", 
      details: "Mon–Fri 8AM–6PM", 
      subDetails: "Saturday 9AM–2PM" 
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus("success");
      setFormData({
        name: "", 
        email: "", 
        phone: "", 
        company: "", 
        subject: "", 
        message: ""
      });
      
      // Auto clear success message
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your chemical and tile needs? Contact us today for expert advice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
                custom={index}
                className="flex items-start space-x-4 p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-1">
                    {item.details}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {item.subDetails}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              variants={fadeUp}
              className="h-64 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center"
            >
              <div className="text-center text-gray-400">
                <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Interactive Map Coming Soon</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-green-300 font-medium">Message sent successfully!</p>
                  <p className="text-green-400/80 text-sm">We'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-red-300 font-medium">Error sending message</p>
                  <p className="text-red-400/80 text-sm">Please try again.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? "border-red-500" : "border-gray-600 hover:border-gray-500"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-600 hover:border-gray-500"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Phone and Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? "border-red-500" : "border-gray-600 hover:border-gray-500"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-red-400 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block mb-2 text-gray-300 font-medium">
                    Company (Optional)
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={fadeUp}>
                <label className="block mb-2 text-gray-300 font-medium">
                  Subject *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.subject ? "border-red-500" : "border-gray-600 hover:border-gray-500"
                    }`}
                  />
                </div>
                {errors.subject && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.subject}
                  </p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <label className="block mb-2 text-gray-300 font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your requirements..."
                  className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.message ? "border-red-500" : "border-gray-600 hover:border-gray-500"
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={fadeUp}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <motion.div
              variants={fadeUp}
              className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
              <div className="flex items-center justify-center space-x-2 text-blue-300">
                <Clock className="h-4 w-4" />
                <p className="text-sm">We typically respond within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
