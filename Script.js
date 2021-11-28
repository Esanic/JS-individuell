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

    var aktuellTid = new Date();

    aktuellTimme = aktuellTid.getHours();
    aktuellTimme = ("0"+aktuellTimme).slice(-2);

    aktuellMinut = aktuellTid.getMinutes();
    aktuellMinut = ("0"+aktuellMinut).slice(-2);

    aktuellSekund = aktuellTid.getSeconds();
    aktuellSekund = ("0"+aktuellSekund).slice(-2);

    let aktuelltDatum = `${aktuellTid.getFullYear()}-${(aktuellTid.getMonth()+1)}-${aktuellTid.getDate()}T${aktuellTimme}:${aktuellMinut}:${aktuellSekund}`;

    const avresa = document.createElement("input");
    avresa.setAttribute("type","datetime-local");
    avresa.setAttribute("name","avresa");
    avresa.setAttribute("id","avresa");
    avresa.setAttribute("min",aktuelltDatum);

    const hemresa = document.createElement("input");
    hemresa.setAttribute("type","datetime-local");
    hemresa.setAttribute("name","hemresa");
    hemresa.setAttribute("id","hemresa");
    hemresa.setAttribute("min",aktuelltDatum);

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


    //Containers
    const reseDatum = document.createElement("div");
    reseDatum.setAttribute("id","reseDatum");

    const avreseContainer = document.createElement("div");
    avreseContainer.setAttribute("id","avreseContainer");

    const hemreseContainer = document.createElement("div");
    hemreseContainer.setAttribute("id", "hemreseContainer");

    
    //Error-check meddelanden
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

    
    function formTest()
    {
    let count = 0
    function testInput(nameOfId, regEx, nameOfErrId)
    {
            document.getElementById(nameOfId).addEventListener("change",function(event)
        {
            const check = regEx.test(event.target.value);
            if (!check)
            {
                document.getElementById(nameOfErrId).style.color = "red";
                if (count >= 1)
                {
                    count--;
                }

            }
            if (check)
            {
                document.getElementById(nameOfErrId).style.color = "green";
                count++
            }

        });
    }

    function testDate(nameofId,nameOfErrId)
    {
        document.getElementById(nameofId).addEventListener("change", function()
        {
            const avresa = new Date(intForm.avresa.value);
            const hemresa = new Date(intForm.hemresa.value);
        
            if (avresa > hemresa ||(avresa == "Invalid Date" || hemresa == "Invalid Date"))
            {
                document.getElementById(nameOfErrId).style.color = "red";
                if (count >= 1 && count != 4)
                {
                    count--;
                }
            }
            if (avresa < hemresa &&(!(avresa == "Invalid Date" || hemresa == "Invalid Date")))
            {
                document.getElementById(nameOfErrId).style.color = "green";
                count++
            }
            
            if(count >= 5)
            {
                checkButton.removeAttribute("disabled");
            }
            if(count <= 4)
            {
                checkButton.setAttribute("disabled","true");
            }
        });
    }
    testInput("fullName",/[a-zA-Z]+\s[a-zA-Z]+/,"errName");
    testInput("eMail",/\S+\@\S+\.\S+/,"errEmail");
    testInput("adress",/[a-zA-Z]+/,"errAdress");
    testInput("postNummer",/\d{5}/,"errPost");
    testInput("area",/[a-zA-Z]+/,"errArea");
    testDate("avresa","errDate");
    testDate("hemresa","errDate");
}
formTest();

    // const testInputData = [{field: "fullName", regex: /[a-zA-Z]$/, error: "errName"}, 
    // {field:"eMail",regex: /\S+\@\S+\.\S+/, error: "errEmail"},
    // {field:"adress",regex: /[a-zA-Z]+/,error:"errAdress"},
    // {field:"postNummer",regex:/\d{5}/,error:"errPost"},
    // {field:"area",regex:/[a-zA-Z]+/,error:"errArea"}];
    // const results = testInputData.map(test => testInput(test.field, test.regex, test.error));
    // const noErrors = results.filter(result => result === true).length === testInputData.length;

    // console.log(noErrors);

}

function klasser()
{
    document.body.removeChild(wrapper);

    createDiv();
    class Person{
        constructor(namn, ålder, ort)
        {
            this.namn = namn;
            this.ålder = ålder;
            this.ort = ort;
        }
        age = function()
        {
            const beskrivning = document.createElement("p");
            beskrivning.textContent = `${this.namn} är ${this.ålder} år gammal.`;
            wrapper.appendChild(beskrivning);
        }
        boende = function()
        {
            const boende = document.createElement("p");
            boende.textContent = `${this.namn} bor i ${this.ort}.`;
            wrapper.appendChild(boende);
        }

    }
    class Student extends Person {
        constructor(namn, ålder, ort, betyg, utbildning, lärare)
        {
            super(namn, ålder, ort);
            this.betyg = betyg;
            this.utbildning = utbildning;
            this.lärare = lärare;
        }
        education = function()
        {
            const education = document.createElement("p");
            education.textContent = `${this.namn} är ${this.ålder} gammal och bor i ${this.ort}. ${this.namn} studerar ${this.utbildning}.`;
            wrapper.appendChild(education);
        }
        grade = function()
        {
            const grade = document.createElement("p");
            grade.textContent = `${this.namn} har ${this.betyg} i betyg och har ${this.lärare} som lärare.`;
            wrapper.appendChild(grade);
        }
    }
    let Christopher = new Person("Christopher","29","Sävsjö");
    Christopher.age();
    Christopher.boende();

    let Anna = new Student("Anna","26","Sävsjö","VG","Industridesign","Holger");
    Anna.education();
    Anna.grade();

}


function jquery()
{
    document.body.removeChild(wrapper);

    createDiv();

    const ptagg = document.createElement("p");
    ptagg.setAttribute("id","invisTagg");
    ptagg.textContent = "Klicka på mig så försvinner jag";
    
    const ptagg2 = document.createElement("p");
    ptagg2.setAttribute("id","colorTagg");
    ptagg2.textContent = "Klicka på mig så byter jag färg";
    
    const ptagg3 = document.createElement("p");
    ptagg3.setAttribute("id","hoverTagg");
    ptagg3.textContent = "Håll musen över mig så byter jag bakgrundsfärg.";

    const meny = document.createElement("nav");
    meny.setAttribute("id","menu");

    const lista = document.createElement("ul");
    lista.setAttribute("id","menylista");

    const li1 = document.createElement("li");
    li1.setAttribute("id","menyitem1");
    li1.textContent="Meny-item 1";
    const li2 = document.createElement("li");
    li2.setAttribute("id","menyitem2");
    li2.textContent="Meny-item 2";

    const undermeny = document.createElement("ul");
    undermeny.setAttribute("class","undermeny");


    const underli1 = document.createElement("li");
    underli1.setAttribute("class","underli");
    underli1.textContent = "Under 1";

    const underli2 = document.createElement("li");
    underli2.setAttribute("class","underli");
    underli2.textContent = "Under 2";

    const box = document.createElement("div");
    box.setAttribute("id","box");
    box.textContent = "Klicka på mig!";

    const button1 = document.createElement("button");
    button1.setAttribute("id","button1");
    button1.textContent = "Klicka på mig så ändrar jag texten på paragrafen som byter färg";

    const button2 = document.createElement("button");
    button2.setAttribute("id","button2");
    button2.textContent = "Klicka på mig så lägger jag till text på paragrafen som byter färg";

    const linebreak = document.createElement("br");
    linebreak.textContent = "<br>";



    
    wrapper.appendChild(ptagg);
    wrapper.appendChild(ptagg2);
    wrapper.appendChild(ptagg3);
    wrapper.appendChild(meny);
    meny.appendChild(lista);
    lista.appendChild(li1);
    lista.appendChild(li2);
    li1.appendChild(undermeny);
    undermeny.appendChild(underli1);
    undermeny.appendChild(underli2);
    wrapper.appendChild(box);
    wrapper.appendChild(button1);
    wrapper.append(linebreak.cloneNode());
    wrapper.append(linebreak.cloneNode());
    wrapper.appendChild(button2);

    $(function(){
        $("#invisTagg").click(function(){
            $(this).hide("slow");
        });
        
        $("#colorTagg").click(function(){
            $(this).css("color","red");
        });
        
        $("#hoverTagg").on({
            mouseenter: function(){
                $(this).css("background-color","lightgray");
            },
            mouseleave: function(){
                $(this).css("background-color","white");
            }
            });
        })

        $("#menyitem1").hover(function(){
            $(".underli").css("display","static");
            $(".underli").fadeToggle("fast");
        });

        $("#box").click(function(){
            var div = $("#box");
            div.animate({left:"400px"}, 1000);
            div.animate({left:"0px"},1000);
            div.animate({left:"250px"},600);
            div.animate({left:"0px"},600);
            div.animate({left:"125px"},400);
            div.animate({left:"0px"},400);
            div.animate({left:"62.5px"},250);
            div.animate({left:"0px"},250);
            div.animate({left:"30px"},125);
            div.animate({left:"0px"},125);
            div.animate({left:"5px"},50);
            div.animate({left:"0px"},50);
        });

        $("#button1").click(function(){
            $("#colorTagg").text("Nu bytte jag text :)");
        });

        $("#button2").click(function(){
            $("#colorTagg").append(" Denna texten har lagts till.");
        });


     
}

    

