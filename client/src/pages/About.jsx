import { FaLightbulb, FaTargetAlt, FaUsers, FaAward, FaGraduationCap, FaRocket } from 'react-icons/fa'
import Footer from '../components/Footer'

export default function About() {
  const values = [
    {
      icon: <FaLightbulb className="text-3xl text-blue-400" />,
      title: 'Innovation',
      description: 'We constantly innovate to bring cutting-edge solutions to our users'
    },
    {
      icon: <FaTargetAlt className="text-3xl text-purple-400" />,
      title: 'Goal Oriented',
      description: 'Every solution is designed with clear objectives and measurable results'
    },
    {
      icon: <FaUsers className="text-3xl text-pink-400" />,
      title: 'Community',
      description: 'We believe in building a strong community of developers and creators'
    },
    {
      icon: <FaAward className="text-3xl text-green-400" />,
      title: 'Quality',
      description: 'Excellence is at the core of everything we do'
    }
  ]

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      icon: <FaGraduationCap className="text-2xl text-blue-400" />
    },
    {
      name: 'Jane Smith',
      role: 'CTO & Lead Developer',
      icon: <FaRocket className="text-2xl text-purple-400" />
    },
    {
      name: 'Mike Johnson',
      role: 'Product Manager',
      icon: <FaTargetAlt className="text-2xl text-pink-400" />
    },
    {
      name: 'Sarah Williams',
      role: 'Design Lead',
      icon: <FaLightbulb className="text-2xl text-green-400" />
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              We're on a mission to empower developers and creators with tools that make building amazing applications effortless and enjoyable.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded in 2020, our platform was born from a simple idea: make development easier and more accessible for everyone. What started as a small team of passionate developers has grown into a thriving community of innovators.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We believe that the right tools and community support can transform the way people build software. That's why we've dedicated ourselves to creating an ecosystem where developers can collaborate, learn, and grow together.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, our platform serves thousands of developers worldwide, helping them bring their ideas to life and build incredible applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <FaRocket className="text-6xl mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-bold">Building the Future</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-b from-gray-50 to-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <p className="text-lg opacity-90">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5,000+</div>
                <p className="text-lg opacity-90">Projects Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">150+</div>
                <p className="text-lg opacity-90">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
