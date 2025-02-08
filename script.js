document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".nav-tabs li");
  const tabContent = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Tüm sekmelerden ve içeriklerden aktif sınıfını kaldır
      tabs.forEach(item => item.classList.remove("active"));
      tabContent.forEach(content => content.classList.remove("active"));
      
      // Tıklanan sekmeye ve ilgili içeriğe aktif sınıfı ekle
      tab.classList.add("active");
      document.getElementById(tab.getAttribute("data-tab")).classList.add("active");
    });
  });
});
