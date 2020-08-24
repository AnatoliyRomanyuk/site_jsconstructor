import {titleBlock, textBlock} from './blocks'

export class Sidebar {
    constructor(selector, update) {

        this.$el = document.querySelector(selector)
        this.update = update
        this.init()
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

   get template() {
        return [
            blockSidebar('text'),
            blockSidebar('title')
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()
         console.log('event: ',event);

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        //debugger
        const Constructors = type === 'text' ? textBlock : titleBlock

        const newBlock = new Constructors(value, {styles})

        console.log('newBlock: ', newBlock);
        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''
    }

}

function blockSidebar(type) {
    return `
        <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
    `

}