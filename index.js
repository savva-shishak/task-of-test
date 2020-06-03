export function minMove(str) {
    let last3Symbols = [];
    let count = 0;
    
    function push(symbol) {
        last3Symbols.push(symbol);

        if (last3Symbols.length > 3) {
            last3Symbols.shift();
        }
    }

    function inArray3SameSymbols() {
        return (last3Symbols[0] == last3Symbols[1]) && (last3Symbols[1] == last3Symbols[2]) && (last3Symbols[0] != undefined);
    }

    for (let id = 0; id < str.length; id++) {
        push(str[id]);
        
        if (inArray3SameSymbols()) {
            last3Symbols = [];
            count++
        }
    }

    return count
}
