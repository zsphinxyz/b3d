'use client'
import {motion} from 'framer-motion'

export function FadeIn({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <motion.div
      initial={{opacity:0, y: 80}}
      whileInView={{opacity: 1, y:0}}
      viewport={{amount: 0.5, once: true}}
      transition={{duration: 0.5}}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({children, className, timeOffset}: {children: React.ReactNode, className?: string, timeOffset:number}) {
  return(
    <motion.li className={className}
      initial={{x: -25, opacity: 0 }}
      whileInView={{opacity: 1, x:0}}
      viewport={{amount: 0.8, once: true}}
      transition={{duration: 0.25, delay: timeOffset}}
    >
      {children}
    </motion.li>
  )
}

export function TextAnimation({children, className}: {children: React.ReactNode, className?: string}) {
  return(
    <motion.h1 className={className + ''}
      initial={{opacity: 0}}
      whileInView={{opacity: [0,0.2,0.4,0.5,1],}}
      viewport={{amount: 'all', once: true}}
      transition={{duration: 0.5, delay: 0.2}}
    >
      {children}
    </motion.h1>
  )
}

export function TextBlurAni({className, text}: { className?: string, text:string}) {

  return(
    <motion.h1 className={className}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true, amount: 'all'}}
      transition={{}}
    >
      {text.split('').map( (letter, i) => (
        <motion.span
          className=''
          key={i}
          initial={{opacity: 0, scale: 2}}
          whileInView={{opacity: [0,0.5,1], scale: 1}}
          viewport={{once: true, amount: 'all'}}
          transition={{delay: i/15}}
        >{letter}</motion.span>
      ))}
    </motion.h1>
   
  )
}

