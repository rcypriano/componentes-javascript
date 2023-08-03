import {loadCss} from './utils.js'

loadCss('Alert')

const COLORS = ['blue', 'red', 'green', 'yellow',];

/**
 * 
 * @param {{text: string; color: string}} props 
 */

export function Alert(props) {
    const element = document.createElement('div')
    element.classList.add('alert')

    //validamos as cores válidas

    if (COLORS.includes(props.color)) {
        element.classList.add(`alert-${props.color}`)
    }

    const text = document.createElement('p')
    text.innerText = props.text

    element.append(text)

    return element
}