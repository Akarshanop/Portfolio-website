import './App.css'

function App() {
  return (
    <div className="container">
      <header className="intro">
        <h1>Akarshan Tyagi</h1>
        <div className="subtitle">AI Engineer</div>
        <p>
          AI Engineer specializing in Agentic Systems, LLM Integration, and robust Backend APIs.
          Experienced in developing multi-agent orchestrators, RAG systems, and integrating Model Context Protocol (MCP) servers.
          Passionate about building scalable AI solutions and automating complex workflows.
        </p>
      </header>

      <section>
        <div className="section-grid">
          <div className="section-title">Experience</div>
          <div className="section-content">

            <div className="item">
              <div className="item-header">
                <div className="item-title">AI Engineer</div>
                <div className="item-date">Dec 2025 – Present</div>
              </div>
              <div className="item-subheader">
                <div className="item-subtitle">Dice Technology, Pune, India</div>
                <div className="item-type">Full-Time</div>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Dice Enterprise:</strong> R2R automation with SAP integration & multi-stage approvals.</div>
                    <div className="full-text">Engineered an end-to-end Record-to-Report (R2R) automation pipeline for JK Cement, directly integrating with SAP to autonomously extract Purchase Order (PO) and financial data. Developed a robust multi-stage approval workflow orchestrating interactions between Cost Center (CC) Managers, Business Users, Plant Commercial Heads, and internal R2R teams, significantly reducing manual bottlenecks.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Code Knowledge Base:</strong> Graph + Vector combined search with 3 AI Agents.</div>
                    <div className="full-text">Designed and implemented a comprehensive codebase knowledge repository utilizing Neo4j (Graph DB) and ChromaDB (Vector DB). Engineered a hybrid semantic and dependency search engine, serving as the foundational layer for 3 specialized AI agents (PRD Agent, Developer Agent, and Sales Agent) to autonomously analyze code and map architectural dependencies.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong><a href="https://exam-portal-eta.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Dice Examination Platform ↗</a>:</strong> NTA-format testing engine with integrated IDE & AI evaluation.</div>
                    <div className="full-text">Developed a production-ready online examination platform mirroring the official National Testing Agency (NTA) interface. Integrated a secure, browser-based IDE for real-time coding assessments and constructed an advanced AI evaluation pipeline to perform automated grading, syntax analysis, and logical correctness checks.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Udyam Data Extraction:</strong> Playwright-based Python script reducing lookup API costs by 95%.</div>
                    <div className="full-text">Developed a highly efficient web automation script in Python using Playwright to extract Udyam registration details directly from the DOM. Effectively replaced expensive third-party verification APIs, reducing the company's external API transaction costs by 95%.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <div className="item-title">AI Intern</div>
                <div className="item-date">Dec 2025 – Present</div>
              </div>
              <div className="item-subheader">
                <div className="item-subtitle">Bettermeals, Remote</div>
                <div className="item-type">Part-Time</div>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Playwright MCP Servers:</strong> Custom MCP servers integrating Blinkit and Zepto.</div>
                    <div className="full-text">Designed and developed custom Model Context Protocol (MCP) servers utilizing Playwright automation scripts for major quick-commerce platforms Blinkit and Zepto. This enabled AI agents to autonomously execute precise browser-driven actions, including real-time product search, dynamic cart management, and checkout operations.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>OpenClaw Agent Orchestration:</strong> End-to-end autonomous order placement system.</div>
                    <div className="full-text">Connected the developed MCP servers to an OpenClaw instance to establish an agentic system capable of executing physical checkout flows from natural language prompts. Formulated secure automation workflows to handle authentication, address confirmation, and final order placement.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <div className="item-title">Forward Deployed Engineer</div>
                <div className="item-date">Feb 2026– Present</div>
              </div>
              <div className="item-subheader">
                <div className="item-subtitle">Freelancing, Remote</div>
                <div className="item-type">Part-Time</div>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>QR-Based Restaurant SaaS:</strong> End-to-end management software for Sukoon Resorts & Hotels.</div>
                    <div className="full-text">Architected and deployed a production-grade, end-to-end QR code-based restaurant management system for Sukoon Resorts and Hotels, Jabalpur. Engineered the entire system architecture, encompassing real-time order routing, table-state synchronization, and checkout flows. The platform is actively deployed and running across 5+ hotels and restaurant branches to streamline operations.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <div className="item-title">AI Intern</div>
                <div className="item-date">Apr 2025 – Aug 2025</div>
              </div>
              <div className="item-subheader">
                <div className="item-subtitle">Megamax Services, Noida, India</div>
                <div className="item-type">Full-Time</div>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Enterprise Tender Automation:</strong> PyMuPDF & Regex pipeline extracting 80+ fields into Excel.</div>
                    <div className="full-text">Built an in-house document processing product that automates Enterprise Tender analysis. Utilizing PyMuPDF and optimized Regex mapping, the system ingests uploaded tender documents, extracts over 80 structured data fields, and automatically populates designated placeholders in fixed Excel templates, successfully reducing manual overhead by 85%.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Kasturi HRMS RAG Chatbot:</strong> Vector-based semantic search for automated policy resolution.</div>
                    <div className="full-text">Developed a production-grade Retrieval-Augmented Generation (RAG) Chatbot integrated into their Kasturi HRMS product. Implemented vector embeddings and semantic search capabilities to autonomously resolve complex employee policy queries, enhancing the platform's core commercial offering.</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="section-grid">
          <div className="section-title">Projects</div>
          <div className="section-content">

            <div className="item">
              <div className="item-header">
                <a href="https://github.com/Akarshanop/Trading-Bot.git" target="_blank" rel="noopener noreferrer" className="item-title">Algorithmic Trading Bot ↗</a>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>High-Concurrency Trading Server:</strong> FastAPI & Asyncio automated trade execution.</div>
                    <div className="full-text">Engineered a robust, high-concurrency FastAPI backend server utilizing Webhooks and Asyncio. The system programmatically executes trades by parsing and acting upon real-time Telegram signals, ensuring minimal latency between signal reception and market execution.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Automated Risk Management:</strong> Dynamic sizing & multi-TP logic with 99% uptime.</div>
                    <div className="full-text">Integrated sophisticated risk management modules directly into the execution pipeline. Features include dynamic position sizing based on portfolio risk, automated stop-loss adjustments, and multi-take-profit (TP) logic, maintaining a 99% execution uptime across volatile market conditions.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <a href="https://github.com/Akarshanop/VeriFi.git" target="_blank" rel="noopener noreferrer" className="item-title">Verifi (GenAI Chrome Extension) ↗</a>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Browser Credibility Engine:</strong> VLM & OCR based real-time news authentication.</div>
                    <div className="full-text">Developed a dynamic browser-based credibility engine leveraging advanced Vision-Language Models (VLM) and Optical Character Recognition (OCR). The extension actively scans unstructured web data and visual content to analyze news authenticity and detect potential misinformation in real-time.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Semantic Trust Scoring:</strong> LLM reasoning with interactive UI overlays.</div>
                    <div className="full-text">Implemented LLM-based semantic reasoning to evaluate article credibility comprehensively. The system generates dynamic trust scores and visually represents them through an intuitive "truth-o-meter" UI overlay injected directly into the user's browser view.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="item-header">
                <div className="item-title">FocusGate</div>
              </div>
              <div className="item-content">
                <ul>
                  <li className="hover-expand">
                    <div className="short-text"><strong>Productivity Web Interceptor:</strong> React.js & Chrome API ecosystem.</div>
                    <div className="full-text">Built an overarching productivity ecosystem using React.js and Chrome Extension APIs designed to actively intercept and manage distracting web traffic based on user-defined parameters.</div>
                  </li>
                  <li className="hover-expand">
                    <div className="short-text"><strong>NLP Reflective Prompts:</strong> Text classification reducing impulsive browsing by 40%.</div>
                    <div className="full-text">Integrated NLP-driven reflective prompts that require users to state their intentions before accessing blocked sites. The system analyzes user intent via real-time text classification before granting access, effectively reducing impulsive browsing by 40%.</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="section-grid">
          <div className="section-title">Skills</div>
          <div className="section-content">
            <div className="item">
              <div className="item-content">
                <ul>
                  <li><strong>Programming Languages:</strong> Python, JavaScript, C++</li>
                  <li><strong>AI Agentic Systems:</strong> LLM Integration, MCP Server, LangChain, LangGraph, RAG System, Multi-Agent Systems, NLP, Embeddings, Semantic Search, Fine-Tuning, Vector Retrieval, Openclaw Agent Integration</li>
                  <li><strong>Backend APIs:</strong> FastAPI, Flask, Django, REST APIs, Async Python, Node.js, Express.js, WebSockets, API Integration</li>
                  <li><strong>Databases Storage:</strong> PostgreSQL, Supabase, ChromaDB (Vector DB), Neo4j (Graph DB), Vector Search, Knowledge Graphs</li>
                  <li><strong>Cloud DevOps:</strong> Docker, Git, GitHub, Render, Railway, Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-grid">
          <div className="section-title">Education</div>
          <div className="section-content">
            <div className="item">
              <div className="item-header">
                <div className="item-title">B.Tech in Electronics & Telecommunication</div>
                <div className="item-date">Oct 2022 – Jun 2026</div>
              </div>
              <div className="item-subtitle">IET DAVV, Indore, India</div>
            </div>
            
          </div>
        </div>
      </section>

      <section>
        <div className="section-grid">
          <div className="section-title">Achievements</div>
          <div className="section-content">
            <div className="item">
              <div className="item-content">
                <ul>
                  <li><strong>Technical Mentor:</strong> Mentored the SIH 2025 Winning Team for Problem Statement SIH25007; guided the development of an AI-driven platform for monitoring Maximum Residue Limits (MRL) and Antimicrobial Usage (AMU) in dairy and fisheries.</li>
                  <li><strong>Top 10 Finalist:</strong> Puch AI Hackathon; engineered Medicops, an AI-powered medical report interpretation system featuring automated diagnostics and WhatsApp API integration, deployed on Render.</li>
                  <li><strong>Competitive Programming:</strong> Solved 500+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks, demonstrating strong analytical and algorithmic optimization skills.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <div className="footer-links">
          <a href="mailto:akarshantyagi@gmail.com">akarshantyagi@gmail.com</a>
          <span className="separator">•</span>
          <a href="https://linkedin.com/in/akarshan-tyagi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="separator">•</span>
          <a href="https://github.com/Akarshanop" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="separator">•</span>
          <span className="phone">+91 9915755944</span>
        </div>
      </footer>

    </div>
  )
}

export default App
