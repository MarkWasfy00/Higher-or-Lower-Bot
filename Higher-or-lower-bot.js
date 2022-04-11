// Paste in the console
// link of the game : https://moreorless.io/game/youtubers

function cracked(name,has){
    let youtubers = window.listpool; // window.listpool
    for(let youtuber = 0; youtuber < youtubers.length; youtuber++){
        if(name == youtubers[youtuber][0]){
            let vs = youtubers[youtuber][1] > parseInt(has.replaceAll(',', ''));
            vs ? document.getElementById("U2_higher_text").click():document.getElementById("U2_lower_text").click()
            
        }
    }
}
setInterval(() => {
    cracked(document.querySelector('#U2_name').innerHTML,document.getElementById('U1_var').innerHTML)
}, 2000);