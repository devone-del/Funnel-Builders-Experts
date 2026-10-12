import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  FileCode2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Layers,
  Code2
} from 'lucide-react';
import { SEO_DATA } from '../data/seoContent';

interface StrategyDocViewerProps {
  onBackToLanding: () => void;
}

export const StrategyDocViewer: React.FC<StrategyDocViewerProps> = ({ onBackToLanding }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  const schemaJsonString = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.funnelbuilders.expert/services-page#webpage",
        "url": "https://www.funnelbuilders.expert/services-page",
        "name": "Funnel Builder Certification | Parramatta & Sydney Experts",
        "description": "Master high-converting lead and sales funnels with industry Funnel Builder Certification in Parramatta. Enquire now for professional funnel validation.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.funnelbuilders.expert/#website",
          "url": "https://www.funnelbuilders.expert/",
          "name": "Funnel Builders Expert"
        },
        "inLanguage": "en-AU"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.funnelbuilders.expert/#organization",
        "name": "Funnel Builders Expert",
        "url": "https://www.funnelbuilders.expert/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "49th Floor, 8 Parramatta Square",
          "addressLocality": "Parramatta",
          "addressRegion": "NSW",
          "postalCode": "2150",
          "addressCountry": "AU"
        },
        "areaServed": ["Parramatta", "Sydney", "New South Wales", "Australia"],
        "priceRange": "$$$",
        "description": "Elite funnel architecture, lead and sales funnel engineering, local SEO, technical SEO, and accredited Funnel Builder Certification in Parramatta, NSW."
      },
      {
        "@type": "Service",
        "@id": "https://www.funnelbuilders.expert/services-page#service",
        "name": "Funnel Builder Certification",
        "serviceType": "Marketing Funnel Architecture & Technical SEO Certification",
        "provider": {
          "@id": "https://www.funnelbuilders.expert/#organization"
        },
        "areaServed": "Parramatta, NSW, Australia"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.funnelbuilders.expert/services-page#faq",
        "mainEntity": SEO_DATA.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  }, null, 2);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-20">
      
      {/* Top Bar Navigation */}
      <div className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBackToLanding}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Return to Live Landing Page</span>
          </button>
          <div className="hidden sm:block h-4 w-px bg-slate-700" />
          <span className="hidden sm:inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider">
            Official Agency SEO Deliverable Document
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
            Status 200 OK • Indexable
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        
        {/* Document Header */}
        <div className="border-b border-slate-800 pb-8">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Technical SEO &amp; Conversion Strategy Blueprint</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Funnel Builder Certification — SEO Landing Page Specifications
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Prepared for <strong className="text-slate-200">Funnel Builders Expert</strong> (49th Floor, 8 Parramatta Square, Parramatta NSW 2150). This blueprint provides the complete, structured organic search and conversion funnel deliverable formatted in the exact order requested.
          </p>
        </div>

        {/* 1. MAIN KEYWORD */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">01 / Specification</div>
          <h2 className="text-lg font-bold text-white mb-2">Main Keyword</h2>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-amber-300 font-bold text-base flex justify-between items-center">
            <span>{SEO_DATA.mainKeyword}</span>
            <button 
              onClick={() => copyToClipboard(SEO_DATA.mainKeyword, 'kw')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              {copiedSection === 'kw' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'kw' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </section>

        {/* 2. SUGGESTED PAGE URL / SLUG */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">02 / Architecture</div>
          <h2 className="text-lg font-bold text-white mb-2">Suggested Page URL / Slug</h2>
          <div className="space-y-2">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-slate-300 text-sm flex justify-between items-center">
              <span>{SEO_DATA.suggestedUrl}</span>
              <button 
                onClick={() => copyToClipboard(SEO_DATA.suggestedUrl, 'url')}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                {copiedSection === 'url' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSection === 'url' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Clean, hyphen-separated slug incorporating primary keyword and geographic market intent: <code className="text-amber-400">{SEO_DATA.slug}</code>
            </p>
          </div>
        </section>

        {/* 3. SEO META TITLE */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">03 / Metadata</div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-white">SEO Meta Title</h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {SEO_DATA.metaTitle.length} characters (Recommended 55–65)
            </span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-amber-300 text-sm flex justify-between items-center">
            <span>{SEO_DATA.metaTitle}</span>
            <button 
              onClick={() => copyToClipboard(SEO_DATA.metaTitle, 'title')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              {copiedSection === 'title' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'title' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Main keyword appears in first 26 characters. Incorporates high-CTR branding and local credibility.
          </p>
        </section>

        {/* 4. META DESCRIPTION */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">04 / Metadata</div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-white">Meta Description</h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {SEO_DATA.metaDescription.length} characters (Recommended 140–164)
            </span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-slate-300 text-sm flex justify-between items-center">
            <span>{SEO_DATA.metaDescription}</span>
            <button 
              onClick={() => copyToClipboard(SEO_DATA.metaDescription, 'desc')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              {copiedSection === 'desc' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'desc' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Contains main keyword (&quot;Funnel Builder Certification&quot;) + semantic keyword (&quot;sales funnels&quot;) + geographic location (&quot;Parramatta&quot;) + conversion trigger.
          </p>
        </section>

        {/* 5. H1 */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">05 / Semantic Heading</div>
          <h2 className="text-lg font-bold text-white mb-2">H1 Headline (Single H1 on Page)</h2>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-sans text-white text-base">
            Industry-Recognised{' '}
            <a 
              href={SEO_DATA.primaryWebsiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 underline font-bold"
            >
              Funnel Builder Certification
            </a>{' '}
            in Parramatta
          </div>
          <div className="mt-3 bg-slate-900 p-2.5 rounded text-xs font-mono text-slate-400 flex items-center justify-between">
            <span>Hyperlink Target: {SEO_DATA.primaryWebsiteUrl}</span>
            <span className="text-emerald-400">Exact Main Keyword Anchored</span>
          </div>
        </section>

        {/* 6. LANDING PAGE CONTENT */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">06 / Body Copy</div>
              <h2 className="text-lg font-bold text-white">Landing Page Content</h2>
            </div>
            <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              {SEO_DATA.bodyCopyWordCount} Words (Within 450–700 Word Specification)
            </span>
          </div>

          <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 text-slate-300 text-sm leading-relaxed space-y-4">
            <p>
              Elevate your commercial capability from static web designer to elite revenue architect. The accredited <strong>Funnel Builder Certification</strong> delivered by Funnel Builders Expert provides Australian marketing practitioners, agency directors, and ambitious business operators with the battle-tested methodology required to design, deploy, and optimise high-converting lead funnels, sales funnels, and technical SEO systems that consistently deliver measurable return on investment.
            </p>
            <p>
              Most Australian commercial enterprises invest tens of thousands of dollars into search engine marketing and social advertisements, only to send prospective buyers to bloated corporate websites cluttered with complex menus, competing calls to action, and slow mobile loading speeds. When prospect attention is scattered, conversion rates collapse below 2%, squandering vital advertising expenditure and leaving business owners frustrated by anaemic pipeline growth.
            </p>
            <p>
              A structured marketing funnel strips away cognitive friction by leading visitors down a single, psychologically validated conversion runway. Through our rigorous training at Funnel Builders Expert, practitioners learn how to architect high-converting lead funnels that capture qualified prospect intent, warm prospects systematically through automated nurture triggers, and convert high-ticket sales through optimized checkout psychology.
            </p>
            <p>
              Unlike superficial short courses that teach theoretical digital marketing, this certification instils deep, repeatable craftsmanship across four commercial disciplines. When mentored by our accredited funnel engineering team, candidates acquire real-world proficiency across each operational layer: lead funnel micro-commitments, direct-response checkout funnels, programmatic local SEO, and multi-touch server-side tracking hygiene.
            </p>
            <p>
              Positioned in the beating commercial core of Greater Western Sydney, our training facilities on the 49th Floor, 8 Parramatta Square provide an inspiring hub for Australian marketing leaders. Whether attending intimate in-person roundtables or accessing our interactive digital mastermind portal, candidates benefit from direct access to senior practitioners who build multi-million dollar conversion funnels daily for Australian enterprises.
            </p>
            <p>
              We do not teach obsolete theory from foreign markets. Every framework, copywriting rubric, and technical tracking setup analysed in the curriculum has been tested and refined across Australian financial, professional services, medical, e-commerce, and trade sectors. In addition to practitioner education, our agency offers tailored conversion services for organisations seeking comprehensive done-for-you campaign execution.
            </p>
          </div>
        </section>

        {/* 7. H2 AND H3 STRUCTURE */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">07 / Heading Hierarchy</div>
          <h2 className="text-lg font-bold text-white mb-3">H2 and H3 Logical Structure</h2>
          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="text-amber-400 font-bold">H1: Industry-Recognised Funnel Builder Certification in Parramatta</div>
            <div className="pl-4 text-slate-200">├── H2: Transforming Broken Traffic into Scalable Revenue Pipelines</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Why Traditional Websites Leak 98% of Potential Australian Leads</div>
            <div className="pl-8 text-slate-400">│   └── H3: Full-Stack Funnel Architecture Engineered for Commercial ROI</div>
            <div className="pl-4 text-slate-200">├── H2: Core Competency Pillars of the Certification Programme</div>
            <div className="pl-8 text-slate-400">│   ├── H3: High-Converting Lead Funnels &amp; Micro-Commitments</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Direct-Response Sales Funnels &amp; Checkout Maximisation</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Programmatic Local SEO &amp; Technical On-Page Visibility</div>
            <div className="pl-8 text-slate-400">│   └── H3: Multi-Touch Attribution Tracking &amp; Automation Hygiene</div>
            <div className="pl-4 text-slate-200">├── H2: Why Train with Funnel Builders Expert in Parramatta?</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Strategic Headquarters at 8 Parramatta Square</div>
            <div className="pl-8 text-slate-400">│   └── H3: Battle-Tested Australian Campaign Case Studies</div>
            <div className="pl-4 text-slate-200">├── H2: The 4-Stage Funnel Engineering Framework</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Stage 1: Market Intelligence &amp; Commercial Offer Crafting</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Stage 2: UX Wireframing &amp; Persuasive Copywriting</div>
            <div className="pl-8 text-slate-400">│   ├── H3: Stage 3: Technical SEO Stacking &amp; Fast Infrastructure</div>
            <div className="pl-8 text-slate-400">│   └── H3: Stage 4: Conversion Rate Optimisation (CRO) &amp; Live Stress Testing</div>
            <div className="pl-4 text-slate-200">├── H2: Who This Industry Certification Is Designed For</div>
            <div className="pl-4 text-slate-200">├── H2: Overcoming Common Funnel Implementation Concerns</div>
            <div className="pl-4 text-slate-200">├── H2: Top 10 Questions About Funnel Builder Certification in Parramatta (FAQs)</div>
            <div className="pl-4 text-slate-200">└── H2: Ready to Master High-Converting Sales Funnels in Parramatta? (Final CTA)</div>
          </div>
        </section>

        {/* 8. CALL TO ACTION */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">08 / Conversion Trigger</div>
          <h2 className="text-lg font-bold text-white mb-2">Call to Action (CTA) Copy &amp; Mechanics</h2>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
            <div className="text-amber-400 font-bold text-sm">Primary Action Trigger:</div>
            <div className="text-white text-base font-semibold">
              &quot;Enquire About Certification in Parramatta&quot; / &quot;Apply for Certification Consultation&quot;
            </div>
            <div className="text-slate-400 text-xs leading-relaxed">
              <strong>Context &amp; Psychology:</strong> Positioned directly following the trust badges, syllabus pillars, and FAQ section. Offers an admissions audit to verify practitioner fit before enrolment, maintaining prestige and qualifying inbound candidates.
            </div>
          </div>
        </section>

        {/* 9. FAQS (10 TOP QUESTIONS IN PARRAMATTA) */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">09 / Search Intent &amp; FAQPage</div>
          <h2 className="text-lg font-bold text-white mb-3">
            Top 10 Questions People Ask About Funnel Builder Certification in Parramatta
          </h2>
          <div className="space-y-3">
            {SEO_DATA.faqs.map((faq, i) => (
              <div key={faq.id} className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs">
                <div className="font-bold text-amber-300 text-sm mb-1">
                  {i + 1}. {faq.question}
                </div>
                <div className="text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. RECOMMENDED INTERNAL LINKS */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">10 / PageRank Flow</div>
          <h2 className="text-lg font-bold text-white mb-3">Recommended Internal Links</h2>
          <div className="space-y-3">
            {SEO_DATA.recommendedInternalLinks.map((link, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-400">Suggested Anchor Text: &quot;{link.anchorText}&quot;</span>
                  <a href={link.destinationPage} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1 font-mono">
                    <span>{link.destinationPage}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-slate-300">
                  <strong className="text-slate-400">SEO Rationale:</strong> {link.reason}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. IMAGE SEO RECOMMENDATIONS */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">11 / Visual Assets</div>
          <h2 className="text-lg font-bold text-white mb-3">Image SEO Recommendations</h2>
          <div className="space-y-3">
            {SEO_DATA.imageRecommendations.map((img, idx) => (
              <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5 text-xs">
                <div className="text-white font-bold text-sm">Opportunity {idx + 1}: {img.purpose}</div>
                <div className="font-mono text-amber-400">Filename: {img.filename}</div>
                <div className="font-mono text-slate-300 bg-slate-900 p-2 rounded">
                  ALT Text: <span className="text-emerald-400 font-semibold">{img.altText}</span>
                </div>
                <div className="text-slate-400">Specs: {img.dimensions} • Format: {img.format}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 12. CANONICAL TAG */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">12 / Technical Tag</div>
          <h2 className="text-lg font-bold text-white mb-2">Canonical Tag</h2>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-emerald-400 text-xs flex justify-between items-center">
            <span>&lt;link rel=&quot;canonical&quot; href=&quot;{SEO_DATA.canonicalUrl}&quot; /&gt;</span>
            <button 
              onClick={() => copyToClipboard(`<link rel="canonical" href="${SEO_DATA.canonicalUrl}" />`, 'can')}
              className="text-slate-400 hover:text-white"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Consolidates ranking authority directly into the authoritative services hub of the root domain.
          </p>
        </section>

        {/* 13. META ROBOTS TAG */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">13 / Crawl Directives</div>
          <h2 className="text-lg font-bold text-white mb-2">Meta Robots Tag</h2>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-emerald-400 text-xs flex justify-between items-center">
            <span>&lt;meta name=&quot;robots&quot; content=&quot;{SEO_DATA.metaRobots}&quot; /&gt;</span>
            <button 
              onClick={() => copyToClipboard(`<meta name="robots" content="${SEO_DATA.metaRobots}" />`, 'rob')}
              className="text-slate-400 hover:text-white"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Ensures complete indexing and PageRank equity pass-through for all contextual internal hyperlinks.
          </p>
        </section>

        {/* 14. SCHEMA MARKUP (JSON-LD) */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">14 / Structured Data</div>
              <h2 className="text-lg font-bold text-white">Schema Markup (JSON-LD)</h2>
            </div>
            <button
              onClick={() => copyToClipboard(schemaJsonString, 'schema')}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded transition-colors flex items-center gap-1.5"
            >
              {copiedSection === 'schema' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'schema' ? 'Copied' : 'Copy Full Schema'}</span>
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            Valid JSON-LD encompassing WebPage, ProfessionalService (at 49th Floor, 8 Parramatta Square), Service, and 10 FAQPage entities with no fabricated claims.
          </p>
          <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-emerald-400 font-mono text-[11px] overflow-x-auto max-h-96">
            {schemaJsonString}
          </pre>
        </section>

        {/* 15. ROBOTS.TXT RECOMMENDATION */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">15 / Crawl Policy</div>
              <h2 className="text-lg font-bold text-white">Robots.txt Recommendation</h2>
            </div>
            <button
              onClick={() => copyToClipboard(SEO_DATA.robotsTxt, 'txt')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
          </div>
          <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto">
            {SEO_DATA.robotsTxt}
          </pre>
        </section>

        {/* 16. XML SITEMAP ENTRY */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">16 / Discovery Protocol</div>
              <h2 className="text-lg font-bold text-white">XML Sitemap Entry</h2>
            </div>
            <button
              onClick={() => copyToClipboard(SEO_DATA.xmlSitemap, 'sitemap')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
          </div>
          <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto">
            {SEO_DATA.xmlSitemap}
          </pre>
        </section>

        {/* 17. TECHNICAL SEO CHECKLIST */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">17 / Audit Verification</div>
          <h2 className="text-lg font-bold text-white mb-3">Technical SEO Checklist (17 Point Audit)</h2>
          <div className="space-y-2">
            {SEO_DATA.technicalChecklist.map((item) => (
              <div key={item.id} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-start justify-between gap-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">{item.item}</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">{item.details}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono text-[10px] uppercase border border-slate-800 flex-shrink-0">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 18. FINAL SEO QUALITY REVIEW */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">18 / Final Verification</div>
          <h2 className="text-lg font-bold text-white mb-3">Final SEO Quality Review</h2>
          <div className="space-y-2">
            {SEO_DATA.qualityReview.map((rev, index) => (
              <div key={index} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{rev.criterion}</span>
                </div>
                <span className="text-slate-400 text-[11px] font-mono text-right hidden sm:block">
                  {rev.notes}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Action */}
        <div className="pt-6 text-center">
          <button
            onClick={onBackToLanding}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            Return to High-Converting Live Landing Page
          </button>
        </div>

      </div>

    </div>
  );
};
