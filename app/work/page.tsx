import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import path from "node:path";
import InstagramWorkGrid from "@/components/InstagramWorkGrid";
import WorkCard from "@/components/WorkCard";

const phoneDisplay = "(516) 250-6544";
const phoneHref = "tel:+15162506544";
const emailHref = "mailto:Dgiammalva1@outlook.com";

const projectFolders = ["Project1", "Project2", "Project3"];
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const galleryLayout: "instagram" | "cards" = "instagram";

function getProjectImages(folder: string) {
  const folderPath = path.join(process.cwd(), "public", folder);

  return readdirSync(folderPath)
    .filter((fileName) =>
      imageExtensions.has(path.extname(fileName).toLowerCase()),
    )
    .sort((firstFile, secondFile) => {
      const firstNumber = Number.parseInt(firstFile, 10);
      const secondNumber = Number.parseInt(secondFile, 10);

      if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return firstFile.localeCompare(secondFile);
      }

      return firstNumber - secondNumber;
    })
    .map((fileName) => ({
      src: `/${folder}/${fileName}`,
      alt: `Veloce Direct project ${folder.replace("Project", "")} photo`,
    }));
}

const workProjects = projectFolders.map((folder, index) => ({
  id: folder.toLowerCase(),
  title: `Project ${index + 1}`,
  location: "Long Island, NY",
  images: getProjectImages(folder),
}));
const allWorkImages = workProjects.flatMap((project) =>
  project.images.map((image, index) => ({
    ...image,
    alt: `${project.title} photo ${index + 1}`,
  })),
);

export const metadata: Metadata = {
  title: "Painting Work Gallery | Veloce Direct Long Island",
  description:
    "View interior painting and room refresh work from Veloce Direct, a Long Island home decor painting service by Dino Giammalva.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#1f2428]">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-44 sm:px-8 sm:pt-48 lg:pb-14 lg:pt-44">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bd4f2d]">
            Our work
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#17212b] sm:text-5xl">
            Long Island room painting and refreshes.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#56616a]">
            A look at completed room refreshes, interior wall painting, and home
            decor paint updates by Veloce Direct.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-[#dfd5c5] bg-white px-4 py-2 text-sm font-bold text-[#2d6a4f] shadow-sm">
            {allWorkImages.length} photos shown
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-10">
        {galleryLayout === "instagram" ? (
          <InstagramWorkGrid images={allWorkImages} />
        ) : (
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            {workProjects.map((project) => (
              <WorkCard
                images={project.images}
                key={project.id}
                location={project.location}
                preloadFirstImage={project.id === workProjects[0]?.id}
                title={project.title}
              />
            ))}
          </div>
        )}
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-3xl border-2 border-[#2d6a4f] bg-white p-8 shadow-[0_14px_36px_rgba(31,36,40,0.10)] sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bd4f2d]">
              Like what you see?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17212b] sm:text-4xl">
              Bring the same clean finish to your home.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:w-72 lg:flex-col">
            <a
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2d6a4f] px-7 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-[#2d6a4f]/20 transition hover:bg-[#24563f]"
              href={phoneHref}
            >
              <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
              {phoneDisplay}
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#dfd5c5] bg-[#fffaf1] px-7 py-4 text-center text-base font-extrabold text-[#17212b] transition hover:border-[#cfc1ae] hover:bg-[#f7f2e8]"
              href={emailHref}
            >
              <Mail aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
