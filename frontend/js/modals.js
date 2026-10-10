/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Unified Modals Manager
 */

function renderModalsContainer() {
  return `
    <div id="modalContainer" class="relative z-50">
      <!-- Backdrop -->
      <div id="modalBackdrop" class="fixed inset-0 modal-backdrop hidden transition-opacity duration-300" onclick="closeAllModals()"></div>

      <!-- Modal Dialog Shell -->
      <div id="modalDialog" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto hidden">
        <div id="modalContent" class="bg-white rounded-3xl shadow-2xl border border-purple-100 max-w-lg w-full overflow-hidden transition-all duration-300 transform scale-95 opacity-0 max-h-[90vh] flex flex-col">
          <!-- Dynamic Inner Content Injected via JS -->
        </div>
      </div>
    </div>
  `;
}

function openModal(modalType, payload = null) {
  const container = document.getElementById('modalDialog');
  const backdrop = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');

  if (!container || !backdrop || !content) return;

  // Adjust max width based on modal type
  if (['hardcodedExpModal', 'hardcodedAssignModal', 'hardcodedDocModal', 'experimentModal', 'assignmentModal'].includes(modalType)) {
    content.classList.remove('max-w-lg');
    content.classList.add('max-w-3xl');
  } else {
    content.classList.remove('max-w-3xl');
    content.classList.add('max-w-lg');
  }

  // Render appropriate modal template
  let html = '';

  switch (modalType) {
    case 'bookingModal':
      html = getBookingModalHTML(payload);
      break;
    case 'fundingModal':
      html = getFundingModalHTML(payload);
      break;
    case 'productModal':
      html = getProductModalHTML(payload);
      break;
    case 'enquiryModal':
      html = getEnquiryModalHTML(payload);
      break;
    case 'listProductModal':
      html = getListProductModalHTML();
      break;
    case 'registerEventModal':
      html = getRegisterEventModalHTML(payload);
      break;
    case 'ticketModal':
      html = getTicketModalHTML(payload);
      break;
    case 'resourceModal':
      html = getResourceModalHTML(payload);
      break;
    case 'createPostModal':
      html = getCreatePostModalHTML();
      break;
    case 'authModal':
      html = getAuthModalHTML(payload);
      break;
    case 'upgradeModal':
      html = getUpgradeModalHTML();
      break;
    case 'experimentModal':
      html = getExperimentModalHTML(payload);
      break;
    case 'assignmentModal':
      html = getAssignmentModalHTML(payload);
      break;
    case 'hardcodedExpModal':
      html = getHardcodedExpModalHTML(payload);
      break;
    case 'hardcodedAssignModal':
      html = getHardcodedAssignModalHTML(payload);
      break;
    case 'hardcodedDocModal':
      html = getHardcodedDocModalHTML(payload);
      break;
    default:
      html = '<div class="p-6">No modal template found.</div>';
  }

  content.innerHTML = html;

  // Show
  backdrop.classList.remove('hidden');
  container.classList.remove('hidden');
  
  // Re-run icons inside modal
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    content.classList.remove('scale-95', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
  }, 10);
}

function closeAllModals() {
  const container = document.getElementById('modalDialog');
  const backdrop = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');

  if (content) {
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
  }

  setTimeout(() => {
    if (backdrop) backdrop.classList.add('hidden');
    if (container) container.classList.add('hidden');
  }, 200);
}

// ----------------------------------------------------
// 1. BOOKING MODAL
// ----------------------------------------------------
function openBookingModal(mentorId) {
  const mentor = WEN_DATA.mentors.find(m => m.id === mentorId) || WEN_DATA.mentors[0];
  openModal('bookingModal', mentor);
}

function getBookingModalHTML(mentor) {
  return `
    <div class="p-6 overflow-y-auto space-y-5">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <img src="${mentor.image}" alt="${mentor.name}" class="w-12 h-12 rounded-2xl object-cover ring-2 ring-purple-100" />
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
              ${mentor.expertise}
            </span>
            <h3 class="text-base font-bold text-slate-900">${mentor.name}</h3>
            <p class="text-xs text-slate-500">${mentor.role}</p>
          </div>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <form onsubmit="handleConfirmBooking(event, '${mentor.id}')" class="space-y-4 text-xs">
        
        <!-- Objective -->
        <div class="space-y-1.5">
          <label class="font-bold text-slate-700">Select Session Focus Area:</label>
          <select required name="objective" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-purple-600">
            <option value="Idea Validation & Business Model">Idea Validation & Business Model</option>
            <option value="Fundraising Pitch Deck & Term Sheets">Fundraising Pitch Deck & Term Sheets</option>
            <option value="D2C Marketing & Customer Acquisition">D2C Marketing & Customer Acquisition</option>
            <option value="Government Grants & Mudra Application">Government Grants & Mudra Application</option>
            <option value="Unit Economics & Cash Flow">Unit Economics & Cash Flow</option>
          </select>
        </div>

        <!-- Date & Slot -->
        <div class="grid grid-cols-2 gap-3">
          <div class="space-y-1.5">
            <label class="font-bold text-slate-700">Preferred Date:</label>
            <input type="date" required name="date" value="2026-10-02" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:border-purple-600" />
          </div>
          <div class="space-y-1.5">
            <label class="font-bold text-slate-700">Time Slot:</label>
            <select required name="time" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:border-purple-600">
              <option value="11:00 AM - 11:45 AM">11:00 AM - 11:45 AM</option>
              <option value="2:30 PM - 3:15 PM">2:30 PM - 3:15 PM</option>
              <option value="4:00 PM - 4:45 PM" selected>4:00 PM - 4:45 PM</option>
              <option value="6:00 PM - 6:45 PM">6:00 PM - 6:45 PM</option>
            </select>
          </div>
        </div>

        <!-- Pre-call Notes -->
        <div class="space-y-1.5">
          <label class="font-bold text-slate-700">What specific challenge do you want to solve? (Optional)</label>
          <textarea name="notes" rows="3" placeholder="e.g., We are preparing our pitch deck for ₹25 Lakhs angel round and need feedback on our CAC metrics..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-purple-600"></textarea>
        </div>

        <div class="p-3 rounded-xl bg-purple-50 text-purple-900 border border-purple-100 flex items-center justify-between">
          <span class="font-semibold">Fee: Included with WEN Premium</span>
          <span class="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-md font-bold">1 Credit</span>
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" onclick="closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold">
            Cancel
          </button>
          <button type="submit" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-md hover-lift">
            Confirm & Schedule Call
          </button>
        </div>
      </form>
    </div>
  `;
}

function handleConfirmBooking(e, mentorId) {
  e.preventDefault();
  const form = e.target;
  const mentor = WEN_DATA.mentors.find(m => m.id === mentorId) || WEN_DATA.mentors[0];

  const newSession = {
    id: 'bs-' + Date.now(),
    mentorId: mentor.id,
    mentorName: mentor.name,
    mentorRole: mentor.role,
    date: form.date.value,
    time: form.time.value,
    objective: form.objective.value,
    status: 'Confirmed',
    meetLink: 'https://meet.google.com/wen-' + Math.random().toString(36).substring(7)
  };

  if (!window.APP_STATE.currentUser.bookedSessions) {
    window.APP_STATE.currentUser.bookedSessions = [];
  }

  window.APP_STATE.currentUser.bookedSessions.unshift(newSession);
  closeAllModals();
  showToast(`1-on-1 session booked with ${mentor.name}! Added to your Dashboard.`, 'success');

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('book_mentor_session', {
      mentor_id: mentor.id,
      mentor_name: mentor.name,
      session_date: form.date.value
    });
  }

  if (window.APP_STATE.currentRoute === 'dashboard') {
    renderView('dashboard');
  }
}

// ----------------------------------------------------
// 2. FUNDING DETAILS MODAL
// ----------------------------------------------------
function openFundingModal(schemeId) {
  const scheme = WEN_DATA.fundingSchemes.find(s => s.id === schemeId);
  if (scheme) {
    openModal('fundingModal', scheme);
  }
}

function getFundingModalHTML(s) {
  const isSaved = window.APP_STATE.currentUser.savedSchemes.includes(s.id);

  return `
    <div class="p-6 overflow-y-auto space-y-5">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-pink-50 text-pink-700">
            ${s.category} • ${s.badge}
          </span>
          <h3 class="text-lg font-bold text-slate-900 mt-1">${s.name}</h3>
          <p class="text-xs text-slate-500 font-medium">Provider: ${s.provider}</p>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
        <div>
          <span class="text-[10px] text-slate-400 uppercase font-bold block">Funding Value</span>
          <span class="font-extrabold text-slate-900 text-sm">${s.fundingAmount}</span>
        </div>
        <div>
          <span class="text-[10px] text-slate-400 uppercase font-bold block">Interest / Equity</span>
          <span class="font-bold text-emerald-700 text-sm">${s.interestRate}</span>
        </div>
      </div>

      <div class="space-y-2 text-xs">
        <h4 class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Detailed Description:</h4>
        <p class="text-slate-600 leading-relaxed">${s.description}</p>
      </div>

      <div class="space-y-2 text-xs">
        <h4 class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Eligibility Criteria:</h4>
        <p class="text-slate-600 leading-relaxed p-3 bg-purple-50/50 rounded-xl border border-purple-100">${s.eligibility}</p>
      </div>

      <div class="space-y-2 text-xs">
        <h4 class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Mandatory Application Checklist:</h4>
        <div class="space-y-1.5">
          ${s.documents.map(doc => `
            <div class="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <i data-lucide="check-square" class="w-4 h-4 text-pink-600"></i>
              <span class="text-slate-700 font-medium">${doc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
        <button 
          onclick="toggleSaveScheme('${s.id}'); closeAllModals();"
          class="text-xs font-semibold text-slate-600 hover:text-pink-600 flex items-center gap-1.5"
        >
          <i data-lucide="bookmark" class="w-4 h-4 ${isSaved ? 'fill-pink-600 text-pink-600' : ''}"></i>
          <span>${isSaved ? 'Remove from Saved' : 'Save to My Dashboard'}</span>
        </button>

        <button 
          onclick="showToast('Application checklist generated! Direct portal link opened.', 'success'); closeAllModals();"
          class="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md"
        >
          Apply via Official Portal
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 3. PRODUCT MODAL
// ----------------------------------------------------
function openProductModal(productId) {
  const allProducts = [...(window.APP_STATE.customProducts || []), ...WEN_DATA.products];
  const p = allProducts.find(item => item.id === productId);
  if (p) {
    openModal('productModal', p);
  }
}

function getProductModalHTML(p) {
  return `
    <div class="overflow-y-auto">
      <div class="relative h-64 bg-slate-100">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
        <button onclick="closeAllModals()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
        <span class="absolute bottom-4 left-4 text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-md">
          ${p.category}
        </span>
      </div>

      <div class="p-6 space-y-4 text-xs">
        <div class="space-y-1">
          <span class="text-xs text-purple-700 font-semibold">${p.businessName} • Founder: ${p.founderName}</span>
          <h3 class="text-lg font-bold text-slate-900">${p.title}</h3>
          <div class="flex items-center gap-2 pt-1">
            <span class="text-xl font-black text-slate-900">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.originalPrice ? `<span class="text-xs text-slate-400 line-through">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            <span class="text-amber-500 font-bold flex items-center gap-1 ml-auto">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i> ${p.rating}
            </span>
          </div>
        </div>

        <p class="text-slate-600 leading-relaxed">${p.description}</p>

        ${p.location ? `
          <p class="text-slate-500 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i> ${p.location}
          </p>
        ` : ''}

        <div class="pt-3 border-t border-slate-100 flex items-center gap-3">
          <button 
            onclick="openEnquiryModal('${p.id}')"
            class="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
          >
            <i data-lucide="mail" class="w-4 h-4"></i>
            <span>Send Enquiry to ${p.founderName.split(' ')[0]}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 4. ENQUIRY / CONTACT SELLER MODAL
// ----------------------------------------------------
function openEnquiryModal(productId) {
  const allProducts = [...(window.APP_STATE.customProducts || []), ...WEN_DATA.products];
  const p = allProducts.find(item => item.id === productId);
  if (p) {
    openModal('enquiryModal', p);
  }
}

function getEnquiryModalHTML(p) {
  return `
    <div class="p-6 overflow-y-auto space-y-4">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">Direct Seller Connect</span>
          <h3 class="text-base font-bold text-slate-900 mt-1">Enquiry for ${p.title}</h3>
          <p class="text-xs text-slate-500">Contacting: ${p.founderName} (${p.businessName})</p>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <form onsubmit="handleSendEnquiry(event, '${p.id}')" class="space-y-3.5 text-xs">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Your Full Name:</label>
          <input type="text" required value="${window.APP_STATE.currentUser.name}" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Your Email / WhatsApp:</label>
          <input type="text" required value="${window.APP_STATE.currentUser.email}" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Type of Enquiry:</label>
          <select class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50">
            <option value="Retail Purchase">Single Order / Retail Purchase</option>
            <option value="Corporate Bulk Order">Corporate Gifting / Bulk Order</option>
            <option value="Partnership / Stockist">Retail Stockist / Reseller</option>
            <option value="Custom Service Request">Custom Service Quotation</option>
          </select>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Message / Requirements:</label>
          <textarea required rows="3" placeholder="e.g. Interested in ordering 40 units for an upcoming corporate women leadership summit..." class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"></textarea>
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" onclick="closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold">
            Cancel
          </button>
          <button type="submit" class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-md">
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  `;
}

function handleSendEnquiry(e, productId) {
  e.preventDefault();
  closeAllModals();
  showToast('Enquiry sent directly to founder! You will receive an email/WhatsApp update.', 'success');

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('send_product_enquiry', {
      product_id: productId
    });
  }
}

// ----------------------------------------------------
// 5. LIST PRODUCT MODAL
// ----------------------------------------------------
function getListProductModalHTML() {
  return `
    <div class="p-6 overflow-y-auto space-y-4">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">WEN Storefront</span>
          <h3 class="text-base font-bold text-slate-900 mt-1">List Your Product or Service</h3>
          <p class="text-xs text-slate-500">Showcase directly to conscious consumers & corporate buyers.</p>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <form onsubmit="handleCreateProduct(event)" class="space-y-3.5 text-xs">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Product / Service Title:</label>
          <input type="text" name="title" required placeholder="e.g., Handcrafted Terracotta Dinner Set" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Category:</label>
            <select name="category" required class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50">
              <option value="Food">Food</option>
              <option value="Fashion">Fashion</option>
              <option value="Handmade" selected>Handmade</option>
              <option value="Beauty">Beauty</option>
              <option value="Services">Services</option>
              <option value="Technology">Technology</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Price (in ₹ INR):</label>
            <input type="number" name="price" required placeholder="1499" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Business / Brand Name:</label>
            <input type="text" name="businessName" required value="${window.APP_STATE.currentUser.businessName}" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
          </div>
          <div class="space-y-1">
            <label class="font-bold text-slate-700">City / Location:</label>
            <input type="text" name="location" required value="${window.APP_STATE.currentUser.location}" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
          </div>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Description & Highlights:</label>
          <textarea name="description" required rows="2" placeholder="Tell buyers what makes your product authentic, sustainable, or unique..." class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"></textarea>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Image URL (or Unsplash sample):</label>
          <input type="url" name="image" value="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" onclick="closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold">
            Cancel
          </button>
          <button type="submit" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-sky-600 text-white font-bold shadow-md">
            Publish to Storefront
          </button>
        </div>
      </form>
    </div>
  `;
}

function handleCreateProduct(e) {
  e.preventDefault();
  const form = e.target;

  const newProduct = {
    id: 'p-' + Date.now(),
    title: form.title.value,
    category: form.category.value,
    price: parseInt(form.price.value) || 999,
    originalPrice: Math.round((parseInt(form.price.value) || 999) * 1.25),
    businessName: form.businessName.value,
    founderName: window.APP_STATE.currentUser.name,
    rating: 5.0,
    reviews: 1,
    location: form.location.value,
    image: form.image.value,
    description: form.description.value,
    inStock: true,
    tags: ["New Arrival", "Women Owned"]
  };

  if (!window.APP_STATE.customProducts) {
    window.APP_STATE.customProducts = [];
  }
  window.APP_STATE.customProducts.unshift(newProduct);

  closeAllModals();
  showToast(`Product "${newProduct.title}" published to WEN Storefront!`, 'success');

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('create_product_listing', {
      product_id: newProduct.id,
      product_title: newProduct.title,
      category: newProduct.category,
      price: newProduct.price
    });
  }

  if (window.APP_STATE.currentRoute === 'marketplace' || window.APP_STATE.currentRoute === 'dashboard') {
    renderView(window.APP_STATE.currentRoute);
  }
}

// ----------------------------------------------------
// 6. EVENT REGISTRATION & TICKET PASS MODAL
// ----------------------------------------------------
function openRegisterEventModal(eventId) {
  const ev = WEN_DATA.events.find(item => item.id === eventId);
  if (ev) {
    openModal('registerEventModal', ev);
  }
}

function getRegisterEventModalHTML(ev) {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">${ev.category}</span>
          <h3 class="text-base font-bold text-slate-900 mt-1">${ev.title}</h3>
          <p class="text-slate-500">${ev.date} • ${ev.time}</p>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-center gap-3">
        <img src="${ev.speakerImg}" alt="${ev.speaker}" class="w-10 h-10 rounded-xl object-cover" />
        <div>
          <span class="text-[10px] text-slate-400 font-bold uppercase block">Speaker</span>
          <p class="font-bold text-slate-900">${ev.speaker}</p>
          <p class="text-[11px] text-purple-600">${ev.speakerRole}</p>
        </div>
      </div>

      <div class="space-y-2">
        <label class="font-bold text-slate-700">Confirm Your Details for Attendance Badge:</label>
        <input type="text" readonly value="${window.APP_STATE.currentUser.name} (${window.APP_STATE.currentUser.email})" class="w-full px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600" />
      </div>

      <div class="p-3 rounded-xl bg-emerald-50 text-emerald-800 font-semibold border border-emerald-100">
        ✓ Free Admission for WEN Community Members
      </div>

      <div class="pt-2 flex items-center justify-end gap-3">
        <button onclick="closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold">
          Cancel
        </button>
        <button 
          onclick="handleConfirmRegistration('${ev.id}')"
          class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-md hover-lift"
        >
          Confirm Registration & Get Pass
        </button>
      </div>
    </div>
  `;
}

function handleConfirmRegistration(eventId) {
  if (!window.APP_STATE.currentUser.registeredEvents) {
    window.APP_STATE.currentUser.registeredEvents = [];
  }
  if (!window.APP_STATE.currentUser.registeredEvents.includes(eventId)) {
    window.APP_STATE.currentUser.registeredEvents.push(eventId);
  }
  closeAllModals();
  showToast('Registered! Your digital pass has been generated.', 'success');

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('event_registration', {
      event_id: eventId
    });
  }

  openTicketModal(eventId);
}

function openTicketModal(eventId) {
  const ev = WEN_DATA.events.find(item => item.id === eventId) || WEN_DATA.events[0];
  openModal('ticketModal', ev);
}

function getTicketModalHTML(ev) {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-center">
      <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
        <i data-lucide="ticket" class="w-6 h-6"></i>
      </div>

      <div class="space-y-1">
        <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
          Verified Admission Pass
        </span>
        <h3 class="text-lg font-black text-slate-900 font-heading pt-1">${ev.title}</h3>
        <p class="text-xs text-purple-700 font-semibold">${ev.date} • ${ev.time}</p>
      </div>

      <!-- Mock Ticket QR Frame -->
      <div class="p-6 bg-slate-900 text-white rounded-3xl space-y-3 shadow-xl">
        <div class="w-32 h-32 bg-white rounded-2xl mx-auto p-2 flex items-center justify-center">
          <!-- Mock QR SVG representation -->
          <div class="w-full h-full border-4 border-slate-900 grid grid-cols-4 gap-1 p-1">
            <div class="bg-slate-900"></div><div class="bg-slate-300"></div><div class="bg-slate-900"></div><div class="bg-slate-900"></div>
            <div class="bg-slate-300"></div><div class="bg-slate-900"></div><div class="bg-slate-300"></div><div class="bg-slate-300"></div>
            <div class="bg-slate-900"></div><div class="bg-slate-300"></div><div class="bg-slate-900"></div><div class="bg-slate-900"></div>
            <div class="bg-slate-900"></div><div class="bg-slate-900"></div><div class="bg-slate-300"></div><div class="bg-slate-900"></div>
          </div>
        </div>
        <p class="text-xs font-bold text-purple-300">Attendee: ${window.APP_STATE.currentUser.name}</p>
        <p class="text-[11px] text-slate-400">Pass ID: #WEN-PASS-${Math.floor(100000 + Math.random() * 900000)}</p>
      </div>

      <div class="flex items-center justify-center gap-3 pt-2">
        <button onclick="closeAllModals()" class="px-5 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md">
          Done
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 7. RESOURCE PREVIEW MODAL
// ----------------------------------------------------
function openResourceModal(resId) {
  const res = WEN_DATA.resources.find(r => r.id === resId);
  if (res) {
    openModal('resourceModal', res);
  }
}

function getResourceModalHTML(res) {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">${res.category}</span>
          <h3 class="text-base font-bold text-slate-900 mt-1">${res.title}</h3>
          <p class="text-slate-500">${res.format} • ${res.fileSize}</p>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
        <h4 class="font-bold text-slate-800">What’s Included in This Toolkit:</h4>
        <ul class="space-y-1.5 text-slate-600 list-disc list-inside">
          <li>Ready-to-use customizable template sheets</li>
          <li>Detailed field-by-field instructions with practical examples</li>
          <li>Checked against latest Indian DPIIT & MSME compliance guidelines</li>
        </ul>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span class="text-[11px] text-slate-400">${res.downloads} Founders Downloaded</span>
        <button 
          onclick="showToast('Downloading &quot;${res.title}&quot;...', 'success'); closeAllModals();"
          class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
        >
          <i data-lucide="download" class="w-4 h-4"></i>
          <span>Download Toolkit</span>
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 8. CREATE COMMUNITY POST MODAL
// ----------------------------------------------------
function getCreatePostModalHTML() {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">Founder Feed</span>
          <h3 class="text-base font-bold text-slate-900 mt-1">Start a Discussion / Ask a Question</h3>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <form onsubmit="handleCreatePost(event)" class="space-y-3.5">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Topic Category:</label>
          <select name="category" required class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50">
            <option value="Funding Advice">Funding Advice</option>
            <option value="Marketing Tips">Marketing Tips</option>
            <option value="Find Collaborator">Find Collaborator / Co-founder</option>
            <option value="Tech & Tools">Tech & Tools</option>
            <option value="Success Stories">Success Stories</option>
          </select>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Headline / Question Title:</label>
          <input type="text" name="title" required placeholder="e.g., What is the best payment gateway for D2C with low failure rates?" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Details & Context:</label>
          <textarea name="content" required rows="4" placeholder="Provide background so fellow founders can give actionable recommendations..." class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50"></textarea>
        </div>

        <div class="pt-2 flex items-center justify-end gap-3">
          <button type="button" onclick="closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold">
            Cancel
          </button>
          <button type="submit" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md">
            Publish Post
          </button>
        </div>
      </form>
    </div>
  `;
}

function handleCreatePost(e) {
  e.preventDefault();
  const form = e.target;

  const newPost = {
    id: 'post-' + Date.now(),
    author: window.APP_STATE.currentUser.name,
    role: `${window.APP_STATE.currentUser.businessName} Founder`,
    avatar: window.APP_STATE.currentUser.avatar,
    badge: window.APP_STATE.currentUser.role,
    timestamp: "Just now",
    category: form.category.value,
    title: form.title.value,
    content: form.content.value,
    likes: 1,
    isLiked: false,
    comments: []
  };

  if (!window.APP_STATE.customCommunityPosts) {
    window.APP_STATE.customCommunityPosts = [];
  }
  window.APP_STATE.customCommunityPosts.unshift(newPost);

  closeAllModals();
  showToast('Discussion published to Community!', 'success');

  if (window.APP_STATE.currentRoute === 'community') {
    renderView('community');
  }
}

// ----------------------------------------------------
// 9. AUTH / SIGN UP / LOGIN MODAL
// ----------------------------------------------------
function getAuthModalHTML(defaultMode = 'signup') {
  return `
    <div class="p-6 overflow-y-auto space-y-5 text-xs">
      <div class="text-center space-y-1">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 mx-auto flex items-center justify-center text-white font-extrabold text-sm">
          WEN
        </div>
        <h3 class="text-lg font-black text-slate-900 font-heading">Welcome to Women Entrepreneur Network</h3>
        <p class="text-slate-500">“Stronger Women • Stronger Businesses • A Brighter Tomorrow”</p>
      </div>

      <form onsubmit="handleAuthSubmit(event)" class="space-y-3.5">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Full Name:</label>
          <input type="text" name="name" required placeholder="e.g., Ananya Deshmukh" value="${window.APP_STATE.currentUser.name}" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Email Address:</label>
          <input type="email" name="email" required placeholder="ananya@yourventure.com" value="${window.APP_STATE.currentUser.email}" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Your Entrepreneurial Profile / Role:</label>
          <select name="role" required class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-purple-800">
            <option value="Aspiring Entrepreneur">Aspiring Entrepreneur (Idea Stage)</option>
            <option value="Home-Based Business Owner">Home-Based Business Owner</option>
            <option value="Early-Stage Startup Founder" selected>Early-Stage Startup Founder</option>
            <option value="Student Innovator">Student Innovator</option>
            <option value="Mentor / Advisor">Mentor / Advisor</option>
          </select>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Business or Venture Name:</label>
          <input type="text" name="businessName" value="${window.APP_STATE.currentUser.businessName}" placeholder="e.g., EcoStyle Studios" class="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50" />
        </div>

        <div class="pt-3">
          <button type="submit" class="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white font-bold text-xs shadow-md hover-lift">
            Enter Platform & Open Dashboard
          </button>
        </div>
      </form>
    </div>
  `;
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const loginData = {
    name: form.name.value,
    email: form.email.value,
    role: form.role.value,
    businessName: form.businessName.value
  };

  window.APP_STATE.currentUser.name = loginData.name;
  window.APP_STATE.currentUser.email = loginData.email;
  window.APP_STATE.currentUser.role = loginData.role;
  window.APP_STATE.currentUser.businessName = loginData.businessName;

  // Send Login details to Java Backend API & MongoDB Collection (wen_db.users)
  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData)
  }).then(res => res.json())
    .then(data => {
      console.log('[MONGODB RESPONSE]', data);
      if (typeof window.syncMongoUsers === 'function') {
        window.syncMongoUsers();
      }
    }).catch(err => {
      console.warn('MongoDB sync note:', err);
    });

  closeAllModals();
  showToast(`Welcome back, ${form.name.value}! Logged in as ${form.role.value}.`, 'success');

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('login', {
      method: 'profile_form',
      role: form.role.value
    });
  }

  navigate('dashboard');
}

// ----------------------------------------------------
// 10. UPGRADE MODAL
// ----------------------------------------------------
function getUpgradeModalHTML() {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-xs text-center">
      <div class="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto">
        <i data-lucide="sparkles" class="w-6 h-6"></i>
      </div>

      <div class="space-y-1">
        <span class="text-[10px] font-bold uppercase tracking-wider text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full">
          WEN Premium Membership
        </span>
        <h3 class="text-lg font-black text-slate-900 font-heading pt-1">Activate Founder Premium</h3>
        <p class="text-slate-500">₹199 / month • Cancel anytime with 1-click</p>
      </div>

      <div class="p-4 rounded-2xl bg-purple-50 text-left space-y-2 border border-purple-100">
        <div class="flex items-center gap-2 font-bold text-purple-900">
          <i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>
          <span>2 1-on-1 Executive Mentor Sessions / Month</span>
        </div>
        <div class="flex items-center gap-2 font-bold text-purple-900">
          <i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>
          <span>Full Access to Financial Models & Legal Packs</span>
        </div>
        <div class="flex items-center gap-2 font-bold text-purple-900">
          <i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>
          <span>Certified Verified Storefront Founder Badge</span>
        </div>
      </div>

      <div class="flex items-center justify-center gap-3 pt-2">
        <button onclick="closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600">
          Maybe Later
        </button>
        <button 
          onclick="handleActivatePremium()"
          class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-md hover-lift"
        >
          Confirm Activation (₹199/Mo)
        </button>
      </div>
    </div>
  `;
}

function handleActivatePremium() {
  window.APP_STATE.currentUser.plan = "Premium Member (Active)";
  closeAllModals();
  showToast('Congratulations! WEN Premium activated. 2 Mentor session credits added!', 'success');

  if (typeof window.trackEvent === 'function') {
    window.trackEvent('purchase', {
      value: 199,
      currency: 'INR',
      items: [{ item_id: 'wen-premium', item_name: 'WEN Founder Premium' }]
    });
  }

  if (window.APP_STATE.currentRoute === 'pricing' || window.APP_STATE.currentRoute === 'dashboard') {
    renderView(window.APP_STATE.currentRoute);
  }
}

// ----------------------------------------------------
// 11. EXPERIMENT DETAILS MODAL
// ----------------------------------------------------
function openExperimentModal(expId) {
  const exp = WEN_COURSES_DATA.experiments.find(e => e.id === expId) || WEN_COURSES_DATA.experiments[0];
  openModal('experimentModal', exp);
}

function getExperimentModalHTML(exp) {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
            Experiment ${exp.number} • ${exp.category}
          </span>
          <h3 class="text-base font-bold text-slate-900 mt-1">Exp ${exp.number}: ${exp.title}</h3>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between font-semibold">
        <span class="text-emerald-700 font-bold flex items-center gap-1">
          <i data-lucide="check-circle" class="w-4 h-4"></i> Status: ${exp.status}
        </span>
        <span class="text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-md font-extrabold">
          Grade: ${exp.grade}
        </span>
      </div>

      <div class="space-y-1.5">
        <h4 class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Experiment Description:</h4>
        <p class="text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">${exp.description}</p>
      </div>

      <div class="space-y-1.5">
        <h4 class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Technical Implementation Details:</h4>
        <p class="text-slate-600 leading-relaxed bg-purple-50/50 p-3 rounded-xl border border-purple-100">${exp.details}</p>
      </div>

      <div class="space-y-1.5">
        <h4 class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Technology Stack:</h4>
        <div class="flex flex-wrap gap-1.5">
          ${exp.tags.map(t => `<span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold"># ${t}</span>`).join('')}
        </div>
      </div>

      <div class="pt-2 flex items-center justify-end">
        <button onclick="closeAllModals()" class="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md">
          Close Window
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 12. ASSIGNMENT DETAILS MODAL
// ----------------------------------------------------
function openAssignmentModal(assignId) {
  const ass = WEN_COURSES_DATA.assignments.find(a => a.id === assignId) || WEN_COURSES_DATA.assignments[0];
  openModal('assignmentModal', ass);
}

function getAssignmentModalHTML(ass) {
  return `
    <div class="p-6 overflow-y-auto space-y-4 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-pink-700 bg-pink-50 px-2 py-0.5 rounded-md">
            Assignment ${ass.number} • ${ass.category}
          </span>
          <h3 class="text-base font-bold text-slate-900 mt-1">Assignment ${ass.number}: ${ass.title}</h3>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between font-semibold">
        <span class="text-emerald-700 font-bold flex items-center gap-1">
          <i data-lucide="check-circle" class="w-4 h-4"></i> ${ass.status}
        </span>
      </div>

      <div class="space-y-1.5">
        <h4 class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Assignment Overview:</h4>
        <p class="text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">${ass.description}</p>
      </div>

      <div class="space-y-1.5">
        <h4 class="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Submission Summary & Remarks:</h4>
        <p class="text-slate-600 leading-relaxed bg-pink-50/50 p-3 rounded-xl border border-pink-100">${ass.details}</p>
      </div>

      <div class="pt-2 flex items-center justify-end">
        <button onclick="closeAllModals()" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md">
          Close Window
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 13. HARDCODED EXPERIMENT VIEW MODAL
// ----------------------------------------------------
function openHardcodedExpModal(expId) {
  const exp = HARDCODED_COURSES.experiments.find(e => e.id === expId) || HARDCODED_COURSES.experiments[0];
  openModal('hardcodedExpModal', exp);
}

function getHardcodedExpModalHTML(exp) {
  return `
    <div class="p-6 overflow-y-auto space-y-5 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-heading">
            ${exp.label}
          </span>
          <h3 class="text-base font-bold text-slate-900 mt-2 font-heading flex items-center gap-2">
            <i data-lucide="file-text" class="w-5 h-5 text-purple-600"></i>
            <span>${exp.title}</span>
          </h3>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-between font-semibold text-purple-900">
        <span class="flex items-center gap-1.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Status: ${exp.status}
        </span>
        <span class="text-slate-500 font-medium text-[11px]">Submitted: ${exp.date}</span>
      </div>

      <!-- Action Card & PDF Document Section -->
      <div class="space-y-3">
        <div class="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <i data-lucide="file-text" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="font-bold text-slate-800 text-xs">${exp.fileName}</h4>
              <p class="text-[11px] text-slate-500">Academic Lab PDF Document</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <a 
              href="${exp.pdfFile}" 
              target="_blank" 
              class="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <i data-lucide="external-link" class="w-4 h-4"></i>
              <span>Open PDF in New Tab</span>
            </a>
            <a 
              href="${exp.pdfFile}" 
              download="${exp.fileName}"
              class="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Download</span>
            </a>
          </div>
        </div>

        <div class="w-full h-96 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-inner relative">
          <object 
            data="${exp.pdfFile}" 
            type="application/pdf" 
            class="w-full h-full"
          >
            <div class="p-8 text-center flex flex-col items-center justify-center h-full space-y-3 bg-purple-50/50">
              <div class="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <i data-lucide="file-text" class="w-6 h-6"></i>
              </div>
              <h4 class="font-bold text-slate-800 text-sm">${exp.fileName}</h4>
              <p class="text-xs text-slate-600 max-w-sm leading-relaxed">
                Click below to open and view the complete PDF document directly in your browser's PDF viewer.
              </p>
              <a 
                href="${exp.pdfFile}" 
                target="_blank" 
                class="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md flex items-center gap-2 transition"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>Open ${exp.fileName} in New Tab</span>
              </a>
            </div>
          </object>
        </div>
      </div>

      <div class="pt-2 flex items-center justify-between border-t border-slate-100">
        <p class="text-[11px] text-slate-400">PDF Location: frontend/pdfs/${exp.fileName}</p>
        <button onclick="closeAllModals()" class="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md">
          Close Window
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 14. HARDCODED ASSIGNMENT VIEW MODAL
// ----------------------------------------------------
function openHardcodedAssignModal(assignId) {
  const ass = HARDCODED_COURSES.assignments.find(a => a.id === assignId) || HARDCODED_COURSES.assignments[0];
  openModal('hardcodedAssignModal', ass);
}

function getHardcodedAssignModalHTML(ass) {
  return `
    <div class="p-6 overflow-y-auto space-y-5 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-heading">
            ${ass.label}
          </span>
          <h3 class="text-base font-bold text-slate-900 mt-2 font-heading flex items-center gap-2">
            <i data-lucide="file-text" class="w-5 h-5 text-pink-600"></i>
            <span>${ass.title}</span>
          </h3>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-between font-semibold text-pink-900">
        <span class="flex items-center gap-1.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Status: ${ass.status}
        </span>
        <span class="text-slate-500 font-medium text-[11px]">Submitted: ${ass.date}</span>
      </div>

      <!-- Action Card & PDF Document Section -->
      <div class="space-y-3">
        <div class="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
              <i data-lucide="file-text" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="font-bold text-slate-800 text-xs">${ass.fileName}</h4>
              <p class="text-[11px] text-slate-500">Academic Practical Assignment PDF Document</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <a 
              href="${ass.pdfFile}" 
              target="_blank" 
              class="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <i data-lucide="external-link" class="w-4 h-4"></i>
              <span>Open PDF in New Tab</span>
            </a>
            <a 
              href="${ass.pdfFile}" 
              download="${ass.fileName}"
              class="flex-1 sm:flex-initial px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Download</span>
            </a>
          </div>
        </div>

        <div class="w-full h-96 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-inner relative">
          <object 
            data="${ass.pdfFile}" 
            type="application/pdf" 
            class="w-full h-full"
          >
            <div class="p-8 text-center flex flex-col items-center justify-center h-full space-y-3 bg-pink-50/50">
              <div class="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <i data-lucide="file-text" class="w-6 h-6"></i>
              </div>
              <h4 class="font-bold text-slate-800 text-sm">${ass.fileName}</h4>
              <p class="text-xs text-slate-600 max-w-sm leading-relaxed">
                Click below to open and view the complete PDF document directly in your browser's PDF viewer.
              </p>
              <a 
                href="${ass.pdfFile}" 
                target="_blank" 
                class="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-md flex items-center gap-2 transition"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
                <span>Open ${ass.fileName} in New Tab</span>
              </a>
            </div>
          </object>
        </div>
      </div>

      <div class="pt-2 flex items-center justify-between border-t border-slate-100">
        <p class="text-[11px] text-slate-400">PDF Location: frontend/pdfs/${ass.fileName}</p>
        <button onclick="closeAllModals()" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md">
          Close Window
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------
// 15. HARDCODED 1-PAGE DOCUMENT VIEW MODAL (Certificate & Index)
// ----------------------------------------------------
function openHardcodedDocModal(docId) {
  const doc = (HARDCODED_COURSES.documents && HARDCODED_COURSES.documents.find(d => d.id === docId)) || {
    id: docId,
    label: docId.includes('cert') ? 'Certificate' : 'Index',
    title: docId.includes('cert') ? 'Certificate PDF Document' : 'Index PDF Document',
    fileName: docId.includes('cert') ? 'Certificate.pdf' : 'Index.pdf',
    pdfFile: docId.includes('cert') ? '/pdfs/Certificate.pdf' : '/pdfs/Index.pdf',
    status: '1-Page PDF',
    date: 'Oct 2026'
  };
  openModal('hardcodedDocModal', doc);
}

function getHardcodedDocModalHTML(doc) {
  return `
    <div class="p-6 overflow-y-auto space-y-5 text-xs">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-heading">
            ${doc.label}
          </span>
          <h3 class="text-base font-bold text-slate-900 mt-2 font-heading flex items-center gap-2">
            <i data-lucide="award" class="w-5 h-5 text-amber-600"></i>
            <span>${doc.title}</span>
          </h3>
        </div>
        <button onclick="closeAllModals()" class="text-slate-400 hover:text-slate-600 p-1">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="p-3.5 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-between font-semibold text-amber-900">
        <span class="flex items-center gap-1.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Status: ${doc.status}
        </span>
        <span class="text-slate-500 font-medium text-[11px]">Submitted: ${doc.date}</span>
      </div>

      <!-- Action Card & PDF Document Section -->
      <div class="space-y-3">
        <div class="p-4 rounded-2xl bg-white border border-amber-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <i data-lucide="file-text" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="font-bold text-slate-800 text-xs">${doc.fileName}</h4>
              <p class="text-[11px] text-slate-500">Academic PDF Document</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2 w-full sm:w-auto">
            <a 
              href="${doc.pdfFile}" 
              download="${doc.fileName}"
              class="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <i data-lucide="download" class="w-4 h-4"></i>
              <span>Download</span>
            </a>
          </div>
        </div>

        <div class="w-full h-96 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-inner relative">
          <object 
            data="${doc.pdfFile}" 
            type="application/pdf" 
            class="w-full h-full"
          >
            <div class="p-8 text-center flex flex-col items-center justify-center h-full space-y-3 bg-amber-50/50">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <i data-lucide="file-text" class="w-6 h-6"></i>
              </div>
              <h4 class="font-bold text-slate-800 text-sm">${doc.fileName} (1 Page)</h4>
              <p class="text-xs text-slate-600 max-w-sm leading-relaxed">
                Single-page document preview. Place your 1-page <code>${doc.fileName}</code> file in <code>frontend/pdfs/</code>.
              </p>
            </div>
          </object>
        </div>
      </div>

      <div class="pt-2 flex items-center justify-between border-t border-slate-100">
        <p class="text-[11px] text-slate-400">Target Location: frontend/pdfs/${doc.fileName}</p>
        <button onclick="closeAllModals()" class="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md">
          Close Window
        </button>
      </div>
    </div>
  `;
}
