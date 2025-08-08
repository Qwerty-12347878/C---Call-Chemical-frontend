import React from 'react'
import { 
  Beaker, 
  Palette, 
  Shield, 
  Truck, 
  Users, 
  Award,
  Droplets,
  Grid3x3,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const chemicalServices = [
    {
      icon: Beaker,
      title: 'Industrial Chemicals',
      description: 'High-grade industrial chemicals for manufacturing and processing applications.',
      features: ['Acid & Alkalis', 'Solvents', 'Catalysts', 'Specialty Chemicals']
    },
    {
      icon: Droplets,
      title: 'Laboratory Reagents',
      description: 'Pure laboratory-grade chemicals for research and analytical applications.',
      features: ['Analytical Grade', 'HPLC Grade', 'Research Chemicals', 'Buffer Solutions']
    },
    {
      icon: Shield,
      title: 'Safety Chemicals',
      description: 'Safety and emergency response chemicals for workplace protection.',
      features: ['Spill Control', 'Fire Retardants', 'Neutralizers', 'Safety Kits']
    }
  ]

  const tileServices = [
    {
      icon: Palette,
      title: 'Ceramic',
      description: 'Premium ceramic  for residential and commercial spaces.',
      features: ['Floor ', 'Wall ', 'Designer Patterns', 'Custom Sizes']
    },
    {
      icon: Grid3x3,
      title: 'Porcelain ',
      description: 'Durable porcelain  with exceptional strength and beauty.',
      features: ['Large Format', 'Wood Look', 'Stone Look', 'Polished Finish']
    },
    {
      icon: Award,
      title: 'Premium Collection',
      description: 'Exclusive designer  for luxury projects and unique applications.',
      features: ['Imported ', 'Limited Edition', 'Custom Design', 'Premium Finish']
    }
  ]

  const additionalServices = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service across the region.'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Professional guidance from our experienced team.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and certified products.'
    }
  ]

  const ServiceCard = ({ service, isChemical = false, isPurple = false, isGreen = false }) => (
    <div className={`group relative bg-gray-800 rounded-2xl shadow-2xl transition-all duration-500 p-8 overflow-hidden transform hover:scale-105 hover:-translate-y-2 cursor-pointer border border-gray-700/50 ${
      isChemical 
        ? 'hover:shadow-blue-500/20 hover:border-blue-500/50' 
        : isPurple 
        ? 'hover:shadow-purple-500/20 hover:border-purple-500/50'
        : isGreen
        ? 'hover:shadow-green-500/20 hover:border-green-500/50'
        : 'hover:shadow-primary-500/20 hover:border-primary-500/50'
    }`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Glow Effect */}
      <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
        isChemical 
          ? 'bg-gradient-to-r from-blue-500 to-blue-700' 
          : isPurple 
          ? 'bg-gradient-to-r from-purple-500 to-purple-700'
          : isGreen
          ? 'bg-gradient-to-r from-green-500 to-green-700'
          : 'bg-gradient-to-r from-primary-500 to-purple-500'
      }`}></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
          isChemical 
            ? 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/25' 
            : isPurple
            ? 'bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg shadow-purple-500/25'
            : isGreen
            ? 'bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-500/25'
            : 'bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/25'
        }`}>
          <service.icon className="h-8 w-8 text-white" />
        </div>
        
        <h3 className={`text-2xl font-bold text-white mb-4 transition-colors duration-300 ${
          isChemical 
            ? 'group-hover:text-blue-300' 
            : isPurple
            ? 'group-hover:text-purple-300'
            : isGreen
            ? 'group-hover:text-green-300'
            : 'group-hover:text-primary-300'
        }`}>
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {service.features && (
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-200 group-hover:text-white transition-colors duration-300">
                <CheckCircle className={`h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                  isChemical 
                    ? 'text-blue-400' 
                    : isPurple
                    ? 'text-purple-400'
                    : isGreen
                    ? 'text-green-400'
                    : 'text-green-400'
                }`} />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )

  return (
    <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            <span className="block">Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 animate-gradient-x">
              Premium Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions for all your chemical and tile requirements. 
            We provide quality products backed by expert service and reliable delivery.
          </p>
        </div>

        {/* Chemical Services - BLUE ANIMATION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x">
                Chemical Solutions
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Advanced chemical products for industrial and laboratory use</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chemicalServices.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.2}s` }} className="animate-fade-in">
                <ServiceCard service={service} isChemical={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Tile Services - PURPLE ANIMATION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 animate-gradient-x">
                Tile Collections
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Premium  for residential and commercial spaces</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tileServices.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.2}s` }} className="animate-fade-in">
                <ServiceCard service={service} isPurple={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services - GREEN ANIMATION */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient-x">
                Why Choose Us
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Excellence in service and commitment to quality</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="group relative text-center p-8 bg-gray-800 rounded-2xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer border border-gray-700/50 hover:border-green-500/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glow Effect - GREEN */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
