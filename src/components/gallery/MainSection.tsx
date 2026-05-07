import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { galleryItems } from "@/data/galery";

const GallerySection = ({ id }: { id: string }) => {
  return (
    <section id={id} className="w-full">
      <ResponsiveBox
        classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      >
        <ConstrainedBox classNames="p-4 py-16">
          <SectionTitle>Gallery</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {galleryItems.map((item, index) => (
              <div
              key={index}
              className="relative group rounded overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-60 object-cover transition duration-300 group-hover:brightness-50"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-60 object-cover transition duration-300 group-hover:brightness-50"
                  />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ConstrainedBox>
      </ResponsiveBox>
    </section>
  );
};


export default GallerySection;
