import { Accordion, Section } from '../components/index.js'

//propriedades que vamos passar para a função Accordion
const accordionProps = {
    data: [
        { title: 'Accordion 1', content: 'Aqui tá o conteúdo do primeiro item do accordion.' },
        { title: 'Accordion 2', content: 'Aqui tá o conteúdo do segundo item do accordion.' },
        { title: 'Accordion 3', content: 'Aqui tá o conteúdo do terceiro item do accordion.' },
    ]
}

document.body.append(
    Section({
        title: Accordion.name,
        children: Accordion(accordionProps),
    })
);

