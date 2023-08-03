import {loadCss} from './utils.js'

loadCss('Section')

/**esse componente vai nos retornar uma sessão com título
*
*@param {{ title: string; children: any }} props
*@returns
*
**/

export function Section(props) {
    //criando a tag section
    const section = document.createElement('section');
    //criando a tag h2
    const header = document.createElement("h2");

    //adicionando a classe .section para personalizar no css
    section.classList.add('section')
    //inserindo o título passando pelas propriedades
    header.innerText = props.title;
    //criando o content para inserir os filhos passados
    const content = document.createElement('div')
    content.classList.add('content')
//inserindo o conteúdo passado pelas propriedades como filho
// ? é conhecido como Elvis Operator ou Ternário
// é como um if/else de 1 linha apenas
    const children = Array.isArray(props.children)
    
        ? props.children
        : [props.children];
    content.append(...children)
    section.append(header,content);

    return section;
}