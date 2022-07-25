define (['add', 'sub', 'square', 'div'], function(add, sub, sq, div, mul) {
    
    let dom = document.getElementById('foo');
    let p1 = document.createElement('p');
    p1.innerText = '5+10 = ' + String(add(5, 10));    

    let p2 = document.createElement('p');
    p2.innerText = '5 - 10 = ' + String(sub(5, 10));

    let p3 = document.createElement('p');
    p3.innerText = 'Square of 5 = ' + String(sq(5));

    let p4 = document.createElement('p');
    p4.innerText = '5 / 10 = ' + String(div(5, 10));    

    dom.appendChild(p1);
    dom.appendChild(p2);
    dom.appendChild(p3);
    dom.appendChild(p4);
});