/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Workshops & Events Page Component
 */

function renderEventsView(state) {
  const activeCategory = state.eventCategoryFilter || 'All';
  const categories = ['All', 'Webinars', 'Bootcamps', 'Networking Meetups'];

  const allEvents = WEN_DATA.events;

  const filteredEvents = allEvents.filter(ev => {
    if (activeCategory === 'All') return true;
    return ev.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return `
    <div class="space-y-12 pb-16 animate-fade-in">
      
      <!-- Top Hero Header -->
      <section class="bg-gradient-to-b from-purple-50 via-pink-50/30 to-white pt-12 pb-14 border-b border-purple-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
            Practical Skill Development
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Live Workshops, Bootcamps & <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Founder Masterclasses</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Gain immediate, hands-on mastery in performance marketing, financial modeling, investor pitching, and digital growth with industry leaders.
          </p>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
            ${categories.map(cat => {
              const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
              return `
                <button 
                  onclick="setEventCategoryFilter('${cat}')"
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

      <!-- Main Events Grid Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex items-center justify-between mb-8 bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-xs">
          <span class="font-bold text-purple-900">Showing ${filteredEvents.length} Scheduled Sessions (${activeCategory})</span>
          <span class="text-slate-600 font-medium">All live sessions include downloadable slide recordings & toolkits</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${filteredEvents.map(ev => {
            const isRegistered = (state.currentUser.registeredEvents || []).includes(ev.id);

            return `
              <div class="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between overflow-hidden transition-all">
                
                <div class="p-6 sm:p-8 space-y-5">
                  
                  <!-- Badges Bar -->
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                      ${ev.category}
                    </span>
                    <span class="text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <i data-lucide="video" class="w-3.5 h-3.5"></i> ${ev.type}
                    </span>
                  </div>

                  <!-- Title & Date Matrix -->
                  <div class="space-y-2">
                    <h3 class="text-lg sm:text-xl font-bold text-slate-900 leading-snug">${ev.title}</h3>
                    
                    <div class="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 pt-1 font-semibold">
                      <span class="flex items-center gap-1.5 text-purple-700">
                        <i data-lucide="calendar" class="w-4 h-4"></i> ${ev.date}
                      </span>
                      <span class="flex items-center gap-1.5 text-slate-500">
                        <i data-lucide="clock" class="w-4 h-4"></i> ${ev.time}
                      </span>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${ev.description}</p>

                  <!-- Speaker Profile -->
                  <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <img src="${ev.speakerImg}" alt="${ev.speaker}" class="w-12 h-12 rounded-xl object-cover ring-2 ring-purple-100" />
                    <div>
                      <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Lead Instructor</span>
                      <h4 class="text-xs sm:text-sm font-bold text-slate-900">${ev.speaker}</h4>
                      <p class="text-[11px] text-purple-600 font-medium">${ev.speakerRole}</p>
                    </div>
                  </div>

                </div>

                <!-- Footer / Action Area -->
                <div class="p-6 pt-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <div>
                    <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Ticket Pricing</span>
                    <span class="text-xs font-extrabold text-slate-800">${ev.price}</span>
                  </div>

                  ${isRegistered ? `
                    <div class="flex items-center gap-2">
                      <span class="px-3.5 py-2 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                        <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Registered
                      </span>
                      <button 
                        onclick="openTicketModal('${ev.id}')"
                        class="px-3 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50 text-xs font-bold"
                      >
                        View Ticket
                      </button>
                    </div>
                  ` : `
                    <button 
                      onclick="openRegisterEventModal('${ev.id}')"
                      class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-2xs hover-lift flex items-center gap-1.5"
                    >
                      <span>Register Now</span>
                      <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                  `}
                </div>

              </div>
            `;
          }).join('')}
        </div>

        <!-- Corporate & Campus Host Callout -->
        <div class="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-1 text-center md:text-left">
            <h4 class="text-base font-bold text-slate-900">Want to Host a WEN Workshop at Your Campus or Incubator?</h4>
            <p class="text-xs text-slate-500">We partner with universities, women cell initiatives, and co-working hubs across 65+ Indian cities.</p>
          </div>
          <button 
            onclick="showToast('Thank you! Our partnership team will contact you within 24 hours.', 'info')"
            class="px-5 py-2.5 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50 font-bold text-xs shrink-0"
          >
            Partner as Host
          </button>
        </div>

      </section>

    </div>
  `;
}

function setEventCategoryFilter(cat) {
  window.APP_STATE.eventCategoryFilter = cat;
  renderView('events');
}
