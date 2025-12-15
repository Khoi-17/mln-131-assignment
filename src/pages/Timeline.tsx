import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { timelineData } from '../data/timeline'
import type { TimelineItem } from '../data/timeline'

const TimelineNode = ({ isLeft }: { isLeft: boolean }) => (
  <motion.div
    className={`absolute top-12 md:top-1/2 md:-translate-y-1/2 ${
      isLeft ? 'md:left-1/2 md:-translate-x-1/2 left-10' : 'md:left-1/2 md:-translate-x-1/2 left-10'
    }`}
    initial={{ scale: 0.4, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    viewport={{ once: true, amount: 0.6 }}
  >
    <div className="relative">
      <motion.span
        className="absolute inset-0 rounded-full bg-party-red/30"
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
      />
      <div className="relative h-6 w-6 rounded-full bg-gradient-to-br from-party-red to-party-yellow shadow-lg ring-4 ring-white" />
    </div>
  </motion.div>
)

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isLeft = item.side === 'left'
  const direction = isLeft ? 'md:pr-16 md:pl-0' : 'md:pl-16 md:pr-0'

  return (
    <div className="relative md:grid md:grid-cols-2 items-center z-10">
      <TimelineNode isLeft={isLeft} />

      {/* Connector line from center to card */}
      <div
        className={`absolute top-14 md:top-1/2 md:-translate-y-1/2 hidden md:block ${
          isLeft ? 'left-1/2 pr-6' : 'left-1/2 pl-6'
        }`}
      >
        <div
          className={`h-[2px] w-16 ${isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'} bg-gradient-to-r ${
            isLeft ? 'from-party-red/70 to-transparent' : 'from-transparent to-party-red/70'
          }`}
        />
      </div>

      <div className={`${isLeft ? '' : 'md:order-2'} ${direction}`}>
        <motion.article
          initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.05, type: 'spring', stiffness: 140, damping: 18 }}
          className="group bg-white/80 backdrop-blur rounded-2xl border border-white/60 shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="flex items-center gap-3 px-6 pt-5">
            {/* Năm hiển thị rõ ngay trên card */}
            <span className="text-sm md:text-base font-semibold tracking-wide text-party-red">
              {item.year}
            </span>
            {item.tag && (
              <span className="rounded-full bg-gray-900/5 px-3 py-1 text-xs font-semibold text-gray-700">
                {item.tag}
              </span>
            )}
            {item.icon && <span className="ml-auto text-2xl">{item.icon}</span>}
          </div>

          {item.image && (
            <div className="mt-4 max-h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          )}

          <div className="px-6 py-5 space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {item.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm md:text-base">
  {item.description
    .split(';')
    .filter(Boolean)
    .map((line, i) => (
      <li key={i}>{line.trim()}</li>
    ))}
</ul>
            <div className="h-1 w-16 bg-gradient-to-r from-party-red to-party-yellow rounded-full" />
          </div>
        </motion.article>
      </div>

      <div className={`${isLeft ? 'md:order-2' : ''} hidden md:block`} />
    </div>
  )
}

const Timeline = () => {
  useEffect(() => {
    document.title = 'Timeline Đổi mới 1986-1996'
  }, [])

  return (
    <section id="timeline-section" className="relative overflow-hidden bg-gradient-to-b from-white via-party-yellow/5 to-white py-20 px-4">
      <div
        className="absolute inset-0 bg-[url('/timeline-background.png')] bg-cover bg-center opacity-10"
        aria-hidden
      />
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-party-red/5 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-party-yellow/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.2em] text-party-red font-semibold">
            Giai đoạn Đổi mới 1986 - 1996
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">Giai đoạn Đổi mới 1986 - 1996</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Dòng thời gian các cột mốc quan trọng của Việt Nam trong giai đoạn Đổi mới 1986 - 1996.
          </p>
        </header>

        <div className="relative">
          {/* Đường line trung tâm luôn hiển thị - màu nổi bật hơn */}
          <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 pointer-events-none z-0 flex justify-center">
            <div className="h-full w-[5px] rounded-full bg-gradient-to-b from-white via-party-red to-white shadow-[0_0_12px_rgba(239,68,68,0.7)]" />
          </div>

          <div className="relative space-y-12 md:space-y-20 z-10">
            {timelineData.map((item, index) => (
              <TimelineCard key={`${item.year}-${item.title}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
