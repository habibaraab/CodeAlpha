function openModal(src) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = "Image description for: " + src.split('/').pop();
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
}
