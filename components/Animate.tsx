'use client'
import {motion, stagger} from 'framer-motion'
import { filter } from 'framer-motion/client'

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
      initial={{x: -25, opacity: 0, filter: 'blur(10px)'}}
      whileInView={{opacity: 1, x:0, filter: ['blur(5px)', 'blur(0px)']}}
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
      initial={{opacity: 0, filter: 'blur(10px)'}}
      whileInView={{opacity: [0,0.2,0.4,0.5,1], filter: 'blur(0px)'}}
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
          initial={{opacity: 0, scale: 2, filter: 'blur(50px)'}}
          whileInView={{opacity: [0,0.5,1], scale: 1, filter: 'blur(0px)'}}
          viewport={{once: true, amount: 'all'}}
          transition={{delay: i/15}}
        >{letter}</motion.span>
      ))}
    </motion.h1>
   
  )
}

