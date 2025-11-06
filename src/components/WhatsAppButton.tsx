import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// WhatsApp Icon SVG
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);


interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string;
  message: string;
  buttonText?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message,
  buttonText = "Book via WhatsApp",
  className,
  ...props
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button asChild className={cn("bg-green-500 hover:bg-green-600", className)} {...props}>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-5 w-5 mr-2" />
        {buttonText}
      </a>
    </Button>
  );
}
