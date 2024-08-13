import Image from "next/image";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:text-yellow-500 transition duration-300 ease-in-out">
          Inspire. Lead. Achieve Together.
          <code className="font-mono font-bold"></code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pictures/NAVEED-removebg-preview.jpg"
              alt="Naveed's Picture"
              className="dark:invert hover:scale-110 transition-transform duration-300 ease-in-out"
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 m-5 p-6 bg-white rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 to-purple-500 transition duration-300 ease-in-out">
  <h1 className="text-4xl font-extrabold text-black hover:text-yellow-500 transition duration-300 ease-in-out">
    HAFIZ NAVEED UDDIN
  </h1>
  <p className="text-lg-italic text-gray-700 dark:text-gray-300 max-w-2xl text-center leading-relaxed hover:text-white transition duration-300 ease-in-out font-italic">
    My name is Hafiz Naveed Uddin. I am a highly dedicated and hardworking individual with a deep passion for my work. My journey began with the memorization of the Quran, instilling in me discipline and focus. I am also proficient in shorthand as a stenographer and fluent in Urdu, English, and shorthand. Expanding my horizons, I am currently pursuing courses in Cloud, Artificial Intelligence, and Compute Engineering through PIAIC and the esteemed Governor House Karachi. With a strong foundation in Generative AI and Cybersecurity, I am committed to advancing in these cutting-edge fields.
  </p>
</div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-8">
        <a
          href="https://my-port-indol-two.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white/50 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 group-hover:text-white transition duration-300 ease-in-out">
            CURRICULUM VITAE{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100 group-hover:text-white transition duration-300 ease-in-out">
            Driven by passion, committed to excellence
          </p>
        </a>

        <a
          href="https://github.com/NAVEED261/HIZUL-QURAN/blob/main/8e1a82e9-0e4e-47e9-ab05-8c42753d2cfe.jpg"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white/50 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 group-hover:text-white transition duration-300 ease-in-out">
            HIFZUL-QURAN{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100 group-hover:text-white transition duration-300 ease-in-out">
            My journey started with Hifzul-Quran, laying the foundation for a
            life of purpose and dedication
          </p>
        </a>

        <a
          href="https://github.com/NAVEED261/GRADUATE/blob/main/cd345bb9-829c-4b90-a504-59eb6750fa61.jpg"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white/50 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 group-hover:text-white transition duration-300 ease-in-out">
            BECHLOR OF COMMERCE{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100 group-hover:text-white transition duration-300 ease-in-out">
          Bachelor of Commerce graduate with expertise in business, finance, and accounting, ready to excel in the world of commerce.
          </p>
        </a>

        <a
          href="https://github.com/NAVEED261/MACHINE-LEARNING/blob/main/MACHINE%20LEARNING.jpg"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white/50 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 group-hover:text-white transition duration-300 ease-in-out">
            AI, DATA SCIENCE, MACHINE LEARNING{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100 group-hover:text-white transition duration-300 ease-in-out">
            AI and Data Science enthusiast with a focus on Machine Learning, driving insights and innovation
          </p>
        </a>
        <a
          href="https://github.com/NAVEED261/KAIRIZ/blob/main/kairiz%20internship%20certificate.jpg"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white/50 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 group-hover:text-white transition duration-300 ease-in-out">
            INTERSNSHIP CERTIFICATE BY KAIRIZ {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100 group-hover:text-white transition duration-300 ease-in-out">
            Completed one month remotely internship with cybersecurity (ETHICAL HACKING)
          </p>
        </a>
        <a
          href="https://github.com/NAVEED261/KAIRIZ/blob/main/HAFIZ%20NAVEED%20UDDIN%20TATA%20CERTIFICATE.pdf"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white/50 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 group-hover:text-white transition duration-300 ease-in-out">
            INTERSNSHIP CERTIFICATE BY TATA {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100 group-hover:text-white transition duration-300 ease-in-out">
            Completed one month remotely internship with cybersecurity (SOC ANALYST)
          </p>
        </a>
        <Footer/>
      </div>
      
    </main>
  );
}
