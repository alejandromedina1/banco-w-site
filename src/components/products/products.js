document.addEventListener("DOMContentLoaded", function () {
    const dropdownOptions = document.querySelectorAll(".dropdown-item");
    const dropdownToggle = document.querySelector(".dropdown-toggle");

    dropdownOptions.forEach((option) => {
        option.addEventListener("click", function () {
            const selectedValue = this.getAttribute("data-value");
            const selectedText = this.textContent;

            dropdownToggle.textContent = selectedText;
            const opcionInfos = document.querySelectorAll(".opcion-info");
            opcionInfos.forEach((info) => {
                info.style.display = "none";
            });

            const selectedInfo = document.getElementById(`${selectedValue}-info`);
            selectedInfo.style.display = "block";
        });
    });
});