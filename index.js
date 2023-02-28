turn = "x"
count = 9
wintable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function changeturn(tur){
    turn=tur
}
function setvalue(e) {
    // console.log(e)
    index = +e.target.id

    count--
    if (count == 0) {
        alert("no one wins")
    }
    // console.log(typeof e.target.id)
    if (e.target.innerText == '') {
        e.target.innerText = turn
        if (turn == 'x') {
            turn = '0'
            setx(index)

        }
        else {
            turn = 'x'
            setzero(index)
        }
        x = checkwin()
        if (x == 'x') {
            console.log('x is winner')
            alert('x wins')
            location.reload()
        }
        else if (x == '0') {
            console.log('0 is winner')
            alert('o wins')
            location.reload()

        }
        else {
            console.log('carry on')
        }
    }
}

function setx(id) {
    for (x of wintable) {
        for (let i = 0; i < x.length; i++) {
            if (x[i] === id) {
                x[i] = 'x'
            }
        }
    }
    console.log(wintable)
}

function setzero(id) {
    for (x of wintable) {
        for (let i = 0; i < x.length; i++) {
            if (x[i] ==- id) {
                x[i] = '0'
            }
        }
    }
    console.log(wintable)
}
function checkwin() {
    for (x of wintable) {
        console.log(x)
        if (x.every((el) => el === 'x')) {
            return 'x'
        }
        else if (x.every((el) => el === '0')) {
            return 'o'
        }
    }
    return 'no'
}