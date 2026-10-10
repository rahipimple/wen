/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Main Application Orchestrator & State Management
 */

// Initialize or restore global application state from LocalStorage
function initAppState() {
  const savedState = localStorage.getItem('wen_app_state_v1');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      // Merge with fresh static data
      return {
        currentRoute: parsed.currentRoute || 'home',
        currentUser: parsed.currentUser || WEN_DATA.currentUser,
        customProducts: parsed.customProducts || [],
        customCommunityPosts: parsed.customCommunityPosts || [],
        communityGroups: parsed.communityGroups || WEN_DATA.communityGroups,
        mentorCategoryFilter: 'All',
        mentorSearchQuery: '',
        fundingCategoryFilter: 'All',
        fundingSearchQuery: '',
        marketCategoryFilter: 'All',
        marketSearchQuery: '',
        marketSortBy: 'featured',
        communityTopicFilter: 'All Topics',
        eventCategoryFilter: 'All',
        resourceCategoryFilter: 'All',
        pricingBillingCycle: 'monthly',
        activeDashboardTab: 'overview'
      };
    } catch (e) {
      console.warn('Could not parse saved state, using defaults', e);
    }
  }

  return {
    currentRoute: 'home',
    currentUser: JSON.parse(JSON.stringify(WEN_DATA.currentUser)),
    customProducts: [],
    customCommunityPosts: [],
    communityGroups: JSON.parse(JSON.stringify(WEN_DATA.communityGroups)),
    mentorCategoryFilter: 'All',
    mentorSearchQuery: '',
    fundingCategoryFilter: 'All',
    fundingSearchQuery: '',
    marketCategoryFilter: 'All',
    marketSearchQuery: '',
    marketSortBy: 'featured',
    communityTopicFilter: 'All Topics',
    eventCategoryFilter: 'All',
    resourceCategoryFilter: 'All',
    pricingBillingCycle: 'monthly',
    activeDashboardTab: 'overview'
  };
}

window.APP_STATE = initAppState();

// Auto-save state changes
function persistState() {
  try {
    const toSave = {
      currentRoute: window.APP_STATE.currentRoute,
      currentUser: window.APP_STATE.currentUser,
      customProducts: window.APP_STATE.customProducts,
      customCommunityPosts: window.APP_STATE.customCommunityPosts,
      communityGroups: window.APP_STATE.communityGroups
    };
    localStorage.setItem('wen_app_state_v1', JSON.stringify(toSave));
  } catch (e) {
    console.warn('Could not persist state', e);
  }
}

// Navigation Controller
function navigate(route) {
  if (!route) route = 'home';
  window.APP_STATE.currentRoute = route;
  window.location.hash = route;
  renderView(route);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  persistState();

  // Log page view in Firebase Analytics
  if (typeof window.trackEvent === 'function') {
    window.trackEvent('page_view', {
      page_title: route.charAt(0).toUpperCase() + route.slice(1) + ' | WEN',
      page_path: '#' + route
    });
  }
}

// Global View Render Engine
function renderView(route) {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Render Navbar
  const navbarHTML = renderNavbar(route, window.APP_STATE);

  // Render Target Page View
  let pageHTML = '';
  switch (route) {
    case 'home':
      pageHTML = renderHomeView(window.APP_STATE);
      break;
    case 'courses':
    case 'courses-experiments':
      pageHTML = renderCoursesView(window.APP_STATE, 'experiments');
      break;
    case 'courses-assignments':
      pageHTML = renderCoursesView(window.APP_STATE, 'assignments');
      break;
    case 'about':
      pageHTML = renderAboutView();
      break;
    case 'mentors':
      pageHTML = renderMentorsView(window.APP_STATE);
      break;
    case 'funding':
      pageHTML = renderFundingView(window.APP_STATE);
      break;
    case 'marketplace':
      pageHTML = renderMarketplaceView(window.APP_STATE);
      break;
    case 'community':
      pageHTML = renderCommunityView(window.APP_STATE);
      break;
    case 'events':
      pageHTML = renderEventsView(window.APP_STATE);
      break;
    case 'resources':
      pageHTML = renderResourcesView(window.APP_STATE);
      break;
    case 'pricing':
      pageHTML = renderPricingView(window.APP_STATE);
      break;
    case 'dashboard':
      pageHTML = renderDashboardView(window.APP_STATE);
      break;
    default:
      pageHTML = renderHomeView(window.APP_STATE);
  }

  // Render Footer
  const footerHTML = renderFooter();

  // Inject into DOM
  appRoot.innerHTML = `
    ${navbarHTML}
    <main id="mainContent" class="min-h-screen">
      ${pageHTML}
    </main>
    ${footerHTML}
  `;

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  persistState();
}

// Toggle Save / Bookmark Scheme
function toggleSaveScheme(schemeId) {
  const saved = window.APP_STATE.currentUser.savedSchemes || [];
  const idx = saved.indexOf(schemeId);

  if (idx > -1) {
    saved.splice(idx, 1);
    showToast('Scheme removed from saved list.', 'info');
  } else {
    saved.push(schemeId);
    showToast('Scheme bookmarked to your Dashboard!', 'success');
  }

  window.APP_STATE.currentUser.savedSchemes = saved;
  persistState();

  if (window.APP_STATE.currentRoute === 'funding' || window.APP_STATE.currentRoute === 'dashboard' || window.APP_STATE.currentRoute === 'home') {
    renderView(window.APP_STATE.currentRoute);
  }
}

// Toast Notifications System
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col space-y-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-slate-900 border-emerald-500 text-white' :
                  type === 'error' ? 'bg-slate-900 border-red-500 text-white' :
                  'bg-slate-900 border-purple-500 text-white';

  const iconName = type === 'success' ? 'check-circle' :
                   type === 'error' ? 'alert-circle' : 'info';

  toast.className = `${bgColor} pointer-events-auto border-l-4 px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-xs font-semibold transform transition-all duration-300 translate-y-4 opacity-0 max-w-sm`;
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 shrink-0 text-pink-400"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}

// Handle Browser Hash Change for Deep Linking
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  if (hash !== window.APP_STATE.currentRoute) {
    navigate(hash);
  }
});

// App Startup on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Inject modal shell
  const modalsEl = document.createElement('div');
  modalsEl.innerHTML = renderModalsContainer();
  document.body.appendChild(modalsEl);

  // Initial Route
  const initialHash = window.location.hash.replace('#', '') || 'home';
  navigate(initialHash);
});
