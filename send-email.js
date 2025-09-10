const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'huynhvancuong120891@gmail.com', // Thay bằng email gửi của bạn
    pass: 'dncpqitfkgfrwhoc'
  }
});

let mailOptions = {
  from: 'nhuynhvancuong120891@gmail.com', // Thay bằng email gửi của bạn
  to: 'huynhvancuong120891@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
