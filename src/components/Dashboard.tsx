import { TrendingUp, Home, Utensils, TrendingDown, Fuel, ShoppingBag, Banknote, Cigarette, PiggyBank, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { RECENT_TRANSACTIONS } from '../constants';
import { cn } from '../lib/utils';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const iconMap: Record<string, any> = {
  Utensils,
  TrendingUp,
  Fuel,
  ShoppingBag,
  Banknote,
  Cigarette,
  PiggyBank,
  MoreHorizontal
};

export default function Dashboard() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase opacity-60">IKHTISAR KEUANGAN</span>
          <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight mt-1">Selamat Datang, Edward.</h2>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-secondary-container/20 rounded-full border border-secondary/10">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
          <span className="text-secondary font-bold text-sm">Uang Anda Aman</span>
          <span className="text-on-surface-variant text-xs opacity-60 ml-2">Pembaruan: Hari ini, 09:41</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Main Balance Card */}
        <motion.div 
          variants={item}
          className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2.5rem] text-white flex flex-col justify-between shadow-2xl shadow-primary/20 min-h-[260px] relative overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-white/70 font-medium text-sm tracking-wide mb-1">Total Saldo Saat Ini</p>
            <h3 className="text-5xl font-headline font-extrabold tracking-tighter">Rp 42.850.000</h3>
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              <TrendingUp size={14} />
              <span className="text-xs font-bold">+12.5%</span>
            </div>
            <p className="text-xs text-white/60">Vs bulan lalu</p>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full border border-white/10"></div>
        </motion.div>

        {/* Remaining Budget */}
        <motion.div 
          variants={item}
          className="bg-surface-container-lowest p-8 rounded-[2.5rem] flex flex-col justify-between border border-outline-variant/10 shadow-sm"
        >
          <div>
            <p className="text-on-surface-variant font-bold text-[10px] tracking-widest uppercase mb-4 opacity-60">Sisa Budget</p>
            <h4 className="text-3xl font-headline font-bold text-primary">Rp 5.210.000</h4>
          </div>
          <div className="mt-4">
            <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-3/4 rounded-full"></div>
            </div>
            <p className="text-[11px] font-bold text-secondary mt-2 uppercase tracking-tighter">75% Dialokasikan</p>
          </div>
        </motion.div>

        {/* Largest Expense */}
        <motion.div 
          variants={item}
          className="bg-surface-container-lowest p-8 rounded-[2.5rem] flex flex-col justify-between border border-outline-variant/10 shadow-sm"
        >
          <div>
            <p className="text-on-surface-variant font-bold text-[10px] tracking-widest uppercase mb-4 opacity-60">Pengeluaran Terbesar</p>
            <h4 className="text-3xl font-headline font-bold text-error">Rp 12.400.000</h4>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-error-container/50 flex items-center justify-center text-error">
              <Home size={20} />
            </div>
            <span className="text-sm font-bold text-on-surface">Cicilan Rumah</span>
          </div>
        </motion.div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Categories Chart */}
        <motion.div 
          variants={item}
          className="lg:col-span-5 bg-surface-container-low p-8 rounded-[2.5rem] space-y-6"
        >
          <div className="flex items-center justify-between">
            <h5 className="font-headline font-extrabold text-xl text-primary">Kategori Pengeluaran</h5>
            <button className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline">Detil</button>
          </div>
          
          <div className="relative flex justify-center py-4">
            <svg className="w-56 h-56 transform -rotate-90">
              <circle cx="112" cy="112" r="90" fill="transparent" stroke="#e1e3e4" strokeWidth="24" />
              <circle cx="112" cy="112" r="90" fill="transparent" stroke="#003178" strokeWidth="28" strokeDasharray="565.48" strokeDashoffset="300" strokeLinecap="round" />
              <circle cx="112" cy="112" r="90" fill="transparent" stroke="#0d47a1" strokeWidth="28" strokeDasharray="565.48" strokeDashoffset="450" strokeLinecap="round" />
              <circle cx="112" cy="112" r="90" fill="transparent" stroke="#1b6d24" strokeWidth="28" strokeDasharray="565.48" strokeDashoffset="520" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] text-on-surface-variant font-bold tracking-widest">TOTAL</span>
              <span className="text-2xl font-headline font-bold">100%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: 'Makan', value: '45%', color: 'bg-primary' },
              { label: 'Bensin', value: '25%', color: 'bg-primary-container' },
              { label: 'Tabungan', value: '15%', color: 'bg-secondary' },
              { label: 'Lainnya', value: '15%', color: 'bg-surface-container-highest' },
            ].map((cat) => (
              <div key={cat.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                <span className="text-xs font-bold text-on-surface">{cat.label} ({cat.value})</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div 
          variants={item}
          className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <h5 className="font-headline font-extrabold text-xl text-primary">Transaksi Terbaru</h5>
            <button className="bg-surface-container-low px-4 py-2 rounded-xl text-[10px] font-bold text-primary hover:bg-surface-container-high transition-colors tracking-widest">LIHAT SEMUA</button>
          </div>
          
          <div className="space-y-1">
            {RECENT_TRANSACTIONS.map((tx) => {
              const Icon = iconMap[tx.icon] || ShoppingBag;
              return (
                <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-all group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-white transition-colors shadow-sm">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h6 className="font-bold text-sm text-on-surface">{tx.title}</h6>
                      <p className="text-[11px] text-on-surface-variant font-medium opacity-60">{tx.date} • {tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      "font-headline font-bold text-sm",
                      tx.type === 'expense' ? "text-error" : "text-secondary"
                    )}>
                      {tx.type === 'expense' ? '-' : '+'} Rp {tx.amount.toLocaleString('id-ID')}
                    </p>
                    <p className={cn(
                      "text-[10px] uppercase font-bold tracking-tighter",
                      tx.type === 'expense' ? "text-secondary" : "text-primary"
                    )}>
                      {tx.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
