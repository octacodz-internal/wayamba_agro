const nodemailer = require('nodemailer');

const testAuth = async (user, pass) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    await transporter.verify();
    console.log(`Success with: ${user}`);
    
    // Send a test email if successful
    await transporter.sendMail({
      from: user,
      to: 'sandeepaherath2@gmail.com',
      subject: 'Test Email from Wayamba Agro',
      text: 'This is a test email to verify the nodemailer configuration.',
    });
    console.log(`Test email sent successfully to sandeepaherath2@gmail.com using ${user}`);
    return true;
  } catch (error) {
    console.log(`Failed with: ${user}`);
    // console.error(error);
    return false;
  }
};

const runTests = async () => {
  console.log("Testing credentials...");
  await testAuth('octacodz.mailer@gmail.com', 'mcbo xbwn fjgv ikgz');
  await testAuth('mailer.wayambacorp@gmail.com', 'mcbo xbwn fjgv ikgz');
  await testAuth('octacodz.mailer@gmail.com', 'Oz&8C123@123');
};

runTests();
