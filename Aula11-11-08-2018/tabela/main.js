class CriaTabela
{
    tabela()
    {
        var tabela = document.createElement("table");
        var tabelaTR = document.createElement("tr");
        var tabelaTRTD = document.createElement("tr");
        var tabelaposition = document.createElement("th");
        var tabelanome = document.createElement("th");
        var tabelaTD = document.createElement("td");

        tabelaposition.innerText = "oi";
        tabelanome.innerText = "dois";
        tabelaTR.appendChild(tabelaposition);
        tabelaTR.appendChild(tabelanome);
        tabela.appendChild(tabelaTR);
        
        tabelaTD.innerText = "deu certo";
        tabelaTRTD.appendChild(tabelaTD);
        tabela.appendChild(tabelaTRTD);

        


        document.body.appendChild(tabela);
        
    }
}

      let gera = new CriaTabela();


      


      /*
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th> 
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>
      */