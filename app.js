import { Accordion, Section, Alert, Button, Tab, Modal } from './components/index.js'

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
        title: Tab.name,
        children: [
            Tab({
                data: [
                    { title: "Accordions", children: Accordion(accordionProps) },

                    {
                        title: "Alerts",
                        children: [
                            Alert({ text: "Hello World red", color: "red" }),
                            Alert({ text: "Hello World yellow", color: "yellow" }),
                        ],
                    },

                    {
                        title: "Buttons",
                        children: [
                            Button({ children: "Botão 2", type: "button", color: "blue" }),
                            Button({ children: "Botão 3", type: "button", color: "red" }),
                        ],
                    },
                ],
            }),
        ],
    }),

    Section({
        title: Accordion.name,
        children: Accordion(accordionProps),
    }),
    Section({
        title: Alert.name,
        children: [
            Alert({ text: "Hello World blue", color: "blue" }),
            Alert({ text: "Hello World green", color: "green" }),
            Alert({ text: "Hello World red", color: "red" }),
            Alert({ text: "Hello World yellow", color: "yellow" }),
        ],
    }),
    Section({
        title: Button.name,
        children: [
            Button({ children: "Botão 1" }),
            Button({ children: "Botão 2", type: "button" }),
            Button({ children: 'Botão 3', type: "button", color: "red" }),
            Button({
                children: 'Botão 4',
                type: "button",
                color: "green",
                onclick: function () {
                    alert("on click funcionando");
                }
            }),
        ]
    }),
    Section({
        title: Modal.name,
        children: [
            Button({
                children: "Abrir modal 1",
                tyoe: "button",
                onclick: function () {
                    const modal = Modal({
                        children: "Aqui está o conteúdo do modal",
                    });



                    modal.show();
                }
            }),

            Button({
                children: "Abrir modal 2",
                tyoe: "button",
                onclick: function () {
                    const modal = Modal({
                        children: [
                            "Aqui está o outro conteúdo do modal",
                            document.createElement('br'),
                            Accordion(accordionProps)
                        ],
                    });

                    modal.show();
                }
            }),
        ],
    }),
)
