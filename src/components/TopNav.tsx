import { Search, Bell, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface TopNavProps {
  title: string;
}

export default function TopNav({ title }: TopNavProps) {
  return (
    <header className="w-full sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-2xl font-headline font-extrabold tracking-tighter text-primary">{title}</h2>
          
          <div className="hidden lg:flex ml-8 items-center bg-surface-container-high rounded-full px-4 py-2 gap-2 w-full max-w-md">
            <Search size={18} className="text-on-surface-variant/60" />
            <input 
              type="text" 
              placeholder="Cari laporan..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
            <div className="text-right hidden sm:block">
              <p className="font-bold text-sm text-primary">Edward S.</p>
              <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-widest">Financial Sanctuary</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/20 shadow-sm">
              <img 
                src="https://picsum.photos/seed/edward/100/100" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-b from-surface-container-low to-transparent"></div>
    </header>
  );
}
