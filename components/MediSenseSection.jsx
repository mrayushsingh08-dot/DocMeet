
"use client";

import {
  Activity,
  Brain,
  HeartPulse,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const MEDISENSE_URL = "https://medisenseofficials.vercel.app/";

export default function MediSenseSection() {
  return (
    <section className="w-full bg-[#080808] px-4 py-6 sm:px-8 sm:py-8">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#071e17] via-[#071510] to-[#080e0c] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-20 -top-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-[90px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-teal-400/10 blur-[90px]" />

        <div className="relative mx-auto grid w-full items-center gap-7 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          {/* Left Content */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm">
              <Activity className="h-4 w-4" />
              AI-Powered Health Assistant
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet{" "}
              <span className="text-emerald-400">MediSense</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
              Explore possible health conditions through symptom-based
              machine learning predictions and helpful health information.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={MEDISENSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#062018] transition hover:bg-emerald-300"
              >
                Explore MediSense
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={`${MEDISENSE_URL}about`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400/50 hover:bg-white/5"
              >
                Learn More
              </a>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-gray-400 sm:text-sm">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <p>
                For health awareness only, not a substitute for professional
                medical advice or diagnosis.
              </p>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                <HeartPulse className="h-6 w-6 text-emerald-400" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Your Health, Simplified
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Helpful insights in one place
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Feature
                icon={<Brain className="h-5 w-5" />}
                title="Symptom Predictions"
                description="Explore possible conditions from selected symptoms."
              />

              <Feature
                icon={<HeartPulse className="h-5 w-5" />}
                title="Health Information"
                description="Precautions, medicines, diet and workout guidance."
              />

              <Feature
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Health Awareness"
                description="Understand potential conditions and next steps."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="group flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
