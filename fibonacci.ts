function fibonacci(n:number) {
    let tab :Array<number> = [1, 1];
    let str:string = '';
    for (let i = 0; i < n; i++) {
        tab.push(tab[i] + tab[i + 1])
        str = str + tab[i] + ","
    }
    return str
} console.log(fibonacci(13));