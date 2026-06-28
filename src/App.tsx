/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ChatGPTImage from './assets/ChatGPT_Image_Jun_25__2026__10_33_08_PM-removebg-preview.png';
import GeminiImage from './assets/Gemini_Generated_Image_a4ew3wa4ew3wa4ew-removebg-preview.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header Section with ChatGPT */}
      <header className="bg-white shadow-md py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                ChatGPT Assistant
              </h1>
              <p className="text-lg text-gray-600">
                Powered by advanced AI for intelligent appliance repair guidance
              </p>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={ChatGPTImage} 
                alt="ChatGPT" 
                className="h-32 w-32 object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Gemini Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-shrink-0">
              <img 
                src={GeminiImage} 
                alt="Gemini" 
                className="h-40 w-40 object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Gemini AI Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Cutting-edge AI technology for comprehensive home appliance repair assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
