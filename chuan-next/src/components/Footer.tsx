"use client";

import React from 'react';
import { Github, HelpCircle, MessageCircle, Bug } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto py-4 shrink-0">
      <div className="container mx-auto px-4">
        {/* 分割线 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-4"></div>
        
        {/* 链接区域 */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm">
       
    
       
        </div>
        
        {/* 版权信息 */}
        <div className="text-center mt-3">
          <p className="text-xs text-slate-400">
    Copyright &copy; 2024 sljie 
          </p>
        </div>
      </div>
    </footer>
  );
}
