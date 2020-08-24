//import './module.js'
import {model} from './model.js'
import {Site} from "./classes/site";
import {Sidebar} from './classes/sidebar.js'
//import {templates} from './templates.js'
import './styles/main.css'

console.log('I am js index');
/*
document.querySelector('h1').style.color = 'green'
console.log('model.js: ', model);

console.log('templates:' ,templates['text']);


const site = document.querySelector('#site')
*/

function updateCallback(newBlock) {
    model.push(newBlock)
    site.render(model)
}

const site = new Site('#site')
//console.log('site:', site);
new Sidebar('#panel', updateCallback)

site.render(model)



/*model.forEach(block => {
    site.$el.insertAdjacentHTML('beforeend', block.toHTML())

    //console.log('block:', block.toHTML());
   /* //let html
    const generate = templates[block.type]
    //console.log('generate:', generate);
    if(generate) {
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    }
    */
    /*if(block.type === 'title') {
        html = title(block)
    } else if(block.type === 'text') {
        html = text(block)
    } else if(block.type === 'textColumns') {
        html = textColumns(block)
    }
})*/
