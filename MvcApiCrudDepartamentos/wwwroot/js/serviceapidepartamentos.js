let url = "https://apicorecruddepartamentosmmt.azurewebsites.net/";
function loadDepts() {
    let request = "api/departamentos";
    $.ajax({
        url: url + request,
        method: "GET",
        success: function (data) {
            console.log("leyendo");
            var html = "";
            $.each(data, function (index, departamento) {
                html += "<tr>";
                html += "<td>" + departamento.idDepartamento + "</td>";
                html += "<td>" + departamento.nombre + "</td>";
                html += "<td>" + departamento.localidad + "</td>";
                html += "</tr>";
            })
            $("#tabladepts tbody").html(html);
        }
    })
}