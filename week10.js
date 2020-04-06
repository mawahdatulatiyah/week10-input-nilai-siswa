<!DOCTYPE html>
<html lang="en">
<head>
    <title>TUGAS PROGRAM KOMPUTER </title>
    <title>MAWAH DATUL ATIYAH (D74217055) </title>
</head>
<body>
    <script>
        var nilai = prompt("Inputkan nilai akhir:");
        var grade = "";

        if(nilai >= 95) grade = "Nilai Sempurna"
        else if(nilai >= 85) grade = "Nilai Bagus"
        else if(nilai >= 75) grade = "Nilai Lumayan"
        else if(nilai >= 65) grade = "Nilai Kurang"
        else grade = "Nilai Kurang";

        document.write(`<p>Grade anda: ${grade}</p>`);
    </script>
</body>
</html>