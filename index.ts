class utyls {
    leftpad(str: string, len: number, paddingChar:string = '*'): string {

        let checkValues:boolean = true;
        try {
            //TypeChecking of individual parameters
            if (this.isInteger(len) === false) {
                checkValues &= false;
                throw "Required length is not an integer, please correct the 2nd parameter";
            }
            if (this.isChar(paddingChar) === false) {
                checkValues &= false;
                throw "Padding character is not a character, please correct 3rd parameter";
            }
            if (checkValues) {
                while (str.length < len)
                    str = paddingChar + str;
                return str;
            }
            else {
                return undefined;
            }
        }
        catch (err) {
            console.log("ERROR: " + err);
            return undefined;
        }
    }

    isChar(charVal: any): boolean {
        return charVal.length === 1 && (toString.call(charVal) === "[object String]");
    }

    isInteger(intVal:any): boolean {
        if((typeof(intVal))=="number"){
            return parseInt(String(intVal))===intVal;
        }
        return false;
    }
}
export =utyls;
