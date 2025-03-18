import Link from "next/link";




export const metadata = {
  title: "Contact",
};

export default async function Page() {




  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Contact Me
        </h1>

        <div className="space-y-8">
          <p>
            I am a Full-Stack Web Developer with a passion for building scalable
            applications using Next.js, Supabase, PostgreSQL, and modern
            frontend technologies.
          </p>
        </div>
     

     

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              You can reach me at the following email:
            </Link>
          </div>
        </div>
      </div>
 
  );
}
