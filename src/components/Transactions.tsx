import { PlusCircle, AlertCircle, Utensils, Car, ShoppingBag, Stethoscope, ChevronDown, Search } from 'lucide-react';
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

export default function Transactions() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      {/* Quick Input Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={item} className="lg:col-span-2 bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm border border-outline-variant/10">
          <h3 className="text-xl font-headline font-bold mb-8 text-primary flex items-center gap-2">
            <PlusCircle size={24} />
            Input Pengeluaran Baru
          </h3>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50 ml-1">Tanggal Transaksi</label>
                <input 
                  type="date" 
                  className="w-full bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface p-4 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50 ml-1">Kategori</label>
                <select className="w-full bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-on-surface p-4 font-medium appearance-none">
                  <option>Pilih Kategori</option>
                  <option>Makanan & Minuman</option>
                  <option>Transportasi</option>
                  <option>Belanja</option>
                  <option>Hiburan</option>
                  <option>Kesehatan</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50 ml-1">Nominal (IDR)</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-primary text-xl">Rp</span>
                <input 
                  type="number" 
                  placeholder="0"
                  className="w-full bg-surface-container-high border-none rounded-2xl py-6 pl-16 pr-6 text-3xl font-headline font-extrabold focus:ring-2 focus:ring-primary/20 text-primary"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Simpan Pengeluaran
              </button>
            </div>
          </form>
        </motion.div>

        {/* Budget Status Card */}
        <motion.div variants={item} className="space-y-6">
          <div className="bg-error-container rounded-[2rem] p-8 relative overflow-hidden shadow-sm">
            <div className="absolute -right-6 -top-6 opacity-10 rotate-12">
              <AlertCircle size={120} />
            </div>
            <h4 className="text-error font-headline font-bold text-xl mb-3 flex items-center gap-2">
              <AlertCircle size={24} />
              Waspada Budget!
            </h4>
            <p className="text-on-error-container/80 text-sm mb-6 leading-relaxed font-medium">
              Input nominal di kategori <strong>Makanan</strong> akan membuat pengeluaran Anda melebihi limit bulanan sebesar <strong>Rp 150.000</strong>.
            </p>
            <div className="w-full bg-error/10 h-3 rounded-full overflow-hidden mb-3">
              <div className="bg-error h-full rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold text-error uppercase tracking-widest">
              <span>Limit: Rp 2.000.000</span>
              <span>100% Terpakai</span>
            </div>
          </div>
          
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/10">
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Tips Finansial</h4>
            <p className="text-on-surface-variant text-sm italic leading-relaxed">
              "Cobalah untuk membatasi makan di luar minggu ini untuk menyeimbangkan budget Anda."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Transaction History Section */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-3xl font-headline font-extrabold text-primary tracking-tight">Riwayat Transaksi</h3>
            <p className="text-on-surface-variant/60 text-sm font-medium mt-1">Pantau setiap rupiah yang keluar</p>
          </div>
          <div className="flex bg-surface-container-high p-1.5 rounded-2xl shadow-inner">
            <button className="px-6 py-2.5 text-xs font-bold rounded-xl bg-white shadow-sm text-primary uppercase tracking-widest">Mingguan</button>
            <button className="px-6 py-2.5 text-xs font-bold text-on-surface-variant/60 hover:text-primary transition-colors uppercase tracking-widest">Bulanan</button>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-12">
          {/* Day Group 1 */}
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.3em]">Hari Ini — 24 Okt 2023</span>
              <div className="h-px flex-grow bg-outline-variant/20"></div>
            </div>
            <div className="space-y-3">
              <TransactionItem 
                icon={Utensils} 
                title="Dinner at Union JKT" 
                category="Makanan & Minuman" 
                time="19:30" 
                amount="- Rp 450.000" 
                status="Over Budget"
                isOver={true}
              />
              <TransactionItem 
                icon={Car} 
                title="Grab Car - Office" 
                category="Transportasi" 
                time="08:15" 
                amount="- Rp 85.000" 
                status="Dalam Limit"
                isOver={false}
              />
            </div>
          </motion.div>

          {/* Day Group 2 */}
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.3em]">Kemarin — 23 Okt 2023</span>
              <div className="h-px flex-grow bg-outline-variant/20"></div>
            </div>
            <div className="space-y-3">
              <TransactionItem 
                icon={ShoppingBag} 
                title="Zara Home Items" 
                category="Belanja" 
                time="15:20" 
                amount="- Rp 1.250.000" 
                status="Over Budget"
                isOver={true}
              />
              <TransactionItem 
                icon={Stethoscope} 
                title="Apotek Guardian" 
                category="Kesehatan" 
                time="11:00" 
                amount="- Rp 120.000" 
                status="Dalam Limit"
                isOver={false}
              />
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center pt-10">
          <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline transition-all group">
            Tampilkan Lebih Banyak
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>
    </motion.div>
  );
}

function TransactionItem({ icon: Icon, title, category, time, amount, status, isOver }: any) {
  return (
    <div className="group flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-low transition-all cursor-pointer border border-outline-variant/5 hover:border-primary/10">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-white transition-colors shadow-sm">
          <Icon size={24} />
        </div>
        <div>
          <h5 className="font-bold text-on-surface text-base">{title}</h5>
          <p className="text-[11px] text-on-surface-variant/60 font-bold uppercase tracking-wider">{category} • {time}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={cn(
          "font-headline font-extrabold text-lg",
          isOver ? "text-error" : "text-on-surface"
        )}>{amount}</p>
        <span className={cn(
          "inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mt-1",
          isOver ? "bg-error-container text-error" : "bg-secondary-container/30 text-secondary"
        )}>
          {status}
        </span>
      </div>
    </div>
  );
}
