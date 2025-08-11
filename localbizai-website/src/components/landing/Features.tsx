
"use client";

import { BarChart, MousePointerClick, Users } from "lucide-react";

export function Features() {
  return (
    <div id="features" className="flex flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px]">
          Key Features
        </h1>
        <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
          Innovate offers a comprehensive suite of tools to help you manage and analyze your data effectively.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
          <div className="text-[#0d141c]">
            <BarChart size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d141c] text-base font-bold leading-tight">Advanced Analytics</h2>
            <p className="text-[#49739c] text-sm font-normal leading-normal">
              Leverage powerful algorithms and machine learning to uncover hidden patterns and trends in your data.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
          <div className="text-[#0d141c]">
            <MousePointerClick size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d141c] text-base font-bold leading-tight">Interactive Dashboards</h2>
            <p className="text-[#49739c] text-sm font-normal leading-normal">
              Create dynamic and customizable dashboards to visualize your data and track key performance indicators.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
          <div className="text-[#0d141c]">
            <Users size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0d141c] text-base font-bold leading-tight">Team Collaboration</h2>
            <p className="text-[#49739c] text-sm font-normal leading-normal">
              Collaborate with your team in real-time, share insights, and work together to achieve your business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
