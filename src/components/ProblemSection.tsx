import { Clock, UserX, Search } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  { icon: Clock, text: "Tidak sempat urus hal kecil", color: "text-primary" },
  { icon: UserX, text: "Tidak ada yang bisa bantu", color: "text-destructive" },
  { icon: Search, text: "Ribet cari jasa satu-satu", color: "text-secondary" },
];

const ProblemSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold text-foreground max-w-2xl mx-auto leading-relaxed"
      >
        "Kami tahu, kadang hal kecil justru{" "}
        <span className="text-primary">paling merepotkan</span>"
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group flex flex-col items-center gap-4 p-6 bg-card rounded-2xl shadow-sm border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <p.icon size={26} className={p.color} />
            </div>
            <p className="font-semibold text-foreground">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
