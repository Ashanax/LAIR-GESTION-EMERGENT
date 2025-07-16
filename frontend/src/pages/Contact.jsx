import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../data/mockData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsentChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      consent: checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentement requis",
        description: "Veuillez accepter la politique de confidentialité pour continuer.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FCFCFC] pt-20">
      {/* Title Section */}
      <section className="py-16 bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E5A5C] mb-6">
            Contact & Prise de rendez-vous
          </h1>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto">
            Vous avez une question ou souhaitez prendre rendez-vous ? Contactez-nous directement ou planifiez un entretien en ligne.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-[#2E5A5C]">Contactez-nous</CardTitle>
                <p className="text-[#333333]">
                  Remplissez ce formulaire et nous vous recontacterons rapidement pour discuter de vos besoins.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-[#333333] font-medium">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-[#2E5A5C] focus:ring-[#2E5A5C]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[#333333] font-medium">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-300 focus:border-[#2E5A5C] focus:ring-[#2E5A5C]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#333333] font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-[#2E5A5C] focus:ring-[#2E5A5C]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#333333] font-medium">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-[#2E5A5C] focus:ring-[#2E5A5C]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#333333] font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-300 focus:border-[#2E5A5C] focus:ring-[#2E5A5C]"
                      placeholder="Décrivez votre demande ou vos objectifs patrimoniaux..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-[#333333] leading-relaxed">
                      J'accepte que mes données personnelles soient utilisées pour me recontacter concernant ma demande. 
                      Consultez notre <a href="/politique-confidentialite" className="text-[#2E5A5C] hover:underline">politique de confidentialité</a> 
                      pour plus d'informations. *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2E5A5C] hover:bg-[#1e3d3f] text-white py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Appointment Booking */}
            <Card className="shadow-lg border-gray-200">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-[#2E5A5C]">Planifiez votre rendez-vous en ligne</CardTitle>
                <p className="text-[#333333]">
                  Réservez directement un créneau pour un entretien personnalisé de 30 minutes.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#2E5A5C] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#333333]">Adresse</h4>
                        <p className="text-[#333333] text-sm">{mockData.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#2E5A5C] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#333333]">Téléphone</h4>
                        <a href={`tel:${mockData.contact.phone}`} className="text-[#333333] text-sm hover:text-[#2E5A5C] transition-colors">
                          {mockData.contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-[#2E5A5C] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#333333]">Email</h4>
                        <a href={`mailto:${mockData.contact.email}`} className="text-[#333333] text-sm hover:text-[#2E5A5C] transition-colors">
                          {mockData.contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#2E5A5C] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#333333]">Durée</h4>
                        <p className="text-[#333333] text-sm">30 minutes</p>
                      </div>
                    </div>
                  </div>

                  {/* Calendly Integration */}
                  <div className="border-t pt-6">
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-[#2E5A5C] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#333333] mb-2">Calendrier de rendez-vous</h3>
                        <p className="text-sm text-gray-600">
                          Cliquez sur le bouton ci-dessous pour accéder à notre calendrier en ligne et choisir le créneau qui vous convient.
                        </p>
                      </div>
                      <Button
                        onClick={() => window.open(mockData.contact.calendlyUrl, '_blank')}
                        className="bg-[#2E5A5C] hover:bg-[#1e3d3f] text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Ouvrir le calendrier
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;