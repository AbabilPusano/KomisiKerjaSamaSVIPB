"use client";

import { useEffect, useState, use, useRef } from "react";
import Link from "next/link";
import { Header, Footer, ImageModal } from "@/app/components";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Mail, Phone, MessageCircle } from "lucide-react";

// Interfaces
interface Country {
  id: string;
  name: string;
}

interface Objective {
  sticker: string;
  title: string;
  description: string;
}

interface TimelineItem {
  title: string;
  description: string;
  image?: string;
  order?: number;
}

interface ScholarshipItem {
  sticker: string;
  title: string;
  description: string;
  image?: string;
}

interface ContactPerson {
  email: string;
  phoneNumber: string;
}

interface GalleryItem {
  imageUrl: string;
  title: string;
  shortDescription: string;
}

interface CustomSectionCard {
  title: string;
  description: string;
  image?: string;
}

interface CustomSection {
  title: string;
  description: string;
  layout: 'grid' | 'carousel';
  cards: CustomSectionCard[];
}

interface Program {
  id: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  description: string;
  country: Country;
  objectives: Objective[];
  timeline: TimelineItem[];
  timelineDescription?: string;
  scholarshipDescription?: string;
  scholarships: ScholarshipItem[];
  contactPersons: ContactPerson[];
  gallery: GalleryItem[];
  customSections?: CustomSection[];
  eligibleStudyPrograms: string[];
  mainColor?: string;
  createdAt: string;
}

const CustomSectionRenderer = ({ section, mainColor, onImageClick }: { section: CustomSection, mainColor: string, onImageClick: (img: string, title: string, desc: string) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const firstChild = current.firstElementChild as HTMLElement;
      if (!firstChild) return;

      const cardWidth = firstChild.offsetWidth;
      const gap = 32; // 2rem matches gap-8
      const scrollAmount = cardWidth + gap;

      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
              {section.description}
            </p>
          )}

          {section.layout === 'grid' ? (
            <div className="grid md:grid-cols-3 gap-8">
              {section.cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all border border-slate-100 group ${card.image ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : ''}`}
                  onClick={() => card.image && onImageClick(card.image, card.title, card.description)}
                >
                  {card.image && (
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Carousel View
            <div className="relative group/carousel">
              {/* Left Button */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 -translate-x-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-110 transition-all focus:outline-none opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Scroll Container */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {section.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`min-w-[100%] md:min-w-[calc(33.333%-22px)] snap-center bg-white rounded-2xl shadow-lg overflow-hidden transition-all border border-slate-100 group ${card.image ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : ''}`}
                    onClick={() => card.image && onImageClick(card.image, card.title, card.description)}
                  >
                    {card.image && (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Button */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 translate-x-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-110 transition-all focus:outline-none opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const [program, setProgram] = useState<Program | null>(null);
  const [modalState, setModalState] = useState<{ isOpen: boolean; imageUrl: string; title: string; description: string }>({
    isOpen: false,
    imageUrl: "",
    title: "",
    description: ""
  });

  const openModal = (imageUrl: string, title: string, description: string) => {
    setModalState({ isOpen: true, imageUrl, title, description });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const { current } = galleryRef;
      // Calculate scroll amount based on child width + gap
      // Assuming gap-8 (32px / 2rem)
      const firstChild = current.firstElementChild as HTMLElement;
      if (!firstChild) return;

      const cardWidth = firstChild.offsetWidth;
      const gap = 32; // 2rem matches gap-8
      const scrollAmount = cardWidth + gap;

      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://vccbe.vercel.app/api/programs/${id}`);
        const data = await res.json();

        if (data.success) {
          setProgram(data.data);
        } else {
          setError("Program not found");
        }
      } catch (err) {
        console.error("Failed to fetch program:", err);
        setError("Failed to load program data");
      } finally {
        setLoading(false);
      }
    };

    fetchProgram();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading program details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !program) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Oops!</h1>
            <p className="text-slate-600 mb-6">{error || "Program not found"}</p>
            <Link
              href="/programs"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Programs
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Determine main color (fallback to blue/orange if not set)
  const mainColor = program.mainColor || "#ea580c"; // Default orange-600 like reference

  // Helper to adjust color opacity/shade roughly (simplified)
  // For production, a proper color manipulation library would be better, but we'll use inline styles 
  // and some standard tailwind classes where possible, or style overrides.

  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50" style={{
        background: `linear-gradient(to bottom right, #f8fafc, ${mainColor}10)`
      }}>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 lg:py-20">
          <Link href="/programs" className="inline-flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Programs
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white shadow-sm border border-slate-100 w-fit">
                <MapPin className="w-3.5 h-3.5" style={{ color: mainColor }} />
                <span className="text-slate-700">{program.country.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {program.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {program.shortDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#program-details"
                  className="px-8 py-3.5 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
                  style={{ backgroundColor: mainColor }}
                >
                  Learn More
                </a>
                {program.gallery && program.gallery.length > 0 && (
                  <a
                    href="#gallery"
                    className="px-8 py-3.5 bg-white font-semibold rounded-xl border-2 transition-all text-center hover:bg-slate-50"
                    style={{ borderColor: mainColor, color: mainColor }}
                  >
                    View Gallery
                  </a>
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50">
              <Image
                src={program.thumbnail}
                alt={program.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="bg-white py-20 shadow-sm border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Program Overview
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-justify whitespace-pre-wrap">
                {program.description}
              </div>

              {/* Eligible Study Programs */}
              {program.eligibleStudyPrograms && program.eligibleStudyPrograms.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Eligible Study Programs
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.eligibleStudyPrograms.map((prog, idx) => (
                      <span
                        key={idx}
                        className={prog === "All Program Study" ? `text-white px-3 py-1 rounded-full text-sm font-medium shadow-md font-semibold` : `bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium`}
                        style={{ backgroundColor: prog === "All Program Study" ? mainColor : "" }}
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Program Objectives */}
        {program.objectives && program.objectives.length > 0 && (
          <section className="py-20" style={{ background: `linear-gradient(to bottom right, white, ${mainColor}08)` }}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                  Program Objectives
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {program.objectives.map((obj, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md text-3xl"
                        style={{ backgroundColor: mainColor, color: 'white' }}>
                        {obj.sticker || '🎯'}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {obj.title}
                      </h3>
                      <p className="text-slate-600">
                        {obj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Timeline / Implementation Scheme */}
        {program.timeline && program.timeline.length > 0 && (
          <section id="program-details" className="bg-white py-20 border-y border-slate-100">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
                  Program Timeline
                </h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  {program.timelineDescription}
                </p>
                <div className="space-y-8 mt-12 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>

                  {program.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-0 md:pl-24 group">
                      {/* Number Badge */}
                      <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full items-center justify-center font-bold text-xl text-white shadow-md z-10 border-4 border-white transition-transform group-hover:scale-110"
                        style={{ backgroundColor: mainColor }}>
                        {item.order || idx + 1}
                      </div>

                      <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm group-hover:shadow-md">
                        <div className="flex md:hidden w-12 h-12 rounded-full items-center justify-center font-bold text-lg text-white mb-4 shadow-sm"
                          style={{ backgroundColor: mainColor }}>
                          {item.order || idx + 1}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                          {item.title}
                        </h4>
                        <p className="text-slate-700 leading-relaxed">
                          {item.description}
                        </p>
                        {item.image && (
                          <div className="mt-4 rounded-xl overflow-hidden h-48 relative">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Scholarship Section */}
        {(program.scholarships?.length > 0 || program.scholarshipDescription) && (
          <section className="py-20" style={{ backgroundColor: `${mainColor}05` }}>
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Scholarship & Financial Support
                </h2>
                {program.scholarshipDescription && (
                  <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
                    {program.scholarshipDescription}
                  </p>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                  {program.scholarships?.map((scholarship, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md text-3xl"
                        style={{ background: `linear-gradient(135deg, ${mainColor}, ${mainColor}dd)` }}>
                        <span className="text-white">{scholarship.sticker || '🎓'}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {scholarship.title}
                      </h3>
                      <p className="text-slate-700">
                        {scholarship.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Program Implementation */}
        {/* <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Program Implementation
              </h2>
              <p className="text-lg text-gray-700 mb-12 text-center">
                Program Internasional Skema 3+2 dengan Chuo Joho Institute telah memasuki tahap implementasi dengan keberangkatan mahasiswa ke Jepang dalam beberapa batch sebagai berikut:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Batch 1
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <strong>Participant:</strong> Angga
                        </p>
                        <p className="text-green-700 font-semibold">
                          <strong>Status:</strong> Successfully Departed to Japan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-100">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Batch 2
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <strong>Participants:</strong> Ernesto, Hauzan
                        </p>
                        <p className="text-green-700 font-semibold">
                          <strong>Status:</strong> Successfully Departed to Japan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Custom Sections */}
        {
          program.customSections && program.customSections.map((section, idx) => (
            <CustomSectionRenderer key={idx} section={section} mainColor={mainColor} onImageClick={openModal} />
          ))
        }

        {/* Gallery Section */}
        {
          program.gallery && program.gallery.length > 0 && (
            <section id="gallery" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                    Gallery
                  </h2>

                  {program.gallery.length < 4 ? (
                    // Grid View (< 4 items)
                    <div className="grid md:grid-cols-3 gap-8">
                      {program.gallery.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-slate-100 group cursor-pointer hover:-translate-y-1"
                          onClick={() => openModal(item.imageUrl, item.title, item.shortDescription)}
                        >
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm">
                              {item.shortDescription}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Carousel View (>= 4 items)
                    <div className="relative group/carousel">
                      {/* Left Button */}
                      <button
                        onClick={() => scrollGallery('left')}
                        className="absolute left-[-40px] top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-110 transition-all focus:outline-none opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      {/* Scroll Container */}
                      <div
                        ref={galleryRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {program.gallery.map((item, idx) => (
                          <div
                            key={idx}
                            className="min-w-[100%] md:min-w-[calc(33.333%-22px)] snap-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-slate-100 group cursor-pointer hover:-translate-y-1"
                            onClick={() => openModal(item.imageUrl, item.title, item.shortDescription)}
                          >
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {item.title}
                              </h3>
                              <p className="text-slate-600 text-sm">
                                {item.shortDescription}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Button */}
                      <button
                        onClick={() => scrollGallery('right')}
                        className="absolute right-[-40px] top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-110 transition-all focus:outline-none opacity-0 group-hover/carousel:opacity-100 md:opacity-100"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )
        }

        {/* Further Information / Contact */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/10 blur-[100px] rounded-full"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Apply?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Untuk informasi lebih lanjut mengenai pendaftaran dan persyaratan detail, silakan hubungi narahubung kami.
              </p>

              {program.contactPersons && program.contactPersons.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  {program.contactPersons.map((cp, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl flex items-center min-w-[250px] border border-white/10">
                      {/* WhatsApp Card */}
                      <a
                        href={`https://wa.me/${cp.phoneNumber.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group m-4 w-120"
                      >
                        <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-green-600 transition-colors">
                          <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp</h3>
                        <p className="text-slate-700 mb-2 group-hover:text-green-700 transition-colors">{cp.phoneNumber}</p>
                        <p className="text-sm text-green-600 font-semibold mt-2">Klik untuk chat →</p>
                      </a>

                      {/* Email Card */}
                      <a
                        href={`mailto:${cp.email}`}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group m-4 w-120"
                      >
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-blue-700 transition-colors">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
                        <p className="text-slate-700 mb-2 group-hover:text-blue-700 transition-colors break-words">{cp.email}</p>
                        <p className="text-sm text-blue-600 font-semibold mt-2">Klik untuk email →</p>
                      </a>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-center gap-8">
                {program.contactPersons.length === 0 && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contacts"
                      className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Hubungi Kami
                    </Link>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/programs"
                    className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Explore Other Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageUrl={modalState.imageUrl}
        title={modalState.title}
        description={modalState.description}
      />
      <Footer />
    </>
  );
}
