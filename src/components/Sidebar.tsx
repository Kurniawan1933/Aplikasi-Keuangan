import { 
  LayoutDashboard, 
  Wallet, 
  ReceiptText, 
  BarChart3, 
  Plus, 
  Settings, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'budget', label: 'Alokasi Budget', icon: Wallet },
    { id: 'transactions', label: 'Transaksi', icon: ReceiptText },
    { id: 'reports', label: 'Laporan', icon: BarChart3 },
  ] as const;

  return (
    <aside className="hidden md:flex h-screen w-72 fixed left-0 top-0 bg-surface-container-low flex-col p-4 z-50 border-r border-outline-variant/10">
      <div className="mb-10 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-primary-container rounded-xl flex items-center justify-center text-white">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="font-headline font-bold text-lg text-primary leading-none">The Sovereign Ledger</h1>
            <p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase mt-1">Financial Sanctuary</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm",
              currentView === item.id
                ? "bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20"
                : "text-on-surface-variant hover:bg-surface-container-high hover:translate-x-1"
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 space-y-2 border-t border-outline-variant/20">
        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 mb-4 active:scale-95 transition-all flex items-center justify-center gap-2">
          <Plus size={18} />
          Tambah Transaksi
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all text-sm font-medium">
          <Settings size={20} />
          <span>Pengaturan</span>
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all text-sm font-medium">
          <HelpCircle size={20} />
          <span>Bantuan</span>
        </button>
      </div>
    </aside>
  );
}
