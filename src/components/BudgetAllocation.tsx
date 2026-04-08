import { Banknote, Fuel, Utensils, Cigarette, PiggyBank, MoreHorizontal, PlusCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUDGET_CATEGORIES } from '../constants';
import { cn } from '../lib/utils';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const iconMap: Record<string, any> = {
  Fuel,
  Utensils,
  Cigarette,
  PiggyBank,
  MoreHorizontal
};

export default function BudgetAllocation() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      {/* Page Header */}
      <section>
        <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Manajemen Anggaran</p>
        <h2 className="text-4xl font-headline font-extrabold tracking-tight text-primary">Alokasi Budget & Pendapatan</h2>
        <p className="text-on-surface-variant mt-2 max-w-xl">Atur strategi finansial Anda bulan ini dengan presisi arsitektural. Pastikan setiap Rupiah memiliki tujuan.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Forms */}
        <div className="lg:col-span-7 space-y-8">
          {/* Total Income Card */}
          <motion.div variants={item} className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary-container/30 flex items-center justify-center text-secondary">
                <Banknote size={24} />
              </div>
              <h3 className="font-headline font-bold text-xl text-primary">Total Penghasilan</h3>
            </div>
            <div className="relative">
              <span className="absolute left-0 bottom-3 text-2xl font-bold text-on-surface-variant/30">Rp</span>
              <input 
                type="text" 
                defaultValue="15.000.000"
                className="w-full bg-surface-container-high border-none border-b-2 border-primary/20 rounded-t-2xl rounded-b-none px-12 py-4 text-4xl font-headline font-extrabold focus:ring-0 focus:border-primary transition-all text-primary"
              />
            </div>
            <p className="text-[10px] text-on-surface-variant/60 mt-4 font-bold uppercase tracking-widest">Masukkan gaji bulanan atau total pendapatan bersih</p>
          </motion.div>

          {/* Budget Categories Grid */}
          <motion.div variants={item} className="bg-surface-container-low rounded-[2rem] p-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="font-headline font-bold text-xl text-primary">Alokasi Kategori</h3>
                <p className="text-sm text-on-surface-variant">Tentukan batas maksimal pengeluaran per kategori.</p>
              </div>
              <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 hover:underline">
                <PlusCircle size={16} />
                Tambah Kategori
              </button>
            </div>

            <div className="space-y-4">
              {BUDGET_CATEGORIES.map((cat) => {
                const Icon = iconMap[cat.icon] || MoreHorizontal;
                return (
                  <div key={cat.id} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/5 group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span className="block font-bold text-sm text-on-surface">{cat.name}</span>
                        <span className="text-[11px] text-on-surface-variant italic">{cat.description}</span>
                      </div>
                    </div>
                    <div className="relative w-full sm:w-48">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-xs font-bold">Rp</span>
                      <input 
                        type="text" 
                        defaultValue={cat.allocated.toLocaleString('id-ID')}
                        className="w-full bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-2.5 text-right font-bold text-sm focus:ring-2 focus:ring-primary/20 text-primary"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visualization & Summary */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          {/* Visual Progress Card */}
          <motion.div variants={item} className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            {/* Background Glow Texture */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container rounded-full blur-[80px] opacity-40"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20"></div>
            
            <div className="relative z-10">
              <h4 className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-10">Sisa Alokasi</h4>
              <div className="mb-2 flex justify-between items-end">
                <span className="text-4xl font-headline font-extrabold tracking-tighter">Rp 3.000.000</span>
                <span className="text-[10px] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">20% Tersisa</span>
              </div>
              
              {/* Main Progress Bar */}
              <div className="h-4 w-full bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary-container to-secondary" style={{ width: '80%' }}></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                <div>
                  <span className="block text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Total Budget</span>
                  <span className="block text-lg font-bold">Rp 12.000.000</span>
                </div>
                <div>
                  <span className="block text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Penghasilan</span>
                  <span className="block text-lg font-bold">Rp 15.000.000</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Suggestion Card */}
          <motion.div variants={item} className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm mb-1 text-primary">Saran Finansial</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Anda masih memiliki Rp 3.000.000 yang belum dialokasikan. Kami menyarankan untuk menambah alokasi <strong>Tabungan</strong> atau <strong>Investasi</strong> untuk mempercepat target pensiun dini Anda.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            <button className="bg-surface-container-highest text-primary py-4 rounded-2xl font-bold text-sm hover:bg-surface-container-high transition-all active:scale-95">
              Simpan Draft
            </button>
            <button className="bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 active:scale-95 transition-all">
              Aktifkan Budget
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Quote */}
      <footer className="mt-20 border-t border-outline-variant/10 pt-10 text-center max-w-2xl mx-auto">
        <p className="font-headline italic text-lg text-on-surface-variant/40">"Kekayaan bukanlah tentang berapa banyak uang yang Anda hasilkan, tapi tentang seberapa baik Anda menjaganya."</p>
        <div className="mt-6 flex justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary/10"></span>
          <span className="w-8 h-2 rounded-full bg-primary/30"></span>
          <span className="w-2 h-2 rounded-full bg-primary/10"></span>
        </div>
      </footer>
    </motion.div>
  );
}
