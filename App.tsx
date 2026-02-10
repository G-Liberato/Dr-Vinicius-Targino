
import React, { useState, useCallback } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  Users, 
  Calendar, 
  X,
  ChevronRight,
  MapPin
} from 'lucide-react';

// --- Dados Fixos do Expert ---
const EXPERT = {
  name: "Dr. Vinícius Targino",
  profession: "Dentista Especialista em Odontologia Estética",
  city: "João Pessoa-PB",
  whatsapp: "https://wa.me/message/WZYSXICUXYP7K1",
  instagram: "https://www.instagram.com/drviniciustargino/",
};

const IMAGES = {
  hero: "https://i.imgur.com/OxbohYK.jpeg",
  about: "https://i.imgur.com/w6zNJsu.jpeg",
  results: [
    "https://i.imgur.com/nv3ZpmA.jpeg",
    "https://i.imgur.com/mvNoOXa.jpeg",
    "https://i.imgur.com/qOocBX2.jpeg",
    "https://i.imgur.com/jzUxA26.jpeg",
    "https://i.imgur.com/SBkpuRY.jpeg",
    "https://i.imgur.com/WW02jmU.jpeg",
    "https://i.imgur.com/WHaox79.jpeg",
    "https://i.imgur.com/QATTJWC.jpeg",
    "https://i.imgur.com/rw4vq6r.jpeg",
    "https://i.imgur.com/1Q4RM42.jpeg"
  ]
};

// --- Componentes Auxiliares ---

const WhatsAppButton: React.FC<{ text: string; className?: string; subtext?: string }> = ({ text, className = "", subtext }) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <a 
      href={EXPERT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 md:px-8 rounded-full shadow-2xl transition-all w-full text-center text-base md:text-lg active:scale-95"
    >
      <MessageCircle size={24} />
      {text}
    </a>
    {subtext && <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{subtext}</span>}
  </div>
);

const Lightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white hover:scale-110 transition-transform" onClick={onClose}>
        <X size={40} />
      </button>
      <img src={imageUrl} alt="Resultado Ampliado" className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10" />
    </div>
  );
};

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-end text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 p-6 pb-20 md:p-20 max-w-6xl mx-auto w-full">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold border border-white/20 mb-6 uppercase tracking-[0.3em]">
            Odontologia Estética em João Pessoa
          </div>
          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] mb-6">
            Eu sou {EXPERT.name}, <br/>
            <span className="italic font-light opacity-90">Transformando Sorrisos.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            Recupere sua autoestima com tratamentos personalizados e um olhar artístico focado na sua naturalidade.
          </p>
          
          <WhatsAppButton 
            text="Agendar minha primeira consulta gratuita" 
            subtext="Resposta rápida • Sem compromisso"
            className="w-full md:w-fit items-start"
          />
        </div>
      </section>

      {/* QUEM SOU EU */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative">
            <img 
              src={IMAGES.about} 
              alt="Dr. Vinícius Targino" 
              className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-2xl hidden lg:block">
              <p className="text-4xl font-bold mb-1">Especialista</p>
              <p className="text-xs uppercase tracking-widest opacity-60">Em João Pessoa - PB</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Excelência e Arte <br/> em cada detalhe.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Acredito que um sorriso bonito deve ser tão único quanto você. Minha missão é entregar muito mais do que estética: é devolver a sua vontade de sorrir com confiança.
              </p>
              <p>
                Aqui, você não é apenas mais um paciente. Cada tratamento é planejado por mim, unindo tecnologia de ponta e um atendimento humano e direto.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Lentes de Contato", "Reabilitação Oral", "Clareamento Premium", "Planejamento Digital 3D", "Atendimento VIP", "Foco em Naturalidade"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-800 font-semibold">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS (GALERIA) */}
      <section className="bg-zinc-50 py-20 px-6 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Resultados Reais</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Confira algumas transformações que mudaram a vida e a confiança dos meus pacientes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {IMAGES.results.map((url, idx) => (
              <div 
                key={idx} 
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-200 aspect-[3/4]"
                onClick={() => setSelectedImage(url)}
              >
                <img 
                  src={url} 
                  alt={`Caso clínico ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-[10px] text-gray-400 uppercase tracking-widest">
            Nota: Os resultados variam de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Star className="text-amber-500" />, title: "Avaliação Honestíssima", desc: "Apenas o que é necessário para o seu caso, com transparência total." },
            { icon: <ShieldCheck className="text-blue-600" />, title: "Resultado Real", desc: "Trabalho focado na sua satisfação e em resultados duradouros." },
            { icon: <Clock className="text-purple-600" />, title: "Seu Tempo Importa", desc: "Agenda otimizada para garantir que você seja atendido no horário." },
            { icon: <Users className="text-green-600" />, title: "Foco no Especialista", desc: "Você fala diretamente comigo em todas as etapas do tratamento." },
            { icon: <Calendar className="text-red-500" />, title: "Consulta Gratuita", desc: "Primeira avaliação sem custo para entendermos seus desejos." },
            { icon: <MapPin className="text-orange-500" />, title: "João Pessoa - PB", desc: "Localização estratégica e estrutura moderna para seu conforto." }
          ].map((card, idx) => (
            <div key={idx} className="p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">Como funciona a primeira consulta?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { step: "01", title: "WhatsApp", desc: "Você clica no botão e fala com minha equipe para agendar o melhor horário." },
              { step: "02", title: "Agendamento", desc: "Confirmamos sua presença e preparamos tudo para te receber em João Pessoa." },
              { step: "03", title: "Avaliação", desc: "Sentaremos para uma conversa sincera sobre seu sorriso. Sem custo e sem compromisso." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white/5 rounded-3xl border border-white/10">
                <span className="text-5xl font-serif italic text-white/10 absolute top-4 right-6">{item.step}</span>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 inline-block bg-white text-black font-bold px-8 py-2 rounded-full text-sm uppercase tracking-widest">
            Consulta 100% Gratuita
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight">
            Vamos começar <br/> seu novo sorriso?
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Não adie a confiança que você merece ter. Clique abaixo e fale diretamente comigo via WhatsApp.
          </p>
          <div className="pt-8">
            <WhatsAppButton 
              text="Agendar com o Dr. Vinícius agora" 
              className="max-w-md mx-auto" 
              subtext="Atendimento Personalizado em João Pessoa"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 bg-zinc-50 border-t border-zinc-100 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h4 className="text-2xl font-bold font-serif">{EXPERT.name}</h4>
          <p className="text-sm text-gray-400 uppercase tracking-widest">{EXPERT.profession} | {EXPERT.city}</p>
          <div className="flex justify-center gap-4">
            <a href={EXPERT.instagram} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-pink-600 hover:scale-110 transition-transform shadow-sm">
              <Instagram size={24} />
            </a>
            <a href={EXPERT.whatsapp} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-green-600 hover:scale-110 transition-transform shadow-sm">
              <MessageCircle size={24} />
            </a>
          </div>
          <p className="text-[10px] text-gray-400 mt-10 italic">© {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
      
      {/* FLOATING BUTTON (MOBILE) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href={EXPERT.whatsapp}
          target="_blank"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse active:scale-90 transition-transform"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
};

export default App;
