import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";

export default function CVPage() {
  return (
    <ResponsiveBox classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md">
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20">
        <Column classNames="w-full max-w-3xl mx-auto gap-10 text-[var(--textColor)] dark:text-[var(--textColor)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-300 dark:border-gray-600 pb-6">
            <img
              src="/profile.jpeg"
              alt="Rivaldo Rizky's Photo"
              className="w-28 h-28 rounded-full object-cover border-2 border-[var(--primaryColor)]"
            />

            <div className="text-start flex-1">
              <h1 className="text-4xl md:text-5xl font-bold">
                Rivaldo Rizky Habibie
              </h1>
              <p className="text-[var(--primaryColor)] font-semibold text-lg md:text-xl">
                Web Developer
              </p>

              <div className="mt-3 text-sm md:text-base text-[var(--textColorLight)] space-y-1">
                <p>📞 +62 8963 9038 020</p>
                <p>✉️ rivaldo0347t@gmail.com</p>
                <p>
                  🌐{" "}
                  <a
                    href="https://rvldrh.my.id/"
                    target="_blank"
                    className="text-[var(--primaryColor)] underline"
                  >
                    rvldrh.my.id
                  </a>
                </p>
                <p>
                  📍 JL La Sucipto XXII, Pandanwangi, Blimbing, Malang
                </p>
              </div>
            </div>
          </div>

          {/* Profile */}
          <section className="border-b border-gray-300 dark:border-gray-700 pb-6">
            <h2 className="text-2xl font-bold mb-3 text-[var(--primaryColor)]">
              Profile
            </h2>
            <div className="pl-2 text-sm leading-relaxed">
              <p>
              Web Developer with hands-on experience in building responsive websites and web applications
              </p>
              <p>
              using JavaScript, React.js, Next.js, and Node.js. Skilled in both front-end and back-end development
              </p>
              <p>
              with internship and mentoring experience. Highly motivated to grow as a full-stack developer
              </p>
              <p>
              and contribute to impactful projects.
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="border-b border-gray-300 dark:border-gray-700 pb-6">
            <h2 className="text-2xl font-bold mb-3 text-[var(--primaryColor)]">
              Education
            </h2>
            <ul className="pl-4 list-disc space-y-2 text-sm">
              <li>
                <span className="font-semibold">Universitas Brawijaya</span> (2025–now)
                <div className="pl-4">- S1 Teknologi Informasi (FILKOM)</div>
              </li>
              <li>
                <span className="font-semibold">SMK Telkom Malang</span> (2022–2025)
                <div className="pl-4">- Software Engineering (RPL)</div>
              </li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="border-b border-gray-300 dark:border-gray-700 pb-6">
            <h2 className="text-2xl font-bold mb-3 text-[var(--primaryColor)]">
              Work Experience
            </h2>
            <ul className="pl-4 list-disc space-y-4 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">
                  Website Developer – PT. Berlian Muda Sukses (2022–Present)
                </span>
                <div className="pl-4">
                - Built and maintained company profile website and Daily Management System (DMS).
                </div>
                <div className="pl-4">
                - Improved website performance and ensured responsive design.
                </div>
              </li>
              <li>
                <span className="font-semibold">
                  Frontend Developer Intern – Machine Vision Indonesia (Sep 2024–Oct 2024)
                </span>
                <div className="pl-4">
                  -  Converted UI/UX designs into responsive web pages.
                </div>
                <div className="pl-4">
                  -  Integrated backend APIs into frontend.
                </div>
              </li>
              <li>
                <span className="font-semibold">
                  Web Development Mentor – Saka Technodemy (Jul 2024–Dec 2024)
                </span>
                <div className="pl-4">
                  -  Taught React, Next.js, Redux, Storybook, and TypeScript to vocational students.
                </div>
                <div className="pl-4">
                  - Guided students in developing web projects.
                </div>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="border-[var(--primaryColor)] mt-2 pb-12">
            <h2 className="text-2xl font-bold mb-3 text-[var(--primaryColor)]">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                { name: "JavaScript", color: "bg-yellow-300 text-black" },
                { name: "React.js", color: "bg-cyan-500 text-white" },
                { name: "Next.js", color: "bg-neutral-800 text-white" },
                { name: "Node.js", color: "bg-green-600 text-white" },
                { name: "MongoDB", color: "bg-green-800 text-white" },
                { name: "PHP Native", color: "bg-indigo-500 text-white" },
                { name: "HTML", color: "bg-orange-500 text-white" },
                { name: "CSS", color: "bg-blue-500 text-white" },
                { name: "UI/UX", color: "bg-pink-400 text-white" },
                { name: "WordPress", color: "bg-blue-800 text-white" },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`${skill.color} px-3 py-1 rounded font-medium shadow-sm`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
}
