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
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11.25 0C17.4631 0 22.5 5.0368 22.5 11.25C22.5 17.4631 17.4631 22.5 11.25 22.5C9.1869 22.5 7.25348 21.9446 5.59113 20.9753L0.00470828 22.5L1.52567 16.9105C0.555711 15.2478 0 13.3138 0 11.25C0 5.0368 5.0368 0 11.25 0ZM7.19027 5.97188C7.0447 5.9821 6.90198 6.01766 6.77204 6.08413C6.67457 6.134 6.58407 6.20608 6.44188 6.34034C6.3076 6.46712 6.22979 6.57784 6.1478 6.68459C5.7319 7.22611 5.50835 7.89082 5.51251 8.57361C5.51477 9.12556 5.65814 9.66195 5.88455 10.1628C6.3437 11.1785 7.1009 12.2522 8.10108 13.2479C8.34135 13.4871 8.57672 13.7288 8.83053 13.9523C10.0719 15.0453 11.5513 15.8335 13.1509 16.2542C13.1509 16.2542 13.7809 16.3511 13.7902 16.3516C13.9989 16.3629 14.2072 16.3477 14.4161 16.3371C14.7439 16.3202 15.0638 16.2314 15.3534 16.0772C15.5395 15.9781 15.6276 15.9289 15.7839 15.8303C15.7839 15.8303 15.8318 15.7979 15.9243 15.7291C16.0762 15.616 16.17 15.5363 16.2964 15.4051C16.3895 15.3084 16.4695 15.1941 16.5315 15.0652C16.6194 14.8816 16.708 14.5312 16.7432 14.2401C16.7701 14.0178 16.762 13.8963 16.7591 13.8211C16.7542 13.7 16.6541 13.5755 16.5446 13.5226L15.8904 13.2285C15.8904 13.2285 14.9123 12.8028 14.314 12.5299C14.2516 12.5015 14.1835 12.4883 14.115 12.4841C13.9649 12.4749 13.7967 12.5141 13.6897 12.6268C13.6841 12.6245 13.6096 12.6889 12.7957 13.6749C12.7508 13.7286 12.6456 13.8453 12.4637 13.8344C12.4362 13.8324 12.4089 13.8285 12.3822 13.8215C12.3085 13.8021 12.2368 13.7764 12.1666 13.7467C12.0274 13.6877 11.9786 13.6653 11.8835 13.6243C11.2341 13.3406 10.638 12.961 10.1112 12.4965C9.96988 12.3721 9.8385 12.2381 9.70304 12.1068C9.23032 11.6486 8.84331 11.1612 8.55539 10.6805C8.53968 10.6543 8.51546 10.6164 8.48937 10.574C8.44226 10.4974 8.39032 10.4063 8.37402 10.3437C8.3322 10.1782 8.44314 10.0452 8.44314 10.0452C8.44314 10.0452 8.71697 9.74589 8.84419 9.58309C8.9666 9.42637 9.07225 9.27315 9.13953 9.16392C9.27205 8.95087 9.31402 8.7307 9.24438 8.56084C8.92875 7.79136 8.60311 7.02604 8.2675 6.26506C8.20125 6.11489 8.00423 6.00578 7.82507 5.98509C7.76439 5.97807 7.70374 5.97103 7.64282 5.96703C7.49199 5.95968 7.34088 5.9613 7.19027 5.97188Z" />
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
