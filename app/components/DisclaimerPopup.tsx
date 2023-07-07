import React, { FC } from "react";

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerPopup: FC<DisclaimerPopupProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative bg-white p-6 rounded-lg shadow-md max-w-3xl w-full mx-4 overflow-auto">
        <h2 className="text-xl font-bold mb-2 text-center">
          Aviso Legal do Buddy Bot
        </h2>
        <div className="overflow-auto max-h-[70vh] pr-4">
          <p className="mb-4 text-justify">
            O Buddy Bot foi desenvolvido para fornecer uma interface interativa
            que responde e fornece suporte em situações onde o usuário pode
            necessitar de companhia para conversar. O Buddy Bot pode oferecer
            respostas automáticas com a intenção de ajudar a proporcionar algum
            conforto ou alívio temporário.
          </p>
          <p className="mb-4 font-bold">Por favor, esteja ciente de que:</p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li>
              O Buddy Bot não é um profissional de saúde mental licenciado, nem
              um conselheiro, psicólogo ou psiquiatra. Ele não fornece conselhos
              médicos, diagnósticos ou tratamentos.
            </li>
            <li>
              As respostas fornecidas pelo Buddy Bot não devem ser usadas como
              um substituto para o aconselhamento profissional. Se você está
              passando por uma crise ou se você ou outra pessoa estiver em
              perigo, entre em contato com um profissional de saúde mental, uma
              autoridade competente, ou ligue para o Centro de Valorização da
              Vida (CVV) no número 188, que fornece apoio emocional 24/7, ou
              acesse o site{" "}
              <a href="https://www.cvv.org.br/" target="_blank" className="font-bold underline">
                {" "}
                https://www.cvv.org.br/
              </a>
              .
            </li>
            <li>
              O Buddy Bot não tem a capacidade de interpretar situações de
              crise, emergências médicas ou de saúde mental, ou de fornecer
              ajuda em tempo real.
            </li>
            <li>
              Todas as interações com o Buddy Bot são baseadas em inteligência
              artificial, o que significa que as respostas são geradas
              automaticamente e não são monitoradas por seres humanos em tempo
              real.
            </li>
            <li>
              Respeitamos sua privacidade. Todas as conversas com o Buddy Bot
              são anônimas e não coletamos, armazenamos ou compartilhamos
              quaisquer dados pessoais do usuário. Nosso objetivo é proporcionar
              um espaço seguro para você se expressar.
            </li>
          </ul>
          <p className="mb-4 text-justify">
            Ao utilizar o Buddy Bot, você concorda com este Aviso Legal e
            compreende que qualquer ação ou decisão tomada com base nas
            respostas do Buddy Bot é de sua responsabilidade total.
          </p>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Aceito
          </button>
        </div>
      </div>
    </div>
  );
};
