
import React from 'react';
import { Question, Option } from '../types';
import { Circle, X, Scroll } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
  showFeedback: boolean;
  onNext: () => void;
  isLast: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  showFeedback,
  onNext,
  isLast,
}) => {
  return (
    <div className="bg-washi relative w-full max-w-xl mx-auto mt-2 p-4 border-4 border-double border-gray-800 shadow-[4px_4px_0_0_rgba(20,20,20,0.8)] animate-fade-in mb-16">
      
      {/* Badge - Compact */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 border border-green-600 shadow-md">
        <span className="font-bold tracking-widest text-xs md:text-sm">{question.category}</span>
      </div>

      <div className="mt-4 mb-4 text-center">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug font-serif">
          {question.text}
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-700 to-transparent mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {question.options.map((option: Option, index) => {
          let buttonStyle = "relative w-full text-left p-3 border transition-all duration-200 font-bold text-sm md:text-base font-maru group ";
          
          if (showFeedback) {
            if (option.id === question.correctOptionId) {
              buttonStyle += "bg-green-50 border-green-600 text-green-900";
            } else if (option.id === selectedOption) {
              buttonStyle += "bg-red-50 border-red-600 text-red-900";
            } else {
              buttonStyle += "bg-gray-100 border-gray-300 text-gray-400 opacity-60";
            }
          } else {
            if (selectedOption === option.id) {
              buttonStyle += "bg-gray-800 border-black text-white shadow-inner";
            } else {
              buttonStyle += "bg-white border-gray-400 hover:border-black active:bg-stone-100 text-gray-800 hover:shadow-sm";
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => !showFeedback && onSelectOption(option.id)}
              disabled={showFeedback}
              className={buttonStyle}
            >
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 border border-current rounded-full mr-3 text-xs font-serif shrink-0">
                  {['ア', 'イ', 'ウ', 'エ'][index] || index + 1}
                </span>
                <span className="flex-1 leading-tight">{option.text}</span>
                {showFeedback && option.id === question.correctOptionId && (
                  <Circle className="w-5 h-5 text-green-600 absolute right-2" strokeWidth={3} />
                )}
                {showFeedback && selectedOption === option.id && option.id !== question.correctOptionId && (
                  <X className="w-5 h-5 text-red-600 absolute right-2" strokeWidth={3} />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="bg-stone-100 border-l-4 border-green-700 p-4 mb-4 shadow-inner">
          <div className="flex items-start gap-2">
            <Scroll className="w-4 h-4 text-green-800 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-sm text-green-900 mb-1 border-b border-green-200 inline-block">秘伝の解説</h3>
              <p className="text-gray-800 leading-snug font-maru text-sm">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center pb-2">
        {showFeedback ? (
          <button
            onClick={onNext}
            className="bg-black active:bg-gray-800 text-white font-bold text-base py-3 px-8 border border-green-600 shadow-[0_0_8px_rgba(46,125,50,0.6)] transition-all w-full md:w-auto text-center"
          >
            {isLast ? '試練の結果へ' : '次の試練へ'}
          </button>
        ) : (
          <div className="text-gray-400 text-sm font-bold border-b border-transparent pb-1">
             正解を選んで進め
          </div>
        )}
      </div>
    </div>
  );
};
