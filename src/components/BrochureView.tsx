export default function BrochureView() {
  return (
    <section className="min-h-screen bg-[#F8F4E8] p-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-4 shadow-2xl">
        <iframe
          src="/brochures/academia-brochure.pdf#toolbar=0&navpanes=0"
          title="Academia Brochure"
          className="w-full h-[90vh] rounded-2xl"
        />
      </div>
    </section>
  );
}