import {util} from '../utils'
class Block {
    constructor(value, options) {
        //this.type = type
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('Метод toHTML должен быть реализован!')
    }
}

export class titleBlock extends Block {
    constructor(value, options) {
        super(value, options) //super('title', value, options)
    }

    toHTML() {
        const {tag = 'h2', styles} = this.options
        return util.row(util.colSm(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class imageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {alt, styles, imageStyles} = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`
        return util.row(html, styles)
    }
}

export class textBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        return util.row(util.colSm(`<p style="margin-bottom: 0">${this.value}</p>`), styles)
    }
}

export class textColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        const html = this.value.map(item => `${util.colSm(`${item}`)}`)
        return util.row(html.join(' '), styles)
    }
}
