/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Resources & Learning Materials Page Component
 */

function renderResourcesView(state) {
  const activeCategory = state.resourceCategoryFilter || 'All';
  const categories = ['All', 'Business Guides', 'Marketing Resources', 'Financial Resources', 'Startup Guides', 'Digital Tools'];

  const allResources = WEN_DATA.resources;

  const filtered = allResources.filter(res => {
    if (activeCategory === 'All') return true;
    return res.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return `
    <div class="space-y-12 pb-16 animate-fade-in">
      
      <!-- Top Hero Header -->
      <section class="bg-gradient-to-b from-amber-50/60 via-purple-50/30 to-white pt-12 pb-14 border-b border-amber-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
            Verified Founder Knowledge Base
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Business Guides, Templates & <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Digital Startup Toolkits</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Download battle-tested pitch decks, dynamic cash flow excel models, government grant checklist sheets, and founders legal agreements.
          </p>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
            ${categories.map(cat => {
              const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
              return `
                <button 
                  onclick="setResourceCategoryFilter('${cat}')"
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-amber-600 text-white shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-amber-50/50'
                  }"
                >
                  ${cat}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Main Resources Grid Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex items-center justify-between mb-8 bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs">
          <span class="font-bold text-amber-900">Showing ${filtered.length} Resource Toolkits (${activeCategory})</span>
          <span class="text-slate-600 font-medium">All templates are updated for 2026 Indian compliance & startup regulations</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filtered.map(res => `
            <div class="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between overflow-hidden transition-all">
              
              <div class="p-6 space-y-4">
                
                <!-- Format & Access Level -->
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-50 text-purple-700">
                    ${res.category}
                  </span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    res.isPremium ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }">
                    ${res.isPremium ? '★ Premium Only' : 'Free Resource'}
                  </span>
                </div>

                <!-- Title & Meta -->
                <div class="space-y-1.5">
                  <h3 class="text-base font-bold text-slate-900 leading-snug">${res.title}</h3>
                  <div class="flex items-center gap-3 text-[11px] text-slate-500 font-semibold pt-1">
                    <span class="flex items-center gap-1"><i data-lucide="file-code" class="w-3.5 h-3.5 text-purple-600"></i> ${res.format}</span>
                    <span class="flex items-center gap-1"><i data-lucide="download" class="w-3.5 h-3.5 text-slate-400"></i> ${res.downloads}</span>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-xs text-slate-600 leading-relaxed">${res.desc}</p>
              </div>

              <!-- Footer Actions -->
              <div class="p-6 pt-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <span class="text-[11px] text-slate-400 font-medium">Size: ${res.fileSize}</span>

                <button 
                  onclick="openResourceModal('${res.id}')"
                  class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-2xs hover-lift flex items-center gap-1.5"
                >
                  <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                  <span>Preview & Download</span>
                </button>
              </div>

            </div>
          `).join('')}
        </div>

        <!-- Request a Template Box -->
        <div class="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-1 text-center md:text-left">
            <h4 class="text-base font-bold text-slate-900">Need a Specific Legal Contract or Financial Model Not Listed Here?</h4>
            <p class="text-xs text-slate-500">Our legal advisory committee updates our templates weekly based on community requests.</p>
          </div>
          <button 
            onclick="showToast('Thank you! Template request logged for our legal committee.', 'info')"
            class="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs shrink-0"
          >
            Request Custom Template
          </button>
        </div>

      </section>

    </div>
  `;
}

function setResourceCategoryFilter(cat) {
  window.APP_STATE.resourceCategoryFilter = cat;
  renderView('resources');
}
