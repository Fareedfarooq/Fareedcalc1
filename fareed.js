function btn(e){
    var inp = document.getElementById("inp")
    inp.value += e
}

function equal(){
    var inp = document.getElementById("inp")
    inp.value = eval(inp.value)
}

function clrAll(x){
    var inp = document.getElementById("inp")
    inp.value = x

}

function clr(){
    var inp = document.getElementById("inp")
    var dis = inp.value
    inp.value = dis.slice(0, -1)

}
function btmn(value) {
    var input = document.getElementById("inp")
    if (value === '+' && input.value.endsWith('-')) {
        input.value = input.value.slice(0, -1)
        
    }else if (value === '+' && input.value.endsWith('/')) {
        input.value = input.value.slice(0, -1)
            
    }else if (value === '+' && input.value.endsWith('*')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '-' && input.value.endsWith('+')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '-' && input.value.endsWith('*')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '-' && input.value.endsWith('/')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '*' && input.value.endsWith('+')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '*' && input.value.endsWith('-')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '*' && input.value.endsWith('/')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '/' && input.value.endsWith('+')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '/' && input.value.endsWith('*')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '/' && input.value.endsWith('-')) {
        input.value = input.value.slice(0, -1)
    }
    input.value += value
    }

    function md() {
        var input = document.getElementById("inp")
    
        input.value += "%"
    }
    function dz() {
        var input = document.getElementById("inp")
        input.value += '00'
    }