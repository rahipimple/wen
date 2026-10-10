/**
 * WOMEN ENTREPRENEUR NETWORK (WEN)
 * Core Dataset & Initial Mock Storage State
 */

const WEN_DATA = {
  // Statistics & Impact
  stats: {
    entrepreneurs: "5,200+",
    fundingFacilitated: "₹14.8 Cr+",
    mentorsCount: "480+",
    productsListed: "1,350+",
    successRate: "94%",
    citiesRepresented: "65+"
  },

  // Problem & Solution Matrix
  problemsSolutions: [
    {
      problem: "Limited Access to Capital & Funding",
      problemDesc: "Women-led businesses receive less than 3% of global VC capital and face high collateral hurdles for traditional bank loans.",
      solution: "Curated Scheme & Grant Engine",
      solutionDesc: "Direct matching to 40+ government schemes, non-dilutive women entrepreneur grants, and investor pitch desks.",
      icon: "coins",
      color: "purple"
    },
    {
      problem: "Lack of High-Impact Mentorship",
      problemDesc: "First-time founders struggle without seasoned guides who understand regulatory, market, and gender-specific roadblocks.",
      solution: "1-on-1 Mentor Connect",
      solutionDesc: "Direct booking with veteran industry executives, unicorn founders, and financial strategists tailored to your stage.",
      icon: "compass",
      color: "pink"
    },
    {
      problem: "Difficulty in Reaching Customers",
      problemDesc: "High customer acquisition costs on major ad platforms squeeze margins for small, artisanal, and home-based businesses.",
      solution: "Dedicated WEN Marketplace",
      solutionDesc: "Zero-friction storefront with a community-first distribution channel, organic B2B referrals, and corporate gift tie-ups.",
      icon: "shopping-bag",
      color: "sky"
    },
    {
      problem: "Isolated Networking Circles",
      problemDesc: "Many female founders operate in silos, missing co-founder synergies, supplier referrals, and peer accountability.",
      solution: "Dynamic Founder Circles",
      solutionDesc: "City chapters, topic-driven peer forums, collaboration boards, and weekly founder masterminds.",
      icon: "users",
      color: "emerald"
    },
    {
      problem: "Digital & Business Skill Gaps",
      problemDesc: "Rapid shifts in AI tools, digital marketing, taxation, and compliance create operational bottlenecks for founders.",
      solution: "Skill Accelerators & Toolkits",
      solutionDesc: "Hands-on bootcamps, live financial literacy cohorts, and ready-to-use legal & pitch deck templates.",
      icon: "book-open",
      color: "amber"
    }
  ],

  // Target Audiences
  targetUsers: [
    {
      title: "Aspiring Women Entrepreneurs",
      tagline: "Have a spark? Turn it into a viable venture.",
      desc: "Get idea validation, business model canvas training, and step-by-step startup roadmap support from day zero.",
      badge: "Idea Stage",
      icon: "sparkles",
      color: "purple"
    },
    {
      title: "Home-Based Business Owners",
      tagline: "Scale from kitchen tables to thriving brands.",
      desc: "Transition craft, boutique, catering, and artisan ventures into structured, registered, and scalable enterprises.",
      badge: "Micro Business",
      icon: "home",
      color: "pink"
    },
    {
      title: "Early-Stage Startups & D2C Brands",
      tagline: "Scale operations, hire talent, and raise rounds.",
      desc: "Connect with angel syndicates, institutional venture funds, export councils, and high-growth mentors.",
      badge: "Growth Stage",
      icon: "trending-up",
      color: "sky"
    },
    {
      title: "College & Student Innovators",
      tagline: "Student founders with cutting-edge innovations.",
      desc: "Access student entrepreneur grants, campus incubation links, patent filing assistance, and pitch competitions.",
      badge: "Campus Innovators",
      icon: "graduation-cap",
      color: "emerald"
    },
    {
      title: "Mentors, Investors & Ecosystem Partners",
      tagline: "Give back, discover dealflow, foster equality.",
      desc: "Engage with vetted women-founded enterprises, lead masterclasses, and participate in impact investment rounds.",
      badge: "Ecosystem Enablers",
      icon: "briefcase",
      color: "amber"
    }
  ],

  // Mentors Directory
  mentors: [
    {
      id: "m-1",
      name: "Radhika Kulkarni",
      role: "Ex-VP Growth, Nykaa & D2C Advisor",
      expertise: "Marketing",
      experience: "14+ Years",
      rating: 4.9,
      reviewsCount: 68,
      sessionsCompleted: 142,
      bio: "Scales consumer goods & beauty brands from 0 to ₹50Cr ARR. Specializes in performance marketing, retention loops, and influencer strategy.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      topics: ["Performance Marketing", "D2C Brand Strategy", "Customer Acquisition"],
      sessionFee: "Free with Premium",
      nextSlot: "Tomorrow, 4:00 PM"
    },
    {
      id: "m-2",
      name: "Dr. Sunita Venkat",
      role: "Partner, Bharat Impact Angels & Ex-CFO",
      expertise: "Finance",
      experience: "18+ Years",
      rating: 5.0,
      reviewsCount: 84,
      sessionsCompleted: 210,
      bio: "Chartered Accountant and angel investor in 18 women-led ventures. Expert in financial modeling, valuation, term sheets, and grant applications.",
      image: "https://images.unsplash.com/photo-1580894732470-fb9742469956?auto=format&fit=crop&w=400&q=80",
      topics: ["Valuation & Term Sheets", "Cash Flow Management", "Fundraising Pitch"],
      sessionFee: "Free with Premium",
      nextSlot: "Thursday, 2:30 PM"
    },
    {
      id: "m-3",
      name: "Meera Krishnan",
      role: "Head of Engineering, SaaS Unicorn",
      expertise: "Technology",
      experience: "12+ Years",
      rating: 4.8,
      reviewsCount: 52,
      sessionsCompleted: 98,
      bio: "Assists non-technical founders in building scalable MVPs, choosing AI tools, evaluating software vendors, and technical hiring.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
      topics: ["No-Code & Tech Architecture", "Building MVPs", "AI for Business"],
      sessionFee: "Free with Premium",
      nextSlot: "Friday, 11:00 AM"
    },
    {
      id: "m-4",
      name: "Aarti Sengupta",
      role: "Founder, BloomCraft Organics (Exited)",
      expertise: "Business Strategy",
      experience: "15+ Years",
      rating: 4.9,
      reviewsCount: 91,
      sessionsCompleted: 175,
      bio: "Built a sustainable lifestyle brand from a kitchen unit to 400+ retail outlets across India. Expert in supply chain, B2B distribution, and brand positioning.",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=400&q=80",
      topics: ["Retail & Distribution", "B2B Sales", "Operational Scaling"],
      sessionFee: "Free with Premium",
      nextSlot: "Saturday, 10:00 AM"
    },
    {
      id: "m-5",
      name: "Pooja Singhal",
      role: "Executive Leadership Coach & Author",
      expertise: "Leadership",
      experience: "16+ Years",
      rating: 4.9,
      reviewsCount: 45,
      sessionsCompleted: 110,
      bio: "Helps female founders overcome imposter syndrome, master high-stakes investor negotiations, build resilient cultures, and manage executive stress.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
      topics: ["Negotiation Skills", "Founder Mental Health", "Executive Presence"],
      sessionFee: "Free with Premium",
      nextSlot: "Monday, 5:00 PM"
    },
    {
      id: "m-6",
      name: "Tanvi Bansal",
      role: "Fintech Product Lead & Angel Investor",
      expertise: "Finance",
      experience: "10+ Years",
      rating: 4.8,
      reviewsCount: 39,
      sessionsCompleted: 88,
      bio: "Specializes in digital payments, working capital credit facilities for small retailers, and micro-loan structuring for emerging women entrepreneurs.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80",
      topics: ["Working Capital", "Unit Economics", "Govt Loan Schemes"],
      sessionFee: "Free with Premium",
      nextSlot: "Wednesday, 3:00 PM"
    },
    {
      id: "m-7",
      name: "Siddhi Deshpande",
      role: "Viral Content & Community Strategist",
      expertise: "Marketing",
      experience: "8+ Years",
      rating: 5.0,
      reviewsCount: 56,
      sessionsCompleted: 130,
      bio: "Helped 80+ female solopreneurs scale their organic Instagram & LinkedIn revenue from 0 to over 50k engaged followers and sustainable daily inbound sales.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      topics: ["Organic Social Growth", "Founder Personal Branding", "Email Funnels"],
      sessionFee: "Free with Premium",
      nextSlot: "Tuesday, 1:00 PM"
    },
    {
      id: "m-8",
      name: "Kalyani Roy",
      role: "Corporate Lawyer & IP Strategist",
      expertise: "Business Strategy",
      experience: "13+ Years",
      rating: 4.9,
      reviewsCount: 63,
      sessionsCompleted: 154,
      bio: "Advises founders on legal structures, trademark registration, shareholder agreements, vendor contracts, and DPIIT startup recognition.",
      image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&w=400&q=80",
      topics: ["Trademark & Copyright", "Founders' Agreement", "Compliance & DPIIT"],
      sessionFee: "Free with Premium",
      nextSlot: "Friday, 4:30 PM"
    }
  ],

  // Funding & Schemes
  fundingSchemes: [
    {
      id: "f-1",
      name: "Pradhan Mantri Mudra Yojana (Tarun & Kishor for Women)",
      category: "Government Schemes",
      fundingAmount: "Up to ₹10,00,000",
      amountValue: 1000000,
      interestRate: "Subsidized 8.05% - 9.5%",
      type: "Collateral-Free Loan",
      eligibility: "Any Indian woman entrepreneur over 18 running a manufacturing, trading, or service micro-enterprise.",
      description: "Low-interest, zero-collateral loan facility backed by the National Credit Guarantee Trustee Company. Ideal for machinery purchase, inventory expansion, and retail setup.",
      documents: ["Identity Proof (Aadhaar/PAN)", "Proof of Business Address", "6 Months Bank Statement", "Project Quotation/Report"],
      deadline: "Open All Year (Rolling)",
      badge: "Collateral-Free",
      provider: "Ministry of Finance & Partner Banks",
      featured: true
    },
    {
      id: "f-2",
      name: "Stand-Up India Scheme for Women Entrepreneurs",
      category: "Government Schemes",
      fundingAmount: "₹10,00,000 to ₹1,00,00,000",
      amountValue: 10000000,
      interestRate: "MCLR + 3% + Tenor Premium",
      type: "Composite Loan (Term + Working Capital)",
      eligibility: "Enterprises where at least 51% of shareholding and controlling stake is held by a woman founder. Must be a greenfield project.",
      description: "A flagship initiative supporting greenfield enterprises in manufacturing, services, agri-allied activities, or trading with funding up to ₹1 Crore through scheduled commercial banks.",
      documents: ["Project Report with 3-year projections", "KYC of Promoters", "Land/Lease Agreement", "Pollution/Municipal clearances (if applicable)"],
      deadline: "Open All Year (Apply via Lead Bank)",
      badge: "High Capital",
      provider: "SIDBI & Commercial Banks",
      featured: true
    },
    {
      id: "f-3",
      name: "BIRAC BIG (Biotechnology Ignition Grant) - Women Innovators",
      category: "Grants",
      fundingAmount: "Up to ₹50,00,000",
      amountValue: 5000000,
      interestRate: "0% (100% Non-Dilutive Grant)",
      type: "Equity-Free Grant",
      eligibility: "Early-stage female researchers, technologists, or women-led bio/medtech/agritech startups with DPIIT recognition.",
      description: "Fosters commercialization of innovative biotechnology, clean health, nutrition, and biomedical devices. Includes access to premier bio-incubators and testing facilities.",
      documents: ["DPIIT Certificate", "Detailed Technical Proposal", "Milestone Budget Sheet", "Proof of Concept data"],
      deadline: "Bi-annual Cycle (Next deadline: Nov 30)",
      badge: "Non-Dilutive",
      provider: "Department of Biotechnology (DBT), Govt. of India",
      featured: true
    },
    {
      id: "f-4",
      name: "NITI Aayog WEP (Women Entrepreneurship Platform) Seed Grant",
      category: "Grants",
      fundingAmount: "₹5,00,000 to ₹15,00,000",
      amountValue: 1500000,
      interestRate: "0% (Non-Dilutive Grant)",
      type: "Catalytic Seed Grant",
      eligibility: "Women-led early-stage ventures registered on WEP portal showing measurable social impact or digital innovation.",
      description: "Seed funding awarded to accelerate women founders breaking into Tier-2 and Tier-3 markets with localized solutions in agriculture, education, and handloom arts.",
      documents: ["WEP Registration ID", "Founder Pitch Deck", "Pitch Video (3 mins)", "Letter of Incorporation"],
      deadline: "Quarterly Evaluation",
      badge: "Government Grant",
      provider: "NITI Aayog & Corporate CSR Partners",
      featured: false
    },
    {
      id: "f-5",
      name: "HerVenture Angel Syndicate Seed Fund",
      category: "Startup Funding",
      fundingAmount: "₹25,00,000 to ₹1,50,00,000",
      amountValue: 15000000,
      interestRate: "Equity-Based (5% - 10%)",
      type: "Angel / Seed Equity",
      eligibility: "Scalable startups with at least one woman co-founder holding >20% equity and an operational MVP with early customer traction.",
      description: "A consortium of 85+ active female leaders and high-net-worth angel investors investing catalytic early-stage capital alongside strategic founder mentorship.",
      documents: ["12-Slide Pitch Deck", "Financial Model (ARR/MRR)", "Cap Table", "Customer Testimonials/Metrics"],
      deadline: "Rolling Monthly Pitches",
      badge: "Venture Capital",
      provider: "WEN Angels & Global Female Syndicate",
      featured: true
    },
    {
      id: "f-6",
      name: "TREAD (Trade Related Entrepreneurship Assistance and Development)",
      category: "Loans",
      fundingAmount: "Govt Grant up to 30% of project cost",
      amountValue: 3000000,
      interestRate: "Subsidized via lending institutions",
      type: "Grant + Bank Loan Combo",
      eligibility: "Poor and underprivileged women in semi-urban and rural clusters channeled through registered NGOs.",
      description: "Promotes enterprise development through NGOs by providing economic empowerment training, micro-credit support, and project subsidies.",
      documents: ["NGO Recommendation", "Cluster Member List", "Micro-project appraisal report"],
      deadline: "Open All Year",
      badge: "Cluster Support",
      provider: "Ministry of MSME",
      featured: false
    },
    {
      id: "f-7",
      name: "Mahila Udyam Nidhi Scheme",
      category: "Loans",
      fundingAmount: "Up to ₹10,00,000",
      amountValue: 1000000,
      interestRate: "Market linked with soft seed margin",
      type: "Soft Seed Capital",
      eligibility: "Small scale industrial units run by women entrepreneurs with minimal personal capital.",
      description: "Provides equity assistance in the form of soft loans for meeting gap in equity requirements when establishing new small-scale units or rehabilitating sick units.",
      documents: ["MSME Udyam Registration", "Detailed Project Report", "Net Worth Certificate"],
      deadline: "Rolling",
      badge: "Soft Loan",
      provider: "Punjab National Bank & SIDBI",
      featured: false
    },
    {
      id: "f-8",
      name: "D2C Women Founders Growth Grant (Corporate Partner)",
      category: "Grants",
      fundingAmount: "₹7,50,000 + Cloud/Ad Credits",
      amountValue: 750000,
      interestRate: "0% Equity-Free",
      type: "Corporate Grant & Credits",
      eligibility: "Women-owned D2C brands in food, apparel, wellness, or sustainability with active monthly sales.",
      description: "Sponsored by e-commerce ecosystem enablers to provide direct cash grants plus ₹10 Lakhs in ad credits, warehousing discounts, and digital marketing support.",
      documents: ["GST Returns (Last 6 Months)", "Product Catalog", "Brand Story Video"],
      deadline: "Closing in 14 Days",
      badge: "Cash + Credits",
      provider: "WEN Corporate Alliance",
      featured: false
    }
  ],

  // Marketplace Products & Services
  products: [
    {
      id: "p-1",
      title: "Handmade Botanical Rose & Saffron Face Elixir",
      category: "Beauty",
      price: 899,
      originalPrice: 1299,
      businessName: "Aura Botanicals",
      founderName: "Shalini Mehra",
      rating: 4.9,
      reviews: 142,
      location: "Dehradun, Uttarakhand",
      image: "https://images.unsplash.com/photo-1608248597359-052a65a2665e?auto=format&fit=crop&w=500&q=80",
      description: "Small-batch cold-pressed face oil crafted with wild Kashmiri saffron, rosehip oil, and organic essential extracts. 100% chemical-free and packaged in recyclable amber glass.",
      inStock: true,
      tags: ["Organic", "Cruelty-Free", "Ayurvedic", "Small-Batch"]
    },
    {
      id: "p-2",
      title: "Handwoven Chanderi Silk Saree with Zari Motifs",
      category: "Fashion",
      price: 4500,
      originalPrice: 6200,
      businessName: "Virasat Handlooms",
      founderName: "Nandini Rawat",
      rating: 5.0,
      reviews: 98,
      location: "Chanderi, Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
      description: "Authentic hand-loomed silk-cotton Chanderi saree woven directly by women artisan collectives. Every purchase directly sustains master weaver families.",
      inStock: true,
      tags: ["Handloom", "Sustainable", "GI Tagged", "Artisan Made"]
    },
    {
      id: "p-3",
      title: "Artisanal Single-Origin Arabica Roasted Beans (Dark Roast)",
      category: "Food",
      price: 549,
      originalPrice: 650,
      businessName: "Coorg Hill Estate Coffee",
      founderName: "Bhavana Muthappa",
      rating: 4.8,
      reviews: 86,
      location: "Madikeri, Coorg",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80",
      description: "Shade-grown, hand-picked Arabica coffee beans roasted in micro-batches with notes of dark chocolate and toasted hazelnuts.",
      inStock: true,
      tags: ["Direct Trade", "Single Origin", "Specialty Coffee"]
    },
    {
      id: "p-4",
      title: "Eco-Friendly Cork & Organic Cotton Laptop Backpack",
      category: "Handmade",
      price: 2199,
      originalPrice: 2899,
      businessName: "Tara Green Living",
      founderName: "Smriti Jain",
      rating: 4.9,
      reviews: 114,
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      description: "Water-resistant, vegan, cruelty-free backpack with dedicated padded sleeve for 15.6-inch laptops and anti-theft zipper closures.",
      inStock: true,
      tags: ["Vegan Leather", "Zero Waste", "Recycled"]
    },
    {
      id: "p-5",
      title: "Digital Bookkeeping & GST Filing Monthly Retainer",
      category: "Services",
      price: 2499,
      originalPrice: 3500,
      businessName: "FinEase Women Advisory",
      founderName: "CA Rashmi Agarwal",
      rating: 4.9,
      reviews: 62,
      location: "Bengaluru, Karnataka",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80",
      description: "Full-service cloud bookkeeping, monthly GSTR-1 & 3B filing, and MIS dashboard reports tailored exclusively for women-owned small businesses.",
      inStock: true,
      tags: ["Finance", "GST", "Compliance", "Virtual CFO"]
    },
    {
      id: "p-6",
      title: "No-Code E-Commerce Website Development Package",
      category: "Technology",
      price: 7999,
      originalPrice: 12000,
      businessName: "PixelCraft Tech Studio",
      founderName: "Ankita Sen",
      rating: 5.0,
      reviews: 43,
      location: "Kolkata, West Bengal",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      description: "Launch a custom Shopify or WooCommerce storefront in 7 days. Includes payment gateway integration, mobile optimization, and 30 days support.",
      inStock: true,
      tags: ["Shopify", "Web Design", "Digital Storefront"]
    },
    {
      id: "p-7",
      title: "Amla, Brahmi & Bhringraj Ayurvedic Hair Revival Oil",
      category: "Beauty",
      price: 649,
      originalPrice: 799,
      businessName: "Nourish Botanics",
      founderName: "Dr. Geetanjali Verma",
      rating: 4.8,
      reviews: 79,
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80",
      description: "Slow-infused with traditional herbal decoctions over 21 days using cold-pressed sesame oil. Strengthens roots and calms the scalp.",
      inStock: true,
      tags: ["Ayurveda", "Herbal", "Hair Care"]
    },
    {
      id: "p-8",
      title: "Millet & Jaggery Handcrafted Energy Cookies (Pack of 3)",
      category: "Food",
      price: 399,
      originalPrice: 480,
      businessName: "Maa's Wholesome Bakes",
      founderName: "Kavita Nair",
      rating: 4.9,
      reviews: 165,
      location: "Kochi, Kerala",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80",
      description: "Zero refined flour (maida), zero refined sugar. Made with ragi, jowar, organic A2 ghee, and native spiced jaggery.",
      inStock: true,
      tags: ["Gluten-Free", "Healthy Snacks", "Superfoods"]
    }
  ],

  // Community Posts & Discussions
  communityPosts: [
    {
      id: "post-1",
      author: "Priya Sundaram",
      role: "Founder, EcoFabrics",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      badge: "Early Startup",
      timestamp: "3 hours ago",
      category: "Funding Advice",
      title: "How we secured our first ₹15 Lakh Mudra Loan without giving any personal asset collateral!",
      content: "Hi sisters! When I started EcoFabrics, three branch managers rejected my proposal because I didn't own property in my name. Then our WEN mentor, Dr. Sunita, helped restructure our project report and we applied under the Tarun scheme with automated CGTMSE guarantee. The loan was sanctioned in 18 days! Happy to share our 4-page loan proposal format with anyone preparing their application.",
      likes: 84,
      isLiked: false,
      comments: [
        {
          author: "Sneha Patil",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
          time: "2 hours ago",
          text: "Congratulations Priya! Would love to see the proposal format. We are applying for machinery expansion next month."
        },
        {
          author: "Radhika (WEN Mentor)",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
          time: "1 hour ago",
          text: "Such an inspiring milestone Priya! Solid documentation and clear cash flow projections make all the difference."
        }
      ]
    },
    {
      id: "post-2",
      author: "Meenakshi Das",
      role: "Student Innovator, IIT Madras",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      badge: "Campus Innovator",
      timestamp: "6 hours ago",
      category: "Find Collaborator",
      title: "Looking for a female Co-founder (Marketing/D2C) for an AI-based sizing tech solution",
      content: "We've developed a patent-pending smartphone body scanning camera tool that cuts e-commerce return rates from 35% down to under 8%. The tech MVP is working. Looking for a passionate female co-founder with background in fashion retail, apparel brand partnerships, or B2B sales. DM me or reply here!",
      likes: 62,
      isLiked: false,
      comments: [
        {
          author: "Ananya Deshmukh",
          avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
          time: "4 hours ago",
          text: "This solves a massive problem for indie fashion brands! I run a sustainable boutique and returns are our biggest headache. Let's connect."
        }
      ]
    },
    {
      id: "post-3",
      author: "Zara Sheikh",
      role: "Founder, SpiceCraft Artisanal",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80",
      badge: "Home-Based Business",
      timestamp: "1 day ago",
      category: "Marketing Tips",
      title: "5 zero-rupee WhatsApp marketing tactics that brought us 200+ repeat food orders every month",
      content: "Don't spend heavily on Meta ads before you maximize your WhatsApp community! Here is what worked for us: 1) Weekly 'Secret Menu' Broadcast, 2) VIP Tasting Club for loyal buyers, 3) Automated order status updates with recipes, 4) Refer-a-friend discount codes. Our retention jumped by 42%!",
      likes: 129,
      isLiked: true,
      comments: [
        {
          author: "Kavita Nair",
          avatar: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=150&q=80",
          time: "18 hours ago",
          text: "Testing this for our millet cookie boxes immediately! Thank you Zara!"
        }
      ]
    }
  ],

  // Community Interest Groups
  communityGroups: [
    { name: "Women in Tech & AI", members: "1,420 members", category: "Technology", joined: true },
    { name: "D2C & E-Commerce Founders", members: "2,840 members", category: "Retail", joined: true },
    { name: "Home Bakers & Cloud Kitchens", members: "950 members", category: "Food", joined: false },
    { name: "Handicrafts & Sustainable Brands", members: "1,630 members", category: "Handmade", joined: false },
    { name: "Student Entrepreneurs Hub", members: "880 members", category: "Students", joined: false }
  ],

  // Workshops & Events
  events: [
    {
      id: "ev-1",
      title: "Mastering Your Startup Pitch Deck for Angel Investors",
      category: "Webinars",
      date: "Oct 5, 2026",
      time: "5:00 PM - 6:30 PM IST",
      type: "Online (Live Zoom)",
      speaker: "Dr. Sunita Venkat",
      speakerRole: "Partner, Bharat Impact Angels",
      speakerImg: "https://images.unsplash.com/photo-1580894732470-fb9742469956?auto=format&fit=crop&w=200&q=80",
      description: "Break down the exact 10-slide framework that top venture angels look for. Real pitch teardowns of 3 live member submissions.",
      seatsLeft: 18,
      price: "Free for WEN Members (₹499 Guests)",
      isRegistered: false
    },
    {
      id: "ev-2",
      title: "3-Day Digital Marketing & Meta Ads Bootcamp for D2C Brands",
      category: "Bootcamps",
      date: "Oct 12 - 14, 2026",
      time: "6:00 PM - 8:00 PM IST",
      type: "Online Intensive",
      speaker: "Radhika Kulkarni",
      speakerRole: "Ex-VP Growth, Nykaa",
      speakerImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      description: "Hands-on campaign setup, UGC video creation strategies, ROAS optimization, and retargeting funnels without burning marketing capital.",
      seatsLeft: 7,
      price: "Included in Premium (₹1,499 Guests)",
      isRegistered: true
    },
    {
      id: "ev-3",
      title: "WEN Bangalore Chapter: In-Person Founders Mixer & Pop-Up",
      category: "Networking Meetups",
      date: "Oct 24, 2026",
      time: "3:00 PM - 7:00 PM IST",
      type: "In-Person (Indiranagar, Bengaluru)",
      speaker: "Aarti Sengupta & 4 Guest Panelists",
      speakerRole: "D2C Founders Roundtable",
      speakerImg: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&q=80",
      description: "Meet 120+ female founders, showcase your physical samples at founder pop-up tables, and network with angel investors over artisanal coffee.",
      seatsLeft: 24,
      price: "Free RSVP for Verified Members",
      isRegistered: false
    },
    {
      id: "ev-4",
      title: "Financial Literacy & Cash Flow Mastery for Solopreneurs",
      category: "Webinars",
      date: "Nov 2, 2026",
      time: "4:00 PM - 5:30 PM IST",
      type: "Online (Live Workshop)",
      speaker: "Tanvi Bansal",
      speakerRole: "Fintech Product Lead",
      speakerImg: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&q=80",
      description: "Understand working capital cycles, pricing for profitability, separating founder salary from business cash, and GST compliance.",
      seatsLeft: 35,
      price: "Free for All Members",
      isRegistered: false
    }
  ],

  // Resources Library
  resources: [
    {
      id: "res-1",
      title: "Ultimate 12-Slide Pitch Deck Template (Keynote, PPT, Canva)",
      category: "Business Guides",
      format: "PPTX / Canva Link",
      downloads: "3,420+",
      fileSize: "8.4 MB",
      desc: "Battle-tested slide layouts used by over 45 funded female founders to raise pre-seed and seed rounds.",
      isPremium: false
    },
    {
      id: "res-2",
      title: "Complete Startup Financial Model & 3-Year Cash Flow Excel",
      category: "Financial Resources",
      format: "Excel (.xlsx)",
      downloads: "2,890+",
      fileSize: "2.1 MB",
      desc: "Pre-formulated dynamic sheets covering revenue projections, unit economics (CAC, LTV), COGS, and hiring runway.",
      isPremium: true
    },
    {
      id: "res-3",
      title: "Government Schemes & Women MSME Loan Application Toolkit",
      category: "Startup Guides",
      format: "PDF Guide + Checklist",
      downloads: "4,120+",
      fileSize: "4.5 MB",
      desc: "Step-by-step checklist of documents required for Mudra, Stand-Up India, CGTMSE loans, and sample project reports.",
      isPremium: false
    },
    {
      id: "res-4",
      title: "Instagram & WhatsApp Organic Commerce Playbook",
      category: "Marketing Resources",
      format: "PDF Playbook (48 Pgs)",
      downloads: "5,300+",
      fileSize: "6.2 MB",
      desc: "Curated guide to bio optimization, viral reel hooks, community broadcast lists, and influencer gifting agreements.",
      isPremium: false
    },
    {
      id: "res-5",
      title: "Founders' Agreement & IP Assignment Standard Legal Draft",
      category: "Business Guides",
      format: "DOCX Editable",
      downloads: "1,980+",
      fileSize: "1.2 MB",
      desc: "Vetted legal draft establishing equity vesting schedules, non-compete clauses, role divisions, and IP ownership.",
      isPremium: true
    },
    {
      id: "res-6",
      title: "Essential Digital Stack for Early-Stage Women Solopreneurs",
      category: "Digital Tools",
      format: "Curated Directory",
      downloads: "6,400+",
      fileSize: "Interactive",
      desc: "50+ recommended free and discounted tools for invoicing, graphic design, social media scheduling, inventory, and AI writing.",
      isPremium: false
    }
  ],

  // Testimonials
  testimonials: [
    {
      quote: "Through WEN, I connected with Dr. Sunita who mentored me through our seed round. We raised ₹45 Lakhs within 4 months! The peer support here is unmatched.",
      author: "Pooja Hegde",
      business: "Founder, Kaveri Organics",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      stats: "Raised ₹45 Lakhs Seed"
    },
    {
      quote: "Listing my handloom collection on the WEN Marketplace gave us our first 3 corporate gifting orders worth ₹3.8 Lakhs. It changed our artisan cluster forever.",
      author: "Nandini Rawat",
      business: "Founder, Virasat Handlooms",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      stats: "320% Revenue Growth"
    },
    {
      quote: "As a student with an idea, I felt lost. The WEN webinars and pitch reviews gave me the confidence and network to win our state innovation grant.",
      author: "Meenakshi Das",
      business: "Student Innovator, IITM",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      stats: "Winner, State Innovation Grant"
    }
  ],

  // Active User Profile Mock
  currentUser: {
    name: "Ananya Deshmukh",
    email: "ananya@ecostylestudios.in",
    role: "Entrepreneur",
    businessName: "EcoStyle Studios",
    stage: "Early-Stage D2C",
    industry: "Sustainable Fashion & Home",
    location: "Bengaluru, Karnataka",
    plan: "Premium Member",
    planPrice: "₹199 / month",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    bio: "Passionate about zero-waste handloom apparel and empowering local female artisans with ethical fair-wage employment.",
    stats: {
      bookedSessionsCount: 2,
      savedSchemesCount: 3,
      myProductsCount: 2,
      registeredEventsCount: 1
    },
    bookedSessions: [
      {
        id: "bs-1",
        mentorId: "m-1",
        mentorName: "Radhika Kulkarni",
        mentorRole: "Ex-VP Growth, Nykaa",
        date: "Sept 28, 2026",
        time: "4:00 PM - 4:45 PM",
        objective: "D2C Retention Marketing & Holiday Launch Strategy",
        status: "Confirmed",
        meetLink: "https://meet.google.com/wen-session-radhika"
      },
      {
        id: "bs-2",
        mentorId: "m-2",
        mentorName: "Dr. Sunita Venkat",
        mentorRole: "Partner, Bharat Impact Angels",
        date: "Oct 6, 2026",
        time: "2:30 PM - 3:15 PM",
        objective: "Pitch Deck Review & Unit Economics Audit",
        status: "Confirmed",
        meetLink: "https://meet.google.com/wen-session-sunita"
      }
    ],
    savedSchemes: ["f-1", "f-2", "f-5"],
    registeredEvents: ["ev-2"],
    myProducts: [
      {
        id: "my-p1",
        title: "Upcycled Handcrafted Denim Tote Bag",
        price: 1299,
        category: "Handmade",
        inquiries: 14,
        status: "Active"
      },
      {
        id: "my-p2",
        title: "Organic Cotton Kimono Robe (Natural Indigo Dye)",
        price: 2450,
        category: "Fashion",
        inquiries: 22,
        status: "Active"
      }
    ],
    notifications: [
      {
        id: "notif-1",
        title: "Mentor Session Confirmed",
        message: "Your 1-on-1 strategy call with Radhika Kulkarni is set for Sept 28 at 4:00 PM.",
        time: "2 hours ago",
        unread: true
      },
      {
        id: "notif-2",
        title: "New Customer Product Inquiry",
        message: "Ritu Verma sent an inquiry regarding your 'Upcycled Denim Tote Bag'.",
        time: "5 hours ago",
        unread: true
      },
      {
        id: "notif-3",
        title: "New Grant Alert",
        message: "The BIRAC Women Biotechnology Grant cycle is now accepting applications.",
        time: "1 day ago",
        unread: false
      }
    ]
  }
};
