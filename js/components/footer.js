/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Footer Component
 */

function renderFooter() {
  return `
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Top Section: Brand, Mission & Newsletter -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          <!-- Brand & Mission Column -->
          <div class="lg:col-span-5 space-y-4">
            <div class="flex items-center space-x-3 cursor-pointer" onclick="navigate('home')">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-sky-400 p-0.5 shadow-md flex items-center justify-center">
                <div class="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xl tracking-tight">
                    WEN
                  </span>
                </div>
              </div>
              <div>
                <span class="font-bold text-white text-lg tracking-tight font-heading block">Women Entrepreneur Network</span>
                <span class="text-xs text-purple-400 font-medium">Tagline: “Connect • Learn • Grow”</span>
              </div>
            </div>

            <p class="text-slate-400 text-sm leading-relaxed max-w-md">
              A comprehensive digital startup ecosystem empowering women entrepreneurs, home-based innovators, students, and small enterprises to overcome systemic barriers, find seasoned mentors, access catalytic funding, and build sustainable enterprises.
            </p>

            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 flex items-start gap-2.5">
              <i data-lucide="sparkles" class="w-4 h-4 text-pink-400 shrink-0 mt-0.5"></i>
              <div>
                <p class="font-semibold text-white">Our Shared Vision</p>
                <p class="text-slate-400 mt-0.5">“Stronger Women • Stronger Businesses • A Brighter Tomorrow”</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 pt-2">
              <span class="text-xs text-slate-400">Connect with us:</span>
              <a href="javascript:void(0)" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition" title="LinkedIn">
                <i data-lucide="linkedin" class="w-4 h-4"></i>
              </a>
              <a href="javascript:void(0)" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition" title="Instagram">
                <i data-lucide="instagram" class="w-4 h-4"></i>
              </a>
              <a href="javascript:void(0)" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition" title="Twitter/X">
                <i data-lucide="twitter" class="w-4 h-4"></i>
              </a>
              <a href="javascript:void(0)" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-purple-700 text-slate-300 hover:text-white flex items-center justify-center transition" title="YouTube">
                <i data-lucide="youtube" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- Quick Navigation Links (2 Columns) -->
          <div class="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8 text-sm">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-purple-400 mb-4 font-heading">Core Platform</h4>
              <ul class="space-y-2.5">
                <li><a href="javascript:void(0)" onclick="navigate('home')" class="hover:text-white transition">Home</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('about')" class="hover:text-white transition">About WEN & Vision</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('mentors')" class="hover:text-white transition">Mentor Connect</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('funding')" class="hover:text-white transition">Funding & Schemes</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('marketplace')" class="hover:text-white transition">Storefront Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-pink-400 mb-4 font-heading">Community & Growth</h4>
              <ul class="space-y-2.5">
                <li><a href="javascript:void(0)" onclick="navigate('community')" class="hover:text-white transition">Founder Community</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('events')" class="hover:text-white transition">Workshops & Bootcamps</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('resources')" class="hover:text-white transition">Guides & Templates</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('pricing')" class="hover:text-white transition">Plans & Monetization</a></li>
                <li><a href="javascript:void(0)" onclick="navigate('dashboard')" class="hover:text-white transition">Founder Dashboard</a></li>
              </ul>
            </div>
          </div>

          <!-- Newsletter & Ecosystem Support -->
          <div class="lg:col-span-3 space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-sky-400 font-heading">Stay Empowered</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Get weekly curated grant deadlines, masterclass invitations, and founder success blueprints.
            </p>
            <form onsubmit="event.preventDefault(); showToast('Subscribed to WEN Weekly Bulletin! Welcome.', 'success'); this.reset();" class="space-y-2">
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-purple-500"
              />
              <button 
                type="submit" 
                class="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-xs hover:opacity-95 shadow-sm transition"
              >
                Subscribe Free
              </button>
            </form>
            <p class="text-[11px] text-slate-500">Zero spam. Unsubscribe anytime.</p>
          </div>

        </div>

        <!-- Ecosystem & Institutional Mentions -->
        <div class="py-8 border-b border-slate-800 text-xs text-slate-400">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span class="text-slate-500 font-medium">Aligned with National & Global Initiatives:</span>
              <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 font-medium text-slate-300">
                <span class="flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i> NITI Aayog WEP</span>
                <span class="flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i> Stand-Up India (SIDBI)</span>
                <span class="flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i> Pradhan Mantri Mudra Yojana</span>
                <span class="flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i> Startup India Hub</span>
              </div>
            </div>
            <div class="text-right">
              <span class="text-slate-500 text-[11px]">Academic & Pitch Ready Edition</span>
              <p class="text-slate-300 font-semibold text-xs">Women Entrepreneur Network (WEN) Incubator</p>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Women Entrepreneur Network (WEN). All rights reserved.</p>
          <div class="flex items-center space-x-6">
            <a href="javascript:void(0)" class="hover:text-slate-400">Privacy Policy</a>
            <a href="javascript:void(0)" class="hover:text-slate-400">Terms of Service</a>
            <a href="javascript:void(0)" class="hover:text-slate-400">Community Guidelines</a>
            <a href="javascript:void(0)" class="hover:text-slate-400">Support & Help</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}
