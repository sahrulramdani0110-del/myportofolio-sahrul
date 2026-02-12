function showMassage() {
    // Membuat elemen untuk menampilkan email jika belum ada
    let emailDisplay = document.querySelector('.email-display');
    
    if (!emailDisplay) {
        // Membuat elemen baru untuk menampilkan email
        emailDisplay = document.createElement('div');
        emailDisplay.className = 'email-display';
        emailDisplay.textContent = 'example@portfolio.com'; // Ganti dengan email Anda
        
        // Menambahkan elemen setelah tombol
        const button = document.querySelector('button');
        button.parentNode.insertBefore(emailDisplay, button.nextSibling);
    }
    
    // Menampilkan email dengan efek fade in
    emailDisplay.style.display = 'block';
    emailDisplay.style.opacity = '0';
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        emailDisplay.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
    
    // Mengganti teks tombol sementara
    const originalText = button.textContent;
    button.textContent = 'Email ditampilkan!';
    button.style.background = 'linear-gradient(to right, #2ecc71, #27ae60)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(to right, #4a6491, #3498db)';
    }, 2000);
}