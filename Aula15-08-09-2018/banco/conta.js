class CadastrodeConta
{

    constructor()
    {
        this.pessoa = new Pessoa;
        this.saldo = 0.0;
    }

    depositar(valor)
    {
        this.saldo = this.saldo + valor;
    }

    sacar(valor)
    {
        if(this.saldo >= valor)
        {
            this.saldo = this.saldo - valor;
            return true;
        }
        else
        {
            return false;
        }
    }
}

