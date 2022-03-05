const signs = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "RESET", "="];

let execute = document.querySelector(".execution");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button, index) =>
    {
        buttons[index].setAttribute("data-sign", signs[index]);
    });
let screenSigns = [];
for(let x = 0; x < buttons.length; x++)
{
    if(buttons[x].dataset.sign < 10)
    {
        buttons[x].addEventListener("click", () =>
        {
            screenSigns.push(buttons[x].dataset.sign);
            execute.textContent += screenSigns[screenSigns.length - 1];
        });
    }
    else if(buttons[x].dataset.sign == "+" || buttons[x].dataset.sign == "-" || buttons[x].dataset.sign == "/" || buttons[x].dataset.sign == "x")
    {
        buttons[x].addEventListener("click", () =>
        {
            for(let a = 0; a < screenSigns.length; a++)
            {
                if(!(screenSigns[a] == "+" || screenSigns[a] == "-" || screenSigns[a] == "x" || screenSigns[a] == "/"))
                {
                    if(a == screenSigns.length-1)
                    {
                        screenSigns.push(buttons[x].dataset.sign);
                        execute.textContent += " " + screenSigns[screenSigns.length - 1] + " ";
                        console.log(screenSigns);
                    }
                }
                else
                {
                    break;
                }
            }
        });
    }
    else if(buttons[x].dataset.sign == "DEL")
    {
        buttons[x].addEventListener("click", () =>
        {
            if(screenSigns == "+" || screenSigns == "-" || screenSigns == "/" || screenSigns == "x")
            {
                screenSigns.pop();
                execute.textContent = execute.textContent.substring(execute.textContent.length-3, 3);
            }
            else
            {
                screenSigns.pop();
                execute.textContent = execute.textContent.substring(execute.textContent.length-1, 1);
            }
        });
    } 
    else if(buttons[x].dataset.sign == "RESET")
    {
        buttons[x].addEventListener("click", () =>
        {
            screenSigns = [];
            execute.textContent = "";
        });
    }
    else if(buttons[x].dataset.sign == ".")
    {
        buttons[x].addEventListener("click", () =>
        {
            for(let a = 0; a < screenSigns.length; a++)
            {
                if(!(screenSigns[a] == "."))
                {
                    if(a == screenSigns.length-1)
                    {
                        screenSigns.push(buttons[x].dataset.sign);
                        execute.textContent += screenSigns[screenSigns.length - 1];
                    }
                }
            }
        });
    }
    else if(buttons[x].dataset.sign == "=")
    buttons[x].addEventListener("click", () =>
        {
            for(let a = 0; a < screenSigns.length; a++)
            {
                if(screenSigns[a] == "+" || screenSigns[a] == "-" || screenSigns[a] == "/" || screenSigns[a] == "x")
                {
                    if(screenSigns[a] == "+")
                    {
                        let firstPart;
                        let secondPart;
                        for(let c = 0; c < screenSigns.indexOf("+"); c++)
                        {
                            if(c==0)
                            {
                                firstPart = screenSigns[c];
                            }
                            else
                            {
                                firstPart += screenSigns[c];
                            }
                        }
                        for(let d = screenSigns.indexOf("+")+1; d < screenSigns.length; d++)
                        {
                            if(d = screenSigns.indexOf("+")+1)
                            {
                                secondPart = screenSigns[d];
                            }
                            else
                            {
                                secondPart += screenSigns[d];
                            }
                        }
                        let result = parseInt(firstPart) + parseInt(secondPart);
                        execute.textContent = result;
                    }
                    if(screenSigns[a] == "-")
                    {
                        let firstPart;
                        let secondPart;
                        for(let c = 0; c < screenSigns.indexOf("-"); c++)
                        {
                            if(c==0)
                            {
                                firstPart = screenSigns[c];
                            }
                            else
                            {
                                firstPart += screenSigns[c];
                            }
                        }
                        for(let d = screenSigns.indexOf("-")+1; d < screenSigns.length; d++)
                        {
                            if(d = screenSigns.indexOf("-")+1)
                            {
                                secondPart = screenSigns[d];
                            }
                            else
                            {
                                secondPart += screenSigns[d];
                            }
                        }
                        let result = parseInt(firstPart) - parseInt(secondPart);
                        execute.textContent = result;
                    }
                    if(screenSigns[a] == "x")
                    {
                        let firstPart;
                        let secondPart;
                        for(let c = 0; c < screenSigns.indexOf("x"); c++)
                        {
                            if(c==0)
                            {
                                firstPart = screenSigns[c];
                            }
                            else
                            {
                                firstPart += screenSigns[c];
                            }
                        }
                        for(let d = screenSigns.indexOf("x")+1; d < screenSigns.length; d++)
                        {
                            if(d = screenSigns.indexOf("x")+1)
                            {
                                secondPart = screenSigns[d];
                            }
                            else
                            {
                                secondPart += screenSigns[d];
                            }
                        }
                        let result = parseInt(firstPart) * parseInt(secondPart);
                        execute.textContent = result;
                    }
                    if(screenSigns[a] == "/")
                    {
                        let firstPart;
                        let secondPart;
                        for(let c = 0; c < screenSigns.indexOf("/"); c++)
                        {
                            if(c==0)
                            {
                                firstPart = screenSigns[c];
                            }
                            else
                            {
                                firstPart += screenSigns[c];
                            }
                        }
                        for(let d = screenSigns.indexOf("/")+1; d < screenSigns.length; d++)
                        {
                            if(d = screenSigns.indexOf("/")+1)
                            {
                                secondPart = screenSigns[d];
                            }
                            else
                            {
                                secondPart += screenSigns[d];
                            }
                        }
                        let result = parseInt(firstPart) / parseInt(secondPart);
                        execute.textContent = result;
                    }
                    break;
                }
            }
        });
}