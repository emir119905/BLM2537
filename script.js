/*düzenleme*/
const YAZI_LIMITI = 6; 
let suankiSayfa = 1;

window.onload = function() {
    
    if (document.getElementById("yazi-izgarasi")) {
        if (typeof blogYazilari !== 'undefined') {
            sayfayiGetir(1); 
        } else {
            console.error("HATA: veriler.js dosyası script.js'den önce yüklenmeli!");
            document.getElementById("yazi-izgarasi").innerHTML = "<p>Veriler yüklenemedi.</p>";
        }
    }

    if (document.getElementById("detay-baslik")) {
        if (typeof blogYazilari !== 'undefined') {
            yaziDetayiniGetir();
        }
    }
};


/*ana fonksiyonlar*/

/*sayfa geçişi*/
function sayfayiGetir(sayfaNo) {
    suankiSayfa = sayfaNo;
    const izgara = document.getElementById("yazi-izgarasi");
    
    if (!izgara) return;

    izgara.innerHTML = ""; 

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

function butonlariGuncelle() {
    const toplamSayfa = Math.ceil(blogYazilari.length / YAZI_LIMITI);
    const pagContainer = document.getElementById("sayfalama-cubugu");
    
    if (!pagContainer) return;

    let butonHTML = "";

    if(suankiSayfa === 1) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">&laquo; Geri</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="sayfayiGetir(${suankiSayfa - 1})">&laquo; Geri</a>`;
    }

    for (let i = 1; i <= toplamSayfa; i++) {
        let aktifSinif = (i === suankiSayfa) ? 'class="active"' : '';
        butonHTML += `<a href="javascript:void(0)" ${aktifSinif} onclick="sayfayiGetir(${i})">${i}</a>`;
    }

    if(suankiSayfa === toplamSayfa) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">İleri &raquo;</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="sayfayiGetir(${suankiSayfa + 1})">İleri &raquo;</a>`;
    }

    pagContainer.innerHTML = butonHTML;
}

/*blog yazısı detayı*/
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

/*formlar*/
function mesajGonder(event) {
    event.preventDefault(); 
    
    var isim = document.getElementById("fname").value;
    
    alert("Teşekkürler " + isim + "! Mesajınız tarafıma ulaştı. En kısa sürede size geri dönüş yapacağım.");
    
    document.querySelector("form").reset();
}

/*galeri*/

let baslangicIndex = 0; 

document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementById("galeri-seridi") && typeof galeriResimleri !== 'undefined') {
        galeriGuncelle();
    }
});

function galeriKaydir(yon) {
    if (typeof galeriResimleri === 'undefined') return;

    baslangicIndex += yon;

    if (baslangicIndex >= galeriResimleri.length) {
        baslangicIndex = 0;
    }
    if (baslangicIndex < 0) {
        baslangicIndex = galeriResimleri.length - 1;
    }

    galeriGuncelle();
}

function galeriGuncelle() {
    const serit = document.getElementById("galeri-seridi");
    serit.innerHTML = ""; 

    for (let i = 0; i < 3; i++) {
        let gosterilecekIndex = (baslangicIndex + i) % galeriResimleri.length;
        
        const resimVerisi = galeriResimleri[gosterilecekIndex];

        const resimHTML = `
            <img src="${resimVerisi.src}" 
                 alt="${resimVerisi.alt}" 
                 class="carousel-img gallery-img" 
                 onclick="openModal(this)">
        `;
        serit.innerHTML += resimHTML;
    }
}

/*resim büyütme*/

let lightboxIndex = 0; 

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    
    var tiklananSrc = element.getAttribute("src");
    
    lightboxIndex = galeriResimleri.findIndex(img => img.src === tiklananSrc);
    
    if (lightboxIndex === -1) lightboxIndex = 0;

    modalImg.src = galeriResimleri[lightboxIndex].src;
    captionText.innerHTML = galeriResimleri[lightboxIndex].alt;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeSlide(n) {
    if (typeof galeriResimleri === 'undefined') return;

    lightboxIndex += n; 

    if (lightboxIndex >= galeriResimleri.length) {
        lightboxIndex = 0;
    }
    if (lightboxIndex < 0) {
        lightboxIndex = galeriResimleri.length - 1;
    }

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modalImg.src = galeriResimleri[lightboxIndex].src;
    captionText.innerHTML = galeriResimleri[lightboxIndex].alt;
}

/*kategori sıralaması*/

let aktifKategori = "";
let aktifKategoriSayfasi = 1;

function kategoriGetir(kategori, sayfaNo) {
    const izgara = document.getElementById("yazi-izgarasi");
    const pagContainer = document.getElementById("kategori-sayfalama");
    
    if (!izgara) return;

    aktifKategori = kategori;
    aktifKategoriSayfasi = sayfaNo;

    izgara.innerHTML = ""; 

    const filtrelenmisYazilar = blogYazilari.filter(yazi => yazi.kategori === kategori);

    if (filtrelenmisYazilar.length === 0) {
        izgara.innerHTML = "<p style='padding:20px; color:#666;'>Bu kategoride henüz yazı eklenmemiş.</p>";
        if(pagContainer) pagContainer.innerHTML = "";
        return;
    }

    const baslangic = (sayfaNo - 1) * YAZI_LIMITI;
    const bitis = baslangic + YAZI_LIMITI;
    const sayfadakiYazilar = filtrelenmisYazilar.slice(baslangic, bitis);

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

    if (pagContainer) {
        kategoriButonlariniGuncelle(filtrelenmisYazilar.length, pagContainer);
    }
}

function kategoriButonlariniGuncelle(toplamYaziSayisi, container) {
    const toplamSayfa = Math.ceil(toplamYaziSayisi / YAZI_LIMITI);
    let butonHTML = "";

    if (toplamSayfa <= 1) {
        container.innerHTML = "";
        return;
    }

    if(aktifKategoriSayfasi === 1) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">&laquo; Geri</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="kategoriGetir('${aktifKategori}', ${aktifKategoriSayfasi - 1})">&laquo; Geri</a>`;
    }

    for (let i = 1; i <= toplamSayfa; i++) {
        let aktifSinif = (i === aktifKategoriSayfasi) ? 'class="active"' : '';
        butonHTML += `<a href="javascript:void(0)" ${aktifSinif} onclick="kategoriGetir('${aktifKategori}', ${i})">${i}</a>`;
    }

    if(aktifKategoriSayfasi === toplamSayfa) {
        butonHTML += `<a href="javascript:void(0)" class="disabled">İleri &raquo;</a>`;
    } else {
        butonHTML += `<a href="javascript:void(0)" onclick="kategoriGetir('${aktifKategori}', ${aktifKategoriSayfasi + 1})">İleri &raquo;</a>`;
    }

    container.innerHTML = butonHTML;
}