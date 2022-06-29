import "./styles/index.css";
import "./styles/base.scss";

const main = () => {
  console.log('Helllooooo123!');  
}

main();

import { gsap } from 'gsap';


// let rule = CSSRulePlugin.getRule('.brand-name:after');

gsap.to('h1', 2, { x: 200 });
// gsap.to(rule, 2, { width: "100%" });