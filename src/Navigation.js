export default function Navigation(){
    return `
    <div id="navigation">
    <ul class="container">
        <li><a href="./.">Home</a></li>
        <li><a href="./Blog/.">Blog</a></li>
        <li><a href="./Contact/.">Contact</a></li>
        <li><a href="./Projects/.">Projects</a>
            <ul>
                <li><a href="">First</a></li>
                <li><a href="">Second</a></li>
                <li><a href="">Third</a></li>
            </ul>
        </li>
    </ul>
    </div>
`;
}