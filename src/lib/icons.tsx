interface IconProps {
  size?: number;
  className?: string;
}

const defaults = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

//Instagram
export function IconInstagram({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

//Whatsapp
export function IconWhatsapp({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

//Facebook
export function IconFacebook({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

//ArrowRight
export function IconArrowRight({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

//ChevronDown
export function IconChevronDown({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

//Menu
export function IconMenu({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

//Close
export function IconClose({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

//Star
export function IconStar({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

//Phone
export function IconPhone({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

//Mail
export function IconMail({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

//MapPin
export function IconMapPin({ size = 20, className }: IconProps) {
  return (
    <svg
      {...defaults}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

//ReviewStar
export function ReviewStar({ size = 29, className }: IconProps) {
  return (
    <svg
      width={size}
      height={Math.round((size * 26) / 29)}
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14.3307 0.000255533L18.7596 8.55908L28.6614 9.93148L21.496 16.5933L23.1874 26L14.3307 21.5587L5.47397 26L7.16535 16.5933L0 9.93148L9.90287 8.55908L14.3307 0.000255533Z"
        fill="#F4BC1C"
      />
    </svg>
  );
}

//ReviewArrow
export function ReviewArrow({ size = 40, className }: IconProps) {
  return (
    <svg
      width={Math.round((size * 40) / 41)}
      height={size}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 0L6 20.37L0 40.74C0 40.74 23.93 20.37 40.37 20.37C23.93 20.37 0 0 0 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

//Quote
export function QuoteOpen({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={Math.round((size * 31) / 38)}
      viewBox="0 0 38 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        opacity="0.4"
        d="M17.1432 23.8122C17.1432 21.894 16.6123 20.2624 15.5507 18.9175C13.9361 16.889 10.8176 16.6465 9.00392 17.0434C8.25192 12.7881 11.8792 7.36415 16.5681 5.02703L12.963 0C5.88535 3.35135 -1.05956 11.0683 0.13479 20.7916C0.886786 26.9431 4.44771 31 9.4905 31C11.7023 31 13.538 30.3606 14.9757 29.0597C16.4354 27.7589 17.1432 26.0171 17.1432 23.8122ZM38 23.8122C38 21.894 37.4692 20.2624 36.4075 18.9175C34.793 16.889 31.6744 16.6465 29.8607 17.0434C29.1088 12.7881 32.736 7.36415 37.4249 5.02703L33.8198 0C26.7422 3.35135 19.7973 11.0683 20.9916 20.7916C21.7436 26.9431 25.3045 31 30.3473 31C32.5591 31 34.3948 30.3606 35.8325 29.0597C37.2922 27.7589 38 26.0171 38 23.8122Z"
        fill="currentColor"
      />
    </svg>
  );
}
