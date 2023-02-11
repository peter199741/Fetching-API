

let id1 = document.getElementById("1")
let id2 = document.getElementById("2")
let id3 = document.getElementById("3")
let id4 = document.getElementById("4")
let id5 = document.getElementById("5")
let id6 = document.getElementById("6")
let id7 = document.getElementById("7")
let id8 = document.getElementById("8")
let id9 = document.getElementById("9")
let id10 = document.getElementById("10")
let id11 = document.getElementById("11")
let id12 = document.getElementById("12")
let id13 = document.getElementById("13")
let id14 = document.getElementById("14")
let id15 = document.getElementById("15")
let id16 = document.getElementById("16")
let id17 = document.getElementById("17")
let id18 = document.getElementById("18")
let id19 = document.getElementById("19")
let id20 = document.getElementById("20")
let id21 = document.getElementById("21")
let id22 = document.getElementById("22")
let id23 = document.getElementById("23")
let id24 = document.getElementById("24")
let id25 = document.getElementById("25")
let id26 = document.getElementById("26")
let id27 = document.getElementById("27")
let id28 = document.getElementById("28")
let id29 = document.getElementById("29")
let id30 = document.getElementById("30")


fetch("https://dummyjson.com/products")
.then((Response) => Response.json())
.then((data) => {
    console.log(data);
    let arr = data.products;
    arr.map((products) =>{
        id1.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id2.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id3.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id4.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id5.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id6.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id7.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id8.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id9.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id10.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id11.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id12.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id13.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id14.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id15.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id16.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id17.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id18.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id19.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id20.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id21.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id22.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id23.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id24.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id25.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id26.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id27.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id28.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id29.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
        id30.innerHTML = `<p><strong>Name : ${products.title}  <br> Description : ${products.description} <br> price : ${products.price} <br> discountPercentage : ${products.discountPercentage} <br> Stock : ${products.stock} </strong></p>`
    })
});
