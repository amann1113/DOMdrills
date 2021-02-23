document.addEventListener('DOMContentLoaded', function(){

    
    let friends = ['Austin', 'Jonathan', 'Braden', 'Nick', 'Bradley',]
    let button = document.getElementsByTagName('button'); 
   
   button.addEventListener('click', function () {
    for (let j = 0; j < Friends.length; ++j) {

        
    const div = document.createElement('div');
        div.className = "friend";

        let name = friends[j];
        const h3 = document.createElement('h3')
        let h3Text = document.createTextNode(name);
        h3.appendChild(h3text);
        div.appendChild(h3);

        for (let i = 99; i > 0; i--) {
            let line = i - 1;
            if (i == 1){

                let p = document.createElement('p');
                let ptext = document.createTextNode(i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, 0 lines of code in the file.');
                p.appendChild(pText);
                div.appendChild(p);
            } else if (i == 2) {
                let p = document.createElement('p');
                let pText = document.createTextNode(i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, ' + line + ' lines of code in the file.')
            } else {
                let p = document.createElement('p');
                let pText = document.createTextNode(i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, ' + line + ' lines of code in the file.')
                p.appendChild(pText);
                div.appendChild(p);
            }
        };
            
        document.body.appendChild(div);

        
    };
})
})
