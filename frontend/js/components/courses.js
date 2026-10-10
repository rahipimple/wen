/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Plain Academic Upload Slots: Exp 1 - 10 & Assignment 1 - 8
 */

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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <!-- Plain Simple Navigation Sub-Tabs -->
        <div class="flex items-center space-x-3 border-b border-slate-200 pb-4">
          <button 
            onclick="switchCoursesTab('experiments')"
            class="px-6 py-2.5 rounded-2xl font-bold text-xs transition-all ${
              activeTab === 'experiments'
                ? 'bg-purple-700 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
            }"
          >
            Experiments
          </button>

          <button 
            onclick="switchCoursesTab('assignments')"
            class="px-6 py-2.5 rounded-2xl font-bold text-xs transition-all ${
              activeTab === 'assignments'
                ? 'bg-purple-700 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
            }"
          >
            Assignments
          </button>
        </div>

        <!-- Plain Slots Grid -->
        ${activeTab === 'experiments' ? renderPlainExperimentSlots() : renderPlainAssignmentSlots()}

      </div>
    </div>
  `;
}

function switchCoursesTab(tab) {
  window.APP_STATE.coursesActiveTab = tab;
  renderView('courses');
}

// ----------------------------------------------------
// PLAIN EXPERIMENTS (Exp 1 to Exp 10)
// ----------------------------------------------------
function renderPlainExperimentSlots() {
  const uploaded = getUploadedSlots('experiments');

  const slots = Array.from({ length: 10 }, (_, i) => i + 1);

  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${slots.map(num => {
        const slotData = uploaded[num] || null;
        return `
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-extrabold text-slate-900 font-heading">
                Exp ${num}
              </h3>
              <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                slotData ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
              }">
                ${slotData ? 'Uploaded' : 'Pending'}
              </span>
            </div>

            <form onsubmit="handlePlainSlotUpload(event, 'experiments', ${num})" class="space-y-3">
              <div>
                <input 
                  type="file" 
                  name="file"
                  onchange="handlePlainFileSelected(event, 'exp-name-${num}')"
                  class="w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 cursor-pointer"
                />
                <p id="exp-name-${num}" class="text-[11px] text-purple-700 font-medium mt-1 truncate">
                  ${slotData && slotData.fileName ? `File: ${slotData.fileName}` : ''}
                </p>
              </div>

              <button 
                type="submit" 
                class="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-xs transition"
              >
                ${slotData ? 'Re-upload Exp ' + num : 'Upload Exp ' + num}
              </button>
            </form>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ----------------------------------------------------
// PLAIN ASSIGNMENTS (Assignment 1 to Assignment 8)
// ----------------------------------------------------
function renderPlainAssignmentSlots() {
  const uploaded = getUploadedSlots('assignments');

  const slots = Array.from({ length: 8 }, (_, i) => i + 1);

  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${slots.map(num => {
        const slotData = uploaded[num] || null;
        return `
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-extrabold text-slate-900 font-heading">
                Assignment ${num}
              </h3>
              <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                slotData ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
              }">
                ${slotData ? 'Uploaded' : 'Pending'}
              </span>
            </div>

            <form onsubmit="handlePlainSlotUpload(event, 'assignments', ${num})" class="space-y-3">
              <div>
                <input 
                  type="file" 
                  name="file"
                  onchange="handlePlainFileSelected(event, 'ass-name-${num}')"
                  class="w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 cursor-pointer"
                />
                <p id="ass-name-${num}" class="text-[11px] text-pink-700 font-medium mt-1 truncate">
                  ${slotData && slotData.fileName ? `File: ${slotData.fileName}` : ''}
                </p>
              </div>

              <button 
                type="submit" 
                class="w-full py-2 rounded-xl bg-slate-900 hover:bg-purple-800 text-white font-bold text-xs shadow-xs transition"
              >
                ${slotData ? 'Re-upload Assignment ' + num : 'Upload Assignment ' + num}
              </button>
            </form>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function handlePlainFileSelected(e, targetId) {
  const file = e.target.files[0];
  const targetEl = document.getElementById(targetId);
  if (file && targetEl) {
    targetEl.innerText = `Selected: ${file.name}`;
  }
}

function handlePlainSlotUpload(e, type, num) {
  e.preventDefault();
  const form = e.target;
  const fileInput = form.file;
  const labelName = type === 'experiments' ? `Exp ${num}` : `Assignment ${num}`;
  const fileName = fileInput.files[0] ? fileInput.files[0].name : (getUploadedSlots(type)[num]?.fileName || `${labelName}_Submission.pdf`);

  if (!window.APP_STATE.uploadedSlots) {
    window.APP_STATE.uploadedSlots = { experiments: {}, assignments: {} };
  }
  if (!window.APP_STATE.uploadedSlots[type]) {
    window.APP_STATE.uploadedSlots[type] = {};
  }

  window.APP_STATE.uploadedSlots[type][num] = {
    fileName,
    timestamp: new Date().toLocaleDateString()
  };

  persistState();
  showToast(`${labelName} uploaded successfully!`, 'success');
  renderView('courses');
}
