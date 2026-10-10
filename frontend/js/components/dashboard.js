/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * User Dashboard Page Component
 */

function renderDashboardView(state) {
  const user = state.currentUser;
  const activeTab = state.activeDashboardTab || 'overview';

  // Saved funding schemes
  const savedSchemes = WEN_DATA.fundingSchemes.filter(s => (user.savedSchemes || []).includes(s.id));
  
  // Registered events
  const registeredEvents = WEN_DATA.events.filter(ev => (user.registeredEvents || []).includes(ev.id));

  // Recommended mentors (different from booked)
  const recommendedMentors = WEN_DATA.mentors.slice(0, 3);

  // My products
  const myProducts = [...(state.customProducts || []), ...(user.myProducts || [])];

  return `
    <div class="space-y-8 pb-16 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      <!-- Top Founder Profile Header Card -->
      <div class="bg-gradient-to-r from-purple-800 via-purple-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          
          <div class="flex items-center gap-5">
            <div class="relative">
              <img src="${user.avatar}" alt="${user.name}" class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-purple-400/40 shadow-lg" />
              <span class="absolute -bottom-2 -right-2 bg-pink-500 text-white p-1 rounded-lg text-xs" title="Verified Founder">
                <i data-lucide="badge-check" class="w-4 h-4"></i>
              </span>
            </div>

            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <h1 class="text-2xl sm:text-3xl font-extrabold font-heading text-white">${user.name}</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  ${user.plan}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-purple-200 font-medium">
                ${user.businessName} • <span class="text-white/80">${user.stage}</span>
              </p>
              <p class="text-xs text-slate-400 flex items-center gap-1 pt-0.5">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-purple-400"></i> ${user.location} | Industry: ${user.industry}
              </p>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button 
              onclick="openModal('listProductModal')"
              class="px-4 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md hover-lift flex items-center gap-1.5"
            >
              <i data-lucide="plus" class="w-4 h-4"></i> Add Product
            </button>
            <button 
              onclick="navigate('mentors')"
              class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs backdrop-blur-xs flex items-center gap-1.5"
            >
              <i data-lucide="calendar" class="w-4 h-4 text-purple-300"></i> Book Mentor
            </button>
            <button 
              onclick="openModal('authModal')"
              class="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs"
              title="Switch Demo Profile"
            >
              <i data-lucide="user-cog" class="w-4 h-4"></i>
            </button>
          </div>

        </div>

        <!-- 4 KPI Metrics Row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-purple-700/50">
          <div class="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
            <span class="text-[11px] text-purple-200 uppercase tracking-wider block">Booked Sessions</span>
            <span class="text-xl sm:text-2xl font-black text-white font-heading">${(user.bookedSessions || []).length} Active</span>
          </div>
          <div class="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
            <span class="text-[11px] text-purple-200 uppercase tracking-wider block">Saved Schemes</span>
            <span class="text-xl sm:text-2xl font-black text-pink-300 font-heading">${(user.savedSchemes || []).length} Bookmarked</span>
          </div>
          <div class="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
            <span class="text-[11px] text-purple-200 uppercase tracking-wider block">My Store Products</span>
            <span class="text-xl sm:text-2xl font-black text-sky-300 font-heading">${myProducts.length} Listed</span>
          </div>
          <div class="bg-white/5 backdrop-blur-xs p-3.5 rounded-2xl border border-white/10">
            <span class="text-[11px] text-purple-200 uppercase tracking-wider block">Upcoming Events</span>
            <span class="text-xl sm:text-2xl font-black text-emerald-300 font-heading">${registeredEvents.length} Passes</span>
          </div>
        </div>

      </div>

      <!-- Dashboard Navigation Tabs -->
      <div class="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button 
          onclick="switchDashboardTab('overview')"
          class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeTab === 'overview' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }"
        >
          <span class="flex items-center gap-1.5"><i data-lucide="layout-grid" class="w-3.5 h-3.5"></i> Overview</span>
        </button>

        <button 
          onclick="switchDashboardTab('sessions')"
          class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeTab === 'sessions' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }"
        >
          <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> Booked Sessions (${(user.bookedSessions || []).length})</span>
        </button>

        <button 
          onclick="switchDashboardTab('schemes')"
          class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeTab === 'schemes' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }"
        >
          <span class="flex items-center gap-1.5"><i data-lucide="coins" class="w-3.5 h-3.5"></i> Saved Schemes (${savedSchemes.length})</span>
        </button>

        <button 
          onclick="switchDashboardTab('products')"
          class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeTab === 'products' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }"
        >
          <span class="flex items-center gap-1.5"><i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i> My Storefront (${myProducts.length})</span>
        </button>

        <button 
          onclick="switchDashboardTab('events')"
          class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeTab === 'events' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }"
        >
          <span class="flex items-center gap-1.5"><i data-lucide="ticket" class="w-3.5 h-3.5"></i> My Events (${registeredEvents.length})</span>
        </button>

        <button 
          onclick="switchDashboardTab('notifications')"
          class="px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeTab === 'notifications' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
          }"
        >
          <span class="flex items-center gap-1.5"><i data-lucide="bell" class="w-3.5 h-3.5"></i> Notifications</span>
        </button>
      </div>

      <!-- TAB CONTENT VIEW -->
      ${renderActiveTabContent(activeTab, state, user, savedSchemes, registeredEvents, myProducts, recommendedMentors)}

    </div>
  `;
}

function renderActiveTabContent(activeTab, state, user, savedSchemes, registeredEvents, myProducts, recommendedMentors) {
  // TAB 1: OVERVIEW
  if (activeTab === 'overview') {
    return `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left 8 Columns -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Upcoming Sessions Card -->
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                <i data-lucide="calendar" class="w-4 h-4 text-purple-600"></i>
                <span>Upcoming Mentor Sessions</span>
              </h3>
              <button onclick="navigate('mentors')" class="text-xs font-bold text-purple-700 hover:underline">
                Book Another
              </button>
            </div>

            ${(user.bookedSessions || []).length === 0 ? `
              <p class="text-xs text-slate-500 py-4 text-center">No active mentor sessions booked. Schedule a strategy session today!</p>
            ` : `
              <div class="space-y-3">
                ${user.bookedSessions.map(session => `
                  <div class="p-4 rounded-2xl border border-purple-100 bg-purple-50/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="space-y-1">
                      <div class="flex items-center gap-2">
                        <h4 class="text-sm font-bold text-slate-900">${session.mentorName}</h4>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          ${session.status}
                        </span>
                      </div>
                      <p class="text-xs text-purple-700 font-medium">${session.mentorRole}</p>
                      <p class="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
                        <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${session.date} • ${session.time}
                      </p>
                      <p class="text-xs text-slate-700 italic pt-0.5">“${session.objective}”</p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                      <a 
                        href="${session.meetLink}" 
                        target="_blank" 
                        class="w-full sm:w-auto px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs text-center shadow-2xs"
                      >
                        Join Video Call
                      </a>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Saved Schemes Quick View -->
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                <i data-lucide="coins" class="w-4 h-4 text-pink-600"></i>
                <span>Saved Funding Schemes (${savedSchemes.length})</span>
              </h3>
              <button onclick="navigate('funding')" class="text-xs font-bold text-pink-600 hover:underline">
                Explore More
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${savedSchemes.slice(0, 2).map(s => `
                <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                    ${s.category}
                  </span>
                  <h4 class="text-xs font-bold text-slate-900 line-clamp-1">${s.name}</h4>
                  <p class="text-xs font-black text-pink-600">${s.fundingAmount}</p>
                  <button 
                    onclick="openFundingModal('${s.id}')"
                    class="w-full py-1.5 rounded-xl border border-pink-200 text-pink-700 font-bold text-[11px] hover:bg-pink-50"
                  >
                    View Application Checklist
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Right 4 Columns: Recommended Mentors & Activity -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Recommended Mentors -->
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-4">
            <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">Recommended for Your Stage</h3>
            <div class="space-y-3">
              ${recommendedMentors.map(m => `
                <div class="p-3 rounded-2xl border border-slate-100 hover:bg-slate-50 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-2.5">
                    <img src="${m.image}" alt="${m.name}" class="w-10 h-10 rounded-xl object-cover ring-1 ring-purple-200" />
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">${m.name}</h4>
                      <p class="text-[10px] text-purple-700 font-medium">${m.expertise}</p>
                    </div>
                  </div>
                  <button 
                    onclick="openBookingModal('${m.id}')"
                    class="px-2.5 py-1.5 rounded-lg bg-purple-50 text-purple-700 font-bold text-[11px] hover:bg-purple-100"
                  >
                    Book
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Community Activity Widget -->
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-soft space-y-3">
            <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">Recent Community Buzz</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Founders in <strong>#Funding Advice</strong> are discussing how to apply for the new Mudra Tarun interest subsidy.
            </p>
            <button 
              onclick="navigate('community')"
              class="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
            >
              Go to Community Feed
            </button>
          </div>

        </div>

      </div>
    `;
  }

  // TAB 2: BOOKED SESSIONS
  if (activeTab === 'sessions') {
    return `
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-slate-900">Your Scheduled Mentor Sessions</h3>
            <p class="text-xs text-slate-500">1-on-1 calls with verified entrepreneurs & executive advisors.</p>
          </div>
          <button onclick="navigate('mentors')" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-2xs">
            + Book New Mentor
          </button>
        </div>

        <div class="space-y-4">
          ${(user.bookedSessions || []).map((s, idx) => `
            <div class="p-5 rounded-2xl border border-purple-100 bg-purple-50/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h4 class="text-base font-bold text-slate-900">${s.mentorName}</h4>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">${s.status}</span>
                </div>
                <p class="text-xs text-purple-700 font-semibold">${s.mentorRole}</p>
                <p class="text-xs text-slate-600 pt-1 font-medium"><i data-lucide="calendar" class="w-3.5 h-3.5 inline text-purple-600"></i> ${s.date} at ${s.time}</p>
                <p class="text-xs text-slate-700 italic pt-1">Session Objective: ${s.objective}</p>
              </div>

              <div class="flex items-center gap-2">
                <a href="${s.meetLink}" target="_blank" class="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-2xs hover:bg-purple-700">
                  Join Google Meet
                </a>
                <button onclick="cancelSession(${idx})" class="px-3 py-2 rounded-xl border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50">
                  Cancel
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // TAB 3: SAVED SCHEMES
  if (activeTab === 'schemes') {
    return `
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-slate-900">Your Bookmarked Funding Schemes</h3>
          <button onclick="navigate('funding')" class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-2xs">
            + Search More Schemes
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${savedSchemes.map(s => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">${s.category}</span>
              <h4 class="text-sm font-bold text-slate-900">${s.name}</h4>
              <p class="text-base font-extrabold text-pink-600">${s.fundingAmount}</p>
              <p class="text-xs text-slate-500 line-clamp-2">${s.description}</p>
              <div class="pt-2 flex items-center justify-between border-t border-slate-100">
                <button onclick="toggleSaveScheme('${s.id}')" class="text-xs font-semibold text-red-600">Remove</button>
                <button onclick="openFundingModal('${s.id}')" class="px-3 py-1.5 rounded-lg bg-pink-600 text-white text-xs font-bold">Details</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // TAB 4: MY PRODUCTS
  if (activeTab === 'products') {
    return `
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-slate-900">My Storefront Listings</h3>
            <p class="text-xs text-slate-500">Products and services listed on the public WEN Marketplace.</p>
          </div>
          <button onclick="openModal('listProductModal')" class="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-2xs">
            + List New Product / Service
          </button>
        </div>

        <div class="space-y-4">
          ${myProducts.map(p => `
            <div class="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700">${p.category}</span>
                <h4 class="text-sm font-bold text-slate-900">${p.title}</h4>
                <p class="text-xs font-black text-slate-900">₹${p.price.toLocaleString('en-IN')}</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Status: Active
                </span>
                <button onclick="navigate('marketplace')" class="text-xs font-bold text-purple-700 hover:underline">
                  View in Marketplace
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // TAB 5: MY EVENTS
  if (activeTab === 'events') {
    return `
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-slate-900">Registered Events & Admission Passes</h3>
          <button onclick="navigate('events')" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs">
            Explore Workshops
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${registeredEvents.map(ev => `
            <div class="bg-white rounded-2xl p-6 border border-purple-100 shadow-soft space-y-4">
              <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">${ev.category}</span>
              <h4 class="text-base font-bold text-slate-900">${ev.title}</h4>
              <p class="text-xs text-purple-700 font-semibold">${ev.date} • ${ev.time}</p>
              <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs text-emerald-700 font-bold">Pass Active</span>
                <button onclick="openTicketModal('${ev.id}')" class="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs">
                  View Pass / QR
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // TAB 6: NOTIFICATIONS
  if (activeTab === 'notifications') {
    return `
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-slate-900">Notifications & Alerts</h3>
          <button onclick="markAllNotificationsRead()" class="text-xs font-bold text-purple-700 hover:underline">
            Mark all as read
          </button>
        </div>

        <div class="space-y-3">
          ${(user.notifications || []).map(n => `
            <div class="p-4 rounded-2xl border ${n.unread ? 'border-purple-200 bg-purple-50/40' : 'border-slate-100 bg-slate-50/40'} flex items-start gap-3">
              <span class="p-2 rounded-xl ${n.unread ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-600'} shrink-0 mt-0.5">
                <i data-lucide="bell" class="w-4 h-4"></i>
              </span>
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h4 class="text-xs font-bold text-slate-900">${n.title}</h4>
                  <span class="text-[10px] text-slate-400">${n.time}</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">${n.message}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '';
}

function switchDashboardTab(tab) {
  window.APP_STATE.activeDashboardTab = tab;
  renderView('dashboard');
}

function cancelSession(index) {
  if (confirm('Are you sure you want to cancel this mentor session?')) {
    window.APP_STATE.currentUser.bookedSessions.splice(index, 1);
    renderView('dashboard');
    showToast('Session cancelled.', 'info');
  }
}

function markAllNotificationsRead() {
  (window.APP_STATE.currentUser.notifications || []).forEach(n => n.unread = false);
  renderView('dashboard');
  showToast('All notifications marked as read.', 'success');
}
