var header = new Vue( {
  template:'<header id="header" class="site-header"><div class="site-header__inner"><a href="index.html"><h1 class="site-header__inner__logo">ポケットマルシェ | ポケマルビズβ</h1></a><p class="site-header__inner__title">農家・漁師から直接食材を買えるオンラインマルシェ</p></div><a href="https://poke-m.com/about" class="site-header__link" target="_blank">ポケマルとは</a></header>'
} );
header.$mount( '#header' );

var footer = new Vue( {
  template:'<footer class="thanks"><div class="footer-inner"><ul class="footer-inner__social"><li><a href="https://twitter.com/pocket_marche" target="_blank" class="tw">twitter</a></li><li><a href="https://www.facebook.com/pocketmarchejp/" target="_blank" class="insta">instagram</a></li><li><a href="https://www.instagram.com/pocket.marche/" target="_blank" class="fb">facebook</a></li></ul><ul class="footer-inner__menu"><li><a href="http://www.pocket-marche.com/" target="_blank">運営会社</a></li><li><a href="https://poke-m.com/privacy_policy" target="_blank">プライバシーポリシー</a></li><li><a href="https://poke-m.zendesk.com/hc/ja/requests/new" target="_blank">お問い合わせ</a></li></ul><p class="footer-inner--copy">© 2019 Pocket Marche</p></div></footer>'
} );
footer.$mount( '#footer' );


// <footer class="thanks">
//   <div class="footer-inner">
//     <ul class="footer-inner__social">
//       <li><a href="https://twitter.com/pocket_marche" target="_blank" class="tw">twitter</a></li>
//       <li><a href="https://www.facebook.com/pocketmarchejp/" target="_blank" class="insta">instagram</a></li>
//       <li><a href="https://www.instagram.com/pocket.marche/" target="_blank" class="fb">facebook</a></li>
//     </ul>
//     <ul class="footer-inner__menu">
//       <li><a href="http://www.pocket-marche.com/" target="_blank">運営会社</a></li>
//       <li><a href="https://poke-m.com/privacy_policy" target="_blank">プライバシーポリシー</a></li>
//       <li><a href="https://poke-m.zendesk.com/hc/ja/requests/new" target="_blank">お問い合わせ</a></li>
//     </ul>
//     <p class="footer-inner--copy">© 2019 Pocket Marche</p>
//   </div>
// </footer>
