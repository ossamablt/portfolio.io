"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Minimize2 } from 'lucide-react';

const keywordMap = {
  age: ['age', 'how old', 'years'],
  contact: ['email', 'phone', 'linkedin', 'contact'],
  skills: ['skills', 'tech', 'stack', 'tools', 'languages'],
  projects: ['project', 'built', 'portfolio', 'apps'],
  experience: ['job', 'worked', 'experience'],
  education: ['university', 'study', 'degree', 'education'],
  certs: ['certification', 'certificates'],
  frontend: ['react', 'frontend', 'next', 'tailwind'],
  backend: ['laravel', 'backend', 'api', 'php'],
  ai: ['ai', 'machine learning', 'tensorflow', 'opencv', 'robotics'],
  location: ['location', 'where', 'available'],
  greeting: ['hello', 'hi', 'hey', 'yo']
};

const getIntentFromMessage = (message: string) => {
  const lower = message.toLowerCase();
  for (const [intent, keywords] of Object.entries(keywordMap)) {
    if (keywords.some(k => lower.includes(k))) {
      return intent;
    }
  }
  return null;
};

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Abdelmadjid's AI assistant. Ask me anything about his experience, skills, projects, or background! 🚀",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // CV Data for the chatbot to reference
  const cvData = {
    personal: {
      name: "Abdelmadjid Belilet",
      title: "Computer Engineer & Full-Stack Developer",
      email: "majidblt0777@gmail.com",
      phone: "0542873981",
      location: "Jijel, Algeria",
      university: "University of Mohammed Seddik Ben Yahia, Jijel",
      degree: "Computer Science - System Information Licence",
      studyPeriod: "2022 – 2025",
      age: "22-23 years old (estimated based on study period)",
      linkedin: "https://linkedin.com/in/abdelmadjid-belilet",
      github: "https://github.com/abdelmadjid-belilet"
    },
    skills: {
      languages: ["JavaScript", "TypeScript", "Java/Kotlin", "PHP", "Python", "Arduino C++"],
      frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
      backend: ["Node.js", "Laravel", "Python (Pandas, NumPy)", "PHP"],
      databases: ["PostgreSQL", "MongoDB", "MySQL"],
      aiml: ["TensorFlow", "OpenCV", "Computer Vision", "Object Detection"],
      tools: ["Firebase", "WebSockets", "Tkinter", "Git"],
      architecture: ["Clean Architecture", "MCD", "BDD", "UML Diagrams"]
    },
    projects: [
      {
        name: "Fast Food Olirab",
        period: "January 2024 – Present",
        type: "Restaurant Management System",
        description: "End-to-end restaurant management system with real-time order tracking and role-based access",
        technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Laravel", "MySQL", "Firebase", "WebSockets"],
        features: ["Real-time order tracking", "Kitchen notifications", "Role-based authentication", "Modern responsive frontend"]
      },
      {
        name: "Object Detection Desktop Application",
        period: "June 2024 – August 2024",
        type: "AI/ML Desktop Application",
        description: "Standalone desktop application for detecting and classifying objects in real-time using deep learning",
        technologies: ["Python", "TensorFlow", "Tkinter", "OpenCV", "NumPy", "Pandas"],
        features: ["Custom-trained TensorFlow model", "Real-time object recognition", "Intuitive GUI", "Optimized performance"]
      }
    ],
    experience: [
      {
        title: "Media Manager",
        company: "Esperanza Scientific Club, University of Mohammed Seddik Ben Yahia Jijel",
        period: "September 2024 – April 2025",
        responsibilities: [
          "Led media management team coordination",
          "Organized conferences, hackathons, and professional events",
          "Managed social media presence and content creation",
          "Problem-solved within media team operations"
        ]
      }
    ],
    certifications: [
      "JavaScript Foundations Professional Certificate by Mozilla (August 2024)",
      "Robotics using Arduino Professional Certificate by Ellaps Enterprise (January 2025)",
      "JavaScript Essential Training - LinkedIn Learning (July 2024)",
      "Learning the JavaScript Language - LinkedIn Learning (July 2024)"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string) => {
    const intent = getIntentFromMessage(userMessage);
    switch (intent) {
      case 'age':
        return `Abdelmadjid is around 22–23 years old and currently pursuing a Computer Science degree at ${cvData.personal.university}.`;
      case 'contact':
        return `📧 Email: ${cvData.personal.email}\n📱 Phone: ${cvData.personal.phone}\n🌍 Location: ${cvData.personal.location}\n🔗 LinkedIn: ${cvData.personal.linkedin}\n💻 GitHub: ${cvData.personal.github}`;
      case 'skills':
        return `🧠 Technical Skills:\n\n🔧 Languages: ${cvData.skills.languages.join(', ')}\n🎨 Frontend: ${cvData.skills.frontend.join(', ')}\n⚙️ Backend: ${cvData.skills.backend.join(', ')}\n💾 Databases: ${cvData.skills.databases.join(', ')}\n🧰 Tools: ${cvData.skills.tools.join(', ')}`;
      case 'projects':
        return cvData.projects.map(p =>
          `🔹 **${p.name}** (${p.period})\n${p.description}\nTech: ${p.technologies.slice(0, 4).join(', ')}\nFeatures: ${p.features.slice(0, 2).join(', ')}`
        ).join('\n\n');
      case 'experience':
        const exp = cvData.experience[0];
        return `💼 ${exp.title} at ${exp.company} (${exp.period})\n• ${exp.responsibilities.join('\n• ')}`;
      case 'education':
        return `🎓 ${cvData.personal.degree}\n📍 ${cvData.personal.university}\n📅 ${cvData.personal.studyPeriod}`;
      case 'certs':
        return `📜 Certifications:\n• ${cvData.certifications.join('\n• ')}`;
      case 'frontend':
        return `Abdelmadjid specializes in modern frontend tools like React, Next.js, Tailwind CSS, and has built responsive UIs using shadcn/ui.`;
      case 'backend':
        return `He builds scalable backends using Laravel, Node.js, and MySQL. His project Olirab integrates Firebase and WebSockets for real-time data.`;
      case 'ai':
        return `Abdelmadjid built an AI app using TensorFlow and OpenCV to detect objects in real-time. He also has robotics experience using Arduino.`;
      case 'location':
        return `He's based in Jijel, Algeria, and open to remote work or relocation opportunities.`;
      case 'greeting':
        return `Hey there! 👋 I'm here to help you learn about Abdelmadjid Belilet. Ask about skills, projects, AI work, or experience.`;
      default:
        return `Hmm �� I didn't quite get that. But you can ask about:\n• "What are his skills?"\n• "Tell me about his projects"\n• "What's his background in AI?"\n• "Where does he live?"`;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 700 + Math.random() * 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <MessageCircle size={24} />
        </button>
        <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce">
          Ask me about Abdelmadjid! 💬
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'}`}>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">AI Assistant</h3>
              <p className="text-gray-300 text-xs">Ask about Abdelmadjid</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Minimize2 size={18} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gradient-to-r from-green-600 to-teal-600'
                    }`}>
                      {message.isBot ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-gray-800/50 text-gray-100' 
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioChatbot; 