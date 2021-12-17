var productAdmin = function() {
    var listProduct1 = "";
    for (var i in product) {

        var data = JSON.parse(JSON.stringify(product[i]))
        var listProduct1 = '<tr>';
        listProduct1 += '<td>' + data.id + '</td>';
        listProduct1 += '<td>' + data.name + '</td>';
        listProduct1 += '<td>' + data.img + '</td>';
        listProduct1 += '<td>' + data.price + '</td>';
        listProduct1 += '<td><button onclick="updateProduct(' + i + ')" class="btn btn-outline-danger"' +
            'data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>'
        listProduct1 += '<button onclick="deleteProduct('
            + i + ')" class="btn m1-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>'
        listProduct1 += '</tr>'
        document.getElementById("product-admin").innerHTML +=listProduct1
    }
}
var addProduct = function () {
    var Product = {
        id : "SP" + parseInt(product.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value
    }
        product.push(Product);
    localStorage.setItem('listProduct', JSON.stringify(product));
    window.location.reload()
}
var deleteProduct = function (i) {
    product.splice(i,1)
    localStorage.setItem('listProduct', JSON.stringify(product))
    window.location.reload()
}
    var updateProduct = function (i) {
        var k = product[i]
        document.getElementById("idd").value = k.id
        document.getElementById("name").value = k.name
        document.getElementById("imgd").value = k.img
        document.getElementById("priced").value = k.price
        document.getElementById("idd").setAttribute("disabled", "disabled")
        document.getElementById("submitUpdate").innerHTML = '<button class = "btn btn-outline-danger mt-3" onclick="submitUpgrade(+i+)">Dong y</button>'
    }
    var submitUpdate = function (i) {
    var k = product[i]
        k.id = document.getElementById("idd").value
        k.name = document.getElementById("named").value
        k.img = document.getElementById("imgd").value
        k.price = document.getElementById("priced").value
        localStorage.setItem('listProduct', JSON.stringify(product))
        window.location.reload()
    }
var userAdmin = function () {
    var listproduct ="";
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]))
        var listproduct = '<tr>';
        listproduct += '<td>' + data.id + '</td>'
        listproduct += '<td>' + data.username + '</td>'
        listproduct += '<td>' + data.email + '</td>'
        listproduct += '<td><button onclick="updateProduct(+i+)" class = "btn btn-outline-danger" data-toggle="modal"' +
            'data-target="#updateProduct"><i class = "fas fa-cogs"></i></button>'
        listproduct += '<button onclick="deleteProduct(+i+)" class="btn m1-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>'
        listproduct += '</tr>';
        document.getElementById("user-admin").innerHTML += listproduct
    }
}

productAdmin()
userAdmin()