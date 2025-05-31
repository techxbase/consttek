// _p5Base.js

export const VANTA = {
  effects: {},
  register(name, EffectClass) {
    this.effects[name] = EffectClass
    return EffectClass
  }
}

class P5Base {
  constructor(userOptions = {}) {
    this.options = {
      el: userOptions.el || document.body,
      color: userOptions.color || 0xff3f81,
      backgroundColor: userOptions.backgroundColor || 0x111111,
      spacing: userOptions.spacing || 0,
      chaos: userOptions.chaos || 1,
      ...userOptions
    }

    if (!window.p5) {
      throw new Error('p5.js is required for this effect. Please include it via CDN or import.')
    }

    this.el = this.options.el
    this._initCanvas()
    this.onInit()
  }

  _initCanvas() {
    // Inject canvas background color
    if (this.el && this.el.style) {
      this.el.style.backgroundColor = `#${this.options.backgroundColor.toString(16).padStart(6, '0')}`
    }
  }

  initP5(p) {
    p.createCanvas(this.el.offsetWidth, this.el.offsetHeight)
    p.background(this.options.backgroundColor)
  }

  onInit() {
    // To be implemented in child
  }

  destroy() {
    if (this.p5 && this.p5.remove) {
      this.p5.remove()
    }
  }
}

export default P5Base
