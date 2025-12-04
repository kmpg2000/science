import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, Sparkles } from 'lucide-react';
import { getTeacherResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface TeacherChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherChat: React.FC<TeacherChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '私はAI柱だ。理科のことでわからないことがあれば、何でも聞くが良い。全集中で答えよう。',
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await getTeacherResponse(userMsg.text);
      const botMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-stone-50 w-full max-w-lg h-[600px] max-h-[90vh] border-4 border-gray-900 shadow-2xl flex flex-col overflow-hidden animate-slide-up relative">
        
        {/* Pattern Background Overlay */}
        <div className="absolute inset-0 pattern-asanoha opacity-10 pointer-events-none z-0"></div>

        {/* Header */}
        <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-green-700 relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gray-800 p-2 rounded-full border border-green-500">
              <Sparkles className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-wider">AI柱の間</h3>
              <p className="text-gray-400 text-xs">理科の呼吸 指導中</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-gray-800 p-2 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10 bg-white/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${msg.role === 'user' ? 'bg-indigo-900 border-indigo-700 text-white' : 'bg-green-800 border-black text-white'}`}>
                {msg.role === 'user' ? <User className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
              </div>
              <div className={`max-w-[80%] p-4 text-sm leading-relaxed font-maru shadow-md ${
                msg.role === 'user' 
                  ? 'bg-indigo-100 text-indigo-900 border-2 border-indigo-200 rounded-2xl rounded-tr-none' 
                  : 'bg-white text-gray-900 border-2 border-gray-300 rounded-2xl rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
               <div className="w-10 h-10 rounded-full bg-green-800 border-2 border-black text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div className="bg-white border-2 border-gray-300 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-gray-500 text-sm font-bold">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>全集中で思考中...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-stone-200 border-t-2 border-gray-300 relative z-10">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="質問を入力せよ..."
              className="flex-1 border-2 border-gray-400 bg-white px-4 py-3 focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 font-maru"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="bg-green-800 text-white p-3 border-2 border-black hover:bg-green-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};