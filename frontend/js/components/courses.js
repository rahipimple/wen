/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Academic Submissions Portal - Hardcoded PDF Submissions (Exp 1-10 & Assignment 1-8)
 */

const HARDCODED_COURSES = {
  documents: [
    { id: "doc-cert", num: "Cert", label: "Certificate", title: "Course Completion Certificate", pdfFile: "pdfs/Certificate.pdf", fileName: "Certificate.pdf", status: "1-Page PDF", pages: "1 Page", date: "Oct 2026", summary: "Official 1-page practical course completion certificate document in PDF format." },
    { id: "doc-index", num: "Index", label: "Index", title: "Experiments & Assignments Index", pdfFile: "pdfs/Index.pdf", fileName: "Index.pdf", status: "1-Page PDF", pages: "1 Page", date: "Oct 2026", summary: "Official 1-page practical lab experiment & assignment index list in PDF format." }
  ],
  experiments: [
    { id: "exp-1", num: 1, label: "Exp 1", title: "Exp 1 PDF Document", pdfFile: "pdfs/Exp1.pdf", fileName: "Exp1.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 1 submission document in PDF format for professor review." },
    { id: "exp-2", num: 2, label: "Exp 2", title: "Exp 2 PDF Document", pdfFile: "pdfs/Exp2.pdf", fileName: "Exp2.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 2 submission document in PDF format for professor review." },
    { id: "exp-3", num: 3, label: "Exp 3", title: "Exp 3 PDF Document", pdfFile: "pdfs/Exp3.pdf", fileName: "Exp3.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 3 submission document in PDF format for professor review." },
    { id: "exp-4", num: 4, label: "Exp 4", title: "Exp 4 PDF Document", pdfFile: "pdfs/Exp4.pdf", fileName: "Exp4.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 4 submission document in PDF format for professor review." },
    { id: "exp-5", num: 5, label: "Exp 5", title: "Exp 5 PDF Document", pdfFile: "pdfs/Exp5.pdf", fileName: "Exp5.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 5 submission document in PDF format for professor review." },
    { id: "exp-6", num: 6, label: "Exp 6", title: "Exp 6 PDF Document", pdfFile: "pdfs/Exp6.pdf", fileName: "Exp6.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 6 submission document in PDF format for professor review." },
    { id: "exp-7", num: 7, label: "Exp 7", title: "Exp 7 PDF Document", pdfFile: "pdfs/Exp7.pdf", fileName: "Exp7.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 7 submission document in PDF format for professor review." },
    { id: "exp-8", num: 8, label: "Exp 8", title: "Exp 8 PDF Document", pdfFile: "pdfs/Exp8.pdf", fileName: "Exp8.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 8 submission document in PDF format for professor review." },
    { id: "exp-9", num: 9, label: "Exp 9", title: "Exp 9 PDF Document", pdfFile: "pdfs/Exp9.pdf", fileName: "Exp9.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 9 submission document in PDF format for professor review." },
    { id: "exp-10", num: 10, label: "Exp 10", title: "Exp 10 PDF Document", pdfFile: "pdfs/Exp10.pdf", fileName: "Exp10.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Lab Experiment 10 submission document in PDF format for professor review." }
  ],
  assignments: [
    { id: "assign-1", num: 1, label: "Assignment 1", title: "Assignment 1 PDF Document", pdfFile: "pdfs/Assignment1.pdf", fileName: "Assignment1.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 1 submission document in PDF format for evaluation." },
    { id: "assign-2", num: 2, label: "Assignment 2", title: "Assignment 2 PDF Document", pdfFile: "pdfs/Assignment2.pdf", fileName: "Assignment2.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 2 submission document in PDF format for evaluation." },
    { id: "assign-3", num: 3, label: "Assignment 3", title: "Assignment 3 PDF Document", pdfFile: "pdfs/Assignment3.pdf", fileName: "Assignment3.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 3 submission document in PDF format for evaluation." },
    { id: "assign-4", num: 4, label: "Assignment 4", title: "Assignment 4 PDF Document", pdfFile: "pdfs/Assignment4.pdf", fileName: "Assignment4.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 4 submission document in PDF format for evaluation." },
    { id: "assign-5", num: 5, label: "Assignment 5", title: "Assignment 5 PDF Document", pdfFile: "pdfs/Assignment5.pdf", fileName: "Assignment5.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 5 submission document in PDF format for evaluation." },
    { id: "assign-6", num: 6, label: "Assignment 6", title: "Assignment 6 PDF Document", pdfFile: "pdfs/Assignment6.pdf", fileName: "Assignment6.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 6 submission document in PDF format for evaluation." },
    { id: "assign-7", num: 7, label: "Assignment 7", title: "Assignment 7 PDF Document", pdfFile: "pdfs/Assignment7.pdf", fileName: "Assignment7.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 7 submission document in PDF format for evaluation." },
    { id: "assign-8", num: 8, label: "Assignment 8", title: "Assignment 8 PDF Document", pdfFile: "pdfs/Assignment8.pdf", fileName: "Assignment8.pdf", status: "PDF Submitted", date: "Oct 2026", summary: "Practical Assignment 8 submission document in PDF format for evaluation." }
  ]
};

function renderCoursesView(state, initialTab = 'experiments') {
  const activeTab = state.coursesActiveTab || initialTab || 'experiments';

  let contentHTML = '';
  if (activeTab === 'assignments') {
    contentHTML = renderHardcodedAssignmentsGrid();
  } else if (activeTab === 'certificate-index') {
    contentHTML = renderHardcodedDocumentsGrid();
  } else {
    contentHTML = renderHardcodedExperimentsGrid();
  }

  return `
    <div class="py-8 bg-slate-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Premium Header Banner -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 via-purple-800 to-pink-700 text-white p-8 sm:p-10 shadow-xl">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-3xl space-y-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-purple-100 backdrop-blur-md border border-white/20">
              <i data-lucide="graduation-cap" class="w-4 h-4 text-yellow-300"></i> Academic PDF Submissions Portal
            </span>
            
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Practical PDF Submissions
            </h1>
            
            <p class="text-purple-100/90 text-sm sm:text-base leading-relaxed">
              PDF Documents for all lab experiments, practical assignments, certificate, and index submitted for evaluation.
            </p>
          </div>
        </div>

        <!-- Clean Navigation Sub-Tabs -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <div class="flex items-center space-x-2 sm:space-x-3 overflow-x-auto">
            <button 
              onclick="switchCoursesTab('experiments')"
              class="px-5 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'experiments'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
              }"
            >
              <i data-lucide="flask-conical" class="w-4 h-4"></i>
              <span>Experiments (10)</span>
            </button>

            <button 
              onclick="switchCoursesTab('assignments')"
              class="px-5 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'assignments'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
              }"
            >
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span>Assignments (8)</span>
            </button>

            <button 
              onclick="switchCoursesTab('certificate-index')"
              class="px-5 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'certificate-index'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-200'
                  : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
              }"
            >
              <i data-lucide="award" class="w-4 h-4 text-amber-500"></i>
              <span>Certificate & Index</span>
            </button>
          </div>

          <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 hidden sm:inline-flex items-center gap-1.5">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> All PDFs Ready
          </span>
        </div>

        <!-- Content Area -->
        ${contentHTML}

      </div>
    </div>
  `;
}

function switchCoursesTab(tab) {
  window.APP_STATE.coursesActiveTab = tab;
  renderView('courses');
}

// ----------------------------------------------------
// EXPERIMENTS PDF GRID (Exp 1 to Exp 10)
// ----------------------------------------------------
function renderHardcodedExperimentsGrid() {
  const items = HARDCODED_COURSES.experiments;

  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${items.map(exp => `
        <div class="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-all hover:border-purple-300 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-heading">
                ${exp.label}
              </span>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> ${exp.status}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
              <i data-lucide="file-text" class="w-5 h-5 text-purple-600 shrink-0"></i>
              <span>${exp.title}</span>
            </h3>

            <p class="text-xs text-slate-600 leading-relaxed">
              ${exp.summary}
            </p>

            <div class="p-3 rounded-xl bg-purple-50 text-purple-900 border border-purple-100 flex items-center justify-between text-xs font-semibold">
              <span class="flex items-center gap-1.5 truncate">
                <i data-lucide="file" class="w-4 h-4 text-purple-600 shrink-0"></i>
                <span class="truncate">${exp.fileName}</span>
              </span>
              <span class="text-purple-700 text-[10px] font-bold bg-purple-200/60 px-2 py-0.5 rounded">PDF</span>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-400 font-medium">${exp.date}</span>

            <button 
              onclick="openHardcodedExpModal('${exp.id}')"
              class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>View PDF</span>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ----------------------------------------------------
// ASSIGNMENTS PDF GRID (Assignment 1 to Assignment 8)
// ----------------------------------------------------
function renderHardcodedAssignmentsGrid() {
  const items = HARDCODED_COURSES.assignments;

  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${items.map(ass => `
        <div class="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm hover:shadow-md transition-all hover:border-pink-300 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-heading">
                ${ass.label}
              </span>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> ${ass.status}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
              <i data-lucide="file-text" class="w-5 h-5 text-pink-600 shrink-0"></i>
              <span>${ass.title}</span>
            </h3>

            <p class="text-xs text-slate-600 leading-relaxed">
              ${ass.summary}
            </p>

            <div class="p-3 rounded-xl bg-pink-50 text-pink-900 border border-pink-100 flex items-center justify-between text-xs font-semibold">
              <span class="flex items-center gap-1.5 truncate">
                <i data-lucide="file" class="w-4 h-4 text-pink-600 shrink-0"></i>
                <span class="truncate">${ass.fileName}</span>
              </span>
              <span class="text-pink-700 text-[10px] font-bold bg-pink-200/60 px-2 py-0.5 rounded">PDF</span>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-400 font-medium">${ass.date}</span>

            <button 
              onclick="openHardcodedAssignModal('${ass.id}')"
              class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-purple-800 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>View PDF</span>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ----------------------------------------------------
// CERTIFICATE & INDEX DOCUMENTS GRID
// ----------------------------------------------------
function renderHardcodedDocumentsGrid() {
  const items = HARDCODED_COURSES.documents;

  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${items.map(doc => `
        <div class="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all hover:border-amber-300 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-heading">
                ${doc.label}
              </span>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> ${doc.status}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
              <i data-lucide="award" class="w-5 h-5 text-amber-600 shrink-0"></i>
              <span>${doc.title}</span>
            </h3>

            <p class="text-xs text-slate-600 leading-relaxed">
              ${doc.summary}
            </p>

            <div class="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-100 flex items-center justify-between text-xs font-semibold">
              <span class="flex items-center gap-1.5 truncate">
                <i data-lucide="file" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <span class="truncate">${doc.fileName}</span>
              </span>
              <span class="text-amber-800 text-[10px] font-bold bg-amber-200/70 px-2 py-0.5 rounded">PDF</span>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-400 font-medium">${doc.date}</span>

            <button 
              onclick="openHardcodedDocModal('${doc.id}')"
              class="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              <span>View PDF</span>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
