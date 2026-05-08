import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, CreditCard, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formatCardNumber = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 16);
    return cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanCard = cardNumber.replace(/\s/g, '');
    if (cleanCard.length !== 16) {
      setError('Please enter a valid 16-digit membership card number');
      return;
    }
    if (pin.length < 4) {
      setError('Please enter your PIN code');
      return;
    }

    setLoading(true);
    // Simulate authentication — accept any valid-format credentials for demo
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl text-[#C8A97E] tracking-[0.1em] mb-2">PMLC</h1>
          <p className="text-xs tracking-[0.2em] uppercase text-[#5C5854]">Member Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#141414] border border-[#2A2A2A] p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#C8A97E]/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <h2 className="font-display text-lg text-[#F5F0EB]">Member Login</h2>
              <p className="text-xs text-[#5C5854]">Enter your membership card details</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Number */}
            <div>
              <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">Membership Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5854]" />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] pl-12 pr-4 py-3.5 text-sm tracking-[0.15em] focus:border-[#C8A97E] focus:outline-none transition-colors font-mono"
                  maxLength={19}
                />
              </div>
            </div>

            {/* PIN */}
            <div>
              <label className="block text-xs text-[#9A9590] uppercase tracking-wider mb-2">PIN Code</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5854]" />
                <input
                  type={showPin ? 'text' : 'password'}
                  value={pin}
                  onChange={e => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter PIN"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0EB] pl-12 pr-12 py-3.5 text-sm tracking-[0.15em] focus:border-[#C8A97E] focus:outline-none transition-colors font-mono"
                  maxLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C5854] hover:text-[#9A9590]"
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400 bg-red-400/5 border border-red-400/20 px-4 py-3">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C8A97E] text-[#0A0A0A] py-3.5 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B88E] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              data-hover="true"
            >
              {loading ? 'Authenticating...' : <><span>Access Member Portal</span> <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          {/* Help */}
          <div className="mt-8 pt-6 border-t border-[#2A2A2A] text-center space-y-3">
            <p className="text-xs text-[#5C5854]">
              Forgot your card number?{' '}
              <a href="mailto:support@pmlc.com" className="text-[#C8A97E] hover:underline">Contact Support</a>
            </p>
            <p className="text-xs text-[#5C5854]">
              Not a member yet?{' '}
              <button onClick={() => navigate('/apply')} className="text-[#C8A97E] hover:underline">Apply Now</button>
            </p>
          </div>
        </div>

        {/* Security Note */}
        <p className="text-center text-[10px] text-[#5C5854] mt-6 tracking-wider">
          SECURE CONNECTION — 256-BIT ENCRYPTION
        </p>
      </div>
    </div>
  );
}
