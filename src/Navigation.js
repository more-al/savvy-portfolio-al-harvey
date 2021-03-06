import { lowerCase } from 'lodash';

function buildLinks(linkArray){
    var linkList = linkArray.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `<li>
        <a data-navigo href="./${destination}">
        ${link}
        </a>
        </li>
        `;
    }).join(' ');


    return linkList;
}


export default function Navigation(links){
    return `
    <div id="navigation">
    <ul class="container">
    ${buildLinks(links)}
    </ul>
    </div>
`;
}