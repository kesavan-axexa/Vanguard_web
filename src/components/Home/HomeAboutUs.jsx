import { FaSolarPanel, FaCertificate, FaDollarSign, FaHandshake } from "react-icons/fa";

export default function HomeAboutUs() {
    return (
        <section id="services" className="py-20 px-6 bg-gradient-to-r from-green-50 to-slate-100">
            <div className="text-center mb-12">
                <h3 className="font-nunito text-4xl text-green-700 font-extrabold tracking-wide">
                    Powering a Sustainable Future
                </h3>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-10 max-w-6xl mx-auto">
                {[
                    { icon: FaSolarPanel, title: "Expertise You Can Trust" },
                    { icon: FaCertificate, title: "Certified & Reliable" },
                    { icon: FaDollarSign, title: "Affordable & Efficient" },
                    { icon: FaHandshake, title: "Customer-Centric" }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white shadow-xl border border-gray-200 backdrop-blur-md hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 flex items-center justify-center text-white text-3xl rounded-2xl bg-green-600 shadow-md">
                            <item.icon />
                        </div>
                        <h4 className="font-quicksand text-xl font-bold text-gray-800 text-center">
                            {item.title}
                        </h4>
                        <span className="text-gray-600 text-sm text-center">About Us</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
