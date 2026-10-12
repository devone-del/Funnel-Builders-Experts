import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { StrategyDocViewer } from './components/StrategyDocViewer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'strategy'>('landing');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleToggleView = (view: 'landing' | 'strategy') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {currentView === 'landing' ? (
        <LandingPage
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenStrategyDoc={() => handleToggleView('strategy')}
        />
      ) : (
        <StrategyDocViewer
          onBackToLanding={() => handleToggleView('landing')}
        />
      )}

      {/* Admissions Enquiry Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* Floating Bottom View Switcher */}
      <FloatingNav
        currentView={currentView}
        onToggleView={handleToggleView}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />
    </div>
  );
}
