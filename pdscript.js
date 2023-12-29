document.querySelectorAll(".buy").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    let gambar = parent.querySelector(".img-c").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".jdl").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i> Tidak Ada Informasi </i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    // image.classList.add("w-100");
    // image.classList.add("");

    document.querySelector(".modalImg").innerHTML = "";
    document.querySelector(".modalImg").appendChild(image);
    document.querySelector(".modalDes").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    const nohp = "6283183634028";
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text= Halo Kak, saya ingin pesan produk ini ${gambar}`;

    document.querySelector(".btnBeli").href = pesan;
  });
});
