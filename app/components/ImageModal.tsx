import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
}

export const ImageModal = ({ isOpen, onClose, imageUrl, title, description }: ImageModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col shadow-2xl relative animate-in zoom-in-50 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full flex-1 bg-black/5 flex items-center justify-center overflow-hidden">
          {imageUrl && (
            <div className="relative w-full h-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
                priority
              />
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 bg-white overflow-y-auto shrink-0 max-h-[30vh] border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{description}</div>
        </div>
      </div>
    </div>
  );
};
