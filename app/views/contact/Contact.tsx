import { useState } from 'react';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="relative p-12 md:p-16 text-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/50">
      <div className="stars absolute inset-0"></div>
      <div className="stars2 absolute inset-0"></div>
      <div className="stars3 absolute inset-0"></div>

      <div className="glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4402fa]/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 ">
        <main className="min-h-[calc(100vh-88px)] px-8 py-16 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-12">
                {/* title */}
              <div className="inline-block border border-white/20 rounded-full px-4 py-2 text-sm mb-6 animate-fade-in">
                Contact
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                Get in Touch with Us
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-slide-in-left-delay">
                Have questions or need AI solutions? Let us know by filling out the form, and we'll be in touch!
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-[#6b3dff]/40 border border-[#4402fa]/30border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.4s'}} >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="">
                  <div className="form-group">
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      required
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4402fa]/50 transition-all duration-300 hover:border-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Jane@mail.com"
                      required
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4402fa]/50 transition-all duration-300 hover:border-white/30"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1(969) 819-8061"
                      required
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4402fa]/50 transition-all duration-300 hover:border-white/30"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi, I am jane i want help with...."
                    required
                    rows={6}
                    className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4402fa]/50 transition-all duration-300 hover:border-white/30 resize-none"
                  />
                </div>
                    <p className='text-stone-400'>By submitting this form, you agree that we will process your personal data in accordance with our Privacy Policy.</p>
                <Button
                  type="submit"
                  variant={"default"}
                  disabled={isSubmitting}
                  className="bg-background/30 hover:bg-orange-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Submitted Successfully!
                    </span>
                  ) : (
                    'Submit Form'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
