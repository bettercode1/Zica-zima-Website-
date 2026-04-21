import React from 'react';
import Image from 'next/image';
import { BlogSection } from '@/lib/blogs';

interface Props {
  sections: BlogSection[];
}

export default function BlogContentRenderer({ sections }: Props) {
  return (
    <div className="space-y-16">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'text_block':
            return (
              <div key={index} className="prose prose-lg prose-slate max-w-none">
                {section.title && <h2 className="text-3xl font-bold text-slate-900 mb-6">{section.title}</h2>}
                <div 
                  className={`text-slate-700 leading-relaxed ${section.style === 'italic_border' ? 'italic border-l-4 border-orange-500 pl-6' : ''}`}
                >
                  {section.content}
                </div>
              </div>
            );

          case 'grid_list':
            return (
              <div key={index} className="prose prose-lg prose-slate max-w-none">
                {section.title && <h2 className="text-3xl font-bold text-slate-900 mb-6">{section.title}</h2>}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {section.items?.map((item, i) => (
                    <li key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 list-none m-0">
                      <span className="material-symbols-outlined text-orange-600">{item.icon}</span> 
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            );

          case 'image':
            return (
              <div key={index} className="my-12 relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={section.url || ''}
                  alt={section.alt || 'Blog Image'}
                  fill
                  className="object-cover"
                />
              </div>
            );

          case 'comparison_table':
            return (
              <div key={index} className="mb-16 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      {section.headers?.map((header, i) => (
                        <th key={i} className="p-6 font-bold">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows?.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100">
                        {row.map((cell, j) => (
                          <td key={j} className={`p-6 ${j === 0 ? 'font-bold bg-slate-50' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
