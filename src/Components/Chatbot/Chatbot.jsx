import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import { FiX, FiSend, FiChevronDown } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Suggested questions for visitors
  const suggestedQuestions = [
    "What technologies do you use?",
    "Tell me about your experience",
    "What projects have you worked on?",
    "How can I contact you?",
    "What are your skills?",
    "Tell me about your background"
  ];

  // Enhanced portfolio knowledge base based on actual content
  const portfolioKnowledge = {
    "technologies": "I work with a diverse range of technologies! Frontend: HTML (Advanced), CSS (Intermediate), JavaScript (Intermediate), React (Intermediate), React Native (Beginner), Bootstrap (Intermediate), Blazor (Beginner), C# (Beginner). Backend: Node.js (Intermediate), Python (Beginner), MySQL (Intermediate), MongoDB (Intermediate), Firebase (Beginner), MSSQL (Intermediate). I also use Git for version control.",
    "experience": "I'm a Full Stack Developer with a passion for creating efficient and user-friendly web applications. I started my journey with curiosity about how things work and have evolved into a developer who loves solving complex problems and delivering high-quality solutions.",
    "projects": "I've worked on several interesting projects including an iPhone website clone (available at iclone-website.vercel.app) and a To Do List App. These projects showcase my skills in web development and user interface design. Each project has helped me grow my technical abilities.",
    "contact": "You can reach me through the contact form on this portfolio. I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development!",
    "skills": "My skills span both frontend and backend development. Frontend: HTML (Advanced), CSS, JavaScript, React, React Native, Bootstrap, Blazor, C#. Backend: Node.js, Python, MySQL, MongoDB, Firebase, MSSQL. I'm also proficient with Git for version control.",
    "background": "I'm passionate about technology and web development. My journey began with curiosity about how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments.",
    "full stack": "As a Full Stack Developer, I handle both frontend and backend development. This means I can build complete web applications from the user interface to the database. I'm comfortable working across the entire technology stack.",
    "react": "React is one of my primary frontend frameworks (Intermediate level). I use it to create interactive user interfaces and build modern, responsive web applications. I'm also learning React Native for mobile development.",
    "node": "Node.js is my main backend technology (Intermediate level). I use it to build APIs, handle server-side logic, and create scalable backend services. It's great for building fast and efficient web applications.",
    "javascript": "JavaScript is the foundation of my development work (Intermediate level). I use it for both frontend and backend development, making me versatile across the full stack.",
    "html": "HTML is one of my strongest skills (Advanced level). I use it to create well-structured, semantic web pages that are accessible and SEO-friendly.",
    "css": "CSS (Intermediate level) is essential for creating beautiful and responsive user interfaces. I use it alongside frameworks like Bootstrap to build modern designs.",
    "python": "Python (Beginner level) is a language I'm actively learning. I'm excited about its potential for data analysis, automation, and backend development.",
    "database": "I work with multiple databases including MySQL (Intermediate), MongoDB (Intermediate), MSSQL (Intermediate), and Firebase (Beginner). This gives me flexibility in choosing the right database for each project.",
    "git": "Git (Intermediate level) is essential for my development workflow. I use it for version control, collaboration, and managing different project versions.",
    "mobile": "I'm learning React Native (Beginner level) to expand into mobile development. This allows me to create cross-platform mobile applications using my existing React knowledge."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(portfolioKnowledge)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Check for general greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 👋 I'm your AI assistant. I can help you learn more about Tebogo's portfolio, skills, and experience. Feel free to ask me anything about the technologies, projects, or background!";
    }

    // Check for help requests
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return "I can help you learn about Tebogo's skills, experience, projects, and background! Try asking about specific technologies like React, Node.js, or databases. You can also ask about projects or general experience.";
    }

    // Check for specific project questions
    if (lowerMessage.includes('iphone') || lowerMessage.includes('iclone')) {
      return "I worked on an iPhone website clone project! It's a web application that replicates the iPhone website design and functionality. You can check it out at iclone-website.vercel.app. It showcases my skills in responsive design and modern web development.";
    }

    if (lowerMessage.includes('todo') || lowerMessage.includes('to do')) {
      return "I built a To Do List App that demonstrates my skills in web development and user interface design. It's a practical application that shows my ability to create functional and user-friendly web applications.";
    }

    // Check for skill level questions
    if (lowerMessage.includes('level') || lowerMessage.includes('beginner') || lowerMessage.includes('intermediate') || lowerMessage.includes('advanced')) {
      return "My skill levels vary across different technologies: HTML (Advanced), CSS/JavaScript/React/Node.js/MySQL/MongoDB/MSSQL (Intermediate), and React Native/Python/Blazor/C#/Firebase (Beginner). I'm always learning and improving!";
    }

    // Default response for unrecognized questions
    return "That's an interesting question! While I'm designed to help with portfolio-related inquiries, I'd be happy to answer questions about Tebogo's specific skills, projects, or experience. Try asking about technologies, projects, or skill levels!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setIsTyping(true);

    // Simulate typing delay for more natural feel
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSuggestedQuestion = (question) => {
    setInputValue(question);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Add welcome message when opening
      setMessages([{
        text: "Hi there! 👋 I'm your AI assistant. I can help you learn more about Tebogo's portfolio, skills, and experience. What would you like to know?",
        sender: 'bot'
      }]);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleChatbot}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <FiX /> : <RiRobot2Line style={{ color: 'white' }} />}
      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <RiRobot2Line style={{ color: 'white' }} />
              <span>Portfolio Assistant</span>
            </div>
            <button 
              className="chatbot-close"
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              <FiX />
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="suggested-questions">
              <div className="suggested-title">
                <FiChevronDown />
                <span>Suggested Questions</span>
              </div>
              <div className="questions-grid">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="suggested-question"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about the portfolio..."
              className="chatbot-input-field"
            />
            <button 
              className="chatbot-send"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 