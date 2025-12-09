/* --- GENEL AYARLAR --- */
const YAZI_LIMITI = 6; // Sayfa başına kaç yazı?
let suankiSayfa = 1;

/* SAYFA YÜKLENİNCE ÇALIŞACAK KISIM 
   (Sadece başlatma komutları burada, fonksiyon tanımları DIŞARIDA)
*/
window.onload = function() {
    
    // 1. Eğer ANASAYFA'daysak (Izgara varsa) -> Pagination'ı başlat
    if (document.getElementById("yazi-izgarasi")) {
        // veriler.js yüklendi mi kontrolü
        if (typeof blogYazilari !== 'undefined') {
            sayfayiGetir(1); 
        } else {
            console.error("HATA: veriler.js dosyası script.js'den önce yüklenmeli!");
            document.getElementById("yazi-izgarasi").innerHTML = "<p>Veriler yüklenemedi.</p>";
        }
    }

    // 2. Eğer DETAY SAYFASI'ndaysak (Başlık alanı varsa) -> Yazıyı çek
    if (document.getElementById("detay-baslik")) {
        if (typeof blogYazilari !== 'undefined') {
            yaziDetayiniGetir();
        }
    }
};


/* --- FONKSİYONLAR (GLOBAL ALAN) --- */
/* HTML onclick komutları burayı görebilir */

// 1. PAGINATION FONKSİYONU
function sayfayiGetir(sayfaNo) {
    suankiSayfa = sayfaNo;
    const izgara = document.getElementById("yazi-izgarasi");
    
    // Hata önleyici
    if (!izgara) return;

    izgara.innerHTML = ""; // Ekranı temizle

    const baslangic = (sayfaNo - 1) * YAZI_LIMITI;
    const bitis = baslangic + YAZI_LIMITI;
    
    const gosterilecekYazilar = blogYazilari.slice(baslangic, bitis);

    gosterilecekYazilar.forEach(yazi => {
        let ozet = yazi.icerik.replace(/<[^>]*>?/gm, '').substring(0, 100) + "...";

        const kutuHTML = `
            <div class="blog-post-box">
                <img src="${yazi.resim}" alt="${yazi.baslik}">
                <div class="post-content">
                    <h3>${yazi.baslik}</h3>
                    <p>${ozet}</p>
                    <a href="yazi-detay.html?id=${yazi.id}" class="read-more-btn">Devamını Oku →</a>
                </div>
            </div>
        `;
        izgara.innerHTML += kutuHTML;
    });

    butonlariGuncelle();
    
}

// 2. BUTON GÜNCELLEME
function butonlariGuncelle() {
    const toplamSayfa = Math.ceil(blogYazilari.length / YAZI_LIMITI);
    const pagContainer = document.getElementById("sayfalama-cubugu");
    
    if (!pagContainer) return;

    let butonHTML = "";

    // --- GERİ BUTONU ---
    // Eğer 1. sayfadaysak 'disabled' sınıfı ekle, yoksa normal bırak
    if(suankiSayfa === 1) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">&laquo; Geri</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="sayfayiGetir(${suankiSayfa - 1})">&laquo; Geri</a>`;
    }

    // --- NUMARALAR (1, 2, 3...) ---
    for (let i = 1; i <= toplamSayfa; i++) {
        let aktifSinif = (i === suankiSayfa) ? 'class="active"' : '';
        butonHTML += `<a href="javascript:void(0)" ${aktifSinif} onclick="sayfayiGetir(${i})">${i}</a>`;
    }

    // --- İLERİ BUTONU ---
    // Eğer son sayfadaysak 'disabled' sınıfı ekle, yoksa normal bırak
    if(suankiSayfa === toplamSayfa) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">İleri &raquo;</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="sayfayiGetir(${suankiSayfa + 1})">İleri &raquo;</a>`;
    }

    pagContainer.innerHTML = butonHTML;
}

// 3. DETAY SAYFASI
function yaziDetayiniGetir() {
    const urlParams = new URLSearchParams(window.location.search);
    const gelenId = urlParams.get('id');
    const yazi = blogYazilari.find(x => x.id == gelenId);

    if (yazi) {
        document.getElementById("detay-baslik").innerText = yazi.baslik;
        document.getElementById("detay-tarih").innerText = yazi.tarih;
        document.getElementById("detay-icerik").innerHTML = yazi.icerik;
        
        const resim = document.getElementById("detay-resim");
        if(resim) {
            resim.src = yazi.resim;
            resim.style.display = "block";
        }
        document.title = yazi.baslik + " - Mühendis Blog";
    } else {
        document.getElementById("detay-icerik").innerHTML = "<p>Yazı bulunamadı!</p>";
    }
}

/* --- İLETİŞİM FORMU --- */
function mesajGonder(event) {
    event.preventDefault(); 
    
    var isim = document.getElementById("fname").value;
    
    // Demo yazısını kaldırdık, profesyonel bir teyit mesajı ekledik
    alert("Teşekkürler " + isim + "! Mesajınız tarafıma ulaştı. En kısa sürede size geri dönüş yapacağım.");
    
    // Formu temizle
    document.querySelector("form").reset();
}

/* --- GELİŞMİŞ CAROUSEL GALERİ SİSTEMİ (Veriler.js Entegreli) --- */

let baslangicIndex = 0; // Şu an en solda hangi resim var?

// Sayfa yüklenince galeriyi başlat
document.addEventListener("DOMContentLoaded", function() {
    // Eğer sayfada galeri şeridi varsa ve veriler.js yüklendiyse
    if(document.getElementById("galeri-seridi") && typeof galeriResimleri !== 'undefined') {
        galeriGuncelle();
    }
});

// İleri-Geri Butonuna Basınca
function galeriKaydir(yon) {
    if (typeof galeriResimleri === 'undefined') return;

    baslangicIndex += yon;

    // SONSUZ DÖNGÜ MANTIĞI (7-1-2)
    if (baslangicIndex >= galeriResimleri.length) {
        baslangicIndex = 0;
    }
    if (baslangicIndex < 0) {
        baslangicIndex = galeriResimleri.length - 1;
    }

    galeriGuncelle();
}

// Ekrana 3 Tane Resim Basan Fonksiyon
function galeriGuncelle() {
    const serit = document.getElementById("galeri-seridi");
    serit.innerHTML = ""; // Önce temizle

    // Döngü ile 3 resim seçiyoruz
    for (let i = 0; i < 3; i++) {
        // Matematiksel Sihirbazlık: Modulo (%)
        // Listeden taşarsa başa sarmasını sağlar
        let gosterilecekIndex = (baslangicIndex + i) % galeriResimleri.length;
        
        const resimVerisi = galeriResimleri[gosterilecekIndex];

        // HTML oluştur ve bas
        const resimHTML = `
            <img src="${resimVerisi.src}" 
                 alt="${resimVerisi.alt}" 
                 class="carousel-img gallery-img" 
                 onclick="openModal(this)">
        `;
        serit.innerHTML += resimHTML;
    }
}

/* --- LIGHTBOX (BÜYÜK RESİM) --- */

let lightboxIndex = 0; // Şu an büyütülmüş resmin sırası

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    
    // Tıklanan resmin src'sini al (getAttribute kullanarak ham veriyi alıyoruz)
    var tiklananSrc = element.getAttribute("src");
    
    // Bu resim veriler.js listesinde kaçıncı sırada? Onu bul.
    // (Böylece ileri dediğimizde bir sonrakini bulabiliriz)
    lightboxIndex = galeriResimleri.findIndex(img => img.src === tiklananSrc);
    
    // Eğer bulamazsa (garanti olsun) 0 yap
    if (lightboxIndex === -1) lightboxIndex = 0;

    // Resmi ve yazısını yükle
    modalImg.src = galeriResimleri[lightboxIndex].src;
    captionText.innerHTML = galeriResimleri[lightboxIndex].alt;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Lightbox İçindeki Oklar İçin Fonksiyon
function changeSlide(n) {
    // Veri yoksa dur
    if (typeof galeriResimleri === 'undefined') return;

    lightboxIndex += n; // Sırayı artır veya azalt

    // DÖNGÜSEL MANTIK (Sona geldiyse başa sar)
    if (lightboxIndex >= galeriResimleri.length) {
        lightboxIndex = 0;
    }
    if (lightboxIndex < 0) {
        lightboxIndex = galeriResimleri.length - 1;
    }

    // Yeni resmi ekrana bas
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modalImg.src = galeriResimleri[lightboxIndex].src;
    captionText.innerHTML = galeriResimleri[lightboxIndex].alt;
}

/* --- KATEGORİ SAYFALARI İÇİN SAYFALAMALI GRID --- */

// Hangi kategoride olduğumuzu ve kaçıncı sayfada olduğumuzu takip edelim
let aktifKategori = "";
let aktifKategoriSayfasi = 1;

function kategoriGetir(kategori, sayfaNo) {
    const izgara = document.getElementById("yazi-izgarasi");
    const pagContainer = document.getElementById("kategori-sayfalama");
    
    if (!izgara) return;

    // Durumu güncelle
    aktifKategori = kategori;
    aktifKategoriSayfasi = sayfaNo;

    izgara.innerHTML = ""; // Ekranı temizle

    // 1. ÖNCE FİLTRELE: Sadece bu kategorideki yazıları al
    const filtrelenmisYazilar = blogYazilari.filter(yazi => yazi.kategori === kategori);

    // Eğer hiç yazı yoksa
    if (filtrelenmisYazilar.length === 0) {
        izgara.innerHTML = "<p style='padding:20px; color:#666;'>Bu kategoride henüz yazı eklenmemiş.</p>";
        if(pagContainer) pagContainer.innerHTML = "";
        return;
    }

    // 2. SAYFALAMA HESABI YAP (Slice)
    // const YAZI_LIMITI = 6; (Bu zaten script'in en tepesinde tanımlıydı)
    const baslangic = (sayfaNo - 1) * YAZI_LIMITI;
    const bitis = baslangic + YAZI_LIMITI;
    const sayfadakiYazilar = filtrelenmisYazilar.slice(baslangic, bitis);

    // 3. EKRANA BAS
    sayfadakiYazilar.forEach(yazi => {
        let ozet = yazi.icerik.replace(/<[^>]*>?/gm, '').substring(0, 100) + "...";
        
        const kutuHTML = `
            <div class="blog-post-box">
                <img src="${yazi.resim}" alt="${yazi.baslik}">
                <div class="post-content">
                    <h3>${yazi.baslik}</h3>
                    <p>${ozet}</p>
                    <a href="yazi-detay.html?id=${yazi.id}" class="read-more-btn">Devamını Oku →</a>
                </div>
            </div>
        `;
        izgara.innerHTML += kutuHTML;
    });

    // 4. SAYFALAMA BUTONLARINI GÜNCELLE
    if (pagContainer) {
        kategoriButonlariniGuncelle(filtrelenmisYazilar.length, pagContainer);
    }
}

function kategoriButonlariniGuncelle(toplamYaziSayisi, container) {
    const toplamSayfa = Math.ceil(toplamYaziSayisi / YAZI_LIMITI);
    let butonHTML = "";

    // Sadece 1 sayfa varsa buton göstermeye gerek yok
    if (toplamSayfa <= 1) {
        container.innerHTML = "";
        return;
    }

    // --- GERİ BUTONU ---
    if(aktifKategoriSayfasi === 1) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">&laquo; Geri</a>`;
    } else {
        // Dikkat: Fonksiyona hem kategori adını hem yeni sayfa numarasını gönderiyoruz
        butonHTML += `<a href="javascript:void(0)" onclick="kategoriGetir('${aktifKategori}', ${aktifKategoriSayfasi - 1})">&laquo; Geri</a>`;
    }

    // --- NUMARALAR ---
    for (let i = 1; i <= toplamSayfa; i++) {
        let aktifSinif = (i === aktifKategoriSayfasi) ? 'class="active"' : '';
        butonHTML += `<a href="javascript:void(0)" ${aktifSinif} onclick="kategoriGetir('${aktifKategori}', ${i})">${i}</a>`;
    }

    // --- İLERİ BUTONU ---
    if(aktifKategoriSayfasi === toplamSayfa) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">İleri &raquo;</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="kategoriGetir('${aktifKategori}', ${aktifKategoriSayfasi + 1})">İleri &raquo;</a>`;
    }

    container.innerHTML = butonHTML;
}