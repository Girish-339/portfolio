import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  ChevronDown, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink,
  Database,
  BarChart3,
  Brain,
  Code2,
  Target,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  Trophy,
  Medal,
  Mountain
} from 'lucide-react';

import Navigation from './components/Navigation';
import SkillBar from './components/SkillBar';
import LoadingScreen from './components/LoadingScreen';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Loading screen
    const timer = setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => setIsLoaded(true), 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'machine-learning', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Python', level: 90, icon: Code2 },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'Power BI', level: 88, icon: BarChart3 },
    { name: 'Machine Learning', level: 80, icon: Brain },
    { name: 'Tableau', level: 85, icon: TrendingUp },
    { name: 'Excel', level: 90, icon: Target }
  ];

  const projects = [
    {
      title: 'Adventure Work Cycles',
      description: 'Comprehensive customer behavior analysis using Power BI, SQL, Tableau, and Excel. Created interactive dashboards for sales performance insights.',
      tech: ['Power BI', 'SQL', 'Tableau', 'Excel'],
      category: 'Analytics'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Employee attrition analysis with predictive insights. Built comprehensive dashboards to identify key retention factors.',
      tech: ['Power BI', 'SQL', 'Tableau', 'Excel'],
      category: 'Analytics'
    },
    {
      title: 'Atliqo Bank Project',
      description: 'Customer segmentation and A/B testing implementation using Python. Statistical analysis for business decision making.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'A/B Testing'],
      category: 'Data Science'
    },
    {
      title: 'Healthcare Premium Prediction',
      description: 'Machine learning regression model to predict insurance premiums. Feature engineering and model optimization included.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'Numpy'],
      category: 'Machine Learning'
    }
  ];

  const mlWorkflow = [
    {
      title: 'Exploratory Data Analysis',
      description: 'Data profiling, missing value analysis, outlier detection, and statistical summaries',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Feature Scaling',
      description: 'Normalization and Standardization using MinMax and Z-score techniques',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Feature Selection',
      description: 'Correlation analysis, variance threshold, and model-based feature selection',
      icon: TrendingUp,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Encoding Techniques',
      description: 'One-Hot, Label, and Target encoding for categorical variables',
      icon: Code2,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Preprocessing Pipelines',
      description: 'Data imputation, transformation pipelines, and train-test splitting',
      icon: Database,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Model Building & Evaluation',
      description: 'Regression, Classification, Cross-Validation, and performance metrics',
      icon: Brain,
      color: 'from-red-500 to-red-600'
    }
  ];

  const certifications = [
    { title: 'Data Analyst Certification', provider: 'Excelr', date: 'Dec 2024' },
    { title: 'Python for Data Professionals', provider: 'Codebasics', date: 'Jan 2025' },
    { title: 'SQL for Data Science', provider: 'Codebasics', date: 'Feb 2025' },
    { title: 'Maths & Statistics for AI and Data Science', provider: 'Codebasics', date: 'Jun 2025' },
    { title: 'Master Machine Learning for Data Science', provider: 'Codebasics', date: 'Jul 2025' }
  ];

  const achievements = [
    {
      title: '1st Place in Codeathon',
      location: 'ISME College, Bangalore',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: '2nd Place in IT Quiz',
      location: 'CIMS College, Bangalore',
      icon: Medal,
      color: 'text-gray-400'
    },
    {
      title: 'Trekking & Sports Enthusiast',
      location: 'Adventure Activities',
      icon: Mountain,
      color: 'text-green-500'
    }
  ];

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"></div>
        <div className={`text-center z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            GIRISH R
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">
            Data Analyst | Aspiring ML Engineer
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="400">
            Transforming data into actionable insights with analytics, machine learning, and visualization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Data Analyst with expertise in Python, SQL, Power BI, Tableau, and Machine Learning. 
                Skilled in turning raw data into impactful insights and visualizations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing MCA at Dayananda Sagar College, with a passion for solving real-world 
                business problems through analytics.
              </p>
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <MapPin className="w-5 h-5" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                  GR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium">
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Learning Section */}
      <section id="machine-learning" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            Machine Learning Workflow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlWorkflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title} 
                  className="relative group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                  {index < mlWorkflow.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            Certifications
          </h2>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title} 
                className="flex items-center gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.provider}</p>
                </div>
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.title} 
                  className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Icon className={`w-16 h-16 mx-auto mb-6 ${achievement.color} drop-shadow-lg`} />
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.location}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-aos="fade-up">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8" data-aos="fade-right">
              <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <span className="text-lg text-gray-700 dark:text-gray-300">935-373-1693</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <a href="mailto:girishravindra339@gmail.com" className="text-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  girishravindra339@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Linkedin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                <a 
                  href="https://www.linkedin.com/in/girish-r-718544253/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <form className="space-y-6" data-aos="fade-left">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">© 2025 Girish R | Data Analyst & ML Portfolio</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/girish-r-718544253/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:girishravindra339@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;