$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });


  // nhấp chuột bên ngoài phần tử ẩn thanh navbar
  $(document).ready(function () {
    // Lưu trữ trạng thái của phần tử
    let isNavOpen = false;
    // Nhấp chuột vào nút để ẩn hiện phần tử
    $('#menu').on('click', function () {
      $('#header').toggleClass('toggle');
      // Thay đổi kiểu icon của nút
      if (isNavOpen) {
        $(this).removeClass('fa-times');
        isNavOpen = false;
      } else {
        $(this).addClass('fa-times');
        isNavOpen = true;
      }
    });
    // Nhấp chuột bên ngoài nút và phần tử để ẩn phần tử và đổi kiểu icon
    $(document).on('click', function (e) {
      if (!$(e.target).is('#menu') && !$(e.target).parents().is('#menu') && !$(e.target).is('header') && !$(e.target).parents().is('header')) {
        $('header').removeClass('toggle');
        $('#menu').removeClass('fa-times');
        isNavOpen = false;
      }
    });
  });

  // cuộn để ẩn thanh navbar
  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });


  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});
// Dark mode
const toggleBtn = document.getElementById('toggle-mode-btn');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('text-mode');

function toggleMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');

  // Update icon and text on toggle button
  if (isDarkMode) {
    toggleIcon.setAttribute("name", 'sunny-outline');
    toggleText.textContent = 'Light Mode';
    localStorage.setItem('isDarkMode', true);
  } else {
    toggleIcon.setAttribute("name", 'moon-outline');
    toggleText.textContent = 'Dark Mode';
    localStorage.setItem('isDarkMode', false);
  }
}

// Check local storage on page load
if (localStorage.getItem('isDarkMode') === 'true') {
  toggleMode();
}

toggleBtn.addEventListener('click', toggleMode);


// KIỂM TRA TÊN NGƯỜI DÙNG
const nameCheck = document.getElementById('name');
const nameCheckError = document.getElementById('name-error');
const btnSubmit = document.getElementById('btn-submit');

function validateName() {
  const name = nameCheck.value.trim();
  const regex = /^[\p{L} ]{2,50}$/u;

  if (regex.test(name)) {
    return true;
  } else {
    return false;
  }
}
nameCheck.addEventListener('blur', function () {
  if (!validateName()) {
    nameCheckError.textContent = 'Please enter a valid name between 2 and 50 characters and contain no special characters.';
    nameCheckError.style.display = 'block';
    nameCheckError.style.color = 'red';
    nameCheck.classList.add('is-invalid');
    btnSubmit.disabled = true;
  } else {
    nameCheckError.style.display = 'none';
    nameCheck.classList.remove('is-invalid');
    btnSubmit.disabled = false;
  }
});

// KIỂM TRA EMAIL NGƯỜI DÙNG
const emailCheck = document.getElementById('email');
const emailCheckError = document.getElementById('email-error');

function validateEmail() {
  const email = emailCheck.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
emailCheck.addEventListener('blur', function () {
  if (!validateEmail()) {
    emailCheckError.textContent = 'Please enter a valid email.';
    emailCheckError.style.display = 'block';
    emailCheckError.style.color = 'red';
    emailCheck.classList.add('is-invalid');
    btnSubmit.disabled = true;
  } else {
    emailCheckError.style.display = 'none';
    emailCheck.classList.remove('is-invalid');
    btnSubmit.disabled = false;
  }
});

// KIỂM TRA SỐ ĐIỆN THOẠI NGƯỜI DÙNG
const phoneCheck = document.getElementById('phone');
const phoneCheckError = document.getElementById('phone-error');


function validateNumber() {
  const phone = phoneCheck.value.trim();
  const regex = /^\d{10}$/;

  if (regex.test(phone)) {
    return true;
  } else {
    return false;
  }
}
phoneCheck.addEventListener('blur', function () {
  if (!validateNumber()) {
    phoneCheckError.textContent = 'Please enter a valid phone number.';
    phoneCheckError.style.display = 'block';
    phoneCheckError.style.color = 'red';
    phoneCheck.classList.add('is-invalid');
    btnSubmit.disabled = true;
  } else {
    phoneCheckError.style.display = 'none';
    phoneCheck.classList.remove('is-invalid');
    btnSubmit.disabled = false;
  }
});


// GỬI MAIL KHI NGƯỜI DÙNG SUBMIT
emailjs.init('WGGH4fCiztzb_PlZj');
document.getElementById('contact').addEventListener('submit', function (event) {
  event.preventDefault();
  // LẤY THÔNG TIN TỪ BIỂU MẪU
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  // GỬI MAIL SỬ DỤNG THƯ VIỆN  EmailJS
  emailjs.send('service_65ungcd', 'template_suro9xv', {
    name: name,
    email: email,
    phone: phone,
    message: message,
  }).then(function (response) {
    alert('Information has been sent!');
  }, function (error) {
    alert('An error occurred sending information: ', error);
  });
});


// RESET FORM SUNMIT
document.getElementById("contact").reset();
document.getElementById("contact").addEventListener("submit", function () {
  document.getElementById("contact").reset();
});

// CALL API URL

// const xhr = new XMLHttpRequest();
// const url = 'http://localhost:1337/api/experiences';

// xhr.open('GET', url, true);

// xhr.onload = function () {
//   if (this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   } else {
//     console.error('Error');
//   }
// };

// xhr.send();
