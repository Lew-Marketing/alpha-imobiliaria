"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="opacity-100 transition duration-[900ms] ease-[cubic-bezier(0.17,0.55,0.55,1)] delay-[200ms]">
      <div className="relative p-5 py-10 pb-8 lg:pb-10 flex items-center justify-center flex-col overflow-hidden">
        {/* Background elegante */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 via-luxury-gray/80 to-luxury-charcoal/85" />
        
        <div className="relative z-10 text-center">
          <div className="w-px h-8 bg-warm-lamp mx-auto mb-4 lamp-glow"></div>
          <p className="text-pearl-white font-serif font-light text-base text-center lg:text-lg drop-shadow-lg">
            "Um dos 100 melhores do mundo" —{" "}
            <span className="italic font-medium">GQ</span>
          </p>
          <Link
            href="/dashboard/sell"
            className="btn-luxury px-6 py-3 btn-text-luxury mt-6 inline-block"
          >
            Descubra o valor do seu imóvel
          </Link>
        </div>
      </div>

      {/* Ondinha decorativa */}
      <div className="w-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1280 50"
          preserveAspectRatio="none"
          className="bg-luxury-cream w-full h-[50px] will-change-transform"
        >
          <polygon
            className="fill-luxury-charcoal hidden lg:block"
            points="0,0 0,6.1 310.9,16.8 331,19.5 353,18.2 952.1,38.8 984.1,37.8 1047,43 1280,50 1280,0"
          ></polygon>
          <polygon
            className="fill-luxury-charcoal lg:hidden block"
            points="0,0 0,3 310.9,8.4 331,9.75 353,9.1 952.1,19.4 984.1,18.9 1047,21.5 1280,25 1280,0"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}