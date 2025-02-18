function JobAnalytics() {
  return (
    <div className="max-w-[1300px] mx-auto w-full max-h-[700px]">
      <h1 className="block mb-6 text-xl font-bold mt-[50px]  uppercase sm:text-3xl sm:text-left text-primary-600  text-left text-[#0284C7]">
        Xalqaro mehnat bozorida talabgir IT-yo’nalishlarning kunlik tahlili -
        🟢live update
      </h1>
      <iframe
        className="mb-[50px] inset-0 w-full h-full rounded-lg"
        title="IT-Jobs_V3"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiZTI0MTNhNWEtYzY1Ny00M2VmLTk1MDUtOGFiNzAxYmRkNTVkIiwidCI6ImYxNWNiZjRiLTNjZjQtNDNmNS1iY2U3LTQ3NjVkNmI5YmNmZSIsImMiOjEwfQ%3D%3D"
        frameBorder="0"
        allowFullScreen="false"
      />
    </div>
  );
}

export default JobAnalytics;
