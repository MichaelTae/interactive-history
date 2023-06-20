import HomeButton from "../components/button/homeButton";

export default function BarracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col md:flex-row justify-center bg-slate-800   min-h-screen   min-w-full '>
    
        <div className="absolute top-20 self-center">
          <HomeButton />
        {children}
        </div>
    </section>
  );
}
