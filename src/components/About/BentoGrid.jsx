import {  
  FaCheckCircle,  
  FaShieldAlt,  
  FaDollarSign,  
  FaUsers,  
  FaLeaf,  
  FaWrench,  
} from "react-icons/fa";  

// Icon color configurations  
const iconStyles = {  
  FaCheckCircle: { bg: "bg-blue-50", border: "border-blue-300" },  
  FaShieldAlt: { bg: "bg-emerald-50", border: "border-emerald-300" },  
  FaDollarSign: { bg: "bg-yellow-50", border: "border-yellow-300" },  
  FaUsers: { bg: "bg-purple-50", border: "border-purple-300" },  
  FaLeaf: { bg: "bg-green-50", border: "border-green-300" },  
  FaWrench: { bg: "bg-red-50", border: "border-red-300" },  
};  

const itemsSample = [  
  {  
    title: "Expertise You Can Trust",  
    meta: "15+ years",  
    description: "15+ years of experience in solar energy solutions.",  
    icon: <FaCheckCircle className="w-4 h-4 text-blue-500" />,  
    status: "Trusted",  
    tags: ["Solar", "Experience"],  
    colSpan: 2,  
    hasPersistentHover: true,  
    iconName: "FaCheckCircle",  
  },  
  {  
    title: "Certified & Reliable",  
    meta: "MSME Certified",  
    description: "A trusted MSME with industry certifications.",  
    icon: <FaShieldAlt className="w-4 h-4 text-emerald-500" />,  
    status: "Verified",  
    tags: ["Certification", "Trust"],  
    iconName: "FaShieldAlt",  
  },  
  {  
    title: "Affordable & Efficient",  
    meta: "Subsidies Available",  
    description:  
      "Cost-effective solar installations with government subsidies.",  
    icon: <FaDollarSign className="w-4 h-4 text-yellow-500" />,  
    tags: ["Savings", "Efficiency"],  
    colSpan: 2,  
    iconName: "FaDollarSign",  
  },  
  {  
    title: "Customer-Centric Approach",  
    meta: "Full Support",  
    description: "End-to-end support from consultation to maintenance.",  
    icon: <FaUsers className="w-4 h-4 text-purple-500" />,  
    status: "Top Rated",  
    tags: ["Support", "Satisfaction"],  
    iconName: "FaUsers",  
  },  
  {  
    title: "Commitment to Sustainability",  
    meta: "Eco-friendly",  
    description: "We strive to make solar power accessible to all.",  
    icon: <FaLeaf className="w-4 h-4 text-green-500" />,  
    tags: ["Green Energy", "Sustainability"],  
    iconName: "FaLeaf",  
  },  
  {  
    title: "5 Years Free Annual Maintenance",  
    meta: "Hassle-Free",  
    description: "Enjoy peace of mind with our free maintenance plan.",  
    icon: <FaWrench className="w-4 h-4 text-red-500" />,  
    colSpan: 2,  
    iconName: "FaWrench",  
  },  
];  

export default function BentoGrid({ items = itemsSample }) {  
  return (  
    <div className="my-[50px] flex flex-col items-center justify-center p-6 relative">  
      {/* Glowing Background */}  
      {/* <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 to-transparent blur-3xl" />   */}
      <div className="text-center mb-12">  
        <h2 className="text-4xl font-bold text-customGreen mb-2">  
          Why Choose Us?  
        </h2>  
        <p className="text-lg text-gray-600 ">  
          Providing Solar Energy Solutions  
        </p>  
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl w-full">  
        {items.map((item, index) => {  
          const { bg, border } = iconStyles[item.iconName]; // Get styles based on the icon  
          return (  
            <div  
              key={index}  
              className={`group relative p-4 rounded-xl overflow-hidden transition-all duration-300  
                          border ${border} bg-white hover:shadow-lg hover:-translate-y-1 will-change-transform shadow-lg  
                          ${item.colSpan === 2 ? "md:col-span-2" : ""}  
                          ${bg} border-2   
                      `}  
            >  
              <div className="relative flex flex-col space-y-3">  
                <div className="flex items-center justify-between">  
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center ${bg} transition-all duration-300">  
                    {item.icon}  
                  </div>  
                </div>  

                <div className="space-y-2">  
                  <h3 className="font-medium text-gray-900 tracking-tight text-base">  
                    {item.title}  
                    <span className="ml-2 text-xs text-gray-500 font-normal">  
                      {item.meta}  
                    </span>  
                  </h3>  
                  <p className="text-sm text-gray-600 leading-snug font-[425]">  
                    {item.description}  
                  </p>  
                </div>  

                <div className="flex items-center justify-between mt-2">  
                  <div className="flex items-center space-x-2 text-xs text-gray-500">  
                    {item.tags?.map((tag, i) => (  
                      <span  
                        key={i}  
                        className="px-2 py-1 rounded-md bg-black/5 backdrop-blur-xs transition-all duration-200 hover:bg-black/10 "  
                      >  
                        #{tag}  
                      </span>  
                    ))}  
                  </div>  
                </div>  
              </div>  
            </div>  
          );  
        })}  
      </div>  
    </div>  
  );  
}