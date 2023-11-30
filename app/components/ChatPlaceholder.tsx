import React from 'react';
import ChatSuggestionsCard from './ChatSuggestionsCard';
import { TbBook, TbHealthRecognition } from 'react-icons/tb';

const suggestions = [
  {
    title: 'O que é o câncer de próstata?',
    description:
      'O câncer de próstata é o tumor mais comum em homens com mais de 50 anos.',
    icon: TbBook,
  },
  {
    title: 'Como é feito o tratamento?',
    description:
      'O tratamento depende do estágio do câncer, da idade do paciente e de outras doenças associadas.',
    icon: TbBook,
  },
  {
    title: 'Como é feito o diagnóstico?',
    description:
      'O diagnóstico é feito através do exame de toque retal e do PSA (Antígeno Prostático Específico).',
    icon: TbHealthRecognition,
  }
];

const ChatPlaceholder = () => {
  return (
    <div className="mt-[20vh] mx-auto max-w-3xl">
      <h3 className="text-2xl font-bold text-center my-2 text-blue-500">
        Blue Buddy
      </h3>
      <p className="text-center text-space-gray-light-500">
        O Blue Buddy é uma ferramenta interativa e amigável, pronta para
        fornecer suporte e orientação sobre questões relacionadas à saúde
        masculina e à conscientização sobre o câncer de próstata.
      </p>
      <div className="flex gap-4 px-6 mt-4 mx-auto text-center">
        {suggestions.map((suggestion, index) => (
          <ChatSuggestionsCard
            key={index}
            title={suggestion.title}
            description={suggestion.description}
            icon={suggestion.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatPlaceholder;
