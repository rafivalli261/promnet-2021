// Harusnya ada package, tapi entah kenapa masih error
// import scanner ke program
import java.util.Scanner;
public class DataKaryawan {
    public static void main(String[] args) {
        // deklarasi variable
        String nama, alamat;
        int usia, gaji;

        // membuat scanner baru
        try(
        Scanner keyboard = new Scanner(System.in)){

        // tampilkan output ke user
        System.out.println("### Pendataan Karyawan PT Petani Kode ##");
        System.out.print("Nama karyawan : ");
        // menggunakan scanner dan menyimpan apa yang diketik di variable nama
        nama = keyboard.nextLine();
        // tampilkan output lagi
        System.out.print("Alamat : ");
        // menggunakan scanner lagi
        alamat = keyboard.nextLine();

        System.out.print("Usia: ");
        usia = keyboard.nextInt();

        System.out.print("Gaji: ");
        gaji = keyboard.nextInt();
        }
        // menampilkan apa yang sudah disimpan di variable
        System.out.println("------------");
        System.out.println("Nama Karyawan : " + nama);
        System.out.println("Alamat : " + alamat);
        System.out.println("Usia: " + usia + "tahun");
        System.out.println("Gaji : Rp" + gaji);
    }    
}
