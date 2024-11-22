document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // إظهار البيانات التي يتم إرسالها
    console.log("Sending data:", { email, password, name });
  
    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
  
      // تحقق من حالة الاستجابة
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // استعراض البيانات المستلمة
      console.log("Received data:", data);
  
      // التعامل مع الاستجابة بناءً على الحالة
      if (response.status === 400) {
        alert(data.message); // في حال كان هناك خطأ
      } else {
        alert("The account has been created successfully!");
        window.location.href = 'login.html'; // إعادة توجيه للمستخدم لتسجيل الدخول
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
    window.open('../html/admin.html')
  });
  