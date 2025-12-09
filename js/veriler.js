// --- ANA VERİTABANI (20 YAZI - DOLU İÇERİKLİ) ---
// Kategori Dağılımı: 9 Teknoloji, 6 Günlük, 5 Spor

const blogYazilari = [
    // 1. Yazı (Teknoloji)
    {
        id: 1,
        baslik: "Yapay Zeka Etiği",
        kategori: "teknoloji",
        tarih: "9 Aralık 2025",
        resim: "img/1.jpg",
        icerik: `
            <p>Son yıllarda yapay zeka modellerinin (LLM) yükselişiyle birlikte teknoloji dünyasında yeni bir tartışma başladı: <strong>Yazdığımız kodlar ne kadar etik?</strong> Eskiden sadece "çalışsın yeter" dediğimiz algoritmalar, artık işe alım süreçlerinden kredi başvurularına kadar insan hayatını doğrudan etkiliyor.</p>
            <h3>Önyargılı Algoritmalar</h3>
            <p>Eğer bir yapay zekayı sadece belirli bir veri setiyle eğitirseniz, o verideki önyargıları da öğrenir. Örneğin, sadece erkek mühendislerin özgeçmişleriyle eğitilen bir IK robotu, kadın adayları elemeye başlayabilir. Bu teknik bir hata değil, verisel bir önyargıdır.</p>
            <p>Gelecekte mühendisler olarak sadece kod yazmayacağız, aynı zamanda bu kodların toplumsal etkilerini de hesaplamak zorunda kalacağız. Isaac Asimov'un robot yasaları artık bilim kurgu değil, bir gereklilik.</p>
        `
    },
    // 2. Yazı (Günlük)
    {
        id: 2,
        baslik: "Vize Haftası",
        kategori: "gunluk",
        tarih: "8 Aralık 2025",
        resim: "img/2.jpg",
        icerik: `
            <p>Mühendislik fakültesinde vize haftası demek, sosyal hayatın sıfırlanması ve kahve tüketiminin tavan yapması demektir. Bu hafta yine kütüphanede sabahladığımız, not peşinde koştuğumuz o yoğun döneme girdik.</p>
            <h3>Nasıl Ayakta Kalıyorum?</h3>
            <p>Benim taktiğim basit: <strong>Pomodoro Tekniği</strong>. 25 dakika ders, 5 dakika mola. Yoksa o kalın ders kitaplarının başında insanın aklı uçup gidiyor. Bir de tabii ki grup çalışmaları... Arkadaşlarla birbirimize konu anlatmak, hocanın anlattığından daha etkili olabiliyor bazen.</p>
            <p>Bu haftayı da sağ salim atlatırsak, final dönemine kadar rahat bir nefes alacağız. Şimdilik hedef: Geçer notu kapmak!</p>
        `
    },
    // 3. Yazı (Spor)
    {
        id: 3,
        baslik: "F1 ve Mühendislik",
        kategori: "spor",
        tarih: "7 Aralık 2025",
        resim: "img/3.jpg",
        icerik: `
            <p>Formula 1'i sadece pilotların yarışı sanıyorsanız yanılıyorsunuz. Asıl yarış fabrikalarda, rüzgar tünellerinde ve pit duvarında dönüyor. Bir F1 aracı, tekerlekli bir laboratuvar gibidir.</p>
            <h3>Aerodinamik Savaşları</h3>
            <p>Yere basma kuvveti (Downforce) dediğimiz olay, aracın virajları inanılmaz hızlarda dönmesini sağlıyor. Mühendisler, milimetrik kanat açılarıyla oynayarak saniyenin binde biri kadar avantaj kazanmaya çalışıyor.</p>
            <p>Ayrıca DRS (Drag Reduction System) gibi teknolojiler, arkadaki araca hız avantajı sağlayarak geçişleri artırıyor. F1 izlerken aslında fizik kurallarının limitlerinin zorlanmasını izliyoruz.</p>
        `
    },
    // 4. Yazı (Teknoloji)
    {
        id: 4,
        baslik: "Neden Linux?",
        kategori: "teknoloji",
        tarih: "6 Aralık 2025",
        resim: "img/4.jpg",
        icerik: `
            <p>Bir bilgisayar mühendisi adayı olarak Windows'un konfor alanından çıkıp Linux dünyasına adım attığımda ilk başta zorlandım. Her şeyi terminalden yapmak, sürücü sorunlarıyla uğraşmak... Ama sonra gücün farkına vardım.</p>
            <h3>Özgürlük ve Kontrol</h3>
            <p>Linux, işletim sisteminin her hücresine hükmetmenizi sağlar. <code>sudo</code> komutunu yazdığınızda bilgisayarın tek hakimi sizsinizdir. Arka planda ne çalıştığını bilirsiniz, sistem kaynaklarını sömüren gereksiz servisler yoktur.</p>
            <p>Şu an sunucu dünyasının %90'ı Linux üzerinde dönüyor. Eğer backend veya DevOps alanında ilerlemek istiyorsanız, terminal korkunuzu yenmeniz şart.</p>
        `
    },
    // 5. Yazı (Teknoloji)
    {
        id: 5,
        baslik: "Clean Code Sanatı",
        kategori: "teknoloji",
        tarih: "5 Aralık 2025",
        resim: "img/5.jpg",
        icerik: `
            <p>Kod yazmak sadece bilgisayara komut vermek değildir; aynı zamanda gelecekte o kodu okuyacak olan insanlara (veya 6 ay sonraki kendinize) not bırakmaktır. Spagetti kod, projenin ölüm fermanıdır.</p>
            <h3>SOLID Prensipleri</h3>
            <p>Temiz kod yazmak için değişken isimlendirmelerine dikkat etmek yetmez. Fonksiyonların tek bir işi yapması (Single Responsibility), sınıfların genişlemeye açık ama değişime kapalı olması gibi prensipleri benimsemek gerekir.</p>
            <p>Unutmayın: <strong>"Her aptal bilgisayarın anlayacağı kodu yazabilir. İyi yazılımcılar, insanların anlayacağı kodu yazar."</strong> - Martin Fowler</p>
        `
    },
    // 6. Yazı (Günlük)
    {
        id: 6,
        baslik: "Ankara'da Öğrencilik",
        kategori: "gunluk",
        tarih: "4 Aralık 2025",
        resim: "img/6.jpg",
        icerik: `
            <p>Şehir dışından gelenler için Ankara "gri ve soğuk" bir memur kentidir. Ama burada öğrenci olduktan sonra o gri rengin içindeki sıcaklığı fark ediyorsunuz.</p>
            <p>Tunalı'da akşam yürüyüşleri, Bahçeli'de 7. Cadde kalabalığı, ODTÜ veya Hacettepe kampüslerinin yeşilliği... Ankara, öğrenciye sahip çıkan, trafiği İstanbul kadar boğmayan, düzenli bir şehir.</p>
            <p>Tek sorun ayazı. O meşhur Ankara ayazını yemeden "Ben Ankaralıyım" demeyin. İçlik giymeyi burada öğrendik!</p>
        `
    },
    // 7. Yazı (Spor)
    {
        id: 7,
        baslik: "Futbol ve Veri",
        kategori: "spor",
        tarih: "3 Aralık 2025",
        resim: "img/7.jpg",
        icerik: `
            <p>Eskiden futbol "göz kararı" yönetilirdi. Scoutlar maç izler, "bu çocukta iş var" derdi. Artık her şey veri.</p>
            <h3>xG (Gol Beklentisi) Nedir?</h3>
            <p>Bir şutun gol olma ihtimalini hesaplayan bu metrik, forvetlerin ne kadar bitirici olduğunu veya şanslı olduğunu ortaya koyuyor. Takımlar artık transfer yaparken oyuncunun sadece attığı gole değil, kat ettiği mesafeye, pas isabetine ve ısı haritasına bakıyor.</p>
            <p>Teknoloji futbolun ruhunu öldürüyor mu? Bence hayır, oyunu daha adil ve stratejik hale getiriyor.</p>
        `
    },
    // 8. Yazı (Teknoloji)
    {
        id: 8,
        baslik: "Web 3.0 Gerçeği",
        kategori: "teknoloji",
        tarih: "2 Aralık 2025",
        resim: "img/8.jpg",
        icerik: `
            <p>İnternetin bir sonraki evresi olarak lanse edilen Web 3.0, verilerin şirketlerin değil kullanıcıların kontrolünde olduğu bir dünya vadediyor. Peki bu ne kadar gerçekçi?</p>
            <p>Blokzincir teknolojisi sayesinde merkeziyetsiz uygulamalar (dApps) geliştirmek mümkün. Ancak şu anki işlem ücretleri (gas fee) ve hız sorunları, bu teknolojinin genele yayılmasını engelliyor.</p>
            <p>Metaverse ve NFT çılgınlığı biraz sönmüş olsa da, altındaki teknolojik altyapı devrimsel nitelikte. Sadece doğru kullanım alanını bulması gerekiyor.</p>
        `
    },
    // 9. Yazı (Teknoloji)
    {
        id: 9,
        baslik: "Siber Güvenlik",
        kategori: "teknoloji",
        tarih: "1 Aralık 2025",
        resim: "img/9.jpg",
        icerik: `
            <p>Dünyanın en güvenli sistemini de kursanız, en zayıf halka her zaman insandır. "123456" şifresini kullanan veya her gelen maile tıklayan çalışanlar olduğu sürece hacklenmek kaçınılmaz.</p>
            <h3>Phishing (Oltalama)</h3>
            <p>Siber saldırıların büyük kısmı sosyal mühendislik ile yapılıyor. Size bankanızdan gelmiş gibi görünen bir mail atıp şifrenizi girmenizi istiyorlar. Bu yüzden siber güvenlik sadece yazılımsal değil, bir farkındalık meselesidir.</p>
            <p>Geleceğin mühendisleri olarak güvenliği projenin sonuna bırakmak yerine, "Security by Design" ilkesiyle en baştan tasarlamalıyız.</p>
        `
    },
    // 10. Yazı (Günlük)
    {
        id: 10,
        baslik: "Teknofest Anıları",
        kategori: "gunluk",
        tarih: "30 Kasım 2025",
        resim: "img/10.jpg",
        icerik: `
            <p>Aylarca süren hazırlık, uykusuz geceler, yanan devreler ve bozulan kodlar... Hepsi o final günü için. Teknofest'e katıldığımız süreçte takım çalışmasının ne demek olduğunu iliklerime kadar hissettim.</p>
            <p>Sunum sırasında jürinin karşısına çıktığımızda heyecandan titriyorduk ama projemiz sorunsuz çalışınca o rahatlama hissi paha biçilemezdi. Dereceye girmekten daha önemlisi, orada tanıştığımız diğer ekipler ve edindiğimiz tecrübe oldu.</p>
            <p>Teknoloji üretmek isteyen gençler için bu tür organizasyonlar harika bir motivasyon kaynağı.</p>
        `
    },
    // 11. Yazı (Spor)
    {
        id: 11,
        baslik: "E-Spor Geleceği",
        kategori: "spor",
        tarih: "29 Kasım 2025",
        resim: "img/11.jpg",
        icerik: `
            <p>"Bilgisayar başında oyun oynamak spor mu olur?" diyenler artık suskun. E-Spor, milyon dolarlık ödül havuzları ve stadyumları dolduran izleyicileriyle devasa bir endüstriye dönüştü.</p>
            <p>League of Legends, Valorant veya CS:GO oyuncuları, fiziksel sporcular gibi antrenman kamplarına giriyor, beslenmelerine dikkat ediyor ve refleks çalışıyorlar. Olimpiyat komitesi bile bu branşı oyunlara dahil etmeyi tartışıyor.</p>
            <p>Dijital çağın sporu artık sahada değil, sunucularda oynanıyor.</p>
        `
    },
    // 12. Yazı (Teknoloji)
    {
        id: 12,
        baslik: "Arduino Projem",
        kategori: "teknoloji",
        tarih: "28 Kasım 2025",
        resim: "img/12.jpg",
        icerik: `
            <p>Teorik bilgi güzeldir ama bir LED'i yakıp söndürdüğünüz an aldığınız haz bambaşkadır. Geçen hafta sonu Arduino ve bir röle modülü kullanarak odamın ışıklarını telefondan kontrol edilebilir hale getirdim.</p>
            <h3>IoT (Nesnelerin İnterneti)</h3>
            <p>Bu proje bana IoT dünyasının kapılarını açtı. ESP8266 Wi-Fi modülü ile cihazları internete bağlamak sandığımdan daha kolaymış. Şimdi sırada bitkileri otomatik sulayan bir sistem yapmak var.</p>
            <p>Donanımla yazılımın buluştuğu nokta, mühendisliğin en keyifli alanı bence.</p>
        `
    },
    // 13. Yazı (Günlük)
    {
        id: 13,
        baslik: "Kütüphane Günleri",
        kategori: "gunluk",
        tarih: "27 Kasım 2025",
        resim: "img/13.jpg",
        icerik: `
            <p>Üniversite kütüphanesi sadece kitap okunan yer değil, aynı zamanda bir sosyalleşme (veya sessizce acı çekme) mekanıdır. Özellikle sınav dönemlerinde yer bulmak için sabah 7'de kapıya dayanmak gerekir.</p>
            <p>O sessizliğin içinde yüzlerce kişinin aynı anda odaklanmaya çalışması garip bir motivasyon sağlıyor. Yan masadaki çocuk 5 saattir kalkmadan çalışıyorsa, sen de "benim neyim eksik" deyip devam ediyorsun.</p>
            <p>Tabii kantindeki o bayat tost ve çay ikilisi de bu ritüelin olmazsa olmazı.</p>
        `
    },
    // 14. Yazı (Teknoloji)
    {
        id: 14,
        baslik: "Copilot Deneyimi",
        kategori: "teknoloji",
        tarih: "26 Kasım 2025",
        resim: "img/14.jpg",
        icerik: `
            <p>GitHub Copilot'u ilk kurduğumda korktum. Ben daha fonksiyonun adını yazarken o bütün bloğu tamamlıyordu. "Acaba biz işsiz mi kalacağız?" diye düşünmedim değil.</p>
            <p>Ama kullandıkça fark ettim ki, yapay zeka şu an için iyi bir "asistan". Mantığı kurgulayan, mimariyi tasarlayan hala biziz. O sadece amelelik kısmını yapıyor. Kod yazma hızımı %50 artırdı diyebilirim.</p>
            <p>Ancak tehlike şu: Eğer temel mantığı bilmeden sadece Copilot'a güvenip kod yazarsanız, hata çıktığında o hatayı çözecek bilginiz olmaz.</p>
        `
    },
    // 15. Yazı (Spor)
    {
        id: 15,
        baslik: "Şampiyonlar Ligi",
        kategori: "spor",
        tarih: "25 Kasım 2025",
        resim: "img/15.jpg",
        icerik: `
            <p>Dünyanın en iyi kulüp organizasyonu yine nefes kesiyor. Bu sene taktiksel olarak "geçiş oyunu" ve "önde baskı" (Gegenpressing) yine revaçta. Topa sahip olmaktan çok, topu nerede kazandığınız önemli.</p>
            <p>Manchester City'nin makine gibi işleyen sistemi ve Real Madrid'in "bu kupa bizim işimiz" mentalitesi arasında gidip gelen bir sezon bizi bekliyor.</p>
            <p>Türk takımlarının bu arenada daha fazla yer alması dileğiyle...</p>
        `
    },
    // 16. Yazı (Teknoloji)
    {
        id: 16,
        baslik: "Bulut Bilişim",
        kategori: "teknoloji",
        tarih: "24 Kasım 2025",
        resim: "img/16.jpg",
        icerik: `
            <p>Eskiden şirketler kendi devasa sunucu odalarını kurardı. Klimalar, kablolar, bakım masrafları... Şimdi ise her şey "Bulut"ta.</p>
            <p>AWS (Amazon), Azure (Microsoft) ve Google Cloud, altyapı sorunlarını ortadan kaldırdı. Artık bir girişimi başlatmak için binlerce dolar donanım masrafına gerek yok. Kredi kartını gir, sunucuyu kirala ve başla.</p>
            <p>Serverless (Sunucusuz) mimari ise işi bir adım öteye taşıdı. Sadece kodun çalıştığı süre kadar para ödüyorsunuz. Verimlilikte son nokta.</p>
        `
    },
    // 17. Yazı (Günlük)
    {
        id: 17,
        baslik: "Sabah Rutinim",
        kategori: "gunluk",
        tarih: "23 Kasım 2025",
        resim: "img/17.jpg",
        icerik: `
            <p>Mühendislik okurken uyku düzeni genelde bozulur ama ben sabah insanı olmaya çalışıyorum. Güne 07:00'de başlamak, herkes uyurken kod yazmak bana inanılmaz bir odaklanma sağlıyor.</p>
            <p>Sabah rutinim: Bir bardak su, hafif bir egzersiz ve sade kahve. Telefon bildirimlerine bakmadan geçen o ilk 1 saat, günün en verimli saati.</p>
            <p>Eğer "vaktim yok" diyorsanız, sabahları bir saat erken kalkmayı deneyin. Günün uzadığını hissedeceksiniz.</p>
        `
    },
    // 18. Yazı (Teknoloji)
    {
        id: 18,
        baslik: "Junior Rehberi",
        kategori: "teknoloji",
        tarih: "22 Kasım 2025",
        resim: "img/18.jpg",
        icerik: `
            <p>Sektöre yeni giren (Junior) bir yazılımcı ne yapmalı? Öncelikle "her dili öğreneyim" hatasına düşmeyin. Bir alanda (örneğin Frontend veya Backend) uzmanlaşın.</p>
            <p>GitHub profiliniz sizin diplomanızdan daha önemli. Oraya attığınız projeler, temiz kod yazıp yazamadığınızı gösterir. Ayrıca İngilizce... Dokümantasyon okuyacak kadar İngilizce bilmeden bu meslekte ilerlemek imkansız.</p>
            <p>Ve en önemlisi: Hata yapmaktan korkmayın. Senior dediğiniz kişi, Junior halinden daha fazla hata yapmış kişidir.</p>
        `
    },
    // 19. Yazı (Spor)
    {
        id: 19,
        baslik: "Spor Teknolojileri",
        kategori: "spor",
        tarih: "21 Kasım 2025",
        resim: "img/19.jpg",
        icerik: `
            <p>Sporcular artık sadece antrenman yapmıyor, verilerini de takip ediyor. Akıllı yelekler, nabız bantları ve uyku takip yüzükleri...</p>
            <p>Bu cihazlar, sporcunun ne zaman yorulduğunu, sakatlanma riskinin ne zaman arttığını antrenöre bildiriyor. Böylece antrenman programları kişiye özel optimize ediliyor.</p>
            <p>Amatör sporcular için bile akıllı saatler büyük motivasyon kaynağı. "Bugün halkalarımı tamamlamadım" diyip yürüyüşe çıkan milyonlar var.</p>
        `
    },
    // 20. Yazı (Günlük)
    {
        id: 20,
        baslik: "Kod Dışı Hayat",
        kategori: "gunluk",
        tarih: "20 Kasım 2025",
        resim: "img/20.jpg",
        icerik: `
            <p>Sürekli ekran başında olmak hem fiziksel hem zihinsel olarak yorucu. Bu yüzden "dijital detoks" yapmaya özen gösteriyorum.</p>
            <p>Hafta sonları doğa yürüyüşü yapmak veya sadece kulaklığımı takıp şehirde kaybolmak, beynimi resetlememi sağlıyor. Kodlama bir problem çözme işidir ve bazen en iyi çözümler bilgisayar başından kalktığınızda aklınıza gelir.</p>
            <p>Hobileriniz olsun. Sadece mühendis değil, çok yönlü bir insan olmaya çalışın.</p>
        `
    }
];

// --- GALERİ RESİMLERİ ---
const galeriResimleri = [
    { src: "img/blog1.png", alt: "Kampüs Yaşamı ve Bahar Şenlikleri" },
    { src: "img/blog2.png", alt: "Sabahlanan Kodlama Gecesi" },
    { src: "img/egg1.jpg", alt: "Web Tasarım Proje Çizimleri" },
    { src: "img/egg2.jpg", alt: "Donanım Laboratuvarı Çalışması" },
    { src: "img/egg5.png", alt: "Fakülte Spor Turnuvası" },
    { src: "img/egg6.png", alt: "C Programlama Algoritma Notları" },
    { src: "img/ataturk.jpg", alt: "Ulu Önder Mustafa Kemal Atatürk" }
];