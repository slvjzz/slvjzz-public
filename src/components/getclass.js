const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

const enterWindowInnerWidth = window.innerWidth * 0.8
const enterWindowInnerHeight = window.innerHeight * 0.8

export const name = "animate__animated animate__fadeIn";
export let containerstyle = {
    height: {windowInnerHeight},
    width: {windowInnerWidth},
    padding: '20px', 
    textAlign: 'center', 
    backgroundColor: '#594c67', 
    border: 'solid 3px #ffc107', 
    color: 'gold',
}

export let enterStyle = {
    maxheight: {enterWindowInnerWidth },
    maxwidth: {enterWindowInnerHeight},
    padding: '50px', 
    textAlign: 'center', 
    width: '75%',
}


