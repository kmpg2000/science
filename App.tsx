
import React, { useState, useEffect } from 'react';
import { QuizCard } from './components/QuizCard';
import { ResultSummary } from './components/ResultSummary';
import { TeacherChat } from './components/TeacherChat';
import { QUIZ_DATA as DEFAULT_QUIZ_DATA } from './constants';
import { generateQuizFromMedia } from './services/geminiService';
import { Question } from './types';
import { MessageCircle, Scroll, Upload, Sword, Sparkles, Loader2, Home, Wind, Users, AlertTriangle } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playDrum } from './utils/sound';

type AppState = 'home' | 'loading' | 'quiz' | 'result';

const ENCOURAGEMENT_MESSAGES = [
  "全集中！その調子だ！",
  "素晴らしい集中力だ。少し深呼吸しよう。",
  "10問突破！君なら柱になれる！",
  "心を燃やせ！次の試練も乗り越えられる！",
  "限界を超えろ！君の成長はここからだ！",
  "いいぞ！知識が血となり肉となっている！"
];

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('home');
  const [quizData, setQuizData] = useState<Question[]>(DEFAULT_QUIZ_DATA);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [visitorCount, setVisitorCount] = useState<string>("12,854");
  
  // Encouragement Modal State
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [currentEncouragementMsg, setCurrentEncouragementMsg] = useState("");

  // Exit Confirmation Modal State
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  // Simulated visitor counter effect
  useEffect(() => {
    // Generate a number based on current time to simulate a growing counter
    const base = 12000;
    const timeFactor = Math.floor(Date.now() / 600000); // Changes every 10 mins approx
    const randomOffset = Math.floor(Math.random() * 50);
    setVisitorCount((base + timeFactor + randomOffset).toLocaleString());
  }, []);

  // Helper to play sound safely without blocking execution
  const safePlayClick = () => {
    try {
      playClick();
    } catch (e) {
      console.error("Audio playback failed", e);
    }
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
    setShowFeedback(true);
    if (optionId === currentQuestion.correctOptionId) {
      setScore(prev => prev + 1);
      try { playCorrect(); } catch (e) {}
    } else {
      try { playIncorrect(); } catch (e) {}
    }
  };

  const handleNext = () => {
    safePlayClick();
    const nextIndex = currentQuestionIndex + 1;

    // Check if we finished the quiz
    if (nextIndex >= quizData.length) {
      setAppState('result');
      try { playDrum(); } catch (e) {}
      return;
    }

    // Check for encouragement (every 10 questions)
    if (nextIndex > 0 && nextIndex % 10 === 0) {
      const msg = ENCOURAGEMENT_MESSAGES[Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length)];
      setCurrentEncouragementMsg(msg);
      setShowEncouragement(true);
      // Don't increment index yet; wait for user to close modal
    } else {
      proceedToNextQuestion();
    }
  };

  const proceedToNextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleCloseEncouragement = () => {
    safePlayClick();
    setShowEncouragement(false);
    proceedToNextQuestion();
  };

  // State Reset Logic
  const resetToHome = () => {
    setAppState('home');
    setQuizData(DEFAULT_QUIZ_DATA); // Clear generated data
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setUploadError(null);
    setShowEncouragement(false);
    setShowExitConfirmation(false);
    window.scrollTo(0, 0);
  };

  const handleRetry = () => {
    safePlayClick();
    resetToHome();
  };

  // Logic for the Logo Click & Return to Home Button
  const handleLogoClick = () => {
    safePlayClick();
    if (appState === 'home') return;
    
    // If user is currently taking a quiz, use custom modal to confirm
    if (appState === 'quiz') {
      setShowExitConfirmation(true);
    } else {
      // For results or loading screens, go back immediately without confirmation
      resetToHome();
    }
  };

  const handleConfirmExit = () => {
    safePlayClick();
    resetToHome();
  };

  const handleCancelExit = () => {
    safePlayClick();
    setShowExitConfirmation(false);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    safePlayClick();
    const file = event.target.files?.[0];
    if (!file) return;

    setAppState('loading');
    setUploadError(null);

    try {
      const questions = await generateQuizFromMedia(file);
      if (questions && questions.length > 0) {
        setQuizData(questions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption(null);
        setShowFeedback(false);
        setAppState('quiz');
        try { playDrum(); } catch (e) {}
      } else {
        throw new Error("問題が生成できませんでした");
      }
    } catch (err) {
      console.error(err);
      setUploadError("問題の生成に失敗しました。別のファイルを試してください。");
      setAppState('home');
    }
  };

  const startDefaultQuiz = () => {
    try { playDrum(); } catch (e) {}
    setQuizData(DEFAULT_QUIZ_DATA);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setAppState('quiz');
  };

  // --- Screens ---

  const renderExitConfirmation = () => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-washi p-6 border-4 border-double border-red-800 max-w-sm w-full text-center relative shadow-2xl">
        <AlertTriangle className="w-12 h-12 text-red-700 mx-auto mb-4" />
        
        <h2 className="text-xl font-bold text-gray-900 mb-2 font-serif">
          試練を中断しますか？
        </h2>
        
        <p className="text-sm font-bold text-gray-700 mb-6 font-maru leading-relaxed">
          トップ画面へ戻ると、<br/>現在の進捗は失われます。
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={handleCancelExit}
            className="flex-1 bg-white text-gray-800 py-3 font-bold border-2 border-gray-400 hover:bg-gray-100 transition-colors shadow-sm font-maru"
          >
            続ける
          </button>
          <button
            onClick={handleConfirmExit}
            className="flex-1 bg-red-800 text-white py-3 font-bold border-2 border-black hover:bg-red-900 transition-colors shadow-md font-maru"
          >
            戻る
          </button>
        </div>
      </div>
    </div>
  );

  const renderEncouragement = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-washi p-8 border-4 border-double border-green-800 max-w-md w-full text-center relative shadow-[0_0_20px_rgba(46,125,50,0.8)]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
        <div className="absolute top-2 left-2 text-green-800 opacity-20"><Wind className="w-8 h-8" /></div>
        <div className="absolute bottom-2 right-2 text-green-800 opacity-20"><Wind className="w-8 h-8" /></div>
        
        <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4 animate-spin-slow" />
        
        <h2 className="text-2xl font-black text-gray-900 mb-2 font-serif tracking-widest">
          休息の刻
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
        
        <p className="text-xl font-bold text-green-800 mb-8 font-maru leading-relaxed">
          {currentEncouragementMsg}
        </p>
        
        <button
          onClick={handleCloseEncouragement}
          className="bg-black text-white px-8 py-3 font-bold border-2 border-green-600 hover:bg-gray-900 transition-colors w-full shadow-lg"
        >
          次の試練へ進む
        </button>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 animate-fade-in relative z-10 w-full">
      
      <div className="bg-white/95 p-6 border-4 border-black shadow-[0_6px_0_0_rgba(0,0,0,1)] max-w-md w-full relative mx-4">
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-green-700"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-green-700"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-green-700"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-green-700"></div>

        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-widest drop-shadow-sm leading-tight">
          理科<br/><span className="text-green-800">全集中</span>の<span className="text-red-800">試練</span>
        </h1>
        <p className="text-sm md:text-base text-gray-700 font-bold font-maru mb-6">
          〜 知識を研ぎ澄ませ 〜
        </p>

        {/* Access Counter (Simulated) */}
        <div className="mb-6 flex flex-col items-center">
           <div className="bg-amber-900 border-2 border-amber-950 px-4 py-1 rounded-sm shadow-md flex items-center gap-2">
             <div className="bg-amber-100 px-3 py-1 font-serif font-black text-amber-900 text-lg border-inner shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                {visitorCount} <span className="text-xs">人</span>
             </div>
           </div>
           <p className="text-xs text-gray-500 mt-1 font-bold">累計挑戦者数</p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <button
            onClick={startDefaultQuiz}
            className="group relative px-6 py-3 bg-gray-900 text-white font-bold text-base w-full overflow-hidden border-2 border-gray-900 shadow-md active:scale-95 transition-all"
          >
             <span className="relative z-10 flex items-center justify-center gap-2">
               <Sword className="w-4 h-4" /> 壱ノ型：基本の試練
             </span>
             <div className="absolute inset-0 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>

          <div className="relative w-full">
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold text-base cursor-pointer border-2 border-gray-900 shadow-md active:scale-95 transition-all w-full"
            >
              <Upload className="w-4 h-4 text-gray-900" />
              <span>弐ノ型：資料読込</span>
              <div className="absolute bottom-0 left-0 h-1 bg-green-700 w-0 group-hover:w-full transition-all duration-300"></div>
            </label>
          </div>
        </div>

        {uploadError && (
          <p className="text-red-600 mt-4 text-xs font-bold bg-red-100 p-2 border border-red-300">
            {uploadError}
          </p>
        )}
      </div>

      <div className="bg-white/90 p-4 border-2 border-gray-800 max-w-xs mx-auto transform -rotate-1 shadow-md">
        <h3 className="font-bold text-sm border-b-2 border-gray-300 pb-1 mb-1 flex items-center gap-2">
          <Scroll className="w-4 h-4" /> 指令
        </h3>
        <p className="text-gray-700 text-xs font-maru leading-relaxed">
          「基本の試練」で鍛錬するか、「資料読込」で教科書等を読み込み、新たな鬼（問題）に挑め。
        </p>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4 z-10 relative">
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <Loader2 className="w-16 h-16 text-green-800 animate-spin relative z-10" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 tracking-widest">
        問題を生成中...
      </h2>
      <p className="text-base text-gray-600 font-maru">
        全集中・思考の呼吸...
      </p>
    </div>
  );

  return (
    <div className="min-h-screen relative font-serif bg-washi text-gray-900 overflow-x-hidden flex flex-col">
      {/* Background Pattern Layer */}
      <div className="fixed inset-0 pattern-ichimatsu opacity-10 pointer-events-none z-0"></div>
      
      {/* Header - Made more compact */}
      <header className="bg-stone-100/95 backdrop-blur-md sticky top-0 z-30 border-b-4 border-black shadow-sm shrink-0">
        <div className="max-w-5xl mx-auto px-3 py-2 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={handleLogoClick}
            title="トップへ戻る"
            role="button"
            tabIndex={0}
          >
            <div className="bg-black text-green-500 p-1.5 border border-green-700 shadow-sm">
              <span className="font-bold text-lg block leading-none">滅</span>
            </div>
            <h1 className="text-base font-black text-gray-900 tracking-tighter hidden xs:block">
              理科・全集中の試練
            </h1>
          </div>

          <div className="flex items-center gap-2">
            {appState === 'quiz' && (
              <>
                <div className="text-base font-bold font-mono bg-white px-2 py-0.5 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-baseline gap-1">
                  <span className="text-xs text-gray-500">第</span>
                  <span className="text-lg text-green-700">{currentQuestionIndex + 1}</span>
                  <span className="text-xs text-gray-500">/</span>
                  <span className="text-base">{quizData.length}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content - Reduced padding */}
      <main className="relative z-10 w-full max-w-5xl mx-auto p-2 flex-1 flex flex-col items-center justify-start pt-2">
        {appState === 'home' && renderHome()}
        {appState === 'loading' && renderLoading()}
        {appState === 'quiz' && (
          <QuizCard
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
            showFeedback={showFeedback}
            onNext={handleNext}
            isLast={currentQuestionIndex === quizData.length - 1}
          />
        )}
        {appState === 'result' && (
          <ResultSummary
            score={score}
            total={quizData.length}
            onRetry={handleRetry}
            onReviewWrong={() => {}}
          />
        )}
        
        {/* Footer: Return to Top - Enhanced z-index and touch area */}
        {appState !== 'home' && (
          <div className="mt-auto pt-8 pb-12 w-full flex justify-center z-20">
            <button
              onClick={handleLogoClick}
              className="group relative flex items-center gap-2 px-6 py-2 bg-stone-100 border-2 border-gray-400 rounded-full hover:border-green-700 hover:text-green-800 transition-all shadow-sm active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-bold font-maru">トップへ戻る</span>
              <div className="absolute inset-0 rounded-full border-2 border-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        )}
      </main>
      
      {/* Encouragement Overlay */}
      {showEncouragement && renderEncouragement()}
      
      {/* Exit Confirmation Overlay */}
      {showExitConfirmation && renderExitConfirmation()}

      {/* Floating Chat Button - Adjusted size and position */}
      <div className={`fixed bottom-4 right-4 z-40 transition-transform duration-300 ${isChatOpen ? 'translate-y-20' : 'translate-y-0'}`}>
        <button
          onClick={() => {
            safePlayClick();
            setIsChatOpen(true);
          }}
          className="group bg-black border-2 border-green-600 text-green-400 p-3 rounded-full shadow-[0_0_10px_rgba(46,125,50,0.5)] hover:bg-gray-900 active:scale-95 transition-all flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="hidden group-hover:block whitespace-nowrap font-bold text-sm pr-1">
            柱に聞く
          </span>
        </button>
      </div>

      {/* Chat Interface */}
      <TeacherChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;
