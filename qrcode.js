const qr = require('qrcode');

const url = 'https://visionary-twilight-b43b45.netlify.app/menu.html';

qr.toDataURL(url, function (err, data) {
  if (err) {
    console.log('Error generating QR code: ', err);
    return;
  }
  console.log('<img src="' + data + '">');
});
