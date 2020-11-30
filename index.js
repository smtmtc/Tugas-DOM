alert('Selamat Datang')

Jumlah.onclick = function hasil() {
    var a=document.forms['penjumlahan']['Nilai1'].value;
    var b=document.forms['penjumlahan']['Nilai2'].value;

    a=Number(a)
    b=Number(b)

    var total = (a + b)

    var tabel = document.getElementById("hasil");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);

    kol1.innerHTML = total;

    document.body.style.backgroundColor="green";
}