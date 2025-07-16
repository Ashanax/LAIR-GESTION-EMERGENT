import React from 'react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Award, Shield, Users } from 'lucide-react';
import { mockData } from '../data/mockData';

const LeCabinet = () => {
  const habilitationIcons = [Award, Shield, Users];

  return (
    <main className="min-h-screen bg-[#FCFCFC] pt-20">
      {/* Title Section */}
      <section className="py-16 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E5A5C] mb-6">
            Un cabinet à taille humaine, une expertise à votre service
          </h1>
        </div>
      </section>

      {/* Advisor Presentation */}
      <section className="py-16 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="text-center lg:text-left">
              <div className="w-96 h-96 bg-gray-300 rounded-lg mx-auto lg:mx-0 flex items-center justify-center shadow-lg">
                <span className="text-8xl text-gray-600">👨‍💼</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-[#2E5A5C] mb-2">{mockData.advisor.name}</h2>
                <p className="text-xl text-[#333333] font-medium">{mockData.advisor.title}</p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[#333333] leading-relaxed text-lg">
                  {mockData.advisor.fullBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilitations Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E5A5C] mb-6">Habilitations & Certifications</h2>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Des certifications reconnues pour un accompagnement professionnel et conforme aux réglementations en vigueur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.habilitations.map((habilitation, index) => {
              const Icon = habilitationIcons[index % habilitationIcons.length];
              return (
                <Card key={habilitation.id} className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#2E5A5C] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2E5A5C] mb-2">{habilitation.title}</h3>
                    <h4 className="text-lg font-semibold text-[#333333] mb-4">{habilitation.subtitle}</h4>
                    <p className="text-[#333333] leading-relaxed">{habilitation.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E5A5C] mb-6">Nos Valeurs</h2>
            <p className="text-lg text-[#333333]">
              Des principes fondamentaux qui guident notre approche et notre relation avec nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.valeurs.map((valeur, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-[#2E5A5C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E5A5C]">{valeur}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2E5A5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à faire connaissance ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Discutons de vos objectifs patrimoniaux lors d'un entretien personnalisé.
          </p>
          <button 
            className="bg-white text-[#2E5A5C] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => window.open(mockData.contact.calendlyUrl, '_blank')}
          >
            Planifier un entretien
          </button>
        </div>
      </section>
    </main>
  );
};

export default LeCabinet;