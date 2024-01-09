let words=0;
let specialCharacter=0;
let spaces=0;
let lines=0;
document.getElementById('btn').addEventListener('click',()=>{
    let text=document.getElementById('text-area').value;
    const wordregex= /\b\w+\b/g;
    for(let i=0;i<text.length;i++)
    {
        let c=text[i];
        if(c==='\n')
            lines++;

        if(c===' ')
            spaces++;
    
        const wordMatch = c.match(wordregex);
        if (wordMatch) 
            words += wordMatch.length;
        
        if ((c<=47 && c>=32) || (c>=58 && c<=64) || (c>=91 && c<=96) || (c>=123 && c<=126))  //ascii values for special character
            specialCharacter++;
    }

    console.log(words)
    console.log(specialCharacter)
    console.log(spaces)
    console.log(lines)

    let header  = document.createElement('h3');
    header.innerText = `WordCount-${words}  LineCount-${lines} Special Characters-${specialCharacter} and Spaces-${spaces}`
    document.querySelector('#display').appendChild(header);
    header.className="header"
    //document.getElementById('textarea').value = ''
    setTimeout(()=>{
        location.reload();
    },7000)

})