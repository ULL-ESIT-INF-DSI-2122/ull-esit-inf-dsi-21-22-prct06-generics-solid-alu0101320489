export abstract class Cifrado {
    constructor (public readonly clave: string, public readonly texto: string, protected abecedario: string[]) {
        this.abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    }
    getClave(): string {
        return this.clave;
    }
    getTexto(): string {
        return this.texto;
    }
    getAbecedario(): string[] {
        return this.abecedario;
    }
    setAbecedario(abe:string[]) {
        this.abecedario = abe;
    }

    index(s: string): number {
        let result = 0;
        this.abecedario.forEach((abecedario, n) =>{ 
            if (s == abecedario) {
                result = n;
            }
        });
        return result;
    }

}

export class Codificacion extends Cifrado {
    constructor (clave: string, texto: string, abecedario: string[]) {
        super(clave, texto, abecedario)
    }
    codificar(): string {
        let result: string = '';
        let aux: number = 0;
        let j: number = 0;
        let des: number = 0;
        for (let i = 0; i < this.texto.length; i++) {
            if (i > this.clave.length) {
                j = 0;
            }
            des = this.index(this.clave.charAt(i));
            aux = this.index(this.texto.charAt(i));
            aux = des + aux;
            if (aux > this.abecedario.length - 1) {
                aux = Math.abs(aux - (this.abecedario.length - 1))
            }
            result = result + this.abecedario[aux];
            j++;
        }
        return result;
    }

}

export class Decoficicacion extends Cifrado {
    constructor (clave: string, texto: string, abecedario: string[]) {
        super(clave, texto, abecedario)
    }
    decodificar(): string {
        let result: string = '';
        let aux: number = 0;
        let j: number = 0;
        let des: number = 0;
        for (let i = 0; i < this.texto.length; i++) {
            if (i > this.clave.length) {
                j = 0;
            }
            des = this.index(this.clave.charAt(i));
            aux = this.index(this.texto.charAt(i));
            aux = aux - des;
            if (aux > this.abecedario.length - 1) {
                aux = Math.abs(aux - (this.abecedario.length - 1))
            }
            result = result + this.abecedario[aux];
            j++;
        }
        return result;
    }
}