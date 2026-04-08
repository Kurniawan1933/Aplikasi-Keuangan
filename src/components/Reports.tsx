import { Laptop, ShieldCheck, Utensils, Car, Zap, CheckCircle2, Medal, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
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

export default function Reports() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      {/* Page Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-primary/40 uppercase">Edisi Bulan Ini</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tighter mt-2">Laporan & Target</h2>
          <p className="text-on-surface-variant/60 mt-2 max-w-md font-medium">Ringkasan arsitektur finansial Anda. Setiap rupiah adalah bata untuk masa depan.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-8 py-4 bg-surface-container-highest rounded-2xl text-primary font-bold text-sm hover:bg-surface-container-high transition-all active:scale-95">
            Ekspor PDF
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 active:scale-95 transition-all">
            Buat Target Baru
          </button>
        </div>
      </section>

      {/* Savings Ambition */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-headline font-bold text-primary">Ambisi Tabungan</h3>
          <button className="text-sm font-bold text-primary hover:underline uppercase tracking-widest">Lihat Semua</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Target Card */}
          <motion.div variants={item} className="md:col-span-2 group relative overflow-hidden bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-[0_32px_64px_-12px_rgba(0,49,120,0.08)] border border-outline-variant/5">
            <div className="flex justify-between items-start mb-16">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary shadow-sm group-hover:scale-105 transition-transform">
                  <Laptop size={40} />
                </div>
                <div>
                  <h4 className="text-3xl font-headline font-bold text-primary">Beli Laptop Baru</h4>
                  <p className="text-sm text-on-surface-variant/60 font-medium mt-1">Target: Desember 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-headline font-extrabold text-primary tracking-tighter">82%</p>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mt-1">On Track</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-5 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container w-[82%] rounded-full shadow-[0_0_20px_rgba(13,71,161,0.3)]"></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-on-surface-variant/40 block text-[10px] font-bold uppercase tracking-widest mb-1">Terkumpul</span>
                  <span className="font-headline font-extrabold text-primary text-2xl">Rp 12.300.000</span>
                </div>
                <div className="text-right">
                  <span className="text-on-surface-variant/40 block text-[10px] font-bold uppercase tracking-widest mb-1">Target Total</span>
                  <span className="font-headline font-extrabold text-on-surface-variant text-2xl">Rp 15.000.000</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Target Card */}
          <motion.div variants={item} className="bg-gradient-to-br from-primary to-primary-container text-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-headline font-bold">Dana Darurat</h4>
              <p className="text-white/60 text-sm mt-1 font-medium">Stabilitas Jangka Panjang</p>
            </div>
            <div className="relative z-10 mt-12">
              <div className="flex justify-between items-end mb-4">
                <span className="text-4xl font-headline font-extrabold tracking-tighter">45%</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80 text-secondary-container">Aktif</span>
              </div>
              <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[45%] rounded-full"></div>
              </div>
              <p className="mt-6 text-sm font-bold opacity-90 tracking-tight">Rp 22.500.000 / Rp 50jt</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Chart */}
        <motion.div variants={item} className="lg:col-span-2 bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-[0_32px_64px_-12px_rgba(0,49,120,0.08)] border border-outline-variant/5">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-primary">Tren Pengeluaran</h3>
              <p className="text-sm text-on-surface-variant/60 font-medium mt-1">Analisis 6 bulan terakhir</p>
            </div>
            <div className="relative">
              <select className="bg-surface-container-low border-none rounded-xl text-[10px] font-bold text-primary py-3 px-6 pr-10 focus:ring-2 focus:ring-primary/20 appearance-none uppercase tracking-widest">
                <option>Per Bulan</option>
                <option>Per Minggu</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
            </div>
          </div>
          
          <div className="h-72 w-full relative mt-8">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#003178" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#003178" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,150 L100,140 L200,160 L300,110 L400,125 L500,80 L600,95 L700,50 L800,60 L800,200 L0,200 Z" fill="url(#chartGradient)" />
              <path d="M0,150 L100,140 L200,160 L300,110 L400,125 L500,80 L600,95 L700,50 L800,60" fill="none" stroke="#003178" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="100" cy="140" r="5" fill="white" stroke="#003178" strokeWidth="3" />
              <circle cx="300" cy="110" r="5" fill="white" stroke="#003178" strokeWidth="3" />
              <circle cx="500" cy="80" r="5" fill="white" stroke="#003178" strokeWidth="3" />
              <circle cx="700" cy="50" r="7" fill="#003178" />
            </svg>
            <div className="flex justify-between mt-10 px-2 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.4em]">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>Mei</span>
              <span>Jun</span>
            </div>
          </div>
        </motion.div>

        {/* Top Categories */}
        <motion.div variants={item} className="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-[0_32px_64px_-12px_rgba(0,49,120,0.08)] border border-outline-variant/5">
          <h3 className="text-2xl font-headline font-bold text-primary mb-10">Kategori Terbesar</h3>
          <div className="space-y-8">
            <CategoryItem icon={Utensils} title="Kuliner & Makan" count="12 Transaksi" amount="Rp 4.2M" status="Boros" isBad={true} />
            <CategoryItem icon={Car} title="Transportasi" count="8 Transaksi" amount="Rp 1.8M" status="Hemat" isBad={false} />
            <CategoryItem icon={Zap} title="Tagihan Rutin" count="5 Transaksi" amount="Rp 2.5M" status="Stabil" isBad={false} />
          </div>
          
          <div className="mt-12 p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
            <p className="text-xs text-primary leading-relaxed font-medium">
              <span className="font-bold block mb-2 uppercase tracking-widest text-[10px]">Tips Keuangan:</span>
              Anda bisa menabung <strong>Rp 800rb</strong> lebih banyak jika mengurangi makan di luar minggu depan.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Motivation Banner */}
      <motion.section variants={item} className="relative overflow-hidden rounded-[3rem] bg-surface-container-low p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 z-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
            Masa depan cerah dimulai dari <span className="text-primary-container italic">sekarang</span>.
          </h2>
          <p className="text-on-surface-variant/70 text-lg max-w-lg font-medium">
            Konsistensi adalah kunci. Dashboard Anda menunjukkan kenaikan tabungan 12% dibanding bulan lalu. Teruskan langkah kecil ini!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
              <CheckCircle2 size={20} className="text-secondary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Score: 840 (Sangat Baik)</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
              <Medal size={20} className="text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pencapaian: Penabung Bijak</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square relative z-10 group">
          <img 
            src="https://picsum.photos/seed/growth/600/600" 
            alt="Growth" 
            className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-container/20 blur-3xl -z-10"></div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </motion.section>
    </motion.div>
  );
}

function CategoryItem({ icon: Icon, title, count, amount, status, isBad }: any) {
  return (
    <div className="flex items-center justify-between group p-2 rounded-2xl hover:bg-surface-container-low transition-all cursor-pointer">
      <div className="flex items-center gap-5">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm",
          isBad ? "bg-error/10 text-error" : "bg-primary/10 text-primary"
        )}>
          <Icon size={24} />
        </div>
        <div>
          <p className="font-bold text-base text-primary">{title}</p>
          <p className="text-[10px] text-on-surface-variant/50 font-bold uppercase tracking-widest">{count}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-headline font-extrabold text-lg text-primary">{amount}</p>
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em] mt-1",
          isBad ? "text-error" : "text-secondary"
        )}>{status}</p>
      </div>
    </div>
  );
}
