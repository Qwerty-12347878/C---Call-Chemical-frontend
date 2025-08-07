import React from 'react'
import { 
  Beaker, 
  Palette, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
  ArrowUp
} from 'lucide-react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Industrial Chemicals', href: '#products' },
      { name: 'Laboratory Reagents', href: '#products' },
      { name: 'Safety Chemicals', href: '#products' },
      { name: 'Ceramic Tiles', href: '#products' },
      { name: 'Porcelain Tiles', href: '#products' },
      { name: 'Premium Collection', href: '#products' }
    ],
    services: [
      { name: 'Bulk Supply', href: '#services' },
      { name: 'Custom Solutions', href: '#services' },
      { name: 'Technical Support', href: '#contact' },
      { name: 'Installation Guide', href: '#services' },
      { name: 'Quality Testing', href: '#services' },
      { name: 'Emergency Support', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'Quality Policy', href: '#about' },
      { name: 'Safety Standards', href: '#about' },
      { name: 'Certifications', href: '#about' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#contact' },
      { name: 'Technical Docs', href: '#services' },
      { name: 'Safety Sheets', href: '#services' },
      { name: 'Installation Guide', href: '#services' },
      { name: 'Returns Policy', href: '#contact' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' }
  ]

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            {/* Logo */}
            <motion.div 
              variants={scaleIn}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="flex items-center space-x-2 p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <Beaker className="h-8 w-8 text-blue-400" />
                <Palette className="h-6 w-6 text-purple-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  C-Call
                </span>
                <span className="text-sm text-blue-400 font-medium -mt-1">
                  Chemical & TILES
                </span>
              </div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 mb-8 leading-relaxed text-lg"
            >
              Your trusted partner for premium chemicals and tiles. We deliver 
              quality products with expert service, ensuring safety and satisfaction 
              in every project.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {[
                { icon: Phone, text: "+1 (555) 123-4567", color: "text-green-400" },
                { icon: Mail, text: "info@ccallchemical.com", color: "text-blue-400" },
                { icon: MapPin, text: "123 Industrial Avenue\nBusiness District, City 12345", color: "text-purple-400" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="flex items-start space-x-4 group cursor-pointer hover:transform hover:translate-x-2 transition-all duration-300"
                >
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors duration-300">
                    <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-pre-line">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeInUp} custom={1}>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              <span className="relative z-10">Products</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {footerLinks.products.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUp}
                  custom={index * 0.1}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-left group flex items-center space-x-2 hover:transform hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} custom={2}>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              <span className="relative z-10">Services</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUp}
                  custom={index * 0.1}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-green-400 transition-all duration-300 text-left group flex items-center space-x-2 hover:transform hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-green-400 transition-colors duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} custom={3}>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              <span className="relative z-10">Company</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
            </h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUp}
                  custom={index * 0.1}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-left group flex items-center space-x-2 hover:transform hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp} custom={4}>
            <h3 className="text-xl font-bold mb-8 text-white relative">
              <span className="relative z-10">Support</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={fadeInUp}
                  custom={index * 0.1}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-left group flex items-center space-x-2 hover:transform hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-orange-400 transition-colors duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-gray-800/50"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-lg">
                Subscribe to our newsletter for the latest products, safety updates, and industry news.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600/50"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Subscribe</span>
                <ExternalLink className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 bg-gray-950/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
          >
            {/* Copyright */}
            <motion.div 
              variants={fadeInUp}
              className="text-gray-400 text-center lg:text-left"
            >
              <p className="text-lg">
                © {currentYear} <span className="font-semibold text-white">C-Call Chemical & TILES</span>. 
                All rights reserved.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center space-x-8"
            >
              <span className="text-gray-400 font-medium">Follow us:</span>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLinkClick(social.href)}
                    className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Legal Links */}
            <motion.div 
              variants={fadeInUp}
              className="flex space-x-8 text-sm"
            >
              {['Privacy Policy', 'Terms of Service'].map((text, index) => (
                <button
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {text}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  )
}

export default Footer
