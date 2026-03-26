let url = "https://apicorecruddepartamentosmmt.azurewebsites.net/";

function getDeptsAsync(callBack) {
    let request = "api/departamentos";
    $.ajax({
        url: url + request,
        method: "GET",
        success: function (data) {
            console.log("leyendo");
            callBack(data);
        }
    })
}

function convertDeptToJson(id, nombre, localidad) {
    let dept = new Object();
    dept.idDepartamento = parseInt(id);
    dept.nombre = nombre;
    dept.localidad = localidad;

    var json = JSON.stringify(dept);
    return json;
}

function postDeptAsync(id, nombre, localidad, callBack) {
    var json = convertDeptToJson(id, nombre, localidad);
    let request = "api/departamentos";
    $.ajax({
        url: url + request,
        method: "POST",
        data: json,
        contentType: "application/json",
        success: function (data) {
            console.log("posted");
            callBack();
        }
    })
}

function putDeptAsync(id, nombre, localidad, callBack) {
    var json = convertDeptToJson(id, nombre, localidad);
    let request = "api/departamentos";
    $.ajax({
        url: url + request,
        method: "PUT",
        data: json,
        contentType: "application/json",
        success: function (data) {
            console.log("puted");
            callBack();
        }
    })
}

function deleteDeptAsync(id, callBack) {
    let request = "api/departamentos/" + id;
    $.ajax({
        url: url + request,
        method: "DELETE",
        success: function (data) {
            console.log("deleted");
            callBack();
        }
    })
}