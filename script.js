const btn=document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('I am clicked')

    const form=document.forms[0];
    console.log(form)
    const txt=document.createElement("textarea");
    const sb=document.createElement('button')
    txt.setAttribute('cols','40vw');
    txt.setAttribute('rows','5vw');
    sb.textContent='submit'
    sb.classList.add('green');
    txt.classList.add('hl');
    form.append(txt,sb);

})