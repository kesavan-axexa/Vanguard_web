import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function AboutHero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-[45vh] w-full flex items-center justify-center overflow-hidden bg-customGreen">
      <div className="absolute inset-0 bg-linear-to-br from-[#007200]/[0.2] via-transparent to-[#56b045]/[0.2] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {/* <ElegantShape delay={0.3} width={600} height={140} rotate={12}  gradient="from-indigo-500/[0.15]"  className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"   /> */}
        <ElegantShape delay={0.5} width={500} height={120} rotate={-15}gradient="from-rose-500/[0.15]" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"  />
        <ElegantShape delay={0.4} width={300} height={80} rotate={-8}gradient="from-violet-500/[0.15]" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"/>
        <ElegantShape  delay={0.6}  width={200}  height={60} rotate={20} gradient="from-amber-500/[0.15]" className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
        <ElegantShape delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]"className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"  />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 my-2">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-white">
              About
              <br />
              {/* bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 */}
              <span className="text-white">
                Vanguard Solar
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-md md:text-lg text-white/80 mb-8 leading-relaxed font-light tracking-wide max-w-4xl mx-auto px-4 text-justify lg:text-center">
              Founded in 2008, Vanguard Solar has been at the forefront of the
              solar revolution, making clean and renewable energy accessible to
              homes and businesses across Tamil Nadu, India. With a strong
              commitment to quality, innovation, and customer satisfaction, we
              have grown into a trusted and certified MSME, completing 50+
              installations every month.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#56b045] via-transparent to-[#007200]/80 pointer-events-none" />
    </div>
  );
}
export default AboutHero;
