export interface Service {
  title: string;
  description: string;
  price: number;
  image: string;
  durations: string[];
}

// ─── Services ───────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    title: "Back & Neck Massage",
    description:
      "A highly effective rehabilitation technique combining elements of acupressure and yoga. Targets the most common tension zones. For particularly stiff muscles, this can be intensely powerful.",
    price: 80,
    image: "/images/services/back-neck-massage.png",
    durations: ["45 MIN", "60 MIN", "90 MIN"],
  },
  {
    title: "Reflexology",
    description:
      "Precise pressure applied to points on the feet that correspond to organs and systems throughout the body. Surprisingly powerful — many guests experience a full-body release.",
    price: 95,
    image: "/images/services/reflexology.png",
    durations: ["60 MIN", "90 MIN"],
  },
  {
    title: "Relax Massage",
    description:
      "A flowing full-body treatment using long, warm strokes to ease tension and restore circulation. Ideal after a day under the Mediterranean sun. Pure, effortless restoration.",
    price: 110,
    image: "/images/services/relax-massage.png",
    durations: ["75 MIN", "90 MIN"],
  },
  {
    title: "Aromatherapy",
    description:
      "A deeply sensory ritual combining skilled touch with pure essential oil blends — lavender, neroli, eucalyptus. Calms the nervous system on contact. The scent stays with you for hours.",
    price: 100,
    image: "/images/services/aromatherapy.png",
    durations: ["60 MIN", "90 MIN"],
  },
  {
    title: "Deep Tissue",
    description:
      "Targets deeper layers of muscle and connective tissue to release chronic tension and restore mobility. Pressure is firm and intentional — deeply effective for persistent knots.",
    price: 110,
    image: "/images/services/deep-tissue.png",
    durations: ["75 MIN", "90 MIN"],
  },
  {
    title: "Four hands Massage",
    description:
      "Two therapists, one guest, perfect synchrony. The doubled sensation deepens relaxation beyond what the mind can track. A rare and profoundly immersive experience.",
    price: 200,
    image: "/images/services/four-hands.png",
    durations: ["75 MIN", "90 MIN"],
  },
  {
    title: "Thai Treatment",
    description:
      "An ancient assisted-stretching technique using rhythmic pressure and yoga-inspired movement. No oils. Performed on a mat, it restores flexibility and rebalances energy flow through the body.",
    price: 200,
    image: "/images/services/thai.png",
    durations: ["75 MIN", "90 MIN"],
  },
  {
    title: "Couple Massage",
    description:
      "Two guests, two therapists, one shared moment of stillness. A romantic and restorative experience, performed side-by-side on your private villa terrace overlooking the sea.",
    price: 200,
    image: "/images/services/couples.png",
    durations: ["75 MIN", "90 MIN"],
  },
];

// ─── Reviews ───────────────────────────────────────────────────────────────────
export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Barbara Maliskova",
    rating: 5,
    text: "Beautiful enviroment, professional approach. Soft hands and very pleasant rest. I recommend!",
  },
  {
    name: "Sophia Andreou",
    rating: 5,
    text: "An unforgettable experience. The therapist was incredibly skilled and the setting — right in our villa — made it feel truly luxurious.",
  },
  {
    name: "Marco Rivoletti",
    rating: 5,
    text: "We booked two sessions during our stay in Rhodes. Both were exceptional. The hot stone ritual was pure magic.",
  },
  {
    name: "Elena Papadaki",
    rating: 5,
    text: "Professional, punctual, and deeply relaxing. Worth every euro. The Mediterranean Aroma massage was heavenly.",
  },
];
