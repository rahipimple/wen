/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Funding & Schemes Page Component
 */

function renderFundingView(state) {
  const activeCategory = state.fundingCategoryFilter || 'All';
  const searchQuery = (state.fundingSearchQuery || '').toLowerCase().trim();

  const categories = ['All', 'Government Schemes', 'Grants', 'Startup Funding', 'Loans'];

  // Filter schemes
  const filteredSchemes = WEN_DATA.fundingSchemes.filter(scheme => {
    const matchesCategory = activeCategory === 'All' || scheme.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = !searchQuery ||
      scheme.name.toLowerCase().includes(searchQuery) ||
      scheme.description.toLowerCase().includes(searchQuery) ||
      scheme.provider.toLowerCase().includes(searchQuery) ||
      scheme.type.toLowerCase().includes(searchQuery) ||
      scheme.eligibility.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return `
    <div class="space-y-12 pb-16 animate-fade-in">
      
      <!-- Header Banner -->
      <section class="bg-gradient-to-b from-pink-50/70 via-purple-50/40 to-white pt-12 pb-14 border-b border-pink-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-700 uppercase tracking-wider">
            Capital, Grants & Subsidies
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Discover Verified <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Funding & Government Schemes</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Zero collateral loans, equity-free government innovation grants, and female angel syndicates tailored specifically for women-led ventures.
          </p>

          <!-- Search Input -->
          <div class="pt-6 max-w-2xl mx-auto">
            <div class="relative flex items-center">
              <i data-lucide="search" class="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none"></i>
              <input 
                type="text" 
                placeholder="Search schemes by name, keyword (e.g. Mudra, BIRAC, Stand-Up, Biotech, MSME)..."
                value="${state.fundingSearchQuery || ''}"
                oninput="handleFundingSearch(this.value)"
                class="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-pink-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-pink-600 shadow-soft"
              />
              ${searchQuery ? `
                <button onclick="handleFundingSearch('')" class="absolute right-4 text-slate-400 hover:text-slate-600">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              ` : ''}
            </div>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
            ${categories.map(cat => {
              const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
              return `
                <button 
                  onclick="setFundingCategoryFilter('${cat}')"
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-pink-600 text-white shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-pink-300 hover:bg-pink-50/50'
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
        
        <!-- Summary Stats Bar -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 text-xs">
          <div class="flex items-center gap-2 text-pink-900 font-semibold">
            <i data-lucide="coins" class="w-4 h-4 text-pink-600"></i>
            <span>Showing ${filteredSchemes.length} Opportunities (${activeCategory})</span>
          </div>
          <div class="flex items-center gap-3 text-slate-600 font-medium">
            <span class="flex items-center gap-1"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> Government & Partner Vetted</span>
            <span class="flex items-center gap-1"><i data-lucide="file-text" class="w-3.5 h-3.5 text-purple-600"></i> Proposal Checklists Included</span>
          </div>
        </div>

        <!-- Funding Grid -->
        ${filteredSchemes.length === 0 ? `
          <div class="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8 space-y-3">
            <i data-lucide="file-question" class="w-12 h-12 text-slate-300 mx-auto"></i>
            <h3 class="text-base font-bold text-slate-800">No funding opportunities found</h3>
            <p class="text-xs text-slate-500">Try broadening your search term or select another category filter.</p>
            <button onclick="setFundingCategoryFilter('All'); handleFundingSearch('');" class="px-4 py-2 rounded-xl bg-pink-600 text-white text-xs font-semibold">
              Reset Filters
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredSchemes.map(s => {
              const isSaved = state.currentUser.savedSchemes.includes(s.id);

              return `
                <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between overflow-hidden transition-all">
                  
                  <div class="p-6 space-y-4">
                    
                    <!-- Top Category & Badges -->
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-50 text-purple-700">
                        ${s.category}
                      </span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        s.type.includes('Grant') ? 'bg-emerald-50 text-emerald-700' : 'bg-pink-50 text-pink-700'
                      }">
                        ${s.badge}
                      </span>
                    </div>

                    <!-- Scheme Name & Provider -->
                    <div class="space-y-1">
                      <h3 class="text-base font-bold text-slate-900 leading-snug">${s.name}</h3>
                      <p class="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                        <i data-lucide="building-2" class="w-3.5 h-3.5 text-slate-400"></i>
                        <span>${s.provider}</span>
                      </p>
                    </div>

                    <!-- Funding Amount Highlight -->
                    <div class="p-3.5 rounded-xl bg-gradient-to-r from-purple-50/70 via-pink-50/50 to-white border border-purple-100/80">
                      <div class="flex items-center justify-between">
                        <div>
                          <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Grant / Loan Value</span>
                          <span class="text-base font-extrabold text-slate-900">${s.fundingAmount}</span>
                        </div>
                        <div class="text-right">
                          <span class="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Interest / Equity</span>
                          <span class="text-xs font-bold text-emerald-700">${s.interestRate}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Description -->
                    <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed">${s.description}</p>

                    <!-- Eligibility Snippet -->
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
                      <span class="text-[10px] font-bold text-purple-800 uppercase tracking-wider block">Eligibility Criteria:</span>
                      <p class="text-[11.5px] line-clamp-2 leading-relaxed text-slate-600">${s.eligibility}</p>
                    </div>

                    <!-- Required Documents Pill Preview -->
                    <div class="pt-1">
                      <span class="text-[10px] font-bold text-slate-400 block mb-1">Documents Checklist (${s.documents.length}):</span>
                      <div class="flex flex-wrap gap-1">
                        ${s.documents.slice(0, 2).map(doc => `
                          <span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                            ${doc}
                          </span>
                        `).join('')}
                        ${s.documents.length > 2 ? `
                          <span class="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md">
                            +${s.documents.length - 2} more
                          </span>
                        ` : ''}
                      </div>
                    </div>

                  </div>

                  <!-- Card Footer Actions -->
                  <div class="p-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <button 
                      onclick="toggleSaveScheme('${s.id}')"
                      class="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-pink-600 transition"
                    >
                      <i data-lucide="bookmark" class="w-4 h-4 ${isSaved ? 'fill-pink-600 text-pink-600' : ''}"></i>
                      <span>${isSaved ? 'Saved in Dashboard' : 'Save Scheme'}</span>
                    </button>

                    <button 
                      onclick="openFundingModal('${s.id}')"
                      class="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-2xs hover-lift flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>

                </div>
              `;
            }).join('')}
          </div>
        `}

        <!-- Assistance Banner -->
        <div class="mt-16 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="text-xl font-bold font-heading">Need Help Writing Your Grant or Loan Proposal?</h3>
            <p class="text-xs text-purple-100 max-w-xl">
              Don't let complex paperwork hold you back. Schedule a 1-on-1 session with our CA & Financial Mentors to review your project report before bank submission.
            </p>
          </div>
          <button 
            onclick="setMentorCategoryFilter('Finance'); navigate('mentors');"
            class="px-6 py-3 rounded-xl bg-white text-purple-900 font-bold text-xs hover:bg-purple-50 shrink-0 shadow-md"
          >
            Connect with Finance Mentors
          </button>
        </div>

      </section>

    </div>
  `;
}

function handleFundingSearch(val) {
  window.APP_STATE.fundingSearchQuery = val;
  renderView('funding');
}

function setFundingCategoryFilter(cat) {
  window.APP_STATE.fundingCategoryFilter = cat;
  renderView('funding');
}
