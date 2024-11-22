// import './App.css'
// import Scrollx from './scrollx'
// import { LoremIpsum } from './components/LoremIpsum'
// import { motion, useScroll, useSpring } from 'framer-motion'
// // import ScrollAnimations from './components/ScrollAnimations'
// // import BasicsOfMotion from './components/BasicsOfMotion'

// export default function App() {
//   const { scrollYProgress } = useScroll()
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   })
//   return (
//     <div>
//       <Scrollx />
//       {/* <ScrollAnimations />
//       <BasicsOfMotion /> */}
//       <motion.div className="progress-bar" style={{ scaleX }} />
//       <h1>
//         <code>useScroll</code> with spring smoothing
//       </h1>
//       <LoremIpsum />
//     </div>
//   )
// }

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementByAmount } from './redux/slices/counterSlice'
import { updateName } from './redux/slices/nameSlice'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.update.name)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(incrementByAmount({ amount: 10 }))}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(updateName('Reeta'))}>Update Name</button>
        <span>{name}</span>
      </div>
    </div>
  )
}
