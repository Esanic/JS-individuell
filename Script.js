function createDiv()
{
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id","wrapper");
    document.body.appendChild(wrapper);
}

function multiplikation()
{
    document.body.removeChild(wrapper);

    createDiv();
    let num = 1;
    
    const container = document.createElement("div");
    container.setAttribute("id", "mainContainer");
    
    
    for (let i = 0; i < 10; i++)
    {
    
    const multiplikations = document.createElement("div");
    multiplikations.setAttribute("id", "multiplicationContainer")
    container.appendChild(multiplikations)
        
        for (let ii = 1; ii < 11; ii++)
        {
            const span = document.createElement("span");
            span.textContent = num + " * " + ii + " = " + num*ii;
            multiplikations.appendChild(span);
            
            const radbrytning = document.createElement("br");
            radbrytning.textContent = "<br>";
            multiplikations.appendChild(radbrytning)   
        }
    num++;
    }
    wrapper.appendChild(container);
}

function gissaTaletPrompt()
{
    let gissning = "";
    let answer = Math.floor(Math.random() * 100 + 1);
    let nbrGuesses = 0;



    while (gissning != answer)
    {

        gissning = prompt("Gissa ett tal mellan 1 och 100");        
        if (gissning == null)
        {
            break;
        }
        if (gissning < answer)
        {
            nbrGuesses++;
            alert("För lågt"+"\n"+"Du har gissat "+nbrGuesses+" gånger.");

        }   
        if (gissning > answer)
        {
            nbrGuesses++;
            alert("För högt"+"\n"+"Du har gissat "+nbrGuesses+" gånger.");
        }
        if (gissning == answer)
        {
            alert("Du vann!"+"\n"+"Du gissade "+nbrGuesses+" gånger.");
            nbrGuesses = 0;
        }

    }
}

function gissaTaletFormular()
{
    document.body.removeChild(wrapper);
    createDiv();
    
    const form = document.createElement("form");
    form.setAttribute("id","gissaFormular");

    const input = document.createElement("input");
    input.setAttribute("class","textField");
    input.setAttribute("type","text");
    input.setAttribute("name","gissning");
    input.setAttribute("placeholder","Skriv ett tal mellan 1 och 100")
    input.setAttribute("onkeyup","gissaTaletFunc();");
    
    const output = document.createElement("input");
    output.setAttribute("class","textField");
    output.setAttribute("type","text");
    output.setAttribute("name","resultat");
    output.setAttribute("disabled","true");

    const lb = document.createElement("br");
    lb.textContent = "<br>";

    form.appendChild(input);
    form.appendChild(lb);
    form.appendChild(output);
    wrapper.appendChild(form);

}
function answer()
    {
        const answer = Math.floor(Math.random() * 100 + 1);
        return answer;
    }

const randNumber = answer();

function gissaTaletFunc()
{

    const gissning = gissaFormular.gissning.value;

    if(Number(gissning)<randNumber)
    {
        gissaFormular.resultat.value = "För lågt!"
    }
    if(Number(gissning)>randNumber)
    {
        gissaFormular.resultat.value = "För högt!"
    }
    if(Number(gissning)==randNumber)
    {
        gissaFormular.resultat.value = "Du gissade rätt!"
    }
}


function rovarSpraketPrompt()
{
    const text = prompt("Ange det du önskar översätta till röverspråket");
    let rovar = "";

    function isKonsonant(tkn)
    {
        const konsonanter = {b:true, c:true, d:true, f:true, g:true, h:true, j:true, k:true, l:true, m:true, n:true, p:true, q:true, r:true, s:true, t:true, v:true, x:true, z:true};
        return konsonanter[tkn.toLowerCase()];
    }

    for (let i = 0; i < text.length; i++)
    {
        if(isKonsonant(text[i]))
        {
            rovar += text[i] + "o" + text[i].toLowerCase();
        }
        else
        {
            rovar += text[i];
        }
    }
    alert(rovar);
}

function rovarSpraket()
{
    document.body.removeChild(wrapper);

    createDiv();

    const form = document.createElement("form");
    form.setAttribute("id","rovarFormular");

    const input = document.createElement("input");
    input.setAttribute("class","textField");
    input.setAttribute("type","text");
    input.setAttribute("name","originalText");
    input.setAttribute("placeholder","Skriv det du önskar översätta...")
    input.setAttribute("onkeyup","rovarSpraketFunc();")

    const output = document.createElement("input");
    output.setAttribute("class","textField");
    output.setAttribute("type","text");
    output.setAttribute("name","rovarSprak");
    output.setAttribute("disabled", "true");
    
    const lb = document.createElement("br");
    lb.textContent = "<br>";

    form.appendChild(input);
    form.appendChild(lb);
    form.appendChild(output);
    wrapper.appendChild(form);
}

function rovarSpraketFunc()
{   
    let text = rovarFormular.originalText.value;
    let rovar = "";
    
    
    function isKonsonant(tkn)
    {
        const konsonanter = {b:true, c:true, d:true, f:true, g:true, h:true, j:true, k:true, l:true, m:true, n:true, p:true, q:true, r:true, s:true, t:true, v:true, x:true, z:true};
        return konsonanter[tkn.toLowerCase()];
    }

    for (let i = 0; i < text.length; i++)
    {
        if(isKonsonant(text[i]))
        {
            rovar += text[i] + "o" + text[i].toLowerCase();
        }
        else
        {
            rovar += text[i];
        }
    }
    rovarFormular.rovarSprak.value = rovar;
}
