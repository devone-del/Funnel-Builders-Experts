import React, { useState } from 'react';
import { 
  Award, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Code2, 
  Workflow, 
  ExternalLink,
  Target,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { SEO_DATA } from '../data/seoContent';

interface LandingPageProps {
  onOpenEnquiry?: () => void;
  onOpenStrategyDoc: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenStrategyDoc }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [faqFilter, setFaqFilter] = useState('');

  const targetUrl = "https://www.funnelbuilders.expert/";

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  const filteredFaqs = SEO_DATA.faqs.filter(faq => 
    faq.question.toLowerCase().includes(faqFilter.toLowerCase()) || 
    faq.answer.toLowerCase().includes(faqFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* 
        ============================================================
        STANDALONE LANDING PAGE HEADER (NO NAVIGATION MENU)
        Strictly brand identity + trust chip + single primary action
        ============================================================
      */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a 
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 group"
            title="Funnel Builders Expert"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 font-black text-xl group-hover:scale-105 transition-transform">
              F
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl block leading-tight group-hover:text-amber-400 transition-colors">
                Funnel Builders <span className="text-amber-400">Expert</span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400 inline" />
                49th Floor, 8 Parramatta Square • NSW 2150
              </span>
            </div>
          </a>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenStrategyDoc}
              className="hidden md:inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors"
              title="Inspect Complete SEO Blueprint & Technical Checklist"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
              <span>SEO Blueprint</span>
            </button>
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02]"
            >
              <span>Apply for Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 
        ============================================================
        HERO SECTION WITH EXACT H1 HYPERLINKED TO PRIMARY WEBSITE
        ============================================================
      */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-24 overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950/50 to-slate-950 pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow badge */}
          <a 
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm hover:bg-amber-500/20 transition-colors"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Certified Industry Pathway • Parramatta &amp; Sydney CBD</span>
          </a>

          {/* SINGLE H1 HEADLINE (Exact Main Keyword hyperlinked to Primary Website URL) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Industry-Recognised{' '}
            <a 
              href={targetUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 underline decoration-amber-500/50 decoration-wavy decoration-2 hover:decoration-amber-300 transition-all inline-flex items-baseline"
              title="Visit Funnel Builders Expert Homepage"
            >
              Funnel Builder Certification
            </a>{' '}
            in Parramatta
          </h1>

          {/* Persuasive Australian English Introduction */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 text-balance">
            Elevate your commercial capability from static web designer to elite revenue architect. The accredited <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-amber-500/40 hover:text-amber-400">Funnel Builder Certification</a> delivered by <a href={targetUrl} className="text-amber-400 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Funnel Builders Expert</a> provides Australian marketing practitioners, agency directors, and ambitious business operators with the battle-tested methodology required to design, deploy, and optimise high-converting lead funnels, sales funnels, and technical SEO systems that consistently deliver measurable return on investment.
          </p>

          {/* Primary CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base rounded-xl transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Enquire About Certification in Parramatta</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700/80 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explore Official Programmes</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl hover:border-amber-500/40 transition-colors block"
            >
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Parramatta Square
              </div>
              <div className="text-white text-sm font-semibold">Level 49, 8 Parramatta Sq</div>
              <div className="text-slate-400 text-xs">Western Sydney Command</div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl hover:border-amber-500/40 transition-colors block"
            >
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5" />
                Full-Stack Architecture
              </div>
              <div className="text-white text-sm font-semibold">Lead, Sales &amp; SEO</div>
              <div className="text-slate-400 text-xs">Multi-channel validation</div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl hover:border-amber-500/40 transition-colors block"
            >
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Credential
              </div>
              <div className="text-white text-sm font-semibold">Digital Practitioner ID</div>
              <div className="text-slate-400 text-xs">Industry-standard badge</div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl hover:border-amber-500/40 transition-colors block"
            >
              <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Live Capstone
              </div>
              <div className="text-white text-sm font-semibold">Real Campaign Build</div>
              <div className="text-slate-400 text-xs">Measurable conversion ROI</div>
            </a>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        MAIN LANDING PAGE CONTENT (450 to 700 words body copy)
        Hierarchical H2 & H3 Headings, Australian English, Contextual Links
        ============================================================
      */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
        {/* Section 1: Customer's Problem & Desired Outcome */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-amber-500 pl-4">
            Transforming Broken Traffic into Scalable Revenue Pipelines
          </h2>
          
          <h3 className="text-lg sm:text-xl font-bold text-amber-400">
            Why Traditional Websites Leak 98% of Potential Australian Leads
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Most Australian commercial enterprises invest tens of thousands of dollars into search engine marketing and social advertisements, only to send prospective buyers to bloated corporate websites cluttered with complex menus, competing calls to action, and slow mobile loading speeds. When prospect attention is scattered, conversion rates collapse below 2%, squandering vital advertising expenditure and leaving business owners frustrated by anaemic pipeline growth.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-amber-400">
            Full-Stack Funnel Architecture Engineered for Commercial ROI
          </h3>
          <p className="text-slate-300 leading-relaxed">
            A structured marketing funnel strips away cognitive friction by leading visitors down a single, psychologically validated conversion runway. Through our rigorous training at <a href={targetUrl} className="text-amber-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Funnel Builders Expert</a>, practitioners learn how to architect high-converting lead funnels that capture qualified prospect intent, warm prospects systematically through automated nurture triggers, and convert high-ticket sales through optimized checkout psychology.
          </p>
        </section>

        {/* Section 2: Core Competencies & Service Solution with Contextual Links */}
        <section className="space-y-6 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-amber-500 pl-4">
            Core Competency Pillars of the Certification Programme
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Unlike superficial short courses that teach theoretical digital marketing, this certification instils deep, repeatable craftsmanship across four commercial disciplines. When mentored by our <a href={targetUrl} className="text-amber-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">accredited funnel engineering team</a>, candidates acquire real-world proficiency across each operational layer:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/50 transition-colors block"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                High-Converting Lead Funnels &amp; Micro-Commitments
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Design multi-step interactive quizzes, squeeze pages, and automated lead capture magnets engineered to double opt-in efficiency while gathering behavioural customer data.
              </p>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/50 transition-colors block"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Direct-Response Sales Funnels &amp; Checkout Maximisation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineer friction-free order bumps, dynamic 1-click upsells, and payment gateway mechanics that substantially lift average order value (AOV) for e-commerce and B2B services.
              </p>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/50 transition-colors block"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Programmatic Local SEO &amp; Technical On-Page Visibility
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Seamlessly fuse organic discovery with commercial funnels. Deploy semantic schema, mobile Core Web Vitals optimisation, and geocoded landing structures that rank in competitive search engines. Learn how our <span className="text-amber-400 font-semibold underline">local SEO and technical funnel audits</span> drive high-intent organic enquiries.
              </p>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 hover:border-amber-500/50 transition-colors block"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Multi-Touch Attribution Tracking &amp; Automation Hygiene
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Master server-side tracking, meta-pixel hygiene, Google Tag Manager data-layer topologies, and automated CRM webhook pipelines to ensure zero revenue attribution blindspots.
              </p>
            </a>
          </div>
        </section>

        {/* Section 3: Why Trust Funnel Builders Expert & Location Relevance */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-amber-500 pl-4">
            Why Train with Funnel Builders Expert in Parramatta?
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-amber-400">
            Strategic Headquarters at 8 Parramatta Square
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Positioned in the beating commercial core of Greater Western Sydney, our training facilities on the 49th Floor, 8 Parramatta Square provide an inspiring hub for Australian marketing leaders. Whether attending intimate in-person roundtables or accessing our interactive digital mastermind portal, candidates benefit from direct access to senior practitioners who build multi-million dollar conversion funnels daily for Australian enterprises.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-amber-400">
            Battle-Tested Australian Campaign Case Studies
          </h3>
          <p className="text-slate-300 leading-relaxed">
            We do not teach obsolete theory from foreign markets. Every framework, copywriting rubric, and technical tracking setup analysed in the curriculum has been tested and refined across Australian financial, professional services, medical, e-commerce, and trade sectors. In addition to practitioner education, our agency offers <a href={targetUrl} className="text-amber-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">tailored conversion services</a> for organisations seeking comprehensive done-for-you campaign execution.
          </p>
        </section>

        {/* Section 4: The 4-Stage Funnel Engineering Framework */}
        <section className="space-y-6 bg-slate-900/30 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-amber-500 pl-4">
            The 4-Stage Funnel Engineering Framework
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Our systematic framework transforms conceptual business value into a resilient, high-converting digital machine through four distinct milestones:
          </p>

          <div className="space-y-4 pt-2">
            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex gap-4 items-start bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition-colors block"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center">
                1
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  Stage 1: Market Intelligence &amp; Commercial Offer Crafting
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Diagnose competitor conversion gaps, isolate ideal client objections, and structure an irresistible primary value ladder that commands premium pricing.
                </p>
              </div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex gap-4 items-start bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition-colors block"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center">
                2
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  Stage 2: UX Wireframing &amp; Persuasive Copywriting
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Draft high-intent headlines, benefit-first body copy, and cognitive ease layouts that keep visitors locked in the decision loop without exit hesitation.
                </p>
              </div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex gap-4 items-start bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition-colors block"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center">
                3
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  Stage 3: Technical SEO Stacking &amp; Fast Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Configure programmatic schema markup, lightning-fast hosting, SSL security, and organic search indexing to compound free organic traffic on top of paid media.
                </p>
              </div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex gap-4 items-start bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 hover:border-amber-500/40 transition-colors block"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-extrabold text-sm flex items-center justify-center">
                4
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  Stage 4: Conversion Rate Optimisation (CRO) &amp; Live Stress Testing
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Launch multi-variant split tests, analyse session heatmaps, eliminate checkout drop-offs, and prove real revenue uplift on a live capstone deployment.
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Section 5: Target Audience & Overcoming Common Concerns */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-amber-500 pl-4">
            Who This Industry Certification Is Designed For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start space-x-3 hover:border-amber-500/40 transition-colors block"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">Agency Founders &amp; Freelancers</h4>
                <p className="text-xs text-slate-400 mt-1">Stop competing on low-cost web design. Offer accredited, high-retainer conversion funnel engineering.</p>
              </div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start space-x-3 hover:border-amber-500/40 transition-colors block"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">Corporate Marketing Leaders</h4>
                <p className="text-xs text-slate-400 mt-1">Bring revenue funnel optimization and technical SEO best practices directly into your internal team.</p>
              </div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start space-x-3 hover:border-amber-500/40 transition-colors block"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">Media Buyers &amp; Traffic Specialists</h4>
                <p className="text-xs text-slate-400 mt-1">Double your return on ad spend (ROAS) by converting cold traffic on custom high-converting funnels.</p>
              </div>
            </a>

            <a 
              href={targetUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start space-x-3 hover:border-amber-500/40 transition-colors block"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">Business Owners &amp; Operators</h4>
                <p className="text-xs text-slate-400 mt-1">Take control of your customer acquisition pipeline without relying on opaque agency guesswork.</p>
              </div>
            </a>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-l-4 border-amber-500 pl-4 pt-6">
            Overcoming Common Funnel Implementation Concerns
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Many practitioners worry that building advanced funnels demands complicated programming skills or excessive tech subscriptions. In truth, our methodology focuses on clarity of offer psychology, robust no-code tool stacks, clean webhook automation, and organic search indexing. You learn how to deploy lightning-fast landing assets that work seamlessly with any CMS or payment provider.
          </p>
        </section>

        {/* 
          ============================================================
          10 TOP QUESTIONS PEOPLE ASK ABOUT FUNNEL BUILDER CERTIFICATION IN PARRAMATTA
          ============================================================
        */}
        <section id="faqs" className="space-y-6 pt-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Top 10 Questions About Funnel Builder Certification in Parramatta
              </h2>
            </div>
            
            {/* Quick search input */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Filter questions..."
                value={faqFilter}
                onChange={(e) => setFaqFilter(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-900/60 border border-slate-800/90 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-100 flex items-start gap-2.5">
                      <span className="text-amber-400 font-bold text-xs sm:text-sm mt-0.5">
                        {index + 1}.
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span className="text-amber-400 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      <p className="mb-3">{faq.answer}</p>
                      <a 
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold hover:underline"
                      >
                        <span>Learn more on Funnel Builders Expert</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-400">
              Have a specific question regarding cohort schedules or corporate group admissions?{' '}
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline font-semibold hover:text-amber-300 ml-1"
              >
                Speak with our Parramatta admissions team
              </a>
            </p>
          </div>
        </section>

        {/* 
          ============================================================
          HIGH-CONVERTING FINAL CALL TO ACTION
          ============================================================
        */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-2xl mx-auto space-y-6">
            <a 
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider hover:bg-amber-500/30 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Admissions Open for Western Sydney &amp; Virtual Intake
            </a>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Master High-Converting Sales Funnels in Parramatta?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Step into the rank of certified funnel architects. Secure your personal consultation with <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-amber-500/40 hover:text-amber-400">Funnel Builders Expert</a> to audit your current funnel capabilities and reserve your place in the upcoming cohort.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base rounded-xl transition-all shadow-xl shadow-amber-500/30 hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>Apply for Certification Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                49th Floor, 8 Parramatta Square, Parramatta NSW 2150
              </a>
              <span>•</span>
              <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Industry-Verified Credentials
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* 
        ============================================================
        MANDATORY FOOTER AREA (ALL ANCHORS AND LINKS REDIRECTED TO TARGET URL)
        ============================================================
      */}
      <footer className="mt-auto bg-slate-950 border-t border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6 text-center text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-300 font-medium">
            <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              © {new Date().getFullYear()} Funnel Builders Expert. All rights reserved.
            </a>
            <span>•</span>
            <a href={targetUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              49th Floor, 8 Parramatta Square, Parramatta, NSW, 2150
            </a>
            <span>•</span>
            <button 
              onClick={onOpenStrategyDoc}
              className="text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Technical SEO Blueprint &amp; Audit
            </button>
          </div>

          {/* FOOTER TEXT AND HYPERLINKS REDIRECTED TO https://www.funnelbuilders.expert/ */}
          <div className="pt-4 border-t border-slate-900 max-w-3xl mx-auto text-[13px] leading-relaxed text-slate-400">
            Sales Funnels Australia  Sydney Website Design &amp; Marketing Funnels Australia, a Sydney Website Design Agency product{' '}
            <a 
              href={targetUrl} 
              title="Sales Funnels Australia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              Sales Funnels Australia
            </a>{' '}
            <a 
              href={targetUrl} 
              title="Sydney Website Design" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              Sydney Website Design
            </a> and{' '}
            <a 
              href={targetUrl} 
              title="Marketing Funnels Australia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              Marketing Funnels 
            </a> Australia, a <a 
              href={targetUrl} 
              title="Sydney Website Design Agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              Sydney Website Design Agency
            </a> product.
          </div>

        </div>
      </footer>

    </div>
  );
};
