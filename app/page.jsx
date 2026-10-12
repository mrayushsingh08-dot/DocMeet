
"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import { features, testimonials } from "@/lib/data";
import Pricing from "@/components/pricing";
import MediSenseSection from "@/components/MediSenseSection";

export default function Home() {
  return (
    <div className="bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="w-fit rounded-md border-emerald-700/30 bg-emerald-900/30 px-4 py-2 text-sm font-medium text-emerald-400"
              >
                Healthcare made Simple
              </Badge>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Connect with doctors
                <br />
                <span className="gradient-title">
                  anytime, anywhere
                </span>
              </h1>

              <p className="max-w-md text-lg text-muted-foreground md:text-xl">
                Book appointments, consult via video, and manage your
                healthcare journey — all in one secure platform.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-[500px]">
              <Image
                src="/banner.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              How It Works
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our platform makes healthcare accessible with just a few clicks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-emerald-900/20 transition-all duration-300 hover:border-emerald-800/40"
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 w-fit rounded-lg bg-emerald-900/20 p-3">
                    {feature.icon}
                  </div>

                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="w-fit rounded-md border-emerald-700/30 bg-emerald-900/30 px-4 py-2 text-sm font-medium text-emerald-400">
              Affordable Healthcare
            </Badge>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Consultation Packages
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the consultation package that fits your healthcare needs.
            </p>
          </div>

          {/* PRICING TABLE ONLY — CREDIT SYSTEM BOX REMOVED */}
          <Pricing />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 border-emerald-700/30 bg-emerald-900/30 px-4 py-1 text-sm font-medium text-emerald-400">
              Success Stories
            </Badge>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              What Our Users Say
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Hear from patients and doctors who use our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-emerald-900/20 transition-all duration-300 hover:border-emerald-800/40"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900/20">
                      <span className="font-bold text-emerald-400">
                        {testimonial.initials}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MEDISENSE SECTION — AT THE VERY BOTTOM */}
      <MediSenseSection />

      {/* CTA SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-emerald-800/20 bg-gradient-to-r from-emerald-900/30 to-emerald-950/20">
            <CardContent className="relative overflow-hidden pt-8 md:p-12 lg:p-16">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Ready to take control of your healthcare?
                </h2>

                <p className="mb-8 text-lg text-muted-foreground">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                    asChild
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>

                  <Button
                    size="lg"
                    className="border-emerald-700/30 hover:bg-muted/80"
                    asChild
                    variant="outline"
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
