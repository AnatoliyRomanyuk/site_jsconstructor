import {util} from './utils'
function title(block) {
    /*const tag = block.options.tag
    const styles = block.options.styles*/
    const {tag, styles} = block.options
    //console.log('block.option.tag: ', block.options.tag);
    return util.row(util.colSm(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
    const styles = block.options.styles
    return util.row(util.colSm(`<p style="margin-bottom: 0">${block.value}</p>`), styles)
}

function textColumns(block) {
    const styles = block.options.styles
    //console.log('textColumns:' ,block.value);
    const html = block.value.map(item => `${util.colSm(`${item}`)}`/*console.log('item:', item);*/)
    return util.row(html.join(' '), styles)
}

function image(block) {
    const {alt, styles, imageStyles} = block.options
    const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}">`
    return util.row(html, styles)
}

export const templates = {
    title,
    text: text,
    textColumns,
    image,

}