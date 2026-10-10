/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Mentors Page Component
 */

function renderMentorsView(state) {
  const activeCategory = state.mentorCategoryFilter || 'All';
  const searchQuery = (state.mentorSearchQuery || '').toLowerCase().trim();

  const categories = ['All', 'Marketing', 'Finance', 'Technology', 'Business Strategy', 'Leadership'];

  // Filter mentors
  const filteredMentors = WEN_DATA.mentors.filter(mentor => {
    const matchesCategory = activeCategory === 'All' || mentor.expertise.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = !searchQuery || 
      mentor.name.toLowerCase().includes(searchQuery) ||
      mentor.role.toLowerCase().includes(searchQuery) ||
      mentor.bio.toLowerCase().includes(searchQuery) ||
      mentor.topics.some(t => t.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesSearch;
  });

  return `
    <div class="space-y-12 pb-16 animate-fade-in">
      
      <!-- Top Hero Header -->
      <section class="bg-gradient-to-b from-purple-50 via-pink-50/30 to-white pt-12 pb-14 border-b border-purple-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
            1-on-1 Personalized Advisory
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Connect with Seasoned <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Women Founders & Industry Leaders</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Overcome operational hurdles, evaluate term sheets, and scale sales. Book direct 1-on-1 video advisory sessions with vetted leaders who know your journey.
          </p>

          <!-- Search & Filter Controls -->
          <div class="pt-6 max-w-2xl mx-auto">
            <div class="relative flex items-center">
              <i data-lucide="search" class="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none"></i>
              <input 
                type="text" 
                id="mentorSearchInput"
                placeholder="Search mentors by name, keyword (e.g. D2C, Angel, MVP, Term Sheet)..."
                value="${state.mentorSearchQuery || ''}"
                oninput="handleMentorSearch(this.value)"
                class="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-purple-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-purple-600 shadow-soft"
              />
              ${searchQuery ? `
                <button onclick="handleMentorSearch('')" class="absolute right-4 text-slate-400 hover:text-slate-600">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              ` : ''}
            </div>
          </div>

          <!-- Category Pills Filter -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
            ${categories.map(cat => {
              const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
              return `
                <button 
                  onclick="setMentorCategoryFilter('${cat}')"
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-purple-700 text-white shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-purple-300 hover:bg-purple-50/50'
                  }"
                >
                  ${cat}
                </button>
              `;
            }).join('')}
          </div>

        </div>
      </section>

      <!-- Main Directory Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Results Counter & Session Policy Notice -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-purple-50/70 p-4 rounded-2xl border border-purple-100 text-xs">
          <div class="flex items-center gap-2 text-purple-900 font-semibold">
            <i data-lucide="compass" class="w-4 h-4 text-purple-600"></i>
            <span>Showing ${filteredMentors.length} Verified Mentors (${activeCategory} category)</span>
          </div>
          <div class="flex items-center gap-3 text-slate-600">
            <span class="flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> 100% Verified Profiles</span>
            <span class="flex items-center gap-1"><i data-lucide="zap" class="w-3.5 h-3.5 text-pink-600"></i> Included with WEN Premium</span>
          </div>
        </div>

        <!-- Mentors Grid -->
        ${filteredMentors.length === 0 ? `
          <div class="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8 space-y-3">
            <i data-lucide="user-x" class="w-12 h-12 text-slate-300 mx-auto"></i>
            <h3 class="text-base font-bold text-slate-800">No mentors match your search</h3>
            <p class="text-xs text-slate-500">Try adjusting your category filter or search keywords.</p>
            <button onclick="setMentorCategoryFilter('All'); handleMentorSearch('');" class="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold">
              Reset Filters
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${filteredMentors.map(m => `
              <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between overflow-hidden transition-all">
                
                <!-- Card Header with Photo & Badge -->
                <div class="p-5 space-y-4">
                  <div class="relative">
                    <img 
                      src="${m.image}" 
                      alt="${m.name}" 
                      class="w-full h-48 object-cover rounded-xl shadow-xs"
                    />
                    <span class="absolute top-2.5 left-2.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-purple-800 shadow-xs">
                      ${m.expertise}
                    </span>
                    <span class="absolute bottom-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 text-white backdrop-blur-xs flex items-center gap-1">
                      <i data-lucide="clock" class="w-3 h-3 text-purple-300"></i> ${m.experience}
                    </span>
                  </div>

                  <!-- Details -->
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <h3 class="text-base font-bold text-slate-900 leading-tight">${m.name}</h3>
                      <div class="flex items-center gap-1 text-xs font-black text-amber-500">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                        <span>${m.rating}</span>
                      </div>
                    </div>
                    <p class="text-xs text-purple-700 font-semibold line-clamp-1">${m.role}</p>
                    <p class="text-[11.5px] text-slate-500 line-clamp-3 leading-relaxed pt-1">${m.bio}</p>
                  </div>

                  <!-- Focus Topics Tags -->
                  <div class="pt-2 flex flex-wrap gap-1">
                    ${m.topics.map(topic => `
                      <span class="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                        ${topic}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <!-- Card Footer with Booking Action -->
                <div class="p-5 pt-3 border-t border-slate-100 bg-slate-50/50 space-y-3">
                  <div class="flex items-center justify-between text-xs">
                    <div>
                      <span class="text-[10px] text-slate-400 block font-medium">Next Slot</span>
                      <span class="font-bold text-slate-700">${m.nextSlot}</span>
                    </div>
                    <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                      ${m.sessionFee}
                    </span>
                  </div>

                  <button 
                    onclick="openBookingModal('${m.id}')"
                    class="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-2xs hover-lift flex items-center justify-center gap-1.5"
                  >
                    <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
                    <span>Book 1-on-1 Session</span>
                  </button>
                </div>

              </div>
            `).join('')}
          </div>
        `}

        <!-- How Mentorship Works Callout -->
        <div class="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-soft">
          <div class="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 class="text-xl font-black text-slate-900 font-heading">How WEN Mentor Connect Works</h3>
            <p class="text-xs text-slate-500">Three simple steps to unlock game-changing advice for your venture.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="space-y-2 p-4">
              <div class="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 font-bold flex items-center justify-center mx-auto text-sm">
                1
              </div>
              <h4 class="text-sm font-bold text-slate-800">Choose Your Mentor</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Browse by domain expertise, industry experience, and upcoming available slots.</p>
            </div>
            <div class="space-y-2 p-4">
              <div class="w-10 h-10 rounded-2xl bg-pink-100 text-pink-600 font-bold flex items-center justify-center mx-auto text-sm">
                2
              </div>
              <h4 class="text-sm font-bold text-slate-800">Set Your Objectives</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Submit your pitch deck, unit economics question, or marketing challenge in advance.</p>
            </div>
            <div class="space-y-2 p-4">
              <div class="w-10 h-10 rounded-2xl bg-sky-100 text-sky-700 font-bold flex items-center justify-center mx-auto text-sm">
                3
              </div>
              <h4 class="text-sm font-bold text-slate-800">Actionable 45-Min Call</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Meet on secure video call, take away structured action items, and receive follow-up notes.</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  `;
}

function handleMentorSearch(value) {
  window.APP_STATE.mentorSearchQuery = value;
  renderView('mentors');
}

function setMentorCategoryFilter(cat) {
  window.APP_STATE.mentorCategoryFilter = cat;
  renderView('mentors');
}
