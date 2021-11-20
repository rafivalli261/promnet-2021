<?php 


// kelas mahasiswa
class mahasiswa{
    public $id, $nama, $jenisKelamin;

    public function __construct($id = "Null",$nama = "Null",$jenisKelamin = "Undefined")
    {
        $this->id = $id;
        $this->nama = $nama;
        $this->jenisKelamin = $jenisKelamin;
    }
}

// kelas mata kuliah/pelajaran
class mataKuliah{
    public $kode, $namaMatkul;

    public function __construct($kode = "Null",$namaMatkul = "Null")
    {
        $this->kode = $kode;        
        $this->namaMatkul = $namaMatkul;        
    }

}

// membuat objek baru
$mhs1 = new mahasiswa("2003117","Rafi Valli","Laki-Laki");

echo $mhs1->id;
echo "<br>";
echo $mhs1->nama;
echo "<br>";
echo $mhs1->jenisKelamin;


?>