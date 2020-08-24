import image from './assets/image.png'
import {imageBlock, textBlock, textColumnsBlock, titleBlock} from './classes/blocks'
import {css} from  './utils'

//console.log('image:', image);

export const model = [
    new titleBlock('test title', {
    tag: 'h2',
    styles: css({
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
    })
        //styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),

    new imageBlock(image, {
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }),
    new textBlock('test text', {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    }),
    new textColumnsBlock([
        'text1',
        'text2',
        'text3',
        'text4',
    ],
    {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
]