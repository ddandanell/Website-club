import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, CreditCard, User, Briefcase, Globe, Shield } from 'lucide-react';

interface FormData {
  // Personal
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  // Professional
  occupation: string;
  company: string;
  industry: string;
  annualIncome: string;
  linkedIn: string;
  // Lifestyle
  travelFrequency: string;
  preferredDestinations: string[];
  interests: string[];
  referral: string;
  // Membership
  selectedTier: string;
  cardName: string;
  billingAddress: string;
  city: string;
  country: string;
  postalCode: string;
  // Security
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
}

const initialForm: FormData = {
  firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', nationality: '',
  occupation: '', company: '', industry: '', annualIncome: '', linkedIn: '',
  travelFrequency: '', preferredDestinations: [], interests: [], referral: '',
  selectedTier: '', cardName: '', billingAddress: '', city: '', country: '', postalCode: '',
  password: '', confirmPassword: '', agreeTerms: false, agreePrivacy: false,
};

const tiers = [
  { name: 'Private Member', price: '$5,000/year', id: 'private' },
  { name: 'Signature Member', price: '$25,000/year', id: 'signature' },
  { name: 'Elite Circle', price: '$100,000/year', id: 'elite' },
  { name: 'Founder Circle', price: 'By Invitation', id: 'founder' },
];

const destinations = ['Bali', 'Bangkok', 'Phuket', 'Dubai', 'Singapore', 'Vietnam', 'Maldives', 'Tokyo', 'London', 'Miami'];
const interestList = ['Yachting', 'Fine Dining', 'Nightlife', 'Golf', 'Wellness & Spa', 'Adventure', 'Cultural Experiences', 'Private Aviation', 'Art & Fashion', 'Wine & Spirits'];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArray = (field: 'preferredDestinations' | 'interests', value: string) => {
    setFormData(prev => {
      const arr = prev[field];
      if (arr.includes(value)) return { ...prev, [field]: arr.filter(v => v !== value) };
      return { ...prev, [field]: [...arr, value] };
    });
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth && formData.nationality;
      case 2: return formData.occupation && formData.company && formData.industry && formData.annualIncome;
      case 3: return formData.travelFrequency && formData.preferredDestinations.length > 0 && formData.interests.length > 0;
      case 4: return formData.selectedTier && formData.cardName && formData.billingAddress && formData.city && formData.country;
      case 5: return formData.password && formData.password === formData.confirmPassword && formData.agreeTerms && formData.agreePrivacy;
      default: return false;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[#C8A97E]/10 flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-[#C8A97E]" />
          </div>
          <h1 className="font-display text-3xl text-[#F5F0EB] mb-4">Application Received</h1>
          <p className="text-[#9A9590] font-light mb-4">
            Thank you for your interest in Private Members Lifestyle Club. Your application has been submitted for review.
          </p>
          <p className="text-sm text-[#C8A97E] mb-8">Application review within 48 hours. No obligation.</p>
          <p className="text-sm text-[#5C5854]">
            Your membership number will be sent to {formData.email} upon approval.
          </p>
        </div>
      </div>
    );
  }

  const steps = [
    { num: 1, label: 'Personal', icon: User },
    { num: 2, label: 'Professional', icon: Briefcase },
    { num: 3, label: 'Lifestyle', icon: Globe },
    { num: 4, label: 'Membership', icon: CreditCard },
    { num: 5, label: 'Security', icon: Shield },
  ];

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-4 font-medium">Membership Application</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#F5F0EB] mb-4">Apply for Membership</h1>
          <p className="text-[#9A9590] font-light max-w-md mx-auto">Complete all 5 steps. Your application will be reviewed within 48 hours.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                step >= s.num ? 'bg-[#C8A97E] text-[#0A0A0A]' : 'bg-[#1E1E1E] text-[#5C5854]'
              }`}>
                {step > s.num ? <Check className="w-5 h-5" /> : s.num}
              </div>
              <span className={`hidden sm:block ml-2 text-xs mr-2 ${step >= s.num ? 'text-[#C8A97E]' : 'text-[#5C5854]'}`}>{s.label}</span>
              {i < steps.length - 1 && <div className={`w-8 h-px ${step > s.num ? 'bg-[#C8A97E]' : 'bg-[#2A2A2A]'}`} />}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-[#141414] border border-[#2A2A2A] p-8 lg:p-10">
          {/* Step 1: Personal */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl text-[#F5F0EB] mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">First Name *</label>
                  <input type="text" value={formData.firstName} onChange={e => updateField('firstName', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Last Name *</label>
                  <input type="text" value={formData.lastName} onChange={e => updateField('lastName', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Enter last name" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Email Address *</label>
                <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Phone Number *</label>
                  <input type="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Date of Birth *</label>
                  <input type="date" value={formData.dateOfBirth} onChange={e => updateField('dateOfBirth', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Nationality *</label>
                <input type="text" value={formData.nationality} onChange={e => updateField('nationality', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Country of citizenship" />
              </div>
            </div>
          )}

          {/* Step 2: Professional */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl text-[#F5F0EB] mb-6">Professional Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Occupation *</label>
                  <input type="text" value={formData.occupation} onChange={e => updateField('occupation', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Your role" />
                </div>
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Company *</label>
                  <input type="text" value={formData.company} onChange={e => updateField('company', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Company name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Industry *</label>
                  <select value={formData.industry} onChange={e => updateField('industry', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors">
                    <option value="">Select industry</option>
                    {['Finance', 'Technology', 'Healthcare', 'Real Estate', 'Entertainment', 'Legal', 'Energy', 'Hospitality', 'Fashion', 'Other'].map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Annual Income Range *</label>
                  <select value={formData.annualIncome} onChange={e => updateField('annualIncome', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors">
                    <option value="">Select range</option>
                    {['$250,000 - $500,000', '$500,000 - $1,000,000', '$1,000,000 - $5,000,000', '$5,000,000+', 'Prefer not to disclose'].map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">LinkedIn Profile</label>
                <input type="url" value={formData.linkedIn} onChange={e => updateField('linkedIn', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="https://linkedin.com/in/..." />
              </div>
            </div>
          )}

          {/* Step 3: Lifestyle */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl text-[#F5F0EB] mb-6">Lifestyle Preferences</h2>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Travel Frequency *</label>
                <select value={formData.travelFrequency} onChange={e => updateField('travelFrequency', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors">
                  <option value="">Select frequency</option>
                  {['Monthly', 'Every 2-3 months', 'Quarterly', 'Bi-annually', 'Annually'].map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-3">Preferred Destinations * (select all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {destinations.map(d => (
                    <button key={d} onClick={() => toggleArray('preferredDestinations', d)} className={`px-4 py-2 text-sm border transition-all duration-300 ${formData.preferredDestinations.includes(d) ? 'border-[#C8A97E] text-[#C8A97E] bg-[#C8A97E]/10' : 'border-[#2A2A2A] text-[#9A9590] hover:border-[#5C5854]'}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-3">Interests * (select all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {interestList.map(i => (
                    <button key={i} onClick={() => toggleArray('interests', i)} className={`px-4 py-2 text-sm border transition-all duration-300 ${formData.interests.includes(i) ? 'border-[#C8A97E] text-[#C8A97E] bg-[#C8A97E]/10' : 'border-[#2A2A2A] text-[#9A9590] hover:border-[#5C5854]'}`}>
                      {i}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">How did you hear about us?</label>
                <input type="text" value={formData.referral} onChange={e => updateField('referral', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Referral source or member name" />
              </div>
            </div>
          )}

          {/* Step 4: Membership Selection */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl text-[#F5F0EB] mb-6">Select Membership Tier</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {tiers.map(tier => (
                  <button key={tier.id} onClick={() => updateField('selectedTier', tier.id)} className={`p-6 border text-left transition-all duration-300 ${formData.selectedTier === tier.id ? 'border-[#C8A97E] bg-[#C8A97E]/10' : 'border-[#2A2A2A] hover:border-[#5C5854]'}`}>
                    <h3 className="font-display text-lg text-[#F5F0EB]">{tier.name}</h3>
                    <p className="text-[#C8A97E] text-sm mt-1">{tier.price}</p>
                  </button>
                ))}
              </div>
              <h3 className="font-display text-lg text-[#F5F0EB] mb-4">Billing Details</h3>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Name on Card *</label>
                <input type="text" value={formData.cardName} onChange={e => updateField('cardName', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Full name as on card" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Billing Address *</label>
                  <input type="text" value={formData.billingAddress} onChange={e => updateField('billingAddress', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Street address" />
                </div>
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">City *</label>
                  <input type="text" value={formData.city} onChange={e => updateField('city', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="City" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Country *</label>
                  <input type="text" value={formData.country} onChange={e => updateField('country', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Country" />
                </div>
                <div>
                  <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Postal Code</label>
                  <input type="text" value={formData.postalCode} onChange={e => updateField('postalCode', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Postal / ZIP code" />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Security */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="font-display text-xl text-[#F5F0EB] mb-6">Create Member Account</h2>
              <p className="text-sm text-[#9A9590] font-light mb-6">Create your login credentials. Upon approval, you will receive your official membership card number.</p>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Create Password *</label>
                <input type="password" value={formData.password} onChange={e => updateField('password', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Minimum 8 characters" />
              </div>
              <div>
                <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Confirm Password *</label>
                <input type="password" value={formData.confirmPassword} onChange={e => updateField('confirmPassword', e.target.value)} className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] px-4 py-3 text-sm focus:border-[#C8A97E] focus:outline-none transition-colors" placeholder="Repeat password" />
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                )}
              </div>
              <div className="space-y-3 pt-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.agreeTerms} onChange={e => updateField('agreeTerms', e.target.checked)} className="mt-1 accent-[#C8A97E]" />
                  <span className="text-sm text-[#9A9590] font-light">I agree to the <a href="#" className="text-[#C8A97E] hover:underline">Terms of Membership</a> and understand that membership is application-based and subject to approval. *</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={formData.agreePrivacy} onChange={e => updateField('agreePrivacy', e.target.checked)} className="mt-1 accent-[#C8A97E]" />
                  <span className="text-sm text-[#9A9590] font-light">I agree to the <a href="#" className="text-[#C8A97E] hover:underline">Privacy Policy</a> and consent to the processing of my personal information. *</span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#2A2A2A]">
            <button
              onClick={() => setStep(s => s - 1)}
              className={`flex items-center gap-2 text-sm text-[#9A9590] hover:text-[#F5F0EB] transition-colors ${step === 1 ? 'invisible' : ''}`}
              data-hover="true"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            {step < 5 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 btn-gold disabled:opacity-30 disabled:cursor-not-allowed"
                data-hover="true"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="btn-gold-solid disabled:opacity-30 disabled:cursor-not-allowed"
                data-hover="true"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
