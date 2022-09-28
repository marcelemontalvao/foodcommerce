function createLi(object) {
    let li = document.createElement("li");
    li.className = "product";

    let img = document.createElement("img");
    img.src = object.img;
    img.alt = object.nameItem;

    let divJustify = document.createElement("div");
    divJustify.className = "justify";

    let tag = document.createElement("span");
    tag.className = "tag";
    tag.innerHTML = object.tag[0]; 
    
    let title = document.createElement("h4");
    title.className = "title"; 
    title.innerHTML = object.nameItem;

    let description = document.createElement("p");
    description.innerHTML = object.description;
    
    let adjust = document.createElement("div");
    adjust.className = "adjust";

    let price = document.createElement("span");
    price.className = "price";
    price.innerHTML = object.value.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'}); 
    
    let add = document.createElement("span");
    add.className = "add";
    add.innerText = object.addCart;
    add.setAttribute("id", object.id);

    add.addEventListener("click", (event) => {
        if(add.id == event.target.id) {
            let objElement = data[add.id - 1]
            cart.push(objElement);
            cart.forEach(element => {
                if(!cartFilter.includes(element)) {
                    cartFilter.push(objElement);
                }
            });
            renderCart(cart);
        } 
    })

    adjust.append(price,add);
    divJustify.append(title, description,adjust)
    li.append(img,tag,divJustify);
    return li;
}

function renderUl(list) {
    let ul = document.querySelector(".products");
    ul.innerHTML = "";
    list.forEach(object => {
        ul.append(createLi(object));
    });
}

function createLiCart(object, index) {
    let li = document.createElement("li");
    li.className = "product-cart";
   
    let img = document.createElement("img");
    img.src = object.img;
    img.alt = object.nameItem;

    let infos = document.createElement("div");
    infos.className = "infos-product";
    
    let title = document.createElement("h1"); 
    title.innerText = object.nameItem;
    
    let price = document.createElement("p");
    price.className = "price-cart";
    price.innerText = object.value.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'}); 

    let remove = document.createElement("p");
    remove.className = "remove-cart";
    remove.innerText = "Remover Produto";
    remove.setAttribute("id", index);

    let quantityP = document.createElement("p");
    let quantity = cart.reduce((acc,act) => {
        if(object == act) {
            acc++;
    }
        return acc;
    },0);
    quantityP.className = "quantity-p";
    quantityP.innerText = `Quantidade: ${quantity}un`

    infos.append(title, price, remove, quantityP);
    li.append(img,infos);

    remove.addEventListener("click", function(event) {
        if(remove.id == event.target.id) {
            const filter = cart.filter(element => {
                if(element == cartFilter[index]) {
                    return element;
                }
            })
            if(filter.length == 1) {
                cart.splice(cart.indexOf(cartFilter[event.target.id]), 1);
                cartFilter.splice(cartFilter.indexOf(cartFilter[event.target.id]), 1);
            } else {
                 cart.splice(cart.indexOf(cartFilter[event.target.id]), 1);
            }
           
            renderCart(cartFilter);
            renderFooterCart(cart);
        }
    });

    return li;
}

function renderUlCart(list) {
    let ul = document.querySelector(".products-cart");
    ul.innerHTML = "";
    list.forEach((object, index) => {
        ul.append(createLiCart(object, index));
    });
}

function getSumCart(list) {
    let sum = 0;
    list.forEach(element => {
        sum += element.value;
    });
    return sum;
}

function renderFooterCart(list) {  
    let footerCart = document.querySelector(".footer-cart");
    footerCart.innerHTML = "";
    
    let quantity = document.createElement("div");
    quantity.className = "quantity";

    let pQuantity = document.createElement("p");
    pQuantity.innerText = "Quantidade: ";

    let quantityProducts = document.createElement("p");
    quantityProducts.innerText = list.length;

    let total = document.createElement("div");
    total.className = "total";

    let pTotal = document.createElement("p");
    pTotal.innerText = "Total:";

    let totalPrice = document.createElement("p");
    totalPrice.innerText = getSumCart(cart).toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'});

    quantity.append(pQuantity, quantityProducts);
    total.append(pTotal, totalPrice);
    footerCart.append(quantity, total);
        
    return footerCart;
}

function renderCart(list) {
    let ul = document.querySelector(".products-cart");
    ul.innerHTML = "";
   
    if(list.length > 0) {
        const info = document.querySelector(".info");
        info.classList.add("none");
        let footerCart = renderFooterCart(list);
        footerCart.classList.remove("none");
        renderUlCart(cartFilter);
    } else {
        let footerCart = renderFooterCart(list);
        footerCart.classList.add("none"); 
        const info = document.querySelector(".info");
        info.classList.toggle("none");
    }
}

function selectMenu() {
    let menu = document.querySelectorAll(".category");
    let ulPrincipal = document.querySelector(".products");
   
    menu.forEach(element => {
       
        element.addEventListener("click", event =>{
            let objects = data.filter(item => element.textContent == item.tag[0]);
            let menuSelected = document.querySelectorAll(".category");
            menuSelected.forEach(elemento => {
                elemento.classList.remove("active");
            })
            ulPrincipal.innerHTML = "";
            
            if(element.textContent == "Todos") {
                
                element.classList.add("active");
                renderUl(data);
            
            } else if (objects.length == 0){
                
                alert("Categoria não encontrada!")
                renderUl(data);
            
            } else {    
                
                renderUl(objects);
                element.classList.add("active");
            }
        })
    })
}

function selectInputValue() {
    let array = [];
    const input = document.querySelector("input");
    
    input.addEventListener('input', event =>{
        data.filter(item => {
            if(item.nameItem.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().includes(event.target.value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().trim())) {
                array.push(item);
            } else if(item.tag[0].normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().includes(event.target.value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().trim())) {
                array.push(item);
            } else if(item.description.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().includes(event.target.value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase().trim())){
                array.push(item); 
            }
        }) 
        renderUl(array);
        array = [];
    })
}

function btnSearch() {
    const btn = document.getElementById("btn");
    let array = [];
    const input = document.querySelector("input");
    btn.addEventListener('click', function(event) {
        data.filter(item => {
            if(item.nameItem.includes(input.value.trim())) {
                array.push(item);
            }
        }) 
        renderUl(array);
        array = [];
    })
}

//Só precisa de um ou outro (selectInputValue() ou btnSearch())

btnSearch()
selectMenu()
renderUl(data);
renderCart(cart);
selectInputValue();
