import { loadCss } from './utils.js'

loadCss('Modal')

export function Modal(props) {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const closeButton = document.createElement('button')
    closeButton.classList.add('modal-close')
    closeButton.innerText = 'X'

    closeButton.addEventListener("click", hide);

    const children = Array.isArray(props.children)
        ? props.children
        : [props.children];
    modal.append(closeButton, ...children);

    function show() {
        document.body.append(modal)
        modal.classList.add('active')
    }

    function hide() {
        modal.classList.remove('active')
        modal.remove()
    }

    return {
        show: show,
        hide: hide
    };

}