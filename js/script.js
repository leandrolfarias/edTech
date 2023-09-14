const fecharPopup = document.getElementById("modalSair");
const fecharPopupSair = document.getElementById("simBtn");

const hideFecharPopup = () => (fecharPopup.style.display = "none");
const showFecharPopup = () => (fecharPopup.style.display = "block");

document.addEventListener("mouseleave", showFecharPopup);
fecharPopupSair.addEventListener("click", hideFecharPopup);

window.onclick = (e) => {
	if (e.target === fecharPopup) {
		fecharPopup.style.display = "none";
	}
};
