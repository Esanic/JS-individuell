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

function intelligentForm()
{
    document.body.removeChild(wrapper);

    createDiv();

    const intelligentForm = document.createElement("form");
    intelligentForm.setAttribute("id","intForm");
    
    const fullName = document.createElement("input");
    fullName.setAttribute("type","text");
    fullName.setAttribute("name","fullName");
    fullName.setAttribute("id","fullName");
    fullName.setAttribute("placeholder","För- och efternamn");

    const eMail = document.createElement("input");
    eMail.setAttribute("type","text");
    eMail.setAttribute("name","eMail");
    eMail.setAttribute("id","eMail");
    eMail.setAttribute("placeholder","E-postadress");

    const adress = document.createElement("input");
    adress.setAttribute("type","text");
    adress.setAttribute("name","adress");
    adress.setAttribute("id","adress");
    adress.setAttribute("placeholder","Adress");

    const postnummer = document.createElement("input");
    postnummer.setAttribute("type","text");
    postnummer.setAttribute("name","postNummer");
    postnummer.setAttribute("id","postNummer");
    postnummer.setAttribute("placeholder","Postnummer");

    const area = document.createElement("input");
    area.setAttribute("type","text");
    area.setAttribute("name","area");
    area.setAttribute("id","area");
    area.setAttribute("placeholder","Ort");

    const avresa = document.createElement("input");
    avresa.setAttribute("type","date");
    avresa.setAttribute("name","avresa");
    avresa.setAttribute("id","avresa");
    avresa.setAttribute("placeholder","Tid för avresa");

    const hemresa = document.createElement("input");
    hemresa.setAttribute("type","date");
    hemresa.setAttribute("name","hemresa");
    hemresa.setAttribute("id","hemresa");
    hemresa.setAttribute("placeholder","Tid för hemresa");

    const checkButton = document.createElement("button");
    checkButton.setAttribute("type","submit");
    checkButton.setAttribute("id","testButton");
    checkButton.setAttribute("disabled","true");
    checkButton.textContent = "Skicka in!";

    const lb = document.createElement("br");
    lb.textContent = "<br>";

    //Labels
    const avreseLabel = document.createElement("p");
    avreseLabel.setAttribute("class","label");
    avreseLabel.textContent = "Avresedatum";
    const hemreseLabel = document.createElement("p");
    hemreseLabel.setAttribute("class","label");
    hemreseLabel.textContent = "Hemresedatum"


    //containers
    const reseDatum = document.createElement("div");
    reseDatum.setAttribute("id","reseDatum");

    const avreseContainer = document.createElement("div");
    avreseContainer.setAttribute("id","avreseContainer");

    const hemreseContainer = document.createElement("div");
    hemreseContainer.setAttribute("id", "hemreseContainer");

    
    //Error meddelanden
    const errorMessages = document.createElement("ul");
    errorMessages.setAttribute("id","errorMessages");

    const errorName = document.createElement("li");
    errorName.setAttribute("id", "errName");
    errorName.textContent = `För- och efternamn i formatet "förnamn efternamn".`;

    const errorEmail = document.createElement("li");
    errorEmail.setAttribute("id", "errEmail");
    errorEmail.textContent = `E-postadress i formatet "namn@domän.toppdomän".`;
    
    const errorAdress = document.createElement("li");
    errorAdress.setAttribute("id", "errAdress");
    errorAdress.textContent = `Adress i formatet "text".`;

    const errorPost = document.createElement("li");
    errorPost.setAttribute("id", "errPost");
    errorPost.textContent = `Postnummer i formatet "12345".`;

    const errorArea = document.createElement("li");
    errorArea.setAttribute("id", "errArea");
    errorArea.textContent = `Ort i formatet "text".`;

    const errorDate = document.createElement("li");
    errorDate.setAttribute("id","errDate");
    errorDate.textContent = `Avresedatum får inte vara senare än hemresedatum.`;
    
    //Append
    intelligentForm.appendChild(fullName);
    intelligentForm.appendChild(lb.cloneNode());
    intelligentForm.appendChild(eMail);
    intelligentForm.appendChild(lb.cloneNode());
    intelligentForm.appendChild(adress);
    intelligentForm.appendChild(lb.cloneNode());
    intelligentForm.appendChild(postnummer);
    intelligentForm.appendChild(lb.cloneNode());
    intelligentForm.appendChild(area);
    intelligentForm.appendChild(lb.cloneNode());
    intelligentForm.appendChild(reseDatum);
    reseDatum.appendChild(avreseContainer);
    avreseContainer.appendChild(avreseLabel);
    avreseContainer.appendChild(avresa);
    reseDatum.appendChild(hemreseContainer);
    hemreseContainer.appendChild(hemreseLabel);
    hemreseContainer.appendChild(hemresa);
    intelligentForm.appendChild(lb.cloneNode());
    intelligentForm.appendChild(checkButton);
    wrapper.appendChild(intelligentForm);
    wrapper.appendChild(errorMessages);
    errorMessages.appendChild(errorName);
    errorMessages.appendChild(errorEmail);
    errorMessages.appendChild(errorAdress);
    errorMessages.appendChild(errorPost);
    errorMessages.appendChild(errorArea);
    errorMessages.appendChild(errorDate);
    let count = 0;
    
    function testInfo()
    {
        
        const nameRe = /[a-zA-Z]+\s[a-zA-Z]+/;
        document.getElementById("fullName").addEventListener("change", function(event)
        {
            const check = nameRe.exec(event.target.value);
            if (!check)
            {
                document.getElementById("errName").style.color = "red";
                
            }
            else
            {
                document.getElementById("errName").style.color = "green";
                count++;
                
            }
        });

        const emailRe = /\S+\@\S+\.\S+/;
        document.getElementById("eMail").addEventListener("change", function(event)
        {
            const check = emailRe.exec(event.target.value);
            if (!check)
            {
                document.getElementById("errEmail").style.color = "red";
            }
            else
            {
                document.getElementById("errEmail").style.color = "green";
                count++;
                
            }
        });

        const adressRe = /[a-zA-Z]+/;
        document.getElementById("adress").addEventListener("change", function(event)
        {

            const check = adressRe.exec(event.target.value);
            if (!check)
            {
                document.getElementById("errAdress").style.color = "red";
            }
            else
            {
                document.getElementById("errAdress").style.color = "green";
                count++;
                
            }
        });

        const postRe = /\d{5}/;
        document.getElementById("postNummer").addEventListener("change", function(event)
        {
            const check = postRe.exec(event.target.value);
            if (!check)
            {
                document.getElementById("errPost").style.color = "red";
            }
            else
            {
                document.getElementById("errPost").style.color = "green";
                count++;
                
            }
        });

        const areaRe = /[a-zA-Z]+/;
        document.getElementById("area").addEventListener("change", function(event)
        {
            const check = areaRe.exec(event.target.value);
            if (!check)
            {
                document.getElementById("errArea").style.color = "red";
            }
            else
            {
                document.getElementById("errArea").style.color = "green";
                count++;
                
            }
        });

        document.getElementById("avresa").addEventListener("change", function()
        {
            const avresa = new Date(intForm.avresa.value);
            const hemresa = new Date(intForm.hemresa.value);
        
            if (avresa > hemresa || avresa == 0 || hemresa == 0)
            {
                document.getElementById("errDate").style.color = "red";
            }
            else
            {
                document.getElementById("errDate").style.color = "green";
                count++;
                
            }

        });

        document.getElementById("hemresa").addEventListener("change", function()
        {
            const avresa = new Date(intForm.avresa.value);
            const hemresa = new Date(intForm.hemresa.value);
        
            if (avresa > hemresa)
            {
                document.getElementById("errDate").style.color = "red";
            }
            else
            {
                document.getElementById("errDate").style.color = "green";
                count++;
                
            }            
            if (count >= 7)
            {
            checkButton.removeAttribute("disabled");
            }

        });

    }
    testInfo();
        
    
}
