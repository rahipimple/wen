/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Navbar Component with Courses Dropdown (10 Experiments & 8 Assignments)
 */

function renderNavbar(currentRoute, state) {
  const user = state.currentUser;
  const unreadNotifs = (user.notifications || []).filter(n => n.unread).length;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses', hasDropdown: true },
    { id: 'mentors', label: 'Mentors' },
    { id: 'funding', label: 'Funding' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'community', label: 'Community' }
  ];

  return `
    <header class="sticky top-0 z-40 glass-nav border-b border-purple-100/80 shadow-sm">
      <!-- Top Announcement Micro-Bar -->
      <div class="bg-gradient-to-r from-purple-800 via-purple-700 to-pink-600 text-white text-xs py-1.5 px-4 shadow-inner">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div class="flex items-center space-x-2.5 font-medium min-w-0">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white backdrop-blur-sm shrink-0">
              <i data-lucide="sparkles" class="w-3 h-3 text-yellow-300"></i> Connect • Learn • Grow
            </span>
            <span class="hidden md:inline text-purple-200/70">|</span>
            <span class="hidden md:inline text-white/95 font-medium text-[11.5px] truncate">
              “Stronger Women • Stronger Businesses • A Brighter Tomorrow”
            </span>
          </div>
          <div class="flex items-center space-x-4 text-[11px] font-medium shrink-0 ml-auto">
            <span class="hidden sm:inline-flex items-center gap-1.5 text-purple-100">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-300"></i> Vetted Mentors & Certified Grants
            </span>
            <button onclick="openModal('authModal')" class="hover:text-yellow-200 transition flex items-center gap-1 font-semibold text-white">
              <span>Join 5,200+ Founders</span>
              <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-[72px]">
          
          <!-- Brand Logo & Identity -->
          <div class="flex items-center space-x-3 cursor-pointer group shrink-0" onclick="navigate('home')">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-sky-400 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 text-lg sm:text-xl tracking-tighter">
                  WEN
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="font-bold text-slate-900 text-base sm:text-lg tracking-tight font-heading group-hover:text-purple-700 transition-colors">Women Entrepreneur Network</span>
                <span class="bg-purple-100 text-purple-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">Startup</span>
              </div>
              <p class="text-[11px] text-slate-500 font-medium tracking-wide hidden sm:block">Digital Platform for Female Founders</p>
            </div>
          </div>

          <!-- Desktop Navigation Links (Uncrowded, Clean Layout) -->
          <div class="hidden lg:flex items-center space-x-1 font-medium text-[13.5px]">
            ${navLinks.map(link => {
              const isActive = currentRoute === link.id || (link.id === 'courses' && currentRoute.startsWith('courses'));
              
              if (link.hasDropdown) {
                return `
                  <div class="relative group">
                    <button 
                      onclick="navigate('courses')"
                      class="px-3.5 py-2 rounded-xl transition-all duration-150 flex items-center gap-1.5 font-semibold ${
                        isActive 
                          ? 'bg-purple-100/80 text-purple-800 font-bold shadow-xs' 
                          : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50/70'
                      }"
                    >
                      <span>Courses</span>
                      <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-purple-600 group-hover:rotate-180 transition-transform"></i>
                    </button>
                    
                    <!-- Courses Dropdown Menu -->
                    <div class="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-purple-100 p-2.5 hidden group-hover:block transition-all z-50 animate-fade-in">
                      <button 
                        onclick="navigate('courses'); switchCoursesTab('experiments');"
                        class="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-purple-50 text-slate-700 hover:text-purple-800 flex items-center gap-3 transition"
                      >
                        <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                          <i data-lucide="flask-conical" class="w-4 h-4"></i>
                        </div>
                        <div>
                          <p class="font-bold text-slate-900">Experiments</p>
                          <p class="text-[10px] text-slate-500 font-normal">Lab Submissions (Exp 1 - 10)</p>
                        </div>
                      </button>

                      <button 
                        onclick="navigate('courses'); switchCoursesTab('assignments');"
                        class="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-pink-50 text-slate-700 hover:text-pink-800 flex items-center gap-3 transition mt-1"
                      >
                        <div class="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                          <i data-lucide="file-text" class="w-4 h-4"></i>
                        </div>
                        <div>
                          <p class="font-bold text-slate-900">Assignments</p>
                          <p class="text-[10px] text-slate-500 font-normal">Practical Work (Assign 1 - 8)</p>
                        </div>
                      </button>

                      <button 
                        onclick="navigate('courses'); switchCoursesTab('certificate-index');"
                        class="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-amber-50 text-slate-700 hover:text-amber-800 flex items-center gap-3 transition mt-1"
                      >
                        <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                          <i data-lucide="award" class="w-4 h-4"></i>
                        </div>
                        <div>
                          <p class="font-bold text-slate-900">Certificate & Index</p>
                          <p class="text-[10px] text-slate-500 font-normal">Academic Documents</p>
                        </div>
                      </button>
                    </div>
                  </div>
                `;
              }

              return `
                <button 
                  onclick="navigate('${link.id}')"
                  class="px-3.5 py-2 rounded-xl transition-all duration-150 ${
                    isActive 
                      ? 'bg-purple-100/80 text-purple-800 font-bold shadow-xs' 
                      : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50/70'
                  }"
                >
                  ${link.label}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Right Action Center -->
          <div class="hidden sm:flex items-center space-x-3">
            
            <!-- Notification Bell -->
            <div class="relative">
              <button 
                onclick="navigate('dashboard'); setTimeout(() => switchDashboardTab('notifications'), 100);"
                title="Notifications"
                class="relative p-2.5 rounded-xl text-slate-600 hover:text-purple-700 hover:bg-purple-50 transition"
              >
                <i data-lucide="bell" class="w-5 h-5"></i>
                ${unreadNotifs > 0 ? `
                  <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-pink-500 rounded-full ring-2 ring-white animate-pulse"></span>
                ` : ''}
              </button>
            </div>

            <!-- User Dashboard / Profile Capsule -->
            <button 
              onclick="navigate('dashboard')"
              class="flex items-center space-x-2.5 pl-2 pr-3.5 py-1.5 rounded-full border border-purple-200 hover:border-purple-400 bg-white/80 hover:bg-purple-50/50 shadow-sm transition"
            >
              <img 
                src="${user.avatar}" 
                alt="${user.name}" 
                class="w-7 h-7 rounded-full object-cover ring-1 ring-purple-300"
              />
              <div class="text-left hidden md:block">
                <p class="text-xs font-semibold text-slate-800 leading-tight">${user.name.split(' ')[0]}</p>
                <p class="text-[10px] text-purple-600 font-medium leading-none">Dashboard</p>
              </div>
              <i data-lucide="layout-dashboard" class="w-4 h-4 text-purple-600"></i>
            </button>

            <!-- DEDICATED NEW USER BUTTON -->
            <button 
              onclick="openModal('authModal', 'new')"
              class="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:to-pink-700 text-white font-extrabold text-xs shadow-md hover-lift transition cursor-pointer"
              title="Add / Register New User into MongoDB"
            >
              <i data-lucide="user-plus" class="w-4 h-4"></i>
              <span>+ Add New User</span>
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex lg:hidden items-center space-x-2">
            <button 
              onclick="navigate('dashboard')"
              class="p-2 rounded-xl text-slate-700 hover:bg-purple-50"
              title="Dashboard"
            >
              <i data-lucide="layout-dashboard" class="w-5 h-5 text-purple-600"></i>
            </button>
            <button 
              id="mobileMenuToggle" 
              onclick="toggleMobileMenu()"
              class="p-2.5 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition"
              aria-label="Toggle navigation menu"
            >
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>

        </div>
      </nav>

      <!-- Mobile Menu Drawer (Collapsible) -->
      <div id="mobileMenuDrawer" class="hidden lg:hidden border-t border-purple-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in">
        <div class="grid grid-cols-2 gap-1.5 pt-1">
          <button 
            onclick="navigate('home'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute === 'home' ? 'bg-purple-100 text-purple-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            Home
          </button>
          <button 
            onclick="navigate('courses'); switchCoursesTab('experiments'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute.startsWith('courses') ? 'bg-purple-100 text-purple-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            🔬 Experiments (10)
          </button>
          <button 
            onclick="navigate('courses'); switchCoursesTab('assignments'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute.startsWith('courses') ? 'bg-purple-100 text-purple-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            📝 Assignments (8)
          </button>
          <button 
            onclick="navigate('courses'); switchCoursesTab('certificate-index'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute.startsWith('courses') ? 'bg-amber-100 text-amber-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            📜 Certificate & Index
          </button>
          <button 
            onclick="navigate('mentors'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute === 'mentors' ? 'bg-purple-100 text-purple-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            Mentors
          </button>
          <button 
            onclick="navigate('funding'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute === 'funding' ? 'bg-purple-100 text-purple-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            Funding
          </button>
          <button 
            onclick="navigate('marketplace'); toggleMobileMenu();"
            class="text-left px-3 py-2.5 rounded-xl text-xs font-semibold ${currentRoute === 'marketplace' ? 'bg-purple-100 text-purple-800' : 'text-slate-700 hover:bg-slate-100'}"
          >
            Marketplace
          </button>
        </div>

        <div class="pt-4 border-t border-slate-100 flex flex-col gap-2">
          <button 
            onclick="navigate('dashboard'); toggleMobileMenu();"
            class="w-full py-2.5 px-4 rounded-xl border border-purple-200 text-purple-700 font-semibold text-xs flex items-center justify-center gap-2 bg-purple-50/50"
          >
            <i data-lucide="layout-dashboard" class="w-4 h-4"></i> Open Dashboard
          </button>
          <button 
            onclick="openModal('authModal'); toggleMobileMenu();"
            class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
          >
            <i data-lucide="user-plus" class="w-4 h-4"></i> Login as New User
          </button>
        </div>
      </div>
    </header>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenuDrawer');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}
