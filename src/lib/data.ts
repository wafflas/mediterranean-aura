export interface Service {
  title: string;
  description: string;
  price: number;
  image: string;
  durations: string[];
  promoLabel?: string;
}

// ─── Services ───────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    title: "Relax Massage",
    description:
      "A flowing full-body treatment using long, warm strokes to ease tension and restore circulation. Ideal after a day under the Mediterranean sun. Pure, effortless restoration.",
    price: 120,
    image: "/images/services/relax-massage2.webp",
    durations: ["60 MIN", "90 MIN"],
  },
  {
    title: "Deep Tissue",
    description:
      "Targets deeper layers of muscle and connective tissue to release chronic tension and restore mobility. Pressure is firm and intentional — deeply effective for persistent knots.",
    price: 150,
    image: "/images/services/deep-tissue2.webp",
    durations: ["60 MIN", "90 MIN"],
  },
  {
    title: "Aromatherapy",
    description:
      "A deeply sensory ritual combining skilled touch with pure essential oil blends — lavender, neroli, eucalyptus. Calms the nervous system on contact. The scent stays with you for hours.",
    price: 140,
    image: "/images/services/aromatherapy.webp",
    durations: ["60 MIN", "90 MIN"],
  },
  {
    title: "Couple Massage",
    description:
      "Two guests, two therapists, one shared moment of stillness. A romantic and restorative experience, performed side-by-side on your private villa terrace overlooking the sea.",
    price: 220,
    image: "/images/services/couples.webp",
    durations: ["60 MIN", "90 MIN"],
    promoLabel: "Champagne included",
  },
  /*{
    title: "Back & Neck Massage",
    description:
      "A highly effective rehabilitation technique combining elements of acupressure and yoga. Targets the most common tension zones. For particularly stiff muscles, this can be intensely powerful.",
    price: 80,
    image: "/images/services/back-neck-massage.webp",
    durations: ["45 MIN", "60 MIN", "90 MIN"],
  },*/
  /*{
    title: "Reflexology",
    description:
      "Precise pressure applied to points on the feet that correspond to organs and systems throughout the body. Surprisingly powerful — many guests experience a full-body release.",
    price: 95,
    image: "/images/services/reflexology.webp",
    durations: ["60 MIN", "90 MIN"],
  },*/
  /*{
    title: "Four hands Massage",
    description:
      "Two therapists, one guest, perfect synchrony. The doubled sensation deepens relaxation beyond what the mind can track. A rare and profoundly immersive experience.",
    price: 200,
    image: "/images/services/four-hands.webp",
    durations: ["75 MIN", "90 MIN"],
  },*/
  /*{
    title: "Thai Treatment",
    description:
      "An ancient assisted-stretching technique using rhythmic pressure and yoga-inspired movement. No oils. Performed on a mat, it restores flexibility and rebalances energy flow through the body.",
    price: 200,
    image: "/images/services/thai.webp",
    durations: ["75 MIN", "90 MIN"],
  },*/
];

// ─── Reviews ───────────────────────────────────────────────────────────────────
export interface Review {
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Hannah Whitmore",
    rating: 5,
    text: "Beautiful environment, calm energy, and a genuinely professional approach. The pressure was exactly right and I felt reset afterward. Highly recommend.",
  },
  {
    name: "Amir Khalil",
    rating: 5,
    text: "An unforgettable experience. The therapist was incredibly skilled and having it right in our villa made it feel truly luxurious.",
  },
  {
    name: "Chloe Bennett",
    rating: 5,
    text: "We booked two sessions during our stay and both were exceptional. The Aromatherapy treatment was the standout — relaxing, grounding, and beautifully done.",
  },
  {
    name: "Daniel Fischer",
    rating: 5,
    text: "Professional, punctual, and deeply relaxing. Worth every euro. I chose the Deep Tissue and it relieved the tightness I’d had for days.",
  },
];
