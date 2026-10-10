/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * About WEN Page Component
 */

function renderAboutView() {
  const stats = WEN_DATA.stats;

  return `
    <div class="space-y-16 pb-16 animate-fade-in">
      
      <!-- Top Banner Header -->
      <section class="relative bg-gradient-to-b from-purple-50 via-pink-50/40 to-white pt-12 pb-16 border-b border-purple-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
            About Women Entrepreneur Network
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Catalyzing the Next Generation of <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Women Business Leaders</span>
          </h1>
          <p class="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tagline: <strong class="text-purple-700">“Connect • Learn • Grow”</strong>
          </p>
          <div class="pt-2">
            <span class="inline-block px-4 py-2 rounded-2xl bg-white shadow-2xs border border-purple-200 text-xs font-semibold text-slate-700">
              🌿 “Stronger Women • Stronger Businesses • A Brighter Tomorrow”
            </span>
          </div>
        </div>
      </section>

      <!-- VISION & MISSION DUAL CARDS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Vision Card -->
          <div class="bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div class="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="space-y-4 relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <i data-lucide="eye" class="w-6 h-6 text-pink-300"></i>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-purple-200">Our North Star</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold font-heading">Our Vision</h2>
              <blockquote class="text-lg sm:text-xl font-medium text-purple-100 leading-relaxed italic border-l-4 border-pink-400 pl-4">
                “A future where every woman with an idea has the support, resources and opportunities to build a successful and sustainable business.”
              </blockquote>
            </div>
            <p class="text-xs text-purple-200 mt-6 relative z-10 pt-4 border-t border-purple-600/50">
              We envision an inclusive economic landscape where gender is never a barrier to raising capital, leading technology enterprises, or scaling global trade.
            </p>
          </div>

          <!-- Mission Card -->
          <div class="bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="space-y-4 relative z-10">
              <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <i data-lucide="target" class="w-6 h-6 text-yellow-300"></i>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-pink-200">Action & Purpose</span>
              <h2 class="text-2xl sm:text-3xl font-extrabold font-heading">Our Mission</h2>
              <p class="text-sm sm:text-base text-pink-50 leading-relaxed">
                To build India’s most actionable, supportive digital ecosystem for women entrepreneurs by bridging critical funding gaps, offering high-caliber personalized mentorship, providing direct commerce access, and fostering peer accountability circles.
              </p>
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">
                  ✓ Demystify 40+ Govt Grants
                </div>
                <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">
                  ✓ 1-on-1 Executive Mentoring
                </div>
                <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">
                  ✓ Zero-Friction Storefront
                </div>
                <div class="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold">
                  ✓ Practical Bootcamps
                </div>
              </div>
            </div>
            <p class="text-xs text-pink-200 mt-6 relative z-10 pt-4 border-t border-pink-500/50">
              Targeting 50,000 financially independent women business leaders by 2028.
            </p>
          </div>

        </div>
      </section>

      <!-- WHY WEN? CORE PROBLEMS WE SOLVE -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">The Strategic Need</span>
          <h2 class="text-3xl font-black text-slate-900 font-heading">Why WEN?</h2>
          <p class="text-sm text-slate-600">
            Across India and emerging markets, over 80% of women-founded ventures fail to scale beyond the first two years due to five systemic roadblocks. Here is how WEN specifically resolves each.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 class="text-base font-bold text-slate-900">Democratizing Access to Capital</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Traditional collateral requirements disproportionately exclude women who lack family-inherited property titles. WEN curates collateral-free loans (Mudra, CGTMSE) and non-dilutive innovation grants (BIRAC, NITI Aayog WEP) with transparent checklists and proposal templates.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div class="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 class="text-base font-bold text-slate-900">High-Caliber 1-on-1 Guidance</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Advice cannot be one-size-fits-all. A home baker scaling to a cloud kitchen needs food hygiene licensing and cold-chain logistics, while a SaaS innovator needs cap-table design. WEN matches founders with domain-specific veteran leaders.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 class="text-base font-bold text-slate-900">Direct Customer Channel</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Skyrocketing digital ad costs kill early-stage margins. The WEN Storefront offers organic distribution, curated corporate gift packaging partnerships, and direct customer discovery for ethical, artisan, and service brands.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 class="text-base font-bold text-slate-900">Safe, Synergistic Community</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Entrepreneurship can be lonely. WEN founder circles foster authentic peer conversations where founders openly discuss cash crunches, vendor renegotiations, co-founder searches, and celebration of every breakthrough.
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h3 class="text-base font-bold text-slate-900">Practical Digital & Financial Literacy</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              From reading profit & loss sheets and calculating customer acquisition cost (CAC) to leveraging AI automation and filing GST, our workshops are 100% practical, zero-jargon, and immediately implementable.
            </p>
          </div>

          <div class="bg-gradient-to-tr from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 flex flex-col justify-center text-center space-y-3">
            <i data-lucide="award" class="w-10 h-10 text-purple-600 mx-auto"></i>
            <h3 class="text-base font-bold text-purple-900">Join the Impact Network</h3>
            <p class="text-xs text-slate-600">
              Be a part of India's most vibrant, high-growth women entrepreneurial community.
            </p>
            <button 
              onclick="openModal('authModal', 'signup')"
              class="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm mx-auto"
            >
              Join WEN Free
            </button>
          </div>

        </div>
      </section>

      <!-- MEASURABLE IMPACT STATS SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-soft">
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">Our Track Record</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading">Measurable Impact Across Ecosystem</h2>
          <p class="text-xs sm:text-sm text-slate-500">Real progress achieved through community collaboration and focused mentorship.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div class="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
            <p class="text-2xl sm:text-3xl font-black text-purple-700 font-heading">${stats.entrepreneurs}</p>
            <p class="text-xs text-slate-600 font-medium mt-1">Active Founders</p>
          </div>
          <div class="p-4 rounded-2xl bg-pink-50/60 border border-pink-100">
            <p class="text-2xl sm:text-3xl font-black text-pink-600 font-heading">${stats.fundingFacilitated}</p>
            <p class="text-xs text-slate-600 font-medium mt-1">Capital Unlocked</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
            <p class="text-2xl sm:text-3xl font-black text-sky-700 font-heading">${stats.mentorsCount}</p>
            <p class="text-xs text-slate-600 font-medium mt-1">Vetted Mentors</p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <p class="text-2xl sm:text-3xl font-black text-emerald-700 font-heading">${stats.productsListed}</p>
            <p class="text-xs text-slate-600 font-medium mt-1">Storefront Items</p>
          </div>
          <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
            <p class="text-2xl sm:text-3xl font-black text-amber-700 font-heading">${stats.successRate}</p>
            <p class="text-xs text-slate-600 font-medium mt-1">Founder Retention</p>
          </div>
          <div class="p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
            <p class="text-2xl sm:text-3xl font-black text-rose-700 font-heading">${stats.citiesRepresented}</p>
            <p class="text-xs text-slate-600 font-medium mt-1">Tier 1-3 Cities</p>
          </div>
        </div>
      </section>

      <!-- TARGET USERS MATRIX DETAIL -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span class="text-xs font-bold text-pink-600 uppercase tracking-wider">Inclusivity at Core</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 font-heading">Every Woman Founder Has a Home Here</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-purple-100 text-purple-700"><i data-lucide="sparkles" class="w-5 h-5"></i></span>
              <h4 class="font-bold text-slate-900">Aspiring Entrepreneurs</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Validate business concepts, conduct market viability tests, and prepare your initial business model canvas before investing hard-earned savings.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-pink-100 text-pink-600"><i data-lucide="home" class="w-5 h-5"></i></span>
              <h4 class="font-bold text-slate-900">Home-Based Innovators</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Transition home kitchens, boutique fashion racks, and handcrafted jewelry into GST-registered, branded enterprises with professional digital marketing.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-sky-100 text-sky-700"><i data-lucide="trending-up" class="w-5 h-5"></i></span>
              <h4 class="font-bold text-slate-900">Early-Stage Startups</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Refine your pitch deck, test B2B sales pipelines, structure equity vesting, and pitch to active female angel syndicates for institutional backing.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-emerald-100 text-emerald-700"><i data-lucide="graduation-cap" class="w-5 h-5"></i></span>
              <h4 class="font-bold text-slate-900">College & Student Innovators</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Turn final-year engineering, biotech, or design projects into viable startup ventures with student innovation seed grants and incubation support.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-amber-100 text-amber-700"><i data-lucide="briefcase" class="w-5 h-5"></i></span>
              <h4 class="font-bold text-slate-900">Mentors & Angel Investors</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Support high-potential female-founded enterprises, lead cohorts, offer strategic advice, and discover pre-screened dealflow with measurable social impact.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-rose-100 text-rose-700"><i data-lucide="globe" class="w-5 h-5"></i></span>
              <h4 class="font-bold text-slate-900">Corporate & Institutional Allies</h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Procure corporate gifting packages from certified women-owned enterprises, sponsor masterclass bootcamps, and fulfill supplier diversity ESG mandates.
            </p>
          </div>
        </div>
      </section>

    </div>
  `;
}
