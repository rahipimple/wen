/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Pricing & Business Model Page Component
 */

function renderPricingView(state) {
  const isAnnual = state.pricingBillingCycle === 'annual';

  return `
    <div class="space-y-16 pb-16 animate-fade-in">
      
      <!-- Top Hero Header -->
      <section class="bg-gradient-to-b from-purple-50 via-pink-50/30 to-white pt-12 pb-14 border-b border-purple-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
            Affordable, High-Impact Founder Membership
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Invest in Your Growth with <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Transparent, Inclusive Pricing</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every woman with an idea deserves world-class mentorship and funding guidance. Choose our generous free starter plan or unlock all-inclusive 1-on-1 sessions with WEN Premium.
          </p>

          <!-- Billing Cycle Toggle -->
          <div class="pt-6 flex items-center justify-center gap-3">
            <span class="text-xs font-bold ${!isAnnual ? 'text-purple-900' : 'text-slate-500'}">Monthly Billing</span>
            <button 
              onclick="togglePricingCycle()"
              class="w-13 h-7 rounded-full bg-purple-600 p-1 flex items-center transition duration-200 cursor-pointer"
            >
              <div class="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}"></div>
            </button>
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold ${isAnnual ? 'text-purple-900' : 'text-slate-500'}">Annual Billing</span>
              <span class="text-[10px] font-bold bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Save 20% + 2 Months Free</span>
            </div>
          </div>
        </div>
      </section>

      <!-- PRICING TIERS SECTION (Free vs Premium ₹199/month) -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <!-- FREE STARTER PLAN -->
          <div class="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft flex flex-col justify-between space-y-8">
            <div class="space-y-6">
              <div class="space-y-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Starter Tier</span>
                <h3 class="text-2xl font-black text-slate-900 font-heading">FREE PLAN</h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  Ideal for aspiring founders exploring ideas, student innovators, and those starting their entrepreneurial journey.
                </p>
              </div>

              <div class="flex items-baseline gap-1 pt-2 border-b border-slate-100 pb-6">
                <span class="text-4xl font-black text-slate-900 font-heading">₹0</span>
                <span class="text-xs text-slate-400 font-semibold">/ lifetime free</span>
              </div>

              <!-- Feature Inclusions -->
              <div class="space-y-3.5 text-xs text-slate-700">
                <p class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Included with Free Plan:</p>
                
                <div class="flex items-start gap-2.5">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span><strong>Join Community:</strong> Access open forums, discussion feed & post topics.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span><strong>Basic Networking:</strong> Connect with fellow founders in peer groups.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span><strong>Funding Directory:</strong> Browse 40+ curated government schemes & grants.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span><strong>Access Selected Resources:</strong> Standard pitch deck & business canvas guides.</span>
                </div>

                <div class="flex items-start gap-2.5 text-slate-400">
                  <i data-lucide="x" class="w-4 h-4 text-slate-300 shrink-0 mt-0.5"></i>
                  <span>1-on-1 Personalized Mentor Sessions (Paid per session or upgrade)</span>
                </div>

                <div class="flex items-start gap-2.5 text-slate-400">
                  <i data-lucide="x" class="w-4 h-4 text-slate-300 shrink-0 mt-0.5"></i>
                  <span>Priority registration for hands-on bootcamps</span>
                </div>
              </div>
            </div>

            <button 
              onclick="openModal('authModal', 'signup')"
              class="w-full py-3.5 rounded-2xl border-2 border-slate-200 hover:border-purple-600 hover:text-purple-700 text-slate-800 font-bold text-xs transition"
            >
              Get Started Free
            </button>
          </div>

          <!-- PREMIUM PLAN (₹199 / month) -->
          <div class="bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-8 border-2 border-pink-400/60">
            <!-- Decorative Badge -->
            <div class="absolute top-6 right-6">
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold bg-pink-400 text-purple-950 uppercase tracking-wide shadow-md">
                ★ Most Popular & Recommended
              </span>
            </div>

            <div class="space-y-6">
              <div class="space-y-2">
                <span class="text-xs font-bold uppercase tracking-wider text-purple-200">Growth & Acceleration</span>
                <h3 class="text-2xl font-black font-heading">PREMIUM PLAN</h3>
                <p class="text-xs text-purple-100 leading-relaxed">
                  For active founders scaling businesses, seeking catalytic funding, and craving direct mentor guidance.
                </p>
              </div>

              <div class="flex items-baseline gap-2 pt-2 border-b border-purple-600/60 pb-6">
                <span class="text-4xl sm:text-5xl font-black font-heading">
                  ${isAnnual ? '₹1,899' : '₹199'}
                </span>
                <span class="text-xs text-purple-200 font-semibold">
                  ${isAnnual ? '/ year (₹158/month effective)' : '/ month'}
                </span>
              </div>

              <!-- Feature Inclusions -->
              <div class="space-y-3.5 text-xs text-purple-100">
                <p class="font-bold text-white uppercase tracking-wider text-[11px]">Everything in Free, plus:</p>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-pink-300 shrink-0 mt-0.5"></i>
                  <span><strong class="text-white">1-on-1 Mentor Sessions:</strong> Book 2 private 45-min sessions every month with top industry veterans.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-pink-300 shrink-0 mt-0.5"></i>
                  <span><strong class="text-white">Advanced Workshops & Bootcamps:</strong> Free access to intensive cohorts (Digital ads, FinTech, Legal).</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-pink-300 shrink-0 mt-0.5"></i>
                  <span><strong class="text-white">Priority Event Access:</strong> Reserved Q&A slots with angel investors, speakers, and VIP networking lounges.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-pink-300 shrink-0 mt-0.5"></i>
                  <span><strong class="text-white">Premium Resources:</strong> Financial modeling spreadsheets, editable legal founders agreements & pitch teardowns.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-pink-300 shrink-0 mt-0.5"></i>
                  <span><strong class="text-white">Storefront Verification:</strong> Certified “WEN Verified Founder” badge on your marketplace products.</span>
                </div>

                <div class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-pink-300 shrink-0 mt-0.5"></i>
                  <span><strong class="text-white">Grant Proposal Review:</strong> 1 complimentary review of your government grant/loan application.</span>
                </div>
              </div>
            </div>

            <button 
              onclick="openModal('upgradeModal')"
              class="w-full py-4 rounded-2xl bg-white hover:bg-pink-50 text-purple-950 font-extrabold text-xs shadow-xl hover-lift flex items-center justify-center gap-2"
            >
              <i data-lucide="sparkles" class="w-4 h-4 text-pink-600"></i>
              <span>Upgrade to Premium (${isAnnual ? '₹1,899/Yr' : '₹199/Mo'})</span>
            </button>
          </div>

        </div>
      </section>

      <!-- STARTUP MONETIZATION & BUSINESS MODEL BREAKDOWN (College & Investor Presentation Ready) -->
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft space-y-8">
          
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">Startup Sustainability & Economics</span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Our 3-Pillar Business Model
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              How Women Entrepreneur Network (WEN) operates as a financially sustainable, high-impact enterprise.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Pillar 1: Memberships -->
            <div class="p-6 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-3">
              <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                <i data-lucide="credit-card" class="w-5 h-5"></i>
              </div>
              <h4 class="text-base font-bold text-slate-900">1. Premium Subscriptions</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Micro-subscription fee of ₹199/month democratizes mentorship while generating predictable recurring revenue (ARR) to maintain platform infrastructure.
              </p>
              <span class="inline-block text-[11px] font-bold text-purple-700 mt-1">~35% Projected Revenue</span>
            </div>

            <!-- Pillar 2: Marketplace Commission -->
            <div class="p-6 rounded-2xl bg-pink-50/70 border border-pink-100 space-y-3">
              <div class="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center">
                <i data-lucide="percent" class="w-5 h-5"></i>
              </div>
              <h4 class="text-base font-bold text-slate-900">2. Storefront Commission</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                A low, founder-friendly 3% to 5% facilitation fee on customer transactions and corporate bulk gifting orders routed through the WEN storefront.
              </p>
              <span class="inline-block text-[11px] font-bold text-pink-700 mt-1">~25% Projected Revenue</span>
            </div>

            <!-- Pillar 3: Corporate & Bank Sponsorships -->
            <div class="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <div class="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                <i data-lucide="landmark" class="w-5 h-5"></i>
              </div>
              <h4 class="text-base font-bold text-slate-900">3. Bank & Corporate Alliances</h4>
              <p class="text-xs text-slate-600 leading-relaxed">
                Sponsorships and CSR grants from banking institutions (e.g. SIDBI, HDFC SmartUp), cloud tech giants (Google for Startups, AWS), and women-focused foundations.
              </p>
              <span class="inline-block text-[11px] font-bold text-sky-700 mt-1">~40% Projected Revenue</span>
            </div>

          </div>

        </div>
      </section>

      <!-- FREQUENTLY ASKED QUESTIONS ACCORDION -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 space-y-2">
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading">Frequently Asked Questions</h2>
          <p class="text-xs sm:text-sm text-slate-500">Everything you need to know about joining and scaling with WEN.</p>
        </div>

        <div class="space-y-4">
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <h4 class="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span>Can I join if I only have an idea and haven't registered a company yet?</span>
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Absolutely! Over 35% of our community members are aspiring entrepreneurs and college students. We help you validate your concept, draft your business plan, and guide you through company incorporation.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <h4 class="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span>How do 1-on-1 mentor sessions work under the ₹199/mo plan?</span>
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Premium members receive 2 session booking credits per month. You can select any mentor from our directory, pick an available calendar slot, submit your agenda in advance, and join over private video call.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <h4 class="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span>How does WEN help with government schemes like Mudra and Stand-Up India?</span>
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              We provide clear checklists of required documents, sample 3-year cash flow projections, and connect you with CA mentors who audit your proposal before you apply to the bank or portal.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <h4 class="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span>Can I cancel or pause my Premium subscription anytime?</span>
              <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Yes, you can cancel or switch to the Free Plan anytime directly from your Founder Dashboard with a single click. No lock-in periods and no hidden fees.
            </p>
          </div>
        </div>
      </section>

    </div>
  `;
}

function togglePricingCycle() {
  window.APP_STATE.pricingBillingCycle = window.APP_STATE.pricingBillingCycle === 'annual' ? 'monthly' : 'annual';
  renderView('pricing');
}
