/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Home Page View Component
 */

function renderHomeView(state) {
  const stats = WEN_DATA.stats;
  const problems = WEN_DATA.problemsSolutions;
  const targetUsers = WEN_DATA.targetUsers;
  const featuredMentors = WEN_DATA.mentors.slice(0, 3);
  const featuredSchemes = WEN_DATA.fundingSchemes.slice(0, 3);
  const trendingProducts = WEN_DATA.products.slice(0, 4);
  const testimonials = WEN_DATA.testimonials;

  return `
    <div class="space-y-20 pb-16">
      
      <!-- HERO SECTION -->
      <section class="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-hero border-b border-purple-100/70">
        <!-- Subtle Decorative Background Circles -->
        <div class="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-purple-200/30 via-pink-200/20 to-sky-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div class="absolute -top-10 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-2xl -z-10 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200 shadow-2xs text-xs font-semibold text-purple-800">
                <span class="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                <span>Connecting Over 5,200+ Women Founders Across India</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-heading">
                Empowering Women to <br class="hidden sm:inline"/>
                <span class="text-gradient-wen">Build, Connect & Grow.</span>
              </h1>

              <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect with mentors, discover funding opportunities, showcase your business and grow with a community of women entrepreneurs.
              </p>

              <!-- Hero Action Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onclick="openModal('authModal', 'signup')"
                  class="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white font-bold text-sm shadow-md hover-lift flex items-center justify-center gap-2.5 group"
                >
                  <span>Join WEN</span>
                  <i data-lucide="sparkles" class="w-4 h-4 text-pink-200 group-hover:rotate-12 transition"></i>
                </button>

                <button 
                  onclick="navigate('mentors')"
                  class="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white border border-purple-200 hover:border-purple-300 text-purple-800 font-bold text-sm shadow-2xs hover:bg-purple-50/50 hover-lift flex items-center justify-center gap-2"
                >
                  <i data-lucide="compass" class="w-4 h-4 text-purple-600"></i>
                  <span>Explore Mentors</span>
                </button>
              </div>

              <!-- Quick Trust Indicators -->
              <div class="pt-6 border-t border-purple-200/50 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <p class="text-xl sm:text-2xl font-black text-purple-900 font-heading">${stats.entrepreneurs}</p>
                  <p class="text-xs text-slate-500 font-medium">Founders Joined</p>
                </div>
                <div>
                  <p class="text-xl sm:text-2xl font-black text-pink-600 font-heading">${stats.fundingFacilitated}</p>
                  <p class="text-xs text-slate-500 font-medium">Funding Unlocked</p>
                </div>
                <div>
                  <p class="text-xl sm:text-2xl font-black text-sky-700 font-heading">${stats.mentorsCount}</p>
                  <p class="text-xs text-slate-500 font-medium">Expert Mentors</p>
                </div>
              </div>

            </div>

            <!-- Right Hero Visual Illustration & Interactive Badges -->
            <div class="lg:col-span-5 relative">
              
              <div class="relative mx-auto max-w-md lg:max-w-none">
                
                <!-- Main Visual Card Frame -->
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-purple-100 via-white to-pink-100 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                    alt="Women Entrepreneur Network" 
                    class="w-full h-96 object-cover rounded-2xl"
                  />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-2xl flex flex-col justify-end p-6 text-white">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white mb-2 w-max">
                      <i data-lucide="award" class="w-3.5 h-3.5 text-yellow-300"></i> Featured Founder
                    </span>
                    <p class="text-lg font-bold">Radhika Kulkarni & Community</p>
                    <p class="text-xs text-purple-200">Scaling Women-Led Businesses from ₹0 to ₹50Cr ARR</p>
                  </div>
                </div>

                <!-- Floating Interactive Feature Badges -->
                <!-- Badge 1: Mentorship -->
                <div class="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3 animate-fade-in hover-lift cursor-pointer" onclick="navigate('mentors')">
                  <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <i data-lucide="compass" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-slate-800">1-on-1 Guidance</p>
                    <p class="text-[11px] text-purple-600 font-medium">480+ Vetted Mentors</p>
                  </div>
                </div>

                <!-- Badge 2: Grants -->
                <div class="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 animate-fade-in hover-lift cursor-pointer" onclick="navigate('funding')">
                  <div class="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                    <i data-lucide="landmark" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="text-xs font-bold text-slate-800">Collateral-Free Grants</p>
                    <p class="text-[11px] text-pink-600 font-medium">Up to ₹1 Cr Schemes</p>
                  </div>
                </div>

                <!-- Badge 3: Marketplace -->
                <div class="hidden sm:flex absolute bottom-24 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-sky-100 items-center gap-2.5 cursor-pointer" onclick="navigate('marketplace')">
                  <div class="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                    <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                  </div>
                  <div class="text-left">
                    <p class="text-xs font-bold text-slate-800">Storefront</p>
                    <p class="text-[10px] text-slate-500">1,350+ Products</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- 4 CORE PILLARS SECTION (Below Hero as required) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Pillar 1: Find a Mentor -->
          <div 
            onclick="navigate('mentors')"
            class="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card-hover border border-purple-100/80 hover-lift cursor-pointer group transition-all"
          >
            <div class="w-13 h-13 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
              <i data-lucide="compass" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1.5 font-heading flex items-center justify-between">
              <span>Find a Mentor</span>
              <i data-lucide="chevron-right" class="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition"></i>
            </h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Book private 1-on-1 strategy sessions with industry executives and successful women entrepreneurs.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-purple-700">
              <span>Browse 480+ Mentors</span>
            </div>
          </div>

          <!-- Pillar 2: Discover Funding -->
          <div 
            onclick="navigate('funding')"
            class="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card-hover border border-pink-100/80 hover-lift cursor-pointer group transition-all"
          >
            <div class="w-13 h-13 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4 group-hover:bg-pink-600 group-hover:text-white transition">
              <i data-lucide="coins" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1.5 font-heading flex items-center justify-between">
              <span>Discover Funding</span>
              <i data-lucide="chevron-right" class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition"></i>
            </h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Explore government subsidies, collateral-free loans, non-dilutive grants, and women angel syndicates.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-pink-600">
              <span>Explore 40+ Schemes</span>
            </div>
          </div>

          <!-- Pillar 3: Grow Your Business -->
          <div 
            onclick="navigate('marketplace')"
            class="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card-hover border border-sky-100/80 hover-lift cursor-pointer group transition-all"
          >
            <div class="w-13 h-13 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
              <i data-lucide="shopping-bag" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1.5 font-heading flex items-center justify-between">
              <span>Grow Your Business</span>
              <i data-lucide="chevron-right" class="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition"></i>
            </h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Showcase your handmade, culinary, fashion, and tech services to buyers, corporate partners, and allies.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-700">
              <span>Visit Marketplace</span>
            </div>
          </div>

          <!-- Pillar 4: Join the Community -->
          <div 
            onclick="navigate('community')"
            class="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card-hover border border-emerald-100/80 hover-lift cursor-pointer group transition-all"
          >
            <div class="w-13 h-13 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
              <i data-lucide="users" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1.5 font-heading flex items-center justify-between">
              <span>Join the Community</span>
              <i data-lucide="chevron-right" class="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition"></i>
            </h3>
            <p class="text-xs text-slate-500 leading-relaxed">
              Connect with fellow founders, exchange practical tips, find co-founders, and attend local chapters.
            </p>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
              <span>Connect Now</span>
            </div>
          </div>

        </div>
      </section>

      <!-- PROBLEM → SOLUTION MATRIX SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 uppercase tracking-wide">
            The Startup Reality & Our Solution
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            Solving the 5 Core Barriers Faced by Women Entrepreneurs
          </h2>
          <p class="text-sm sm:text-base text-slate-600">
            Women-owned businesses represent the highest untapped potential in our economy. WEN systematically eliminates the hurdles preventing them from thriving.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${problems.map((item, idx) => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:border-purple-200 hover:shadow-soft transition-all space-y-4">
              <div class="flex items-center justify-between">
                <span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                  0${idx + 1}
                </span>
                <span class="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md">
                  Barrier & Fix
                </span>
              </div>
              
              <!-- Problem Block -->
              <div class="space-y-1.5 border-l-2 border-red-300 pl-3">
                <p class="text-xs font-bold text-red-700 uppercase tracking-wider">Problem:</p>
                <h4 class="text-sm font-bold text-slate-900">${item.problem}</h4>
                <p class="text-xs text-slate-500 leading-relaxed">${item.problemDesc}</p>
              </div>

              <!-- Solution Block -->
              <div class="space-y-1.5 border-l-2 border-emerald-400 pl-3 pt-1">
                <p class="text-xs font-bold text-emerald-700 uppercase tracking-wider">WEN Solution:</p>
                <h4 class="text-sm font-bold text-slate-900">${item.solution}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${item.solutionDesc}</p>
              </div>
            </div>
          `).join('')}

          <!-- 6th Special Card: Impact Callout -->
          <div class="bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div class="space-y-3">
              <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <i data-lucide="zap" class="w-5 h-5 text-yellow-300"></i>
              </div>
              <h4 class="text-lg font-bold font-heading">The WEN Acceleration Effect</h4>
              <p class="text-xs text-purple-100 leading-relaxed">
                Founders on WEN reach profitability 2.4x faster and report 85% higher confidence in managing debt, pitching investors, and executing digital campaigns.
              </p>
            </div>
            <button 
              onclick="openModal('authModal', 'signup')"
              class="mt-6 w-full py-2.5 rounded-xl bg-white text-purple-900 font-bold text-xs hover:bg-purple-50 transition shadow-sm"
            >
              Start Free Today
            </button>
          </div>
        </div>
      </section>

      <!-- TARGET USERS SECTION -->
      <section class="bg-slate-50/80 py-16 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">Tailored For Every Stage</span>
            <h2 class="text-3xl font-extrabold text-slate-900 font-heading">Who WEN is Built For</h2>
            <p class="text-xs sm:text-sm text-slate-500">
              Whether you are sketching an idea on a notebook or running a multi-city brand, WEN provides the exact launchpad you need.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            ${targetUsers.map(user => `
              <div class="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-2xs hover-lift flex flex-col justify-between space-y-4">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                      ${user.badge}
                    </span>
                    <i data-lucide="${user.icon}" class="w-5 h-5 text-purple-600"></i>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 font-heading">${user.title}</h4>
                  <p class="text-xs font-semibold text-pink-600">${user.tagline}</p>
                  <p class="text-[11px] text-slate-500 leading-relaxed">${user.desc}</p>
                </div>
                <button 
                  onclick="openModal('authModal', 'signup')"
                  class="text-[11px] font-bold text-purple-700 hover:text-purple-900 pt-2 border-t border-slate-100 flex items-center justify-between"
                >
                  <span>Explore Pathway</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- FEATURED MENTORS PREVIEW -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">Expert Guidance</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">Learn from Seasoned Mentors</h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">Direct 1-on-1 access to founders, CFOs, and operators who have been there.</p>
          </div>
          <button 
            onclick="navigate('mentors')" 
            class="px-4 py-2 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-50 font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>View All 480+ Mentors</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${featuredMentors.map(m => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-soft hover-lift space-y-4">
              <div class="flex items-start gap-4">
                <img src="${m.image}" alt="${m.name}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-purple-100" />
                <div class="space-y-1">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                    ${m.expertise}
                  </span>
                  <h4 class="text-base font-bold text-slate-900">${m.name}</h4>
                  <p class="text-xs text-slate-500 line-clamp-1">${m.role}</p>
                  <div class="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
                    <span>${m.rating}</span>
                    <span class="text-slate-400 font-normal">(${m.reviewsCount} reviews)</span>
                  </div>
                </div>
              </div>
              <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${m.bio}</p>
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-slate-400 block">Next Available</span>
                  <span class="text-xs font-semibold text-purple-700">${m.nextSlot}</span>
                </div>
                <button 
                  onclick="openBookingModal('${m.id}')"
                  class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-2xs"
                >
                  Book Session
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FEATURED FUNDING & SCHEMES PREVIEW -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span class="text-xs font-bold text-pink-600 uppercase tracking-wider">Capital & Grants</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">Funding & Government Schemes</h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">Verified loans, subsidies, and non-dilutive women entrepreneur funds.</p>
          </div>
          <button 
            onclick="navigate('funding')" 
            class="px-4 py-2 rounded-xl border border-pink-200 text-pink-700 hover:bg-pink-50 font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>View All Schemes</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${featuredSchemes.map(s => `
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-pink-700">
                    ${s.category}
                  </span>
                  <span class="text-[10px] font-semibold text-slate-500">${s.deadline}</span>
                </div>
                <h4 class="text-base font-bold text-slate-900 line-clamp-2">${s.name}</h4>
                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span class="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Funding Size</span>
                  <span class="text-sm font-extrabold text-slate-900 text-gradient-wen">${s.fundingAmount}</span>
                </div>
                <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${s.description}</p>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onclick="toggleSaveScheme('${s.id}')"
                  class="text-xs text-slate-500 hover:text-pink-600 flex items-center gap-1 font-medium"
                >
                  <i data-lucide="bookmark" class="w-4 h-4 ${state.currentUser.savedSchemes.includes(s.id) ? 'fill-pink-600 text-pink-600' : ''}"></i>
                  <span>${state.currentUser.savedSchemes.includes(s.id) ? 'Saved' : 'Save'}</span>
                </button>
                <button 
                  onclick="openFundingModal('${s.id}')"
                  class="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-2xs"
                >
                  View Details
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- MARKETPLACE PREVIEW -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Support Women-Owned</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">Trending on the WEN Storefront</h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">Discover handcrafted goods, organic foods, fashion, and business services.</p>
          </div>
          <button 
            onclick="navigate('marketplace')" 
            class="px-4 py-2 rounded-xl border border-sky-200 text-sky-700 hover:bg-sky-50 font-bold text-xs flex items-center gap-1.5 shrink-0"
          >
            <span>Explore All Products</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${trendingProducts.map(p => `
            <div class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between">
              <div>
                <div class="relative h-48 overflow-hidden bg-slate-100">
                  <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  <span class="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 shadow-xs">
                    ${p.category}
                  </span>
                </div>
                <div class="p-4 space-y-2">
                  <p class="text-[11px] text-purple-600 font-semibold truncate">${p.businessName} • by ${p.founderName}</p>
                  <h4 class="text-xs font-bold text-slate-900 line-clamp-1">${p.title}</h4>
                  <div class="flex items-baseline gap-2">
                    <span class="text-sm font-black text-slate-900">₹${p.price}</span>
                    <span class="text-[11px] text-slate-400 line-through">₹${p.originalPrice}</span>
                  </div>
                </div>
              </div>

              <div class="p-4 pt-0 flex items-center gap-2">
                <button 
                  onclick="openProductModal('${p.id}')"
                  class="w-1/2 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs"
                >
                  View
                </button>
                <button 
                  onclick="openEnquiryModal('${p.id}')"
                  class="w-1/2 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-2xs"
                >
                  Enquire
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- TESTIMONIALS SECTION -->
      <section class="bg-purple-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl"></div>

        <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-bold uppercase tracking-wider text-purple-300">Member Testimonials</span>
          <h2 class="text-3xl font-extrabold font-heading">Real Stories. Real Impact.</h2>
          <p class="text-xs sm:text-sm text-purple-200">How Women Entrepreneur Network changes the game for female-led businesses.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          ${testimonials.map(t => `
            <div class="bg-purple-800/60 backdrop-blur-md rounded-2xl p-6 border border-purple-700/60 flex flex-col justify-between space-y-4">
              <div class="space-y-3">
                <div class="flex items-center gap-1 text-amber-400">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <p class="text-xs text-purple-100 italic leading-relaxed">“${t.quote}”</p>
              </div>

              <div class="pt-3 border-t border-purple-700/50 flex items-center gap-3">
                <img src="${t.avatar}" alt="${t.author}" class="w-10 h-10 rounded-full object-cover ring-2 ring-pink-400" />
                <div>
                  <p class="text-xs font-bold text-white">${t.author}</p>
                  <p class="text-[11px] text-purple-300">${t.business}</p>
                  <span class="inline-block text-[10px] font-semibold text-pink-300 mt-0.5">${t.stats}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FINAL BIG CALL TO ACTION -->
      <section class="max-w-5xl mx-auto px-4 text-center space-y-6 pt-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
          <i data-lucide="heart" class="w-3.5 h-3.5 fill-current"></i> Join the Movement Today
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
          Ready to Build Your Venture with the Support You Deserve?
        </h2>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Sign up today to join our supportive founder network, schedule your first 1-on-1 mentor strategy session, and discover non-dilutive grants.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button 
            onclick="openModal('authModal', 'signup')"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white font-bold text-sm shadow-lg hover-lift flex items-center justify-center gap-2"
          >
            <span>Create Your Free Founder Account</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
          <button 
            onclick="navigate('about')"
            class="w-full sm:w-auto px-6 py-4 rounded-2xl border border-slate-200 hover:bg-slate-50 font-bold text-sm text-slate-700"
          >
            Read Our Mission & Vision
          </button>
        </div>
      </section>

    </div>
  `;
}
