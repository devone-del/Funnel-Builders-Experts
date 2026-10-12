import React, { useState } from 'react';
import { X, CheckCircle, Shield, Award, MapPin, ArrowRight, Loader2 } from 'lucide-react';
import { SEO_DATA } from '../data/seoContent';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Agency Founder / Director',
    experienceLevel: 'Intermediate (1-3 years)',
    objective: 'Mastering Full-Stack Lead & Sales Funnels',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-950 font-bold text-sm tracking-wide">
            <Award className="w-5 h-5" />
            <span>ADMISSIONS CONSULTATION & SYLLABUS AUDIT</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-950 hover:bg-black/10 rounded-lg p-1.5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enquiry Received</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Thank you, <span className="font-semibold text-amber-400">{formData.fullName}</span>. A senior funnel strategist from our Parramatta Square office will contact you within 24 business hours to review your background and provide the full syllabus breakdown.
              </p>
              <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700 text-left text-xs text-slate-300 space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Headquarters:</span>
                  <span className="font-medium text-slate-200">{SEO_DATA.location.fullAddress}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Next Cohort Intakes:</span>
                  <span className="font-medium text-amber-400">Western Sydney Hub & Virtual Mastermind</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Credential Track:</span>
                  <span className="font-medium text-slate-200">{SEO_DATA.mainKeyword}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.funnelbuilders.expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/20"
                >
                  <span>Go to Official Website (funnelbuilders.expert)</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-colors text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Enquire for Funnel Builder Certification
                </h3>
                <p className="text-slate-400 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Executive admissions office: 49th Floor, 8 Parramatta Square</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lachlan Taylor"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. lachlan@agency.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Australian Mobile / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0412 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Professional Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option>Agency Founder / Director</option>
                      <option>Marketing Consultant / Freelancer</option>
                      <option>In-House Growth Marketer</option>
                      <option>Web Designer / Developer</option>
                      <option>Business Owner / Operator</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Current Funnel Experience
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option>Beginner (Building first funnels)</option>
                    <option>Intermediate (1-3 years managing ad funnels)</option>
                    <option>Advanced (Running high-volume sales funnels)</option>
                    <option>Agency Scale (Managing multi-client funnel stacks)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    What is your primary goal with certification?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Offering certified funnel services to Australian clients"
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-500/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Verifying Availability...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Certification Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-4 pt-2 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    Strict Privacy Guaranteed
                  </span>
                  <span>•</span>
                  <span>Direct Advisor Response</span>
                  <span>•</span>
                  <span>No High-Pressure Sales</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
