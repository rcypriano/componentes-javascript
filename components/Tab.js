import { loadCss } from "./utils.js";

loadCss("Tab");

/**
 * 
 * @param {{ data: {title: string; children: any|any[] }[] }} props
 * @returns
 */
export function Tab(props) {
    //componente do tab
    const wrapper = document.createElement("div");
    wrapper.classList.add("tab");

    //elemento que vai conter os botões do tab
    const header = document.createElement("div");
    header.classList.add("tab-header");

    //elemento que vai conter os conteúdos
    const content = document.createElement("div");
    content.classList.add("tab-content");

    const actives = [];

    // percorrendo os ítens que devem ser montados
    props.data.forEach(function (item, index) {
        const tabItem = TabItem({ title: item.title })
        const tabContent = TabContent({ children: item.children})

        header.append(tabItem);
        content.append(tabContent);

        if (index === 0 ) {
            tabItem.classList.add ('active')
            tabContent.classList.add('active')
            actives.push(tabItem, tabContent)
        }

        tabItem.addEventListener('click', function () {
            console.log(actives)

            actives.forEach(function (active) {
                active.classList.remove('active')
            })

            actives.splice(0,actives.lenght)

            tabItem.classList.add ('active')
            tabContent.classList.add('active')
            actives.push(tabItem, tabContent)

        })
     });
    //inserindo os elementos no componente
     wrapper.append(header, content)

     //retornando o componente
     return wrapper;
}

/**
 * 
 * @param {{ title: string }} props
 * @returns
 * 
 */

function TabItem(props) {
    const item = document.createElement("div");
    item.classList.add("tab-header-item");
    item.innerText = props.title;

    return item;
}

/**
 * 
 * @param {{ children: any|any[]}} props
 * @returns
 * 
 */
function TabContent(props) {
    const content = document.createElement("div");
    content.classList.add("tab-content-item");
    const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

    content.append(...children);
    return content;
}