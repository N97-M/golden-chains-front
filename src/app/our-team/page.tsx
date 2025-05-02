'use client';
import Link from 'next/link';
import Image from 'next/image';

// Define types for team members
interface TeamMember {
  name: string;
  role: string;
  description?: string;
  image: string;
  email: string;
  whatsapp?: string;
}

// Team data
const manager: TeamMember = {
  name: "Hafiz Khairi",
  role: "Founder (CEO & General Manager)",
  image: "/team/hafiz-khairi.jpg",
  email: "hafiz@goldenchains.ae"
};

const employees: TeamMember[] = [
  {
    name: "Mohamed Nour",
    role: "Relationship & Operation Manager",
    description: "Experienced manager with expertise in customer relations and operations.",
    image: "/team/mohamed-nour.jpg",
    email: "mohamednour@goldenchainstrd.com",
    whatsapp: "971545032595",
  },
  {
    name: "Musab Nour",
    role: "Warehouse & Marketing Manager",
    image: "/team/musab-nour.jpg",
    whatsapp: "971547281970",
    email: "info@goldenchainstrd.com"
  },
  {
    name: "Mohamed Tarig",
    role: "Sales Manager",
    image: "/team/mohamed-tarig.jpg",
    whatsapp: "971556835949",
    email: "tarig@goldenchainstrd.com"
  },
  {
    name: "Faisal Kv",
    role: "Sales Executive",
    image: "/team/faisal-kv.jpg",
    whatsapp: "971569036566",
    email: "faisal@goldenchainstrd.com"
  },
  {
    name: "Ivy Goco",
    role: "Administration Manager",
    image: "/team/ivy-goco.jpg",
    whatsapp: "971522400594",
    email: "ivy@goldenchainstrd.com"
  }
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <nav className="flex items-center text-gray-700">
          <Link 
            href="/" 
            className="text-base text-black font-medium relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="mx-2 text-gray-400 text-lg">›</span>
          <span className="text-base text-gray-500">
            Our Team
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-16 text-black">Our Team</h1>

        {/* Manager Section */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-2xl bg-[#1a1f2e] rounded-lg overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <Image
                    src={manager.image}
                    alt={manager.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 192px, 192px"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white mb-2">{manager.name}</h2>
                  <h3 className="text-xl text-gray-300 mb-4">{manager.role}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {employees.map((employee) => (
            <div 
              key={employee.name}
              className="bg-[#1a1f2e] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative w-full pt-[125%]">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  priority
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-1 text-center">{employee.name}</h3>
                <h4 className="text-sm text-gray-300 mb-4 text-center">{employee.role}</h4>
                <div className="mt-auto space-y-2">
                  {employee.whatsapp && (
                    <Link
                      href={`https://wa.me/${employee.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#722F37] text-white text-center py-2 rounded-md hover:bg-[#8B3746] transition-colors"
                    >
                      Contact Me on WApp
                    </Link>
                  )}
                  <Link
                    href={`mailto:${employee.email}`}
                    className="block w-full bg-[#1a1f2e] text-white text-center py-2 rounded-md border border-white hover:bg-white hover:text-[#1a1f2e] transition-colors"
                  >
                    Email Me
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}