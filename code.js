searchparams = new URLSearchParams(window.location.search)

if (searchparams.has("code")) {
  text = document.createElement("p");
  text.innerText = "Auth Code: " + searchparams.get("code");
  document.body.append(text);
}
