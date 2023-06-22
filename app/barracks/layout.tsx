import HomeButton from "../components/button/homeButton";

export default function BarracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col md:flex-row justify-center bg-slate-800   min-h-screen  min-w-full '>
    
        <div className="absolute self-center">
          <HomeButton />
          <div className='flex flex-col relative w-screen h-screen justify-center'>
        {children}
        </div>
        </div>
    </section>
  );
}
