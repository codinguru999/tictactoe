turn = "x"
count = 9
startTurn='x'
var audio=new Audio('https://github.com/codinguru999/tictactoe/blob/main/click-47609.mp3')
var success=new Audio('https://github.com/codinguru999/tictactoe/blob/main/failure-drum-sound-effect-2-7184.mp3')
var fail=new Audio('https://github.com/codinguru999/tictactoe/blob/main/success-fanfare-trumpets-6185.mp3')
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
function showturnselect(e) {
    e.target.disabled=true
    document.getElementById('turnselect').classList.remove('d-none')
    document.getElementById('turnselect').classList.add('d-flex')
}
function changeturn(tur) {
    document.getElementById("Box").addEventListener('click', setvalue)
    document.getElementById('x').disabled = true
    document.getElementById('0').disabled = true
    turn = tur
    startTurn=tur
    // document.getElementById('turnselect').classList.remove('d-flex')
    // document.getElementById('turnselect').classList.add('d-none')
}
function setvalue(e) {
    // console.log(e)
    audio.play()
    
    index = +e.target.id

    count--
    if (count == 0) {
        // alert("no one wins")
        document.getElementById('winselect').classList.remove('d-none')
        document.getElementById('winselect').classList.add('d-flex')
        document.getElementById('xwin').style.display = 'none'
        document.getElementById('0win').style.display = 'none'
        document.getElementById('nowin').style.display = 'block'
        fail.play()

    }
    // console.log(e.target.innerHTML)
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
    }
    x = checkwin()
    if (x == 'x') {
        document.getElementById('winselect').classList.remove('d-none')
        document.getElementById('winselect').classList.add('d-flex')
        document.getElementById('xwin').style.display = 'block'
        document.getElementById('0win').style.display = 'none'
        document.getElementById('nowin').style.display = 'none'
if(startTurn=='x')
{
    success.play()
}
else{
    fail.play()
}
        document.getElementById("Box").addEventListener('click', setvalue)
    }
    else if (x == '0') {
        document.getElementById('winselect').classList.remove('d-none')
        document.getElementById('winselect').classList.add('d-flex')
        document.getElementById('xwin').style.display = 'none'
        document.getElementById('0win').style.display = 'block'
        document.getElementById('nowin').style.display = 'none'
        if(startTurn=='0')
        {
            success.play()
        }
        else{
            fail.play()
        }
        document.getElementById("Box").removeEventListener('click', setvalue)

    }
    else {
        console.log('carry on')

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
            if (x[i] == id) {
                x[i] = '0'
            }
        }
    }
    // console.log(wintable)
}
function checkwin() {
    for (x of wintable) {
        // console.log(x)
        if (x.every((el) => el === 'x')) {
            return 'x'
        }
        else if (x.every((el) => el === '0')) {
            return '0'
        }
    }
    return 'no'
}
