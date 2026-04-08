/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import BudgetAllocation from './components/BudgetAllocation';
import Transactions from './components/Transactions';
import Reports from './components/Reports';
import { View } from './types';
import { LayoutDashboard, Wallet, ReceiptText, BarChart3, Plus, User } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'budget':
        return <BudgetAllocation />;
      case 'transactions':
        return <Transactions />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard':
        return 'Dashboard';
      case 'budget':
        return 'Alokasi Budget';
      case 'transactions':
        return 'Catat Transaksi';
      case 'reports':
        return 'Laporan & Target';
      default:
        return 'The Sovereign Ledger';
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="md:ml-72 min-h-screen flex flex-col">
        <TopNav title={getTitle()} />
        
        <div className="flex-1 p-6 lg:p-10 max-w-[1440px] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-outline-variant/10 flex justify-around items-center py-3 px-2 z-50 shadow-[0_-10px_30px_rgba(0,49,120,0.05)]">
        <MobileNavItem 
          active={currentView === 'dashboard'} 
          onClick={() => setCurrentView('dashboard')} 
          icon={LayoutDashboard} 
          label="Home" 
        />
        <MobileNavItem 
          active={currentView === 'budget'} 
          onClick={() => setCurrentView('budget')} 
          icon={Wallet} 
          label="Budget" 
        />
        
        <div className="-mt-12">
          <button className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-white rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center active:scale-90 transition-transform border-4 border-surface">
            <Plus size={28} />
          </button>
        </div>

        <MobileNavItem 
          active={currentView === 'transactions'} 
          onClick={() => setCurrentView('transactions')} 
          icon={ReceiptText} 
          label="Transaksi" 
        />
        <MobileNavItem 
          active={currentView === 'reports'} 
          onClick={() => setCurrentView('reports')} 
          icon={BarChart3} 
          label="Laporan" 
        />
      </nav>
    </div>
  );
}

function MobileNavItem({ active, onClick, icon: Icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 transition-colors",
        active ? "text-primary" : "text-on-surface-variant/40"
      )}
    >
      <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
    </button>
  );
}
