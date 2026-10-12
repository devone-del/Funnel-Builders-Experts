import React from 'react';
import { Eye, FileCode2, Award, ArrowRight } from 'lucide-react';

interface FloatingNavProps {
  currentView: 'landing' | 'strategy';
  onToggleView: (view: 'landing' | 'strategy') => void;
  onOpenEnquiry: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ currentView, onToggleView, onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-3 py-2 bg-slate-900/90 backdrop-blur-lg border border-slate-700/80 rounded-full shadow-2xl flex items-center space-x-2 text-xs">
      <button
        onClick={() => onToggleView('landing')}
        className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
          currentView === 'landing'
            ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
      >
        <Eye className="w-3.5 h-3.5" />
        <span>Live Landing Page</span>
      </button>

      <button
        onClick={() => onToggleView('strategy')}
        className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full font-semibold transition-all ${
          currentView === 'strategy'
            ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
            : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`}
      >
        <FileCode2 className="w-3.5 h-3.5" />
        <span>SEO Blueprint &amp; Audit</span>
      </button>

      <div className="h-4 w-px bg-slate-700 hidden sm:block" />

      <a
        href="https://www.funnelbuilders.expert/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold border border-amber-500/30 transition-colors"
      >
        <Award className="w-3.5 h-3.5" />
        <span>Enquire on Official Site</span>
      </a>
    </div>
  );
};
