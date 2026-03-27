"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { X } from "lucide-react";

interface ReservationContextType {
  isOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

const RESERVATION_URL = "https://mediterraneanaurarhodes.setmore.com";

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openReservation = useCallback(() => setIsOpen(true), []);
  const closeReservation = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeReservation();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeReservation]);

  return (
    <ReservationContext.Provider
      value={{ isOpen, openReservation, closeReservation }}
    >
      {children}
      {isOpen && <ReservationModal onClose={closeReservation} />}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}

function ReservationModal({ onClose }: { onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[5000] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
    >
      <div
        className="absolute inset-0 bg-secondary/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-[5001] w-full max-w-4xl h-[80vh] max-h-[700px] mx-4 bg-secondary border border-primary/20 flex flex-col animate-in fade-in zoom-in duration-500 ease-out">
        <div className="flex items-center justify-between px-5 py-2 border-b border-primary/10">
          <h2
            id="reservation-modal-title"
            className="text-2xl font-canela font-light tracking-wide text-primary uppercase"
          >
            Reservation
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-primary/60 hover:text-primary transition-colors cursor-pointer"
            aria-label="Close reservation modal"
          >
            <X strokeWidth={1} size={28} />
          </button>
        </div>

        {isLoading && (
          <div className="absolute inset-0 top-[80px] flex items-center justify-center bg-secondary">
            <div className="flex flex-col items-center gap-6">
              <div className="w-8 h-8 border-[1px] border-primary/20 border-t-primary rounded-full animate-spin" />
              <p className="text-primary/60 font-apercu text-[0.65rem] tracking-[0.2em] uppercase">
                Loading Secure Gateway
              </p>
            </div>
          </div>
        )}

        <iframe
          src={RESERVATION_URL}
          title="Mediterranean Aura Reservation"
          className="flex-1 w-full border-0 bg-secondary"
          onLoad={() => setIsLoading(false)}
          allow="payment"
        />
      </div>
    </div>
  );
}
