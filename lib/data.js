import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

export const testimonials = [
  {
    initials: "Mr",
    name: "Aditya Kumar Mishra",
    role: "Patient",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Ranjeet Sharma.",
    role: "Physiotherapist",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "DR",
    name: "Steve William",
    role: "Dentist",
    quote:
      "The consultation process is smooth and convenient. It makes it easy to connect with the right specialist and provide patients with timely care. Aur hn Paisa easily withrawal ho jata h",
  },
];

export const creditBenefits = [
  <>Each consultation requires <strong className="text-emerald-400">2 credits</strong> regardless of duration</>,
  <>Credits <strong className="text-emerald-400">never expire</strong> - use them whenever you need</>,
  <>Monthly subscriptions give you <strong className="text-emerald-400">fresh credits every month</strong></>,
  <>Cancel or change your subscription <strong className="text-emerald-400">anytime</strong> without penalties</>,
];