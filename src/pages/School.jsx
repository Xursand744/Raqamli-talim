import Card from "./schul";

const centers = [
  {
    id: 1,
    rank: "#1",
    location: "Siradaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
  {
    id: 2,
    rank: "#2",
    location: "Siradaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
  {
    id: 3,
    rank: "#3",
    location: "Siradaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
  {
    id: 4,
    rank: "#4",
    location: "Siradaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
];

function School() {
  return (
    <div className="container mx-auto mt-[30px] md:mt-[50px] px-4 py-8 mb-[50px]">
      <h1 className="text-3xl font-bold text-center mb-8">
        Top o'quv markazlar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {centers.map((center) => (
          <Card key={center.id} {...center} />
        ))}
      </div>

      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
          Barchasini ko'rish
        </button>
      </div>
    </div>
  );
}

export default School;
