# MetaTime Airdrop Twitter Bot

[MetaTimeAirdrop](https://airdrop.metatime.com/tr/overview) airdrop sisteminde verilen günlük tweet atma görevlerini yerine getiren bir twitter botu olarak kullanılmaktadır.

## Twitter Bot Kurulumu
Öncelikle twitter resmi sitesinden twitter hesabınıza bağlı bir api talebinden bulunmanız gerekmektedir. [TwitterAPI](https://developer.twitter.com/en/portal/dashboard) adresinden twitter hesabınızla giriş yaptıktan sonra 250 karakterlik bir başvuru metni yazmanız gerekmektedir. Başvuru onaylama süreci gibi bir süreç olmadığı için hesabınız hemen açılacaktır.

Sol menüde bulunan `projects` kısmından otomatik oluşturulmuş olan proje detaylarına girin. `Settings` sayfasının alt kısmındaki `User authentication set up` kısmından yetki ayarlaması yapmanız gerekmektedir. Yetki için `Read and write` yetkisini seçip istenen zorunlu bilgiler kısmını doldurun. Bu bilgilere ne yazdığınız çok da önemli değildir. Sonrasında size bir kaç key oluşturucak. Bu sayfayı kapatıp proje detay sayfasına geri dönelim.

Üst kısımda bulunan `Keys and tokens` menüsüne tıkladıktan sonra bu sayfada bulunan `API Key and Secret` ve `Access Token and Secret` kısımnlarında bulunan generate butonları ile keylerimizi oluşturalım. Bunları proje içinde bulunan `.env.example` klasörünü `.env` olarak kopyalayıp içini dolduralım.

Tüm işlemler bu kadar. Proje dizininde `npm install` sonrasında `npm run start` komutlarını çalıştırdıktan sonra size hesabınızda 7 saniyede bir olacak şekilde görevler için gerekli twitleri atıp cihazınızın clipboard hafızasına kaydedecektir. Bu aşamada tek yapmanız gerekn airdrop sayfasına görev ksımına url leri yapıştırıp görevleri tamamlamanız.
