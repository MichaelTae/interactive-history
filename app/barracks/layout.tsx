export default function BarracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className='flex flex-col md:flex-row justify-center h-full border'>
        
        {children}
      </div>
    </section>
  );
}
