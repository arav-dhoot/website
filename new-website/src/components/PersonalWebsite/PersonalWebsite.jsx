import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, BookOpen, Moon, Sun } from 'lucide-react';

const PersonalWebsite = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visitCount, setVisitCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Visit counter - Note: This won't persist in the artifact environment but will work when deployed
    const visits = parseInt(localStorage.getItem('visitCount') || '0');
    const newVisitCount = visits + 1;
    setVisitCount(newVisitCount);
    localStorage.setItem('visitCount', newVisitCount.toString());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.05;
    const deltaY = (e.clientY - centerY) * 0.05;
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getVisitMessage = () => {
    if (visitCount === 1) {
      return "Hey there! Visiting for the first time? Nice to meet you.";
    } else if (visitCount > 3) {
      return (
        <span>
          Oh, you've been a frequent visitor (visit #{visitCount})! Might I suggest{' '}
          <a 
            href="https://xkcd.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`underline hover:no-underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            this
          </a>{' '}
          as an alternative form of entertainment.
        </span>
      );
    } else {
      return `Welcome back! This is visit #${visitCount}.`;
    }
  };

  // Generate constellation stars with connections
  const generateConstellation = () => {
    const stars = [];
    const connections = [];
    
    // Create star positions
    const starPositions = [
      { x: 15, y: 20, size: 2 },
      { x: 25, y: 15, size: 1.5 },
      { x: 35, y: 25, size: 1 },
      { x: 45, y: 18, size: 2.5 },
      { x: 55, y: 30, size: 1.5 },
      { x: 65, y: 12, size: 1 },
      { x: 75, y: 22, size: 2 },
      { x: 85, y: 28, size: 1.5 },
      { x: 20, y: 45, size: 1 },
      { x: 40, y: 50, size: 2 },
      { x: 60, y: 55, size: 1.5 },
      { x: 80, y: 48, size: 1 },
      { x: 30, y: 70, size: 2.5 },
      { x: 50, y: 75, size: 1 },
      { x: 70, y: 65, size: 1.5 },
      { x: 90, y: 70, size: 2 },
      { x: 10, y: 85, size: 1.5 },
      { x: 35, y: 90, size: 1 },
      { x: 65, y: 88, size: 2 },
      { x: 85, y: 92, size: 1.5 }
    ];

    // Create constellation connections
    const constellationLines = [
      [0, 1], [1, 3], [3, 6], [6, 7],
      [2, 4], [4, 5], [5, 7],
      [8, 9], [9, 10], [10, 11],
      [12, 13], [13, 14], [14, 15],
      [16, 17], [17, 18], [18, 19],
      [0, 8], [3, 9], [6, 11], [12, 16]
    ];

    // Generate constellation lines
    constellationLines.forEach((connection, index) => {
      const star1 = starPositions[connection[0]];
      const star2 = starPositions[connection[1]];
      
      const x1 = star1.x;
      const y1 = star1.y;
      const x2 = star2.x;
      const y2 = star2.y;
      
      const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      
      connections.push(
        <div
          key={`line-${index}`}
          className="absolute animate-constellation-line"
          style={{
            left: `${x1}%`,
            top: `${y1}%`,
            width: `${length}%`,
            height: '1px',
            backgroundColor: 'rgba(169, 169, 169, 0.15)',
            transformOrigin: '0 0',
            transform: `rotate(${angle}deg)`,
            animationDelay: `${index * 0.5}s`
          }}
        />
      );
    });

    // Generate stars
    starPositions.forEach((star, index) => {
      stars.push(
        <div
          key={`star-${index}`}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'rgba(169, 169, 169, 0.4)',
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 2}px rgba(169, 169, 169, 0.3)`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      );
    });

    return [...connections, ...stars];
  };

  const publications = [
    {
      title: "Advanced Machine Learning Techniques for Distributed Systems",
      journal: "Journal of Computer Science",
      year: "2024",
      authors: "Your Name, Co-Author"
    },
    {
      title: "Optimizing Neural Networks for Edge Computing",
      journal: "IEEE Transactions on AI",
      year: "2023",
      authors: "Your Name, Research Team"
    },
    {
      title: "Scalable Microservices Architecture Patterns",
      journal: "ACM Computing Surveys",
      year: "2023",
      authors: "Your Name, Industry Partners"
    }
  ];

  const research = [
    {
      title: "Quantum-Classical Hybrid Algorithms",
      description: "Developing novel approaches to combine quantum and classical computing paradigms for solving complex optimization problems.",
      status: "Ongoing",
      collaboration: "MIT Quantum Lab",
      period: "2024 - Present"
    },
    {
      title: "Federated Learning Security",
      description: "Investigating privacy-preserving techniques in distributed machine learning environments.",
      status: "Published",
      collaboration: "Stanford AI Lab",
      period: "2023 - 2024"
    },
    {
      title: "Real-time Data Stream Processing",
      description: "Building efficient algorithms for processing high-velocity data streams in cloud environments.",
      status: "In Review",
      collaboration: "Google Research",
      period: "2023 - Present"
    }
  ];

  const experience = [
    {
      company: "Tech Innovation Labs",
      role: "Senior Research Engineer",
      period: "2022 - Present",
      description: "Leading research initiatives in distributed systems and machine learning. Architecting scalable solutions for enterprise clients."
    },
    {
      company: "DataFlow Systems",
      role: "Software Engineer",
      period: "2020 - 2022",
      description: "Developed high-performance data processing pipelines. Implemented microservices architecture for real-time analytics platform."
    },
    {
      company: "Research University",
      role: "Graduate Research Assistant",
      period: "2018 - 2020",
      description: "Conducted research in artificial intelligence and published papers on neural network optimization techniques."
    }
  ];

  // Image slider data with placeholder images and captions
  const sliderImages = {
    level1: [
      { src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop', caption: 'Conference Presentation' },
      { src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop', caption: 'Research Lab' },
      { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop', caption: 'Team Collaboration' },
      { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop', caption: 'Code Review Session' },
      { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop', caption: 'Workshop Discussion' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop', caption: 'Technical Meeting' }
    ],
    level2: [
      { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop', caption: 'AI Research Demo' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop', caption: 'Data Analysis' },
      { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', caption: 'Algorithm Design' },
      { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop', caption: 'System Architecture' },
      { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop', caption: 'Industry Summit' },
      { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop', caption: 'Innovation Workshop' }
    ],
    level3: [
      { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop', caption: 'Startup Pitch' },
      { src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=300&h=200&fit=crop', caption: 'Hackathon Victory' },
      { src: 'https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=300&h=200&fit=crop', caption: 'Product Launch' },
      { src: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=300&h=200&fit=crop', caption: 'Research Publication' },
      { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=200&fit=crop', caption: 'Award Ceremony' },
      { src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=300&h=200&fit=crop', caption: 'International Conference' }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`} style={{ fontFamily: 'Georgia, serif' }}>
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Visit Counter Message */}
      <div className={`fixed top-6 left-6 z-50 p-3 rounded-lg text-sm ${
        isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'
      }`}>
        {getVisitMessage()}
      </div>

      {/* Background Stylistic Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating geometric shapes */}
        <div className={`absolute top-20 left-10 w-32 h-32 border rounded-full opacity-20 animate-float ${
          isDarkMode ? 'border-gray-600' : 'border-gray-200'
        }`}></div>
        <div className={`absolute top-40 right-20 w-24 h-24 rounded-lg opacity-30 animate-float-delayed ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}></div>
        <div className={`absolute bottom-40 left-20 w-16 h-16 border-2 rotate-45 opacity-25 animate-float ${
          isDarkMode ? 'border-gray-500' : 'border-gray-300'
        }`}></div>
        <div className={`absolute top-60 left-1/3 w-20 h-20 rounded-full opacity-20 animate-float-slow ${
          isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'
        }`}></div>
        <div className={`absolute bottom-60 right-1/4 w-28 h-28 border rounded-lg opacity-15 animate-float-delayed ${
          isDarkMode ? 'border-gray-600' : 'border-gray-200'
        }`}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                           linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Gradient orbs */}
        <div className={`absolute top-32 right-32 w-64 h-64 rounded-full opacity-30 animate-pulse-slow bg-gradient-radial ${
          isDarkMode ? 'from-gray-700 to-transparent' : 'from-gray-100 to-transparent'
        }`}></div>
        <div className={`absolute bottom-32 left-32 w-48 h-48 rounded-full opacity-40 animate-pulse-slow bg-gradient-radial ${
          isDarkMode ? 'from-gray-800 to-transparent' : 'from-gray-50 to-transparent'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        {/* Stellar Constellation Animation - Only in header */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {generateConstellation()}
        </div>
        
        <div className={`absolute inset-0 opacity-50 ${
          isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
        }`}></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div 
              className="md:w-1/3"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Professional headshot"
                className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-gray-100 transition-transform duration-300 ease-out cursor-pointer"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${mousePosition.x || mousePosition.y ? 1.05 : 1})`
                }}
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 tracking-tight">
                Dr. Alex Chen
              </h1>
              <p className={`text-xl mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Software Engineer & Research Scientist
              </p>
              <p className={`text-lg leading-relaxed max-w-2xl ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Bridging the gap between cutting-edge research and practical software solutions. 
                Specializing in distributed systems, machine learning, and quantum computing applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#research" className={`px-6 py-3 rounded-full transition-colors ${
                  isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Explore Research
                </a>
                <a href="#experience" className={`px-6 py-3 border-2 rounded-full transition-colors ${
                  isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'
                }`}>
                  View Experience
                </a>
              </div>
              
              {/* Contact Icons */}
              <div className="mt-8 flex gap-6 justify-center md:justify-start">
                <a href="mailto:alex@example.com" className={`transition-colors ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  <Mail size={24} />
                </a>
                <a href="#" className={`transition-colors ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  <Linkedin size={24} />
                </a>
                <a href="#" className={`transition-colors ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  <BookOpen size={24} />
                </a>
                <a href="#" className={`transition-colors ${
                  isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}>
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Research Section */}
      <section 
        id="research" 
        className={`py-20 relative z-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div 
          className="max-w-4xl mx-auto px-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Current Research</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {research.map((item, index) => (
              <div 
                key={index}
                className={`p-8 rounded-lg shadow-lg border-l-4 transform transition-all duration-700 ${
                  isDarkMode ? 'bg-gray-800 border-white' : 'bg-white border-black'
                } ${
                  isVisible.research ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${
                    isVisible.research ? 'translateY(0)' : 'translateY(40px)'
                  }`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  </div>
                  <div className="flex gap-4 mt-2 md:mt-0">
                    <span className={`text-sm mt-2 md:mt-0 px-3 py-1 rounded-full ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {item.period}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Ongoing' ? (isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800') :
                      item.status === 'Published' ? (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800') :
                      (isDarkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800')
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <p className={`leading-relaxed mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.description}
                </p>
                <p className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  In collaboration with {item.collaboration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-20 relative z-10"
      >
        <div 
          className="max-w-4xl mx-auto px-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className={`p-8 rounded-lg shadow-lg transform transition-all duration-700 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } ${
                  isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${
                    isVisible.experience ? 'translateY(0)' : 'translateY(40px)'
                  }`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.company}</p>
                  </div>
                  <span className={`text-sm mt-2 md:mt-0 px-3 py-1 rounded-full ${
                    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section 
        id="publications" 
        className={`py-20 relative z-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div 
          className="max-w-4xl mx-auto px-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg shadow-md border transition-all duration-300 transform hover:shadow-lg ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                } ${
                  isVisible.publications ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${
                    isVisible.publications ? 'translateX(0)' : 'translateX(40px)'
                  }`
                }}
              >
                <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
                <p className={`mb-1 italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{pub.journal}</p>
                <div className={`flex justify-between items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>{pub.authors}</span>
                  <span className="font-medium">{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Level Image Slider */}
      <section className="py-20 overflow-hidden relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>A collection of moments from conferences, labs, and collaborations</p>
        </div>
        
        <div className="space-y-6">
          {/* Level 1 - Moving Right */}
          <div className="flex animate-scroll-right">
            {[...sliderImages.level1, ...sliderImages.level1].map((item, index) => (
              <div
                key={index}
                className="relative w-80 h-52 mx-3 flex-shrink-0 group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover shadow-lg transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold text-center px-4">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Level 2 - Moving Left */}
          <div className="flex animate-scroll-left">
            {[...sliderImages.level2, ...sliderImages.level2].map((item, index) => (
              <div
                key={index}
                className="relative w-80 h-52 mx-3 flex-shrink-0 group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover shadow-lg transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold text-center px-4">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Level 3 - Moving Right */}
          <div className="flex animate-scroll-right-slow">
            {[...sliderImages.level3, ...sliderImages.level3].map((item, index) => (
              <div
                key={index}
                className="relative w-80 h-52 mx-3 flex-shrink-0 group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover shadow-lg transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold text-center px-4">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalWebsite;