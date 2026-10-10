/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Academic Submissions Portal: 10 Experiment Upload Slots & 8 Assignment Upload Slots
 */

// Helper to initialize or retrieve uploaded slots from App State
function getUploadedSlots(type) {
  if (!window.APP_STATE.uploadedSlots) {
    window.APP_STATE.uploadedSlots = {
      experiments: {},
      assignments: {}
    };
  }
  return window.APP_STATE.uploadedSlots[type] || {};
}

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
              <i data-lucide="graduation-cap" class="w-4 h-4 text-yellow-300"></i> Professor Review & Evaluation Portal
            </span>
            
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading">
              Practical Upload & Evaluation Slots
            </h1>
            
            <p class="text-purple-100/90 text-sm sm:text-base leading-relaxed">
              Upload your files, code submissions, and lab reports into the designated slots below for professor evaluation and grading.
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <div class="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <i data-lucide="flask-conical" class="w-4 h-4 text-pink-300"></i>
                <span>Experiment Slots Available</span>
              </div>
              <div class="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <i data-lucide="file-check-2" class="w-4 h-4 text-emerald-300"></i>
                <span>Assignment Slots Available</span>
              </div>
              <div class="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <i data-lucide="database" class="w-4 h-4 text-sky-300"></i>
                <span>SQLite DB Connected</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Sub-Tabs (No 10 or 8 written) -->
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <div class="flex items-center space-x-3">
            <button 
              onclick="switchCoursesTab('experiments')"
              class="px-6 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 ${
                activeTab === 'experiments'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
              }"
            >
              <i data-lucide="flask-conical" class="w-4 h-4"></i>
              <span>Experiments</span>
            </button>

            <button 
              onclick="switchCoursesTab('assignments')"
              class="px-6 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 ${
                activeTab === 'assignments'
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-200'
                  : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
              }"
            >
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span>Assignments</span>
            </button>
          </div>

          <span class="text-xs font-medium text-slate-500 hidden sm:inline">
            Portal Status: <span class="font-bold text-emerald-600">Active for Student Uploads</span>
          </span>
        </div>

        <!-- Content Area: Render 10 Experiment Slots or 8 Assignment Slots -->
        ${activeTab === 'experiments' ? renderExperimentSlots() : renderAssignmentSlots()}

      </div>
    </div>
  `;
}

function switchCoursesTab(tab) {
  window.APP_STATE.coursesActiveTab = tab;
  renderView('courses');
}

// ----------------------------------------------------
// 10 EXPERIMENT UPLOAD SLOTS FOR PROFESSORS TO CHECK
// ----------------------------------------------------
function renderExperimentSlots() {
  const uploaded = getUploadedSlots('experiments');

  // Generate 10 slots
  const slots = Array.from({ length: 10 }, (_, i) => {
    const slotNum = i + 1;
    const slotData = uploaded[slotNum] || null;
    return { slotNum, slotData };
  });

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-slate-900 font-heading">Experiment Upload Slots</h2>
          <p class="text-xs text-slate-500">Upload your lab experiment files below for professor verification.</p>
        </div>
        <span class="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-lg border border-purple-100">
          Upload Format: .pdf, .docx, .zip, .java
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${slots.map(({ slotNum, slotData }) => `
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  Experiment Slot #${slotNum}
                </span>
                
                ${slotData ? `
                  <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> Submitted for Review
                  </span>
                ` : `
                  <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100 flex items-center gap-1">
                    <i data-lucide="upload-cloud" class="w-3.5 h-3.5 text-amber-600"></i> Ready for Upload
                  </span>
                `}
              </div>

              <h3 class="text-base font-bold text-slate-900 font-heading">
                ${slotData && slotData.title ? slotData.title : `Experiment Slot #${slotNum}`}
              </h3>

              <form onsubmit="handleSlotUpload(event, 'experiments', ${slotNum})" class="space-y-3 text-xs">
                <div>
                  <label class="block font-semibold text-slate-700 mb-1">Experiment Title / Topic:</label>
                  <input 
                    type="text" 
                    name="title" 
                    required 
                    placeholder="e.g. Exp ${slotNum}: Java Server & Database Integration"
                    value="${slotData && slotData.title ? slotData.title : ''}"
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:border-purple-600" 
                  />
                </div>

                <div>
                  <label class="block font-semibold text-slate-700 mb-1">Select File to Upload (.pdf, .java, .zip):</label>
                  <input 
                    type="file" 
                    name="file" 
                    onchange="handleFileSelected(event, 'exp-file-${slotNum}')"
                    class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                  />
                  <span id="exp-file-${slotNum}" class="text-[11px] text-emerald-600 font-semibold mt-1 block">
                    ${slotData && slotData.fileName ? `Uploaded File: ${slotData.fileName}` : ''}
                  </span>
                </div>

                <div>
                  <label class="block font-semibold text-slate-700 mb-1">Notes / Remarks for Professor:</label>
                  <textarea 
                    name="notes" 
                    rows="2" 
                    placeholder="Add specific notes or instructions for professor grading..."
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:border-purple-600"
                  >${slotData && slotData.notes ? slotData.notes : ''}</textarea>
                </div>

                <div class="pt-2 flex items-center justify-between">
                  ${slotData ? `
                    <span class="text-[10px] text-slate-400 font-medium">Submitted on: ${slotData.timestamp}</span>
                  ` : `
                    <span class="text-[10px] text-slate-400">Status: Pending submission</span>
                  `}

                  <button 
                    type="submit" 
                    class="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <i data-lucide="upload" class="w-3.5 h-3.5"></i>
                    <span>${slotData ? 'Update Submission' : 'Submit to Professor'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 8 ASSIGNMENT UPLOAD SLOTS FOR PROFESSORS TO CHECK
// ----------------------------------------------------
function renderAssignmentSlots() {
  const uploaded = getUploadedSlots('assignments');

  // Generate 8 slots
  const slots = Array.from({ length: 8 }, (_, i) => {
    const slotNum = i + 1;
    const slotData = uploaded[slotNum] || null;
    return { slotNum, slotData };
  });

  return `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-slate-900 font-heading">Assignment Upload Slots</h2>
          <p class="text-xs text-slate-500">Upload your practical assignments below for professor review & evaluation.</p>
        </div>
        <span class="text-xs font-bold text-pink-700 bg-pink-50 px-3 py-1 rounded-lg border border-pink-100">
          Upload Format: .pdf, .docx, .zip
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${slots.map(({ slotNum, slotData }) => `
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
                  Assignment Slot #${slotNum}
                </span>
                
                ${slotData ? `
                  <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                    <i data-lucide="award" class="w-3.5 h-3.5 text-emerald-600"></i> Submitted for Review
                  </span>
                ` : `
                  <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100 flex items-center gap-1">
                    <i data-lucide="upload-cloud" class="w-3.5 h-3.5 text-amber-600"></i> Ready for Upload
                  </span>
                `}
              </div>

              <h3 class="text-base font-bold text-slate-900 font-heading">
                ${slotData && slotData.title ? slotData.title : `Assignment Slot #${slotNum}`}
              </h3>

              <form onsubmit="handleSlotUpload(event, 'assignments', ${slotNum})" class="space-y-3 text-xs">
                <div>
                  <label class="block font-semibold text-slate-700 mb-1">Assignment Title / Topic:</label>
                  <input 
                    type="text" 
                    name="title" 
                    required 
                    placeholder="e.g. Assignment ${slotNum}: Relational Database & Web Architecture"
                    value="${slotData && slotData.title ? slotData.title : ''}"
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:border-pink-600" 
                  />
                </div>

                <div>
                  <label class="block font-semibold text-slate-700 mb-1">Select File to Upload (.pdf, .docx, .zip):</label>
                  <input 
                    type="file" 
                    name="file" 
                    onchange="handleFileSelected(event, 'ass-file-${slotNum}')"
                    class="w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer"
                  />
                  <span id="ass-file-${slotNum}" class="text-[11px] text-emerald-600 font-semibold mt-1 block">
                    ${slotData && slotData.fileName ? `Uploaded File: ${slotData.fileName}` : ''}
                  </span>
                </div>

                <div>
                  <label class="block font-semibold text-slate-700 mb-1">Notes / Remarks for Professor:</label>
                  <textarea 
                    name="notes" 
                    rows="2" 
                    placeholder="Add specific notes or instructions for professor grading..."
                    class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:border-pink-600"
                  >${slotData && slotData.notes ? slotData.notes : ''}</textarea>
                </div>

                <div class="pt-2 flex items-center justify-between">
                  ${slotData ? `
                    <span class="text-[10px] text-slate-400 font-medium">Submitted on: ${slotData.timestamp}</span>
                  ` : `
                    <span class="text-[10px] text-slate-400">Status: Pending submission</span>
                  `}

                  <button 
                    type="submit" 
                    class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-pink-700 text-white font-bold transition flex items-center gap-1.5 shadow-sm"
                  >
                    <i data-lucide="upload" class="w-3.5 h-3.5"></i>
                    <span>${slotData ? 'Update Submission' : 'Submit to Professor'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Handle file selection preview
function handleFileSelected(e, targetId) {
  const file = e.target.files[0];
  const targetEl = document.getElementById(targetId);
  if (file && targetEl) {
    targetEl.innerText = `Selected File: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  }
}

// Handle Slot Submission
function handleSlotUpload(e, type, slotNum) {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const notes = form.notes.value;
  const fileInput = form.file;
  const fileName = fileInput.files[0] ? fileInput.files[0].name : (getUploadedSlots(type)[slotNum]?.fileName || `Submission_Slot_${slotNum}.pdf`);

  const now = new Date();
  const timestamp = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' at ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (!window.APP_STATE.uploadedSlots) {
    window.APP_STATE.uploadedSlots = { experiments: {}, assignments: {} };
  }
  if (!window.APP_STATE.uploadedSlots[type]) {
    window.APP_STATE.uploadedSlots[type] = {};
  }

  window.APP_STATE.uploadedSlots[type][slotNum] = {
    title,
    notes,
    fileName,
    timestamp,
    status: 'Submitted for Professor Review'
  };

  persistState();

  const slotTypeLabel = type === 'experiments' ? 'Experiment' : 'Assignment';
  showToast(`${slotTypeLabel} Slot #${slotNum} ("${title}") submitted to Professor!`, 'success');

  renderView('courses');
}
