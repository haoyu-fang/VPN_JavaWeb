import {nextTick} from 'vue';

export async function setcopyblock(selectedblock = '.markdown-body') {
    await nextTick();
    const copyblock = document.querySelectorAll(`${selectedblock} pre`);
    
    copyblock.forEach((block) => {
        if(block.querySelector('.cpbtn'))return;
        
        const btn = document.createElement('button');
        btn.className = 'cpbtn';
        btn.innerText = 'copy';

        btn.onclick = () =>{
            const cpblock = block.querySelector('code')?.innerText || '';
            navigator.clipboard.writeText(cpblock).then( () =>{
                btn.innerText = 'copied';
                btn.classList.add('copied');

                setTimeout(() => {
                    btn.innerText = 'copy'
                    btn.classList.remove('copied');
                },2000);
            });
        };
        block.style.position = 'relative';
        block.appendChild(btn);
    });
}