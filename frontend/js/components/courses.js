/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Courses, Experiments (10) & Assignments (8) Component
 */

const WEN_COURSES_DATA = {
  experiments: [
    {
      id: "exp-1",
      number: 1,
      title: "Java Web Server Setup & Static Asset Serving",
      category: "Backend Architecture",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Implementing a lightweight HTTP Web Server in Java using standard com.sun.net.httpserver package to serve static SPA files (HTML, CSS, JS).",
      tags: ["Java", "HttpServer", "SPA", "Static Assets"],
      details: "This experiment demonstrates how to construct a zero-dependency HTTP server in pure Java to handle GET requests, serve static assets with correct MIME types, and implement SPA routing fallbacks."
    },
    {
      id: "exp-2",
      number: 2,
      title: "HTTP Protocol Handlers & REST Endpoints",
      category: "REST API Design",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Configuring REST API endpoints (/api/status, /api/enquiry, /api/book-session) with CORS headers and JSON payload responses.",
      tags: ["Java API", "JSON", "CORS", "HTTP Methods"],
      details: "Covers the implementation of custom HttpHandler implementations for handling GET, POST, and OPTIONS preflight requests with JSON response formatting."
    },
    {
      id: "exp-3",
      number: 3,
      title: "Database Connectivity with JDBC & SQLite Driver",
      category: "Database Systems",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Connecting Java application with SQLite Database file (wen_database.db) using JDBC DriverManager and sqlite-jdbc connector.",
      tags: ["JDBC", "SQLite", "Database", "Java.sql"],
      details: "Establishes a persistent relational database connection in Java, automatically verifying and initializing the target schema on startup."
    },
    {
      id: "exp-4",
      number: 4,
      title: "SQL Data Manipulation & User Credentials Storage",
      category: "SQL Engineering",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Executing SQL CREATE TABLE and PreparedStatement INSERT queries to store user login data ('rahi') directly into relational database tables.",
      tags: ["SQL", "PreparedStatement", "Database Storage", "Security"],
      details: "Focuses on executing parameterized SQL queries to safely insert user credentials into the database while preventing SQL injection vulnerabilities."
    },
    {
      id: "exp-5",
      number: 5,
      title: "User Authentication & Session Management",
      category: "Security & Auth",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Building user login modals, capturing form inputs, and dispatching authentication payloads from JavaScript frontend to Java database backend.",
      tags: ["Auth", "Fetch API", "Modals", "Session State"],
      details: "Connects client-side modal forms with the server-side authentication API, storing logged-in session data in application memory and database tables."
    },
    {
      id: "exp-6",
      number: 6,
      title: "SPA Client-Side Routing & Dynamic Component Engine",
      category: "Frontend Architecture",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Constructing a lightweight hash-based SPA router in JavaScript to dynamically switch component views without triggering page reloads.",
      tags: ["JavaScript", "SPA Router", "DOM Manipulation", "Hash Routing"],
      details: "Implements client-side view rendering using hash navigation listeners (#home, #courses, #mentors), maintaining clean navigation state."
    },
    {
      id: "exp-7",
      number: 7,
      title: "State Persistence & Local Storage Integration",
      category: "Client-Side Data",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Persisting user preferences, active sessions, and custom storefront listings across browser refreshes using HTML5 LocalStorage.",
      tags: ["LocalStorage", "State Persistence", "JSON Parsing", "Client Cache"],
      details: "Demonstrates serialization and deserialization of application state objects to preserve user interactions seamlessly."
    },
    {
      id: "exp-8",
      number: 8,
      title: "Interactive Modal Dialog Systems & Event Triggers",
      category: "UI Component Design",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Engineering modular dialog popups (Auth, Booking, Funding, Storefront) with backdrop blur, key bindings, and smooth CSS transitions.",
      tags: ["Modals", "Event Handlers", "CSS Animations", "UX Design"],
      details: "Creates reusable popup modal components injected dynamically into the DOM upon triggering specific UI action buttons."
    },
    {
      id: "exp-9",
      number: 9,
      title: "Responsive UI Engineering with Tailwind CSS",
      category: "UI Styling & Layouts",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Designing responsive multi-column layouts, custom color gradients, card components, and mobile drawer menus using Tailwind CSS.",
      tags: ["Tailwind CSS", "Responsive Design", "Flexbox", "CSS Grid"],
      details: "Utilizes utility-first CSS classes to craft pixel-perfect visual interfaces optimized for mobile, tablet, and desktop viewports."
    },
    {
      id: "exp-10",
      number: 10,
      title: "Full Stack Web Application Integration & Terminal Inspection",
      category: "Full Stack Integration",
      status: "Submitted & Verified",
      grade: "10 / 10",
      description: "Integrating frontend SPA UI, Java REST backend, SQLite DB file storage, and VS Code terminal inspection tools into a unified system.",
      tags: ["Full Stack", "System Integration", "Terminal Logs", "Deployment"],
      details: "Final integration lab connecting all frontend views with Java SQLite database backend, outputting formatted live logs directly in VS Code terminal."
    }
  ],
  assignments: [
    {
      id: "assign-1",
      number: 1,
      title: "System Architecture Diagram & Component Design",
      category: "Software Design",
      status: "Submitted & Graded",
      grade: "Score: 98%",
      deadline: "Completed",
      description: "Designing complete architecture diagram outlining Client SPA -> Java Web Server -> SQLite Database data flow model.",
      details: "Comprehensive architectural document depicting client-server separation, API payload formats, and relational database schema."
    },
    {
      id: "assign-2",
      number: 2,
      title: "Java OOP Principles & Servlet Life Cycle Analysis",
      category: "Core Java",
      status: "Submitted & Graded",
      grade: "Score: 95%",
      deadline: "Completed",
      description: "Analyzing Object-Oriented Java class structures, encapsulated handlers, and thread-safe HTTP request processing.",
      details: "Theoretical and practical report on Java class hierarchies, request context encapsulation, and concurrent thread management."
    },
    {
      id: "assign-3",
      number: 3,
      title: "Relational DB Normalization & ER Diagrams",
      category: "Database Design",
      status: "Submitted & Graded",
      grade: "Score: 100%",
      deadline: "Completed",
      description: "Creating ER Diagram and 3NF normalized tables for storing user profiles, business details, and login audit timestamps.",
      details: "Database design specification detailing primary key constraints, field data types, and index optimizations for SQLite tables."
    },
    {
      id: "assign-4",
      number: 4,
      title: "SQL Injection Prevention & PreparedStatements",
      category: "Web Security",
      status: "Submitted & Graded",
      grade: "Score: 97%",
      deadline: "Completed",
      description: "Implementing parameter binding using JDBC PreparedStatement to neutralize malicious SQL injection attempts.",
      details: "Security assessment report demonstrating how parameterized queries prevent unauthorized database access and data tampering."
    },
    {
      id: "assign-5",
      number: 5,
      title: "User Authentication Security & Session Handling",
      category: "Authentication Security",
      status: "Submitted & Graded",
      grade: "Score: 96%",
      deadline: "Completed",
      description: "Evaluating secure password handling, session cookies vs token storage, and client-side access control lists.",
      details: "Comparative study of session-based vs token-based authentication models for modern web applications."
    },
    {
      id: "assign-6",
      number: 6,
      title: "Micro-REST API Specs & Payload Design",
      category: "API Architecture",
      status: "Submitted & Graded",
      grade: "Score: 99%",
      deadline: "Completed",
      description: "Writing formal REST API OpenAPI specifications for login, user listing, event booking, and status healthcheck endpoints.",
      details: "Documented API endpoints including HTTP status codes, request schemas, response JSON samples, and error handling contracts."
    },
    {
      id: "assign-7",
      number: 7,
      title: "Asynchronous JavaScript Fetch & DOM Operations",
      category: "Frontend Web Development",
      status: "Submitted & Graded",
      grade: "Score: 98%",
      deadline: "Completed",
      description: "Implementing asynchronous Promises and Fetch API calls to synchronize frontend UI state with Java backend database.",
      details: "Code review report detailing non-blocking HTTP requests, error catching, and dynamic DOM re-rendering mechanisms."
    },
    {
      id: "assign-8",
      number: 8,
      title: "End-to-End System Performance Benchmarking & Deployment",
      category: "DevOps & Performance",
      status: "Submitted & Graded",
      grade: "Score: 100%",
      deadline: "Completed",
      description: "Benchmarking Java HttpServer response times, database query execution speeds, and automated batch launcher scripts.",
      details: "Performance benchmarking analysis demonstrating sub-10ms API latency and automated start scripts (run-java.bat)."
    }
  ]
};

function renderCoursesView(state, initialTab = 'experiments') {
  const activeTab = state.coursesActiveTab || initialTab || 'experiments';

  return `
    <div class="py-8 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Header Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-purple-800 to-pink-700 text-white p-8 sm:p-10 shadow-xl">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-3xl space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-purple-100 backdrop-blur-md border border-white/20">
              <i data-lucide="graduation-cap" class="w-4 h-4 text-yellow-300"></i> Course Submissions & Practical Curriculum
            </span>
            
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Academic Experiments & Practical Assignments
            </h1>
            
            <p class="text-purple-100/90 text-sm sm:text-base leading-relaxed">
              Explore 10 Hands-On Java & Web Experiments along with 8 Graded Practical Assignments covering Full-Stack Architecture, JDBC Database Integration, REST APIs, and Responsive UI Engineering.
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <div class="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <i data-lucide="flask-conical" class="w-4 h-4 text-pink-300"></i>
                <span>10 Lab Experiments</span>
              </div>
              <div class="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <i data-lucide="file-check-2" class="w-4 h-4 text-emerald-300"></i>
                <span>8 Practical Assignments</span>
              </div>
              <div class="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <i data-lucide="database" class="w-4 h-4 text-sky-300"></i>
                <span>SQLite DB Connected</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Sub-Tabs -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <div class="flex items-center space-x-3">
            <button 
              onclick="switchCoursesTab('experiments')"
              class="px-5 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 ${
                activeTab === 'experiments'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
              }"
            >
              <i data-lucide="flask-conical" class="w-4 h-4"></i>
              <span>10 Experiments</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'experiments' ? 'bg-purple-800 text-white' : 'bg-purple-100 text-purple-700'}">10</span>
            </button>

            <button 
              onclick="switchCoursesTab('assignments')"
              class="px-5 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 ${
                activeTab === 'assignments'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
              }"
            >
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span>8 Assignments</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] ${activeTab === 'assignments' ? 'bg-purple-800 text-white' : 'bg-purple-100 text-purple-700'}">8</span>
            </button>
          </div>

          <span class="text-xs font-medium text-slate-500 hidden sm:inline">
            Status: <span class="font-bold text-emerald-600">All Modules Completed</span>
          </span>
        </div>

        <!-- Content Area -->
        ${activeTab === 'experiments' ? renderExperimentsGrid() : renderAssignmentsGrid()}

      </div>
    </div>
  `;
}

function switchCoursesTab(tab) {
  window.APP_STATE.coursesActiveTab = tab;
  renderView('courses');
}

// ----------------------------------------------------
// EXPERIMENTS GRID (10 EXPERIMENTS)
// ----------------------------------------------------
function renderExperimentsGrid() {
  const items = WEN_COURSES_DATA.experiments;

  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-slate-900 font-heading">10 Practical Lab Experiments</h2>
        <span class="text-xs text-slate-500 font-medium">All 10 Experiments Implemented in Java & JS</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${items.map(exp => `
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-purple-200 flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  Experiment ${exp.number} • ${exp.category}
                </span>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                  <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-600"></i> ${exp.status}
                </span>
              </div>

              <h3 class="text-base font-bold text-slate-900 font-heading">
                Exp ${exp.number}: ${exp.title}
              </h3>

              <p class="text-xs text-slate-600 leading-relaxed">
                ${exp.description}
              </p>

              <div class="flex flex-wrap gap-1.5 pt-1">
                ${exp.tags.map(tag => `
                  <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    #${tag}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg">
                Grade: ${exp.grade}
              </span>

              <button 
                onclick="openExperimentModal('${exp.id}')"
                class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <span>View Exp ${exp.number} Details</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// ASSIGNMENTS GRID (8 ASSIGNMENTS)
// ----------------------------------------------------
function renderAssignmentsGrid() {
  const items = WEN_COURSES_DATA.assignments;

  return `
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-slate-900 font-heading">8 Graded Practical Assignments</h2>
        <span class="text-xs text-slate-500 font-medium">All 8 Assignments Submitted & Graded</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${items.map(ass => `
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-pink-200 flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                  Assignment ${ass.number} • ${ass.category}
                </span>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                  <i data-lucide="award" class="w-3 h-3 text-emerald-600"></i> ${ass.status}
                </span>
              </div>

              <h3 class="text-base font-bold text-slate-900 font-heading">
                Assignment ${ass.number}: ${ass.title}
              </h3>

              <p class="text-xs text-slate-600 leading-relaxed">
                ${ass.description}
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  ${ass.grade}
                </span>
                <span class="text-slate-400 text-[11px] font-medium">${ass.deadline}</span>
              </div>

              <button 
                onclick="openAssignmentModal('${ass.id}')"
                class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-purple-800 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <span>View Assignment ${ass.number}</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
