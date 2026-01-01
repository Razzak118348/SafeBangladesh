import React from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { MotionDiv, MotionH2, MotionP } from "../../utils/MotionElements";

const Contact = () => {
  return (
    <section className="py-8 lg:py-16">
      <MotionDiv className="max-w-7xl mx-auto px-4">

        {/* Page Header */}
        <MotionDiv className="text-center mb-14">
          <MotionH2 className=" font-bold text-green-600 mb-4" text="Contact Us">

          </MotionH2>
          <MotionP className="text-gray-600 dark:text-white max-w-2xl mx-auto">
            Simple Action For the Environment (SAFE) – working for people,
            safety, and sustainability.
          </MotionP>
        </MotionDiv>

        {/* Organization Info */}
        <MotionDiv className="bg-white p-4 rounded-2xl shadow-lg MotionP-8 mb-12">
          <MotionH2 className=" text-green-800 mb-4 text-start" text="Simple Action For the Environment (SAFE)">

          </MotionH2>
          <MotionP className="text-gray-700 mb-2">
            Registered under: <span className="font-medium">Nirapod Bangladesh Songstha (SBO)</span>
          </MotionP>
          <MotionP className="text-gray-700 mb-4">
            <span className="font-medium">(Safe Bangladesh Organisation)</span>
          </MotionP>

          <MotionDiv className="flex items-start gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-green-700 mt-1" />
            <MotionP>
              Sundarban Village, PO: Ramdubihat <br />
              Upazila: Sadar, Dinajpur
            </MotionP>
          </MotionDiv>
        </MotionDiv>

        {/* Contact Grid */}
        <MotionDiv className="grid md:grid-cols-2 gap-10">

          {/* Bangladesh Office */}
          <MotionDiv className="bg-white rounded-2xl p-4 shadow-md MotionP-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              Bangladesh Office
            </h3>

            <MotionDiv className="space-y-4 text-gray-700">
              <MotionDiv className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-700" />
                <span>+88 (0)1730 720328</span>
              </MotionDiv>

              <MotionDiv className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-700" />
                <span>safebangladeshorg@gmail.com</span>
              </MotionDiv>
            </MotionDiv>

            <MotionDiv className="mt-6 border-t pt-4 text-sm text-gray-600">
              <MotionP>Social Welfare Registration No: <strong>DINAJ/2133/10</strong></MotionP>
              <MotionP>NGO Registration No: <strong>3067</strong></MotionP>
            </MotionDiv>
          </MotionDiv>

          {/* Key Contacts */}
          <MotionDiv className="bg-white p-4 rounded-2xl shadow-md MotionP-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              Key Contacts
            </h3>

            <MotionDiv className="space-y-6">

              {/* Azit Roy */}
              <MotionDiv>
                <MotionDiv className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-800">Azit Roy</h4>
                </MotionDiv>
                <MotionP className="text-sm text-gray-700">📞 +88 (0)1726 007343</MotionP>
                <MotionP className="text-sm text-gray-700">✉️ azit_sorkar@yahoo.com</MotionP>
              </MotionDiv>

              {/* Apu Roy */}
              <MotionDiv>
                <MotionDiv className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-800">Apu Roy</h4>
                </MotionDiv>
                <MotionP className="text-sm text-gray-700">📞 +88 (0)1750 960823</MotionP>
                <MotionP className="text-sm text-gray-700">✉️ apu.sundorbon@gmail.com</MotionP>
              </MotionDiv>

            </MotionDiv>
          </MotionDiv>
        </MotionDiv>

        {/* UK Contact */}
        <MotionDiv className="bg-white p-4 rounded-2xl shadow-md MotionP-8 mt-12">
          <h3 className="text-xl font-semibold text-green-800 mb-6">
            United Kingdom Contact
          </h3>

          <MotionDiv className="space-y-2 text-gray-700">
            <MotionP className="font-semibold">Robert Hodgson</MotionP>
            <MotionP>📞 +44 (0)1884 821239</MotionP>
            <MotionP>✉️ R.L.MotionP.Hodgson@exeter.ac.uk</MotionP>
          </MotionDiv>
        </MotionDiv>

      </MotionDiv>
    </section>
  );
};

export default Contact;
