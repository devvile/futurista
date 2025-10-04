import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_QUESTIONS } from "@/lib/faq_questions";

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return <section className="py-16 px-8 bg-black">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-block border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
                    FAQs
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    We've Got the Answers
                    <br />
                    You're Looking For
                </h2>
                <p className="text-lg text-gray-400">
                    Quick answers to your AI automation questions.
                </p>
            </div>

            <div className="space-y-4">
                {FAQ_QUESTIONS.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-colors hover:bg-white/[0.07]"
                    >
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className="text-lg font-medium pr-4">{faq.question}</span>
                            <ChevronDown
                                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default FAQ;