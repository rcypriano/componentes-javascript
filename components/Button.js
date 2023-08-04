import { loadCss } from "./utils.js";

loadCss("Button");

const COLORS = ["blue", "green", "red", "yellow"];


export function Button(props) {
    const button = document.createElement('button')
    button.classList.add("button")
    if (COLORS.includes(props.color)) {
        button.classList.add(`button-${props.color}`)
    }

    button.append(props.children)

    for (let property in props) {
        if (property === 'color' || property === 'children') {
            continue
        }

        if (property.startsWith('on')) {
            button[property] = props[property];
        } else {
            button.setAttribute(property, props[property]);
        }

            
    }
    return button
}