import {loadCss} from './utils.js'

loadCss('Accordion')

/**
 * 
 * @param {{ data: {title: string; content: string } []}} props 
 * @returns {HTMLElement}
 */
export function Accordion(props) {
    const data = props.data;
    console.log(data);
    const element = document.createElement('div')
    element.classList.add('accordion')

    for (let index = 0; index < data.length; index += 1) {
        const item = data[index];
        element.append(AccordionItem(item));
    }

    return element;
}



/**
 * 
 * @param {{ title: string; content: string }} props 
 */
function AccordionItem(props) {
    const title = props.title;
    const content = props.content;
    const element = document.createElement('div');
    element.classList.add('accordion-item');
    // criando um elemento header para o html pelo js
    const titleElement = document.createElement("header");
    //colocando um conteúdo nesse header
    titleElement.innerText = title;
    titleElement.onclick = function () {
        element.classList.toggle('active')
    }
    //criando um div pro conteúdo para o html pelo js
    const contentElement = document.createElement("div");
    //
    contentElement.classList.add("accordion-content");
    const contentText = document.createElement("p");
    contentText.innerText = content;
    contentElement.append(contentText);
    element.append(titleElement, contentElement);

    return element;
}