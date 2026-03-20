import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationCTA from "@/components/ConsultationCTA";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what our clients say about MBS TAXES. 5-star Google reviews from satisfied individuals and business owners across Los Angeles.",
};

const reviews = [
  {
    name: "Lisa Benmoin",
    text: "Dan is the man! Met him many years ago and has not failed to this day. He is thorough, attentive, honest, and very knowledgeable. I trust him with all my tax needs and highly recommend him to anyone looking for a reliable tax professional.",
  },
  {
    name: "Monica Flores",
    text: "Dan is very professional, easy to work with, and very efficient. He takes the time to explain everything and makes sure you understand your tax situation. I have been going to him for years and will continue to do so. Highly recommend!",
  },
  {
    name: "Donna Dutton",
    text: "Always a pleasure to work with Dan at Mossberg Taxes. He is professional, thorough, and always available to answer questions. I have been a client for many years and would not go anywhere else. Highly recommend his services!",
  },
  {
    name: "Jameie Martinez",
    text: "Dan the Tax Man is amazing! Not only did he answer all of our questions, but he also provided us with valuable advice on how to maximize our returns. His attention to detail and dedication to his clients is unmatched. We are so grateful!",
  },
  {
    name: "bella Alme",
    text: "TaxmanDan has helped me so efficiently and effectively. Dan is the best!! He makes the whole tax process stress-free and always gets the best results. I wouldn't trust anyone else with my taxes.",
  },
  {
    name: "Craig Barck",
    text: "Dan has been doing my tax return for years now. Excellent service, very knowledgeable and always available when I need him. I trust him completely with my financial matters. Highly recommend MBS Taxes!",
  },
  {
    name: "suzanne miller",
    text: "I have trusted MBS Tax Services for the past 3 years and have always been satisfied with the service. Dan is thorough, honest, and makes sure everything is done correctly. I would recommend him to anyone looking for a trustworthy tax preparer.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-gold-400 text-gold-400"
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        title="Client Testimonials"
        subtitle="What Our Clients Say"
        bgImage="/images/pexels-karola-g-7876374.jpg"
        compact
      />

      {/* Google Reviews Summary */}
      <section className="py-20 section-depth">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Google Reviews"
            title="5.0 Stars from Our Clients"
            description="We are proud to maintain a perfect 5.0 rating on Google with 16 reviews from real clients who trust MBS TAXES with their tax and accounting needs."
          />

          {/* Overall Rating Badge */}
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="font-heading text-5xl font-bold text-dark">5.0</span>
                  <div className="flex flex-col items-start">
                    <StarRating />
                    <span className="text-sm text-muted mt-1">16 Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Review Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.08}>
                <div className="card-luxury card-navy rounded-2xl p-8 h-full border border-navy-100/20 ring-1 ring-navy-100/10 flex flex-col">
                  <StarRating />
                  <blockquote className="mt-4 text-muted text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-heading font-semibold text-dark">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted mt-0.5">Google Review</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
