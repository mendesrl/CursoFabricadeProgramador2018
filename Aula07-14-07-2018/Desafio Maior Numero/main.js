class Maior
{
    verifica()
    {
        var num1 =  parseInt(document.getElementById("num1").value);
        var num2 =  parseInt(document.getElementById("num2").value);
        var num3 =  parseInt(document.getElementById("num3").value);
        var num4 =  parseInt(document.getElementById("num4").value);
        var num5 =  parseInt(document.getElementById("num5").value);

        if(num1>num2)
        {
            if(num1>num3)
            {
                alert("num1 é maior"); 
            }
            else
            {
                alert("num3 é maior");
            }
        }

        else
        {
            if(num2>num3)
            {
                if(num2>num4)
                {
                    alert("num2 é maior");
                } 
            }

            else if (num3>num4)
            {
                if(num3>num5)
                {
                    alert("num3 é maior"); 
                }
                else
                {
                    alert("num5 é maior");
                }
            }

            else if(num4>num5)
            {
                alert("num4 é maior");
            }

            else
            {
                alert("num5 é maior");
            }
        }
        
    }
}

var calcula = new Maior;