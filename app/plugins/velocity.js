import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

Velocity.RegisterEffect('hello', {
  defaultDuration: 450,
  calls: [
    [
      {
        rotateZ: -3,
        scale: 1.2
      }, 0.2
    ], [
      {
        rotateZ: 3
      }, 0.2
    ], [
      {
        rotateZ: -3
      }, 0.2
    ], [
      {
        rotateZ: 3
      }, 0.2
    ], [
      {
        rotateZ: -3
      }, 0.2
    ], [
      {
        rotateZ: 0,
        scale: 1.0
      }, 0.2
    ]
  ]
})

Velocity.RegisterEffect('slideDownIn', {
  defaultDuration: 1200,
  calls: [
    [
      {
        opacity: [1, 0],
        translateY: [0, -40]
      }
    ]
  ]
})

Velocity.RegisterEffect('slideDownInRotate', {
  defaultDuration: 900,
  calls: [
    [
      {
        opacity: [1, 0],
        translateY: [0, -20],
        rotateX: [0, 10]
      }
    ]
  ]
})

Velocity.RegisterEffect('bounce', {
  defaultDuration: 200,
  calls: [
    [
      {
        translateY: -6
      }
    ], [
      {
        translateY: 0
      }
    ], [
      {
        translateY: -6
      }
    ], [
      {
        translateY: 0
      }
    ]
  ]
})

export default (_context, inject) => {
  inject('velocity', Velocity)
}
