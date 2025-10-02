import supabase from "./api/supabaseClient";

export default function Home() {
  // let { data, error } = await supabase.from("users").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-800 to-black">
      <h1 className="text-4xl font-bold">
        🚀
        <span className="ml-3 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Welcome to My Next.js + Tailwind Page!
        </span>
      </h1>
      <p className="mt-6 text-lg text-gray-200">hi, i'm jake</p>
      <div className="mt-6 flex items-center justify-center gap-6">
        <img src="/vercel.svg" alt="Vercel Logo" className="h-8 rotate-90" />
        <a
          href="https://jakeo.dev"
          target="_blank"
          className="rounded-lg bg-rose-500 px-6 py-3 text-white shadow-lg shadow-rose-500/30 transition duration-300 hover:scale-105 hover:shadow-rose-500/50 active:scale-100"
        >
          Go to my website!
        </a>
        <img src="/vercel.svg" alt="Vercel Logo" className="h-8 -rotate-90" />
      </div>
    </main>
  );
}
