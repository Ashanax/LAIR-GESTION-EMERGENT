import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { TrendingUp, Shield, Users, Target, PiggyBank, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mockData';

const Home = () => {
  const serviceIcons = [TrendingUp, Shield, PiggyBank, Users, Target];

  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1519662978799-2f05096d3636")'
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Construisons ensemble votre patrimoine de demain
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              className="bg-[#2E5A5C] hover:bg-[#1e3d3f] text-white px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('presentation').scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir notre approche
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#2E5A5C] px-8 py-4 rounded-lg text-lg transition-all duration-200"
              onClick={() => window.open(mockData.contact.calendlyUrl, '_blank')}
            >
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      {/* Presentation & Services Section */}
      <section id="presentation" className="py-20 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E5A5C] mb-6">
              Un accompagnement sur mesure pour vos projets de vie
            </h2>
            <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
              Chez LAIR Gestion & Patrimoine, nous croyons qu'une stratégie patrimoniale réussie repose sur une vision claire et un accompagnement sur mesure. 
              Que vous soyez salarié, profession libérale, chef d'entreprise ou retraité, notre mission est de vous apporter les clés pour naviguer dans un 
              environnement complexe et d'atteindre vos objectifs de vie. Nous transformons vos projets en une stratégie concrète et pérenne.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-200 border-gray-100">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#2E5A5C] rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#2E5A5C]">{service.title}</h3>
                    </div>
                    <p className="text-[#333333] leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Piliers Section */}
      <section className="py-20 bg-[#2E5A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.piliers.map((pilier) => (
              <div key={pilier.id} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{pilier.title}</h3>
                <p className="text-white opacity-90 leading-relaxed">{pilier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-80 h-80 bg-gray-300 rounded-full mx-auto lg:mx-0 flex items-center justify-center">
                <span className="text-6xl text-gray-600">👨‍💼</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2E5A5C] mb-4">{mockData.advisor.title}</h3>
              <h4 className="text-2xl font-semibold text-[#333333] mb-6">{mockData.advisor.name}</h4>
              <p className="text-[#333333] text-lg leading-relaxed mb-8">{mockData.advisor.shortBio}</p>
              <Link to="/le-cabinet">
                <Button className="bg-[#2E5A5C] hover:bg-[#1e3d3f] text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Découvrir mon parcours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#2E5A5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à discuter de votre avenir ?
          </h2>
          <Button 
            className="bg-white text-[#2E5A5C] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => window.open(mockData.contact.calendlyUrl, '_blank')}
          >
            Planifier un entretien
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;