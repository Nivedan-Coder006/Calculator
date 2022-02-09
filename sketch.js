var n, n1, n2, n2Img, n1Img
var n3Img,n4Img,n5Img,n6Img,n7Img,n8Img,n9Img,n0Img
var op, number1,number2
var x,xImg,eq,eqImg
var cG
var n3,n4,n5,n6,n7,n8,n9,n0
var D,DIMG,S,SIMG,P,PIMG,Dec,DecIMG
var Bar,BarIMG,Frame,FrameIMG
var result,barText,dep1,dep2

function preload(){

    n0Img = loadImage("0.png")
    n1Img = loadImage("1.png")
    n2Img = loadImage("2.png")
    n3Img = loadImage("3.png")
    n4Img = loadImage("4.png")
    n5Img = loadImage("5.png")
    n6Img = loadImage("6.png")
    n7Img = loadImage("7.png")
    n8Img = loadImage("8.png")
    n9Img = loadImage("9.png")

    xImg = loadImage("X.png")
    eqImg = loadImage("equalsto.png")
    DIMG = loadImage("D.png")
    SIMG = loadImage("S.png")
    PIMG = loadImage("P.png")
    DecIMG = loadImage("Dec.png")
    BarIMG = loadImage("Bar.png")
    FrameIMG = loadImage("Frame.png")
}
function setup(){
    createCanvas(350,600)
    
    Frame = createSprite(147,360)
    Frame.addImage(FrameIMG)
    Frame.scale = 0.6
    n = ""
    op = ""
    number1 = ""
    number2 = ""
    cG = "1"
    result = ""
    barText = ""
    dep1 = true
    dep2 = true

    n1 = createSprite(42,300)
    n1.addImage(n1Img)
    n1.scale = 0.7
    n1.setCollider("circle",-10,-3,50)

    n2 = createSprite(107,300)
    n2.addImage(n2Img)
    n2.scale = 0.7
    n2.setCollider("circle",0,0,50)


    n3 = createSprite(179,300)
    n3.addImage(n3Img)
    n3.scale = 0.7
    n3.setCollider("circle",0,0,50)

    n4 = createSprite(34,370)
    n4.addImage(n4Img)
    n4.scale = 0.7
    n4.setCollider("circle",0,0,50)

    n5 = createSprite(106,370)
    n5.addImage(n5Img)
    n5.scale = 0.7
    n5.setCollider("circle",0,0,50)

    n6 = createSprite(178,370)
    n6.addImage(n6Img)
    n6.scale = 0.7
    n6.setCollider("circle",0,0,50)

    n7 = createSprite(34,440)
    n7.addImage(n7Img)
    n7.scale = 0.7
    n7.setCollider("circle",0,0,50)

    n8 = createSprite(106,440)
    n8.addImage(n8Img)
    n8.scale = 0.7
    n8.setCollider("circle",0,0,50)

    n9 = createSprite(178,440)
    n9.addImage(n9Img)
    n9.scale = 0.7
    n9.setCollider("circle",0,0,50)

    n0 = createSprite(34,510)
    n0.addImage(n0Img)
    n0.scale = 0.7
    n0.setCollider("circle",0,0,50)

    x = createSprite(250,370)
    x.addImage(xImg)
    x.scale = 0.7    
    x.setCollider("circle",0,0,50)

    D = createSprite(250,299)
    D.addImage(DIMG)
    D.scale = 0.7
    D.setCollider("circle",0,0,50)


    S = createSprite(250,440)
    S.addImage(SIMG)
    S.scale = 0.7
    S.setCollider("circle",0,0,50)

    P = createSprite(106,510)
    P.addImage(PIMG)
    P.scale = 0.7
    P.setCollider("circle",0,0,50)

    eq = createSprite(250,510)
    eq.addImage(eqImg)
    eq.scale = 0.7
    eq.setCollider("circle",0,0,50)

    Dec = createSprite(179,510)
    Dec.addImage(DecIMG)
    Dec.scale = 0.7
    Dec.setCollider("circle",0,0,50)

    Bar = createSprite(140,260)
    Bar.addImage(BarIMG)
    Bar.scale = 0.6


    
}
function draw(){
    background("cyan")
    }
document.getElementById("reset").onclick = (){
window.location.reload();
}

    if(cG === "1"){
        number2 = ""

        if(frameCount%2.5===0){
            if(mousePressedOver(n1)){
                n = "1"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n2)){
                n = "2"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n3)){
                n = "3"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n4)){
                n = "4"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n5)){
                n = "5"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n6)){
                n = "6"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n7)){
                n = "7"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n8)){
                n = "8"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n9)){
                n = "9"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            if(mousePressedOver(n0)){
                n = "0"
                number1 = number1+n
                console.log(number1)
                barText = number1
            }
            

        }
        if(mousePressedOver(x)){
            op = "x"
            console.log(op)
            cG = "2"
            n = ""
            barText = op

        }
        if(mousePressedOver(S)){
            op = "-"
            console.log(op)
            cG = "2"
            n = ""
            barText = op

        }
        if(mousePressedOver(P)){
            op = "+"
            console.log(op)
            cG = "2"
            n = ""
            barText = op

        }
        if(mousePressedOver(D)){
            op = "÷"
            console.log(op)
            cG = "2"
            n = ""
            barText = op

        }
        if(mousePressedOver(Dec)&&dep1 === true){
            n = "."
            number1 = number1+n
            console.log(number1)
            barText = number1
            dep1 = false
            
        }
    }
    if(cG === "2"){


        if(frameCount%2.5===0){
            if(mousePressedOver(n1)){
                n = "1"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n2)){
                n = "2"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n3)){
                n = "3"
                number2 = number2+n
                console.log(number1)
                barText = number2
            }
            if(mousePressedOver(n4)){
                n = "4"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n5)){
                n = "5"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n6)){
                n = "6"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n7)){
                n = "7"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n8)){
                n = "8"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n9)){
                n = "9"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(n0)){
                n = "0"
                number2 = number2+n
                console.log(number2)
                barText = number2
            }
            if(mousePressedOver(Dec)&&dep2 === true){
                n = "."
                number2 = number2+n
                console.log(number2)
                barText = number2
                dep2 = false
            }
        }
        if(mousePressedOver(eq)){
            if(op === "x"){
            barText = parseFloat(number1)*parseFloat(number2)
            console.log(barText)
            result = barText.toString()
            number1 = result
            cG = "1"
            }
            if(op === "+"){
                barText = parseFloat(number1)+parseFloat(number2)
                console.log(barText)
                result = barText.toString()
                number1 = result
                cG = "1"
            }
            if(op === "-"){
                barText = parseFloat(number1)-parseFloat(number2)
                console.log(barText)
                result = barText.toString()
                number1 = result
                cG = "1"
            }
            if(op === "÷"){
                barText = parseFloat(number1)/parseFloat(number2)
                console.log(barText)
                result = barText.toString()
                number1 = result
                cG = "1"
            }


        }
    }
    
    drawSprites()
    fill("black")
    stroke(4)
    textSize(40)

    text(barText,30,210)
}
