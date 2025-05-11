
import WeightConverter from "../components/WeightConverter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-4 py-10">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8 dir-rtl">
          أداة تحويل الوزن
        </h1>
        <WeightConverter />
        <div className="mt-8 text-center text-sm text-gray-500 dir-rtl">
          <p>يمكنك تحويل الوزن بين الكيلوغرام، الغرام، الطن والباوند</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
