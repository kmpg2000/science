
import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface ResultSummaryProps {
  score: number;
  total: number;
  onRetry: () => void;
  onReviewWrong: () => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({ score, total, onRetry }) => {
  const percentage = Math.round((score / total) * 100);
  
  let rank = "";
  let message = "";
  let colorClass = "";
  
  if (percentage === 100) {
    rank = "柱";
    message = "免許皆伝！";
    colorClass = "text-yellow-600 border-yellow-600";
  } else if (percentage >= 80) {
    rank = "甲";
    message = "あと一歩！";
    colorClass = "text-green-700 border-green-700";
  } else if (percentage >= 50) {
    rank = "庚";
    message = "鍛錬あるのみ";
    colorClass = "text-blue-700 border-blue-700";
  } else {
    rank = "癸";
    message = "修行開始！";
    colorClass = "text-gray-700 border-gray-700";
  }

  return (
    <div className="bg-washi relative max-w-sm w-full mx-auto text-center border-4 border-double border-gray-900 p-6 shadow-xl mt-4">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 via-black to-green-800"></div>

      <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-widest">
        最終選別 結果
      </h2>

      <div className="py-4 relative">
        <div className={`inline-flex border-4 ${colorClass} rounded-full mb-3 w-32 h-32 flex-col items-center justify-center bg-white shadow-md`}>
           <div className="text-xs font-bold text-gray-500 mb-1">階級</div>
           <div className="text-4xl font-black mb-1">{rank}</div>
        </div>
        
        <p className="text-lg font-bold text-gray-800 mt-2 font-serif">
          {message}
        </p>
      </div>

      <div className="bg-stone-100 border border-gray-400 p-4 mb-6 w-full">
        <div className="flex justify-between items-end border-b border-gray-300 pb-1">
          <span className="text-gray-600 font-bold text-sm">得点</span>
          <span className="text-3xl font-black text-gray-900">
            {score}<span className="text-sm text-gray-500 ml-1">/ {total}問</span>
          </span>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="w-full bg-green-800 hover:bg-green-900 text-white font-bold text-lg py-3 border-2 border-black shadow-md transition-colors flex items-center justify-center gap-2"
      >
        <RefreshCcw className="w-5 h-5" />
        再度、挑戦する
      </button>
    </div>
  );
};
