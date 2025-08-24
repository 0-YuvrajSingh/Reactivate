function customRender(reactElement, container) {

    /* ❌ Why This Code Isn't Used (Correct Reason):

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);

    Reason : 
    Because it's hardcoded — it only works if reactElement.props contains exactly href and target.

    If your element has more, fewer, or different attributes, this will:

    ❌ Break

    ❌ Miss attributes

    ❌ Require constant changes to the code

    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://reactjs.org',
        target: '_blank',
    },
    children: 'Link to React'
};

const mainElement = document.querySelector('#root');

customRender(reactElement, mainElement);