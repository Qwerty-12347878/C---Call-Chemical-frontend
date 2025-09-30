import React from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  Calendar,
  Globe,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Framer-Motion helpers                                             */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const About = () => {
  const stats = [
    { icon: Calendar, number: "15+", label: "Years Experience" },
    { icon: Users, number: "1,000+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Product Lines" },
    { icon: Globe, number: "25+", label: "Cities Served" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Provide superior quality chemicals while maintaining the highest standards of safety, reliability, and customer satisfaction.",
      color: "bg-blue-900/20 text-blue-400",
      border: "border-blue-800",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Be the leading supplier of chemicals  known for innovation, quality, and exceptional customer service.",
      color: "bg-green-900/20 text-green-400",
      border: "border-green-800",
    },
    {
      icon: TrendingUp,
      title: "Our Growth",
      description:
        "Continuously expand our product range and service capabilities to meet evolving market demands and customer needs.",
      color: "bg-purple-900/20 text-purple-400",
      border: "border-purple-800",
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified Quality Management",
    "Authorized dealer for leading international brands",
    "State-of-the-art warehouse and logistics facility",
    "Expert technical support and consultation services",
    "Environmental compliance and safety certifications",
    "Strong partnerships with manufacturers worldwide",
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* -------------------------------------------------------------- */}
        {/*  Header                                                        */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            About C-Call Chemical
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            With over 15 years of industry experience, we are a trusted partner
            for businesses and individuals seeking quality chemical and tile
            solutions.
          </p>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/*  Stats                                                         */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border   shadow-md transition-transform hover:scale-105 border-gray-700 bg-gray-800 shadow-gray-800/40">
                <s.icon className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mb-1 text-3xl font-bold text-white">
                {s.number}
              </div>
              <div className="text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/*  Mission · Vision · Growth                                     */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24 grid gap-8 md:grid-cols-3"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={fadeUp}
              className={`group flex flex-col rounded-2xl border-2 p-8 transition-shadow hover:shadow-xl ${v.border} ${v.color}`}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl  shadow-md transition-transform group-hover:scale-105 bg-gray-800 shadow-gray-800/40">
                <v.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {v.title}
              </h3>
              <p className="text-gray-300">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/*  Story & Achievements                                          */}
        {/* -------------------------------------------------------------- */}
        <div className="mb-24 grid gap-16 lg:grid-cols-2">
          {/* Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border  p-8 shadow-md border-gray-700 bg-gray-800 shadow-gray-800/40"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Our Story</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2008, C-Call Chemical began as a small family
                business with a goal of delivering high-quality chemicals to
                local businesses.
              </p>
              <p>
                We have since grown into a regional leader, serving
                manufacturing, construction, laboratory, and residential clients
                while remaining committed to quality and customer satisfaction.
              </p>
              <p>
                Today, we stock an extensive inventory from world-renowned
                manufacturers, ensuring our clients access to the latest
                products and technologies.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border  p-8 shadow-md border-gray-700 bg-gray-800 shadow-gray-800/40"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Our Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((a) => (
                <div key={a} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-400" />
                  <span className="text-gray-300">{a}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/*  Team Banner                                                   */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="mb-6 text-2xl font-bold text-white">Our Team</h3>
          <p className="mx-auto mb-10 max-w-3xl text-gray-300">
            Our professionals provide expert advice, technical support, and
            exceptional service to help you find the right solutions for your
            needs.
          </p>

          <div className="rounded-2xl bg-gradient-to-br  p-10 shadow-lg from-gray-800 via-gray-800 to-gray-700 shadow-gray-800/40">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { label: "Professional", sub: "Expert Team" },
                { label: "Certified", sub: "Quality Standards" },
                { label: "24/7", sub: "Customer Support" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-2 text-3xl font-bold text-blue-400">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-400">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
