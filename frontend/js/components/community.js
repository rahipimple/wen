/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Community & Networking Page Component
 */

function renderCommunityView(state) {
  const activeTopic = state.communityTopicFilter || 'All Topics';
  const topics = ['All Topics', 'Funding Advice', 'Marketing Tips', 'Find Collaborator', 'Tech & Tools', 'Success Stories'];

  const allPosts = [...(state.customCommunityPosts || []), ...WEN_DATA.communityPosts];

  const filteredPosts = allPosts.filter(post => {
    if (activeTopic === 'All Topics') return true;
    return post.category.toLowerCase() === activeTopic.toLowerCase();
  });

  const groups = state.communityGroups || WEN_DATA.communityGroups;

  return `
    <div class="space-y-10 pb-16 animate-fade-in">
      
      <!-- Top Hero Header -->
      <section class="bg-gradient-to-b from-emerald-50/60 via-purple-50/30 to-white pt-12 pb-14 border-b border-emerald-100">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
            Safe, Transparent & Synergistic Peer Circle
          </span>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">
            Connect, Collaborate & <br class="hidden sm:inline"/>
            <span class="text-gradient-wen">Grow with ${(5200 + ((state.mongoUsers || []).length)).toLocaleString()}+ Female Founders</span>
          </h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ask tough questions, find co-founders, share raw startup learnings, celebrate wins, and build lifelong partnerships.
          </p>

          <!-- Action: Create Post CTA -->
          <div class="pt-4 flex items-center justify-center gap-3">
            <button 
              onclick="openModal('createPostModal')"
              class="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white font-bold text-xs shadow-md hover-lift flex items-center gap-2"
            >
              <i data-lucide="edit-3" class="w-4 h-4"></i>
              <span>Start a Discussion / Share Idea</span>
            </button>
          </div>

          <!-- Topic Filter Pills -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
            ${topics.map(topic => {
              const isSelected = activeTopic.toLowerCase() === topic.toLowerCase();
              return `
                <button 
                  onclick="setCommunityTopicFilter('${topic}')"
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected 
                      ? 'bg-emerald-700 text-white shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }"
                >
                  ${topic}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- Main Content Grid: Feed (Left 8 cols) + Groups & Leaders Sidebar (Right 4 cols) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- LEFT: Discussions Feed -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Quick Composer Card -->
            <div class="bg-white rounded-2xl p-5 border border-purple-100 shadow-soft flex items-center gap-3 cursor-pointer" onclick="openModal('createPostModal')">
              <img src="${state.currentUser.avatar}" alt="You" class="w-10 h-10 rounded-full object-cover ring-2 ring-purple-100 shrink-0" />
              <div class="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500 font-medium transition flex items-center justify-between">
                <span>Ask a question, share a grant update, or pitch your idea...</span>
                <i data-lucide="sparkles" class="w-4 h-4 text-purple-600"></i>
              </div>
            </div>

            <!-- Feed Filter Summary -->
            <div class="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Showing discussions in <strong>${activeTopic}</strong></span>
              <span class="font-medium text-emerald-700 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Active Feed
              </span>
            </div>

            <!-- Post Cards -->
            <div class="space-y-6">
              ${filteredPosts.map(post => {
                return `
                  <div class="bg-white rounded-2xl border border-slate-200 shadow-2xs p-6 space-y-4 hover:border-purple-200 transition-all" id="post-${post.id}">
                    
                    <!-- Post Header -->
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex items-center gap-3">
                        <img src="${post.avatar}" alt="${post.author}" class="w-11 h-11 rounded-full object-cover ring-2 ring-purple-100" />
                        <div>
                          <div class="flex items-center gap-2">
                            <h4 class="text-sm font-bold text-slate-900">${post.author}</h4>
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                              ${post.badge}
                            </span>
                          </div>
                          <p class="text-[11px] text-slate-500">${post.role} • ${post.timestamp}</p>
                        </div>
                      </div>

                      <span class="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 shrink-0">
                        ${post.category}
                      </span>
                    </div>

                    <!-- Post Body -->
                    <div class="space-y-2">
                      <h3 class="text-base font-bold text-slate-900 leading-snug">${post.title}</h3>
                      <p class="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">${post.content}</p>
                    </div>

                    <!-- Interaction Actions: Like & Comment Counts -->
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div class="flex items-center gap-4">
                        <!-- Like Button -->
                        <button 
                          onclick="togglePostLike('${post.id}')"
                          class="flex items-center gap-1.5 font-bold transition ${
                            post.isLiked ? 'text-pink-600' : 'text-slate-600 hover:text-pink-600'
                          }"
                        >
                          <i data-lucide="heart" class="w-4 h-4 ${post.isLiked ? 'fill-pink-600' : ''}"></i>
                          <span>${post.likes} Likes</span>
                        </button>

                        <!-- Comments Toggle -->
                        <button 
                          onclick="toggleCommentsSection('${post.id}')"
                          class="flex items-center gap-1.5 font-bold text-slate-600 hover:text-purple-600 transition"
                        >
                          <i data-lucide="message-circle" class="w-4 h-4"></i>
                          <span>${(post.comments || []).length} Comments</span>
                        </button>
                      </div>

                      <button 
                        onclick="showToast('Discussion link copied to clipboard!', 'success')"
                        class="text-slate-400 hover:text-slate-600 flex items-center gap-1 font-medium text-[11px]"
                      >
                        <i data-lucide="share-2" class="w-3.5 h-3.5"></i>
                        <span>Share</span>
                      </button>
                    </div>

                    <!-- Expandable Comments Thread -->
                    <div id="comments-${post.id}" class="pt-3 border-t border-slate-100/70 space-y-3">
                      <!-- Existing Comments -->
                      <div class="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                        ${(post.comments || []).map(comm => `
                          <div class="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                            <img src="${comm.avatar}" alt="${comm.author}" class="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" />
                            <div class="space-y-0.5">
                              <div class="flex items-center gap-2">
                                <span class="font-bold text-slate-900">${comm.author}</span>
                                <span class="text-[10px] text-slate-400">${comm.time}</span>
                              </div>
                              <p class="text-slate-600 text-xs leading-relaxed">${comm.text}</p>
                            </div>
                          </div>
                        `).join('')}
                      </div>

                      <!-- New Comment Input Box -->
                      <form onsubmit="handleAddComment(event, '${post.id}')" class="flex items-center gap-2 pt-1">
                        <img src="${state.currentUser.avatar}" alt="You" class="w-7 h-7 rounded-full object-cover shrink-0" />
                        <input 
                          type="text" 
                          placeholder="Write a supportive reply or answer..." 
                          required
                          class="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-purple-600"
                        />
                        <button 
                          type="submit" 
                          class="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shrink-0 shadow-xs"
                        >
                          Reply
                        </button>
                      </form>
                    </div>

                  </div>
                `;
              }).join('')}
            </div>

          </div>

          <!-- RIGHT: Groups & Chapters Sidebar -->
          <div class="lg:col-span-4 space-y-6">
            
            <!-- Live MongoDB Database Sync Members Card -->
            <div class="bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-2xl p-5 border border-purple-800/50 shadow-md space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 class="text-xs font-extrabold uppercase tracking-wider font-heading text-purple-200">Live MongoDB Sync</h3>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  wen_db.users
                </span>
              </div>
              <p class="text-[11px] text-slate-300">
                Real-time MongoDB documents auto-synced across codebase (${(state.mongoUsers || []).length} registered):
              </p>
              <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
                ${((state.mongoUsers || []).length === 0) 
                  ? `<div class="text-[11px] text-slate-400 italic">No users in MongoDB collection yet.</div>`
                  : (state.mongoUsers || []).slice().reverse().map(u => `
                    <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs backdrop-blur-xs">
                      <div class="min-w-0 pr-2">
                        <div class="font-bold text-white truncate">${u.name}</div>
                        <div class="text-[10px] text-purple-300 truncate">${u.businessName || u.role}</div>
                      </div>
                      <span class="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/30 text-purple-200 shrink-0">
                        ${u.loginTime ? u.loginTime.split(' ')[1] : 'Just now'}
                      </span>
                    </div>
                  `).join('')
                }
              </div>
            </div>

            <!-- Interest-Based Communities Card -->
            <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">Interest Communities</h3>
                <span class="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded-md">Vetted Hubs</span>
              </div>
              
              <div class="space-y-3">
                ${groups.map(group => `
                  <div class="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">${group.name}</h4>
                      <p class="text-[10px] text-slate-500">${group.members} • ${group.category}</p>
                    </div>
                    <button 
                      onclick="toggleJoinGroup('${group.name}')"
                      class="px-3 py-1.5 rounded-xl text-[11px] font-bold transition ${
                        group.joined 
                          ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }"
                    >
                      ${group.joined ? 'Joined' : 'Join'}
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Community Guidelines Callout -->
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200/80 space-y-3 text-xs">
              <div class="flex items-center gap-2 text-purple-900 font-bold">
                <i data-lucide="shield-alert" class="w-4 h-4 text-purple-600"></i>
                <span>Our Community Pledge</span>
              </div>
              <ul class="space-y-1.5 text-slate-600 leading-relaxed text-[11px]">
                <li class="flex items-start gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span>Zero Spam: Respect founder privacy and avoid unsolicited sales pitches.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span>Safe Space: Open vulnerability is welcomed and protected.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
                  <span>Pay-it-Forward: Share templates, experiences, and open doors.</span>
                </li>
              </ul>
            </div>

            <!-- Success Story Spotlight Mini-Card -->
            <div class="bg-slate-900 text-white rounded-2xl p-5 space-y-3 shadow-md">
              <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Founder Spotlight</span>
              <p class="text-xs text-slate-300 italic leading-relaxed">
                “Met my technical co-founder Sneha right here on the WEN Collaborator board. Today our SaaS has 14,000 active users!”
              </p>
              <div class="flex items-center gap-2 pt-2 border-t border-slate-800">
                <span class="text-xs font-bold text-white">Ananya & Sneha</span>
                <span class="text-[10px] text-purple-400">• SizeSmart Tech</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  `;
}

function setCommunityTopicFilter(topic) {
  window.APP_STATE.communityTopicFilter = topic;
  renderView('community');
}

function toggleCommentsSection(postId) {
  const el = document.getElementById(`comments-${postId}`);
  if (el) el.classList.toggle('hidden');
}

function togglePostLike(postId) {
  const allPosts = [...(window.APP_STATE.customCommunityPosts || []), ...WEN_DATA.communityPosts];
  const post = allPosts.find(p => p.id === postId);
  if (post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    renderView('community');
  }
}

function handleAddComment(e, postId) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const text = input.value.trim();
  if (!text) return;

  const allPosts = [...(window.APP_STATE.customCommunityPosts || []), ...WEN_DATA.communityPosts];
  const post = allPosts.find(p => p.id === postId);
  if (post) {
    if (!post.comments) post.comments = [];
    post.comments.push({
      author: window.APP_STATE.currentUser.name,
      avatar: window.APP_STATE.currentUser.avatar,
      time: "Just now",
      text: text
    });
    input.value = '';
    renderView('community');
    showToast('Reply published to community!', 'success');
  }
}

function toggleJoinGroup(groupName) {
  let groups = window.APP_STATE.communityGroups || WEN_DATA.communityGroups;
  const group = groups.find(g => g.name === groupName);
  if (group) {
    group.joined = !group.joined;
    window.APP_STATE.communityGroups = groups;
    renderView('community');
    showToast(group.joined ? `Joined ${groupName}!` : `Left ${groupName}.`, 'info');
  }
}
