/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Marketplace / Storefront Page Component
 */

function renderMarketplaceView(state) {
  const activeCategory = state.marketCategoryFilter || 'All';
  const searchQuery = (state.marketSearchQuery || '').toLowerCase().trim();
  const sortBy = state.marketSortBy || 'featured';

  const categories = ['All', 'Food', 'Fashion', 'Handmade', 'Beauty', 'Services', 'Technology', 'Other'];

  // Combine default products with user-created products if any
  const allProducts = [...(state.customProducts || []), ...WEN_DATA.products];

  // Filter products
  let filtered = allProducts.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.businessName.toLowerCase().includes(searchQuery) ||
      item.founderName.toLowerCase().includes(searchQuery) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery))) ||
      item.description.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  // Sort
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return `
    <div class="space-y-12 pb-16 animate-fade-in">
      
      <!-- Top Hero Header -->
      <section class="bg-gradient-to-b from-sky-50/70 via-purple-50/30 to-white pt-12 pb-14 border-b border-sky-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700 uppercase tracking-wider">
            Women-Owned Businesses Storefront
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Discover & Support <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Women-Led Brands & Services</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Shop directly from verified women-founded businesses. From small-batch organic wellness and heritage handlooms to expert B2B tech & accounting services.
          </p>

          <!-- Top CTA & Search Bar -->
          <div class="pt-6 max-w-2xl mx-auto space-y-4">
            <div class="relative flex items-center">
              <i data-lucide="search" class="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none"></i>
              <input 
                type="text" 
                placeholder="Search products, services, founders (e.g. saree, coffee, GST, tech)..."
                value="${state.marketSearchQuery || ''}"
                oninput="handleMarketSearch(this.value)"
                class="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-sky-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-sky-600 shadow-soft"
              />
              ${searchQuery ? `
                <button onclick="handleMarketSearch('')" class="absolute right-4 text-slate-400 hover:text-slate-600">
                  <i data-lucide="x" class="w-4 h-4"></i>
                </button>
              ` : ''}
            </div>

            <!-- List Your Product Button -->
            <div class="flex items-center justify-center gap-3">
              <button 
                onclick="openModal('listProductModal')"
                class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xs shadow-md hover-lift flex items-center gap-2"
              >
                <i data-lucide="plus-circle" class="w-4 h-4"></i>
                <span>List Your Product / Service</span>
              </button>
              <button 
                onclick="navigate('dashboard')"
                class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-bold text-xs shadow-2xs"
              >
                Manage My Listings
              </button>
            </div>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
            ${categories.map(cat => {
              const isSelected = activeCategory.toLowerCase() === cat.toLowerCase();
              return `
                <button 
                  onclick="setMarketCategoryFilter('${cat}')"
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-sky-600 text-white shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-sky-50/50'
                  }"
                >
                  ${cat}
                </button>
              `;
            }).join('')}
          </div>

        </div>
      </section>

      <!-- Main Marketplace Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Controls Bar: Results Count & Sort Dropdown -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-sky-50/50 p-4 rounded-2xl border border-sky-100 text-xs">
          <div class="flex items-center gap-2 text-sky-900 font-semibold">
            <i data-lucide="shopping-bag" class="w-4 h-4 text-sky-600"></i>
            <span>Showing ${filtered.length} Listings in <strong>${activeCategory}</strong></span>
          </div>

          <!-- Sort Selector -->
          <div class="flex items-center gap-2">
            <span class="text-slate-500 font-medium">Sort by:</span>
            <select 
              onchange="handleMarketSort(this.value)"
              class="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-700 font-semibold focus:outline-hidden focus:border-sky-500"
            >
              <option value="featured" ${sortBy === 'featured' ? 'selected' : ''}>Featured First</option>
              <option value="price-low" ${sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${sortBy === 'rating' ? 'selected' : ''}>Highest Customer Rating</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        ${filtered.length === 0 ? `
          <div class="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8 space-y-3">
            <i data-lucide="shopping-bag" class="w-12 h-12 text-slate-300 mx-auto"></i>
            <h3 class="text-base font-bold text-slate-800">No products found in this category</h3>
            <p class="text-xs text-slate-500">Be the first to list a business or reset your filters.</p>
            <div class="flex items-center justify-center gap-3 pt-2">
              <button onclick="setMarketCategoryFilter('All'); handleMarketSearch('');" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
                Reset Filters
              </button>
              <button onclick="openModal('listProductModal')" class="px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold">
                List Product Now
              </button>
            </div>
          </div>
        ` : `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${filtered.map(p => `
              <div class="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-soft hover-lift flex flex-col justify-between transition-all group">
                
                <div>
                  <!-- Product Image Container -->
                  <div class="relative h-52 bg-slate-100 overflow-hidden">
                    <img 
                      src="${p.image}" 
                      alt="${p.title}" 
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span class="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 shadow-xs">
                      ${p.category}
                    </span>
                    <span class="absolute top-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-xs flex items-center gap-1">
                      <i data-lucide="star" class="w-3 h-3 fill-current"></i> ${p.rating}
                    </span>
                  </div>

                  <!-- Product Info -->
                  <div class="p-4 space-y-2">
                    <!-- Founder / Brand Tagline -->
                    <div class="flex items-center justify-between text-[11px] text-purple-700 font-semibold truncate">
                      <span class="truncate">${p.businessName}</span>
                      <span class="text-slate-400 text-[10px] shrink-0 font-normal">by ${p.founderName.split(' ')[0]}</span>
                    </div>

                    <!-- Title -->
                    <h3 class="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-purple-700 transition">
                      ${p.title}
                    </h3>

                    <!-- Price Block -->
                    <div class="flex items-baseline gap-2 pt-0.5">
                      <span class="text-base font-black text-slate-900">₹${p.price.toLocaleString('en-IN')}</span>
                      ${p.originalPrice ? `
                        <span class="text-xs text-slate-400 line-through">₹${p.originalPrice.toLocaleString('en-IN')}</span>
                        <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                          ${Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}% OFF
                        </span>
                      ` : ''}
                    </div>

                    <!-- Tags / Highlights -->
                    ${p.tags ? `
                      <div class="flex flex-wrap gap-1 pt-1">
                        ${p.tags.slice(0, 2).map(tag => `
                          <span class="text-[9.5px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-sm">
                            ${tag}
                          </span>
                        `).join('')}
                      </div>
                    ` : ''}
                  </div>
                </div>

                <!-- Action Buttons: View Product & Contact Seller -->
                <div class="p-4 pt-1 flex items-center gap-2 border-t border-slate-100 bg-slate-50/40">
                  <button 
                    onclick="openProductModal('${p.id}')"
                    class="w-1/2 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition"
                  >
                    View Product
                  </button>
                  <button 
                    onclick="openEnquiryModal('${p.id}')"
                    class="w-1/2 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-sky-600 hover:opacity-95 text-white font-bold text-xs shadow-2xs hover-lift flex items-center justify-center gap-1 transition"
                  >
                    <i data-lucide="mail" class="w-3.5 h-3.5"></i>
                    <span>Contact Seller</span>
                  </button>
                </div>

              </div>
            `).join('')}
          </div>
        `}

        <!-- Storefront Advantage Feature Card -->
        <div class="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <i data-lucide="badge-percent" class="w-6 h-6"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-bold text-slate-900">Low 3-5% Transparent Commission</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Unlike big aggregator platforms taking 25-40%, WEN keeps revenue directly in female founders' pockets.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
              <i data-lucide="gift" class="w-6 h-6"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-bold text-slate-900">Corporate Gifting Tie-Ups</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Bulk purchase channels with multinational banks, tech campuses, and ESG enterprise clients.</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <i data-lucide="shield-check" class="w-6 h-6"></i>
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-bold text-slate-900">100% Women-Owned Guarantee</h4>
              <p class="text-xs text-slate-500 leading-relaxed">Every business is audited and verified to ensure authentic woman-founded leadership.</p>
            </div>
          </div>
        </div>

      </section>

    </div>
  `;
}

function handleMarketSearch(val) {
  window.APP_STATE.marketSearchQuery = val;
  renderView('marketplace');
}

function setMarketCategoryFilter(cat) {
  window.APP_STATE.marketCategoryFilter = cat;
  renderView('marketplace');
}

function handleMarketSort(sort) {
  window.APP_STATE.marketSortBy = sort;
  renderView('marketplace');
}
