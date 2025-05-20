import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Study Materials",
      icon: "📚",
      description:
        "Access comprehensive notes, e-books, and curated PDFs for all VTU branches.",
      color: "bg-blue-100",
    },
    {
      title: "Question Papers",
      icon: "📝",
      description:
        "Practice with previous year papers and model tests, complete with solutions.",
      color: "bg-indigo-100",
    },
    {
      title: "Results Portal",
      icon: "🎯",
      description:
        "Check university and internal results instantly with personalized guidance.",
      color: "bg-purple-100",
    },
    {
      title: "Project Guidelines",
      icon: "💡",
      description:
        "Kickstart real-world projects with detailed documentation and templates.",
      color: "bg-green-100",
    },
    {
      title: "Lab Manuals",
      icon: "🧪",
      description:
        "Download ready-to-use lab manuals and code snippets for practicals.",
      color: "bg-yellow-100",
    },
    {
      title: "Event Updates",
      icon: "📅",
      description:
        "Stay updated on tech fests, workshops, hackathons, and placement drives.",
      color: "bg-red-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <marquee scrollamount="20">
            <h1 className="text-4xl sm:text-6xl font-extrabold  mb-6 tracking-tight animate-fade-in">
              🚅Welcome to VTU Material Hub📖
            </h1>
          </marquee>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Your one-stop platform for VTU students to access study resources,
            track results, and excel in projects with ease.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/dept")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Departments
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            All Your Academic Needs, Covered
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${feature.color}`}
              >
                <div className="text-5xl mb-4 animate-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6">
              <p className="text-5xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-700 mt-2">Students Supported</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold text-blue-600">500+</p>
              <p link href="#" className="text-gray-700 mt-2">
                Resources Available
              </p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold text-blue-600">95%</p>
              <p className="text-gray-700 mt-2">User Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Simplify Your VTU Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of VTU students who trust us to provide high-quality
            resources, timely updates, and seamless academic support.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
